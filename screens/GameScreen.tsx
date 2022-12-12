import { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

const generateRandomBetween = (
	min: number,
	max: number,
	exclude: number
): number => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude)
	} else {
		return rndNum
	}
}

let minNumber: number = 1
let maxNumber: number = 100

function GameScreen({ userNumber }: { userNumber: number }) {
	const initialGuess = generateRandomBetween(minNumber, maxNumber, userNumber)
	const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)

	const nextGuessHandler = (direction: 'lower' | 'higher'): void => {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'higher' && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong...', [
				{ text: 'Sorry', style: 'cancel' }
			])
			return
		}

		if (direction === 'lower') {
			maxNumber = currentGuess
		} else {
			minNumber = currentGuess + 1
		}
		const newRndNum = generateRandomBetween(minNumber, maxNumber, currentGuess)
		setCurrentGuess(newRndNum)
		if (newRndNum == userNumber)
		Alert.alert('You won in ')
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View>
					<PrimaryButton onPress={() => nextGuessHandler('lower')}>
						-
					</PrimaryButton>
					<PrimaryButton onPress={() => nextGuessHandler('higher')}>
						+
					</PrimaryButton>
				</View>
			</View>
			{/* <View>LOG ROUNDS</View> */}
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		// might be pushed a bit with lower padding top
		paddingTop: 42,
		paddingBottom: 24,
		paddingHorizontal: 24
	}
})
