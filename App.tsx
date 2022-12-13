import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOver'
import Colors from './constants/colors'

export default function App() {
	const [userNumber, setUserNumber] = useState<number | null>(null)
	const [isGameOver, setIsGameOver] = useState<boolean>(true)

	const pickedNumberHandler = (pickedNumber: number) => {
		setUserNumber(pickedNumber)
		setIsGameOver(false)
	}

	const gameOverHandler = () => setIsGameOver(true)

	let screen: JSX.Element = (
		<StartGameScreen onPickNumber={pickedNumberHandler} />
	)

	if (userNumber)
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />

	if (isGameOver && userNumber) {
		screen = <GameOverScreen />
	}

	return (
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
