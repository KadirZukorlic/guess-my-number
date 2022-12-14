import { useState, useEffect } from 'react'
import {
	View,
	StyleSheet,
	Alert,
	FlatList,
	useWindowDimensions
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import GuessLogItem from '../components/game/GuessLogItem'

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

interface Props {
	userNumber: number
	onGameOver: (numberOfRounds: number) => void
}

function GameScreen({ userNumber, onGameOver }: Props) {
	const initialGuess = generateRandomBetween(1, 100, userNumber)
	const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)
	const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess])
	const { width, height } = useWindowDimensions()

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length)
		}
	}, [currentGuess, userNumber, onGameOver])

	useEffect(() => {
		minNumber = 1
		maxNumber = 100
	}, [])

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
		setGuessRounds((prevState) => [newRndNum, ...prevState])
	}

	const guessRoundsListLenght = guessRounds.length

	let content = (
		<>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or lower?
				</InstructionText>
 				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('lower')}>
							<Ionicons name="md-remove" size={24} color={Colors.white} />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('higher')}>
							<Ionicons name="md-add" size={24} color={Colors.white} />
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</>
	)

	if (width > 500) {
		content = (
			<>
				<View style={styles.buttonsContainerWide}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('lower')}>
							<Ionicons name="md-remove" size={24} color={Colors.white} />
						</PrimaryButton>
					</View>
					<NumberContainer>{currentGuess}</NumberContainer>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('higher')}>
							<Ionicons name="md-add" size={24} color={Colors.white} />
						</PrimaryButton>
					</View>
				</View>
			</>
		)
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's guess</Title>
			{content}
			<View style={styles.listContainer}>
				{/* FlatList better, even tho this list wouldn't get to long, FlatList lazy loads list items, only when they are needed to be rendered */}
				{/* {guessRounds.map((guessRound) => (
					<Text key={guessRound}>{guessRound}</Text>
				))} */}
				<FlatList
					data={guessRounds}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guessRoundsListLenght - itemData.index}
							guess={itemData.item}
						/>
					)}
					keyExtractor={(item: any) => item}
				/>
			</View>
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		// might be pushed a bit with lower padding top
		paddingTop: 42,
		paddingBottom: 24,
		paddingHorizontal: 24
	},
	instructionText: {
		marginBottom: 12
	},
	buttonsContainerWide: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttonsContainer: {
		flexDirection: 'row'
	},
	buttonContainer: {
		flex: 1
	},
	listContainer: {
		flex: 1,
		padding: 16
	}
})
