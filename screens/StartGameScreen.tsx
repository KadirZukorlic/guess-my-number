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
		padding: 16
	}
})
