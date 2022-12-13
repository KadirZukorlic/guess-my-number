import { Text, StyleSheet, TextStyle } from 'react-native'
import Colors from '../../constants/colors'

interface Props {
	children: React.ReactNode
	style?: TextStyle
}

function InstructionText({ children, style }: Props) {
	return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: 'open-sans',
		color: Colors.accent500,
		fontSize: 24
	}
})
