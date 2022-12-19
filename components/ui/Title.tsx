import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

interface TitleProps {
	children: React.ReactNode
}

function Title({ children }: TitleProps) {
	return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		// fontWeight: 'bold',
		color: Colors.white,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.white,
		padding: 12,
		maxWidth: '80%',
		width: 300
	}
})
