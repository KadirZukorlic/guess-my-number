import { View, Text, StyleSheet } from 'react-native'
import Title from '../components/Title'

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

function GameScreen() {
	return (
		<View style={styles.screen}>
			<Title>Opponent's guess</Title>
			{/* GUESS */}
			<View>
				<Text>Higher or lower?</Text>
				{/* + - */}
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
