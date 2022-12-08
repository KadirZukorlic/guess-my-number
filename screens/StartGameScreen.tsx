import { View, TextInput, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
	return (
		<View style={styles.inputContainer}>
        <TextInput />
			<View>
				<PrimaryButton>Reset</PrimaryButton>
				<PrimaryButton>Confirm</PrimaryButton>
			</View>
		</View>
	)
}

export default StartGameScreen

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		marginTop: 100,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: '#72063c',
		borderRadius: 8,
		// Shadow on Android
		elevation: 15,
		// Shadow on IOS
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: '#ddb52f',
		borderBottomWidth: 2,
		color: '#ddb52f',
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
