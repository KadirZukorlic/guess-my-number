import { View, Pressable, Text } from 'react-native'

interface PrimaryButtonProps {
	children: React.ReactNode
}

function PrimaryButton({ children }: PrimaryButtonProps): JSX.Element {
	return (
		<Pressable>
			<View>
				<Text>{children}</Text>
			</View>
		</Pressable>
	)
}

export default PrimaryButton
