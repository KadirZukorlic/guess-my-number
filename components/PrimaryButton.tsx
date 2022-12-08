import { View, Pressable, Text, StyleSheet } from 'react-native'

interface PrimaryButtonProps {
	children: React.ReactNode
}

function PrimaryButton({ children }: PrimaryButtonProps): JSX.Element {
	const pressHandler = () => {
		console.log('Pressed')
	}

	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.buttonInnerContainer]
						: styles.buttonInnerContainer
				}
				onPress={pressHandler}
				android_ripple={{ color: '#640233' }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	)
}

export default PrimaryButton

const styles = StyleSheet.create({
	// Fixes common ripple issue
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden'
	},
	buttonInnerContainer: {
		backgroundColor: '#72063c',
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center'
	},
	pressed: {
		opacity: 0.75
	}
})
