import { useState } from 'react'
import {
	View,
	TextInput,
	StyleSheet,
	Alert,
	useWindowDimensions
} from 'react-native'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'

interface Props {
	onPickNumber: (pickedNumber: number) => void
}

const StartGameScreen = ({ onPickNumber }: Props) => {
	const [enteredNumber, setEnteredNumber] = useState<string>('')

	const { width, height } = useWindowDimensions()

	const numberInputHandler = (enteredText: string) => {
		setEnteredNumber(enteredText)
	}

	const resetInputHandler = () => setEnteredNumber('')

	const confirmInputHandler = (): void => {
		const number = parseInt(enteredNumber)
		if (isNaN(number) || number <= 0 || number > 99) {
			Alert.alert(
				'Invalid number!',
				'Number has to be a number between 1 and 99.',
				[{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
			)
			return
		}
		onPickNumber(number)
	}

	const marginTopDistance = height < 380 ? 30 : 100

	return (
		<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
			<Title>Guess My Number</Title>
			<Card>
				<InstructionText>Enter a number</InstructionText>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					value={enteredNumber}
					onChangeText={numberInputHandler}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	)
}

export default StartGameScreen

// Comment this out in favor of useWindowDimensions hook
// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		// marginTop: deviceHeight < 380 ? 30 : 100,
		alignItems: 'center'
	},

	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	buttonsContainer: {
		flexDirection: 'row'
	},
	buttonContainer: {
		flex: 1
	}
})
