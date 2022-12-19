import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

interface Props {
	roundNumber: number
	// change
	guess: any
}

function GuessLogItem({ roundNumber, guess }: Props) {
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemText}>#{roundNumber}</Text>
			<Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
		</View>
	)
}

export default GuessLogItem

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: Colors.accent500,
		borderColor: Colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		padding: 12,
		marginVertical: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		// Android
		elevation: 4,
		// IOS
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		shadowRadius: 3
	},
	itemText: {
		fontFamily: 'open-sans'
	}
})
