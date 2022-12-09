import { View, Pressable, Text, StyleSheet } from 'react-native'

interface PrimaryButtonProps {
	children: React.ReactNode
	onPress: () => void
}

function PrimaryButton({ children, onPress }: PrimaryButtonProps): JSX.Element {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.buttonInnerContainer]
						: styles.buttonInnerContainer
				}
				onPress={onPress}
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
