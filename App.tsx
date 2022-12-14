import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOver'
import Colors from './constants/colors'

export default function App() {
	const [userNumber, setUserNumber] = useState<number | null>(null)
	const [isGameOver, setIsGameOver] = useState<boolean>(true)
	const [guessRoundNumber, setGuessRoundsNumber] = useState<number>(0)

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	})

	if (!fontsLoaded) return null

	const pickedNumberHandler = (pickedNumber: number) => {
		setUserNumber(pickedNumber)
		setIsGameOver(false)
	}

	const startNewGameHandler = () => {
		setUserNumber(null)
		setGuessRoundsNumber(0)
	}

	const gameOverHandler = (numberOfRounds: number) => {
		setIsGameOver(true)
		setGuessRoundsNumber(numberOfRounds)
	}

	let screen: JSX.Element = (
		<StartGameScreen onPickNumber={pickedNumberHandler} />
	)

	if (userNumber)
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />

	if (isGameOver && userNumber) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				roundsNumber={guessRoundNumber}
				onStartNewGame={startNewGameHandler}
			/>
		)
	}

	return (
		<>
			<StatusBar style="light" />
			<LinearGradient
				colors={[Colors.primary700, Colors.accent500]}
				style={styles.rootScreen}
			>
				<ImageBackground
					source={require('./assets/images/background.png')}
					resizeMode="cover"
					style={styles.rootScreen}
					imageStyle={styles.backgrounImage}
				>
					<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	)
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1
	},
	backgrounImage: {
		opacity: 0.15
	}
})
