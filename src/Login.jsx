import {
	defaultDarkModeOverride,
	Authenticator,
	ThemeProvider,
	View,
	Image
} from '@aws-amplify/ui-react'
import App from './App.jsx'
import React from 'react'

export default function Login() {
	const theme = {
		name: 'dark',
		overrides: [defaultDarkModeOverride],
	};
	const components = {
		Header() {
			return (
				<View textAlign="center">
					<Image
						alt="HorizonHacks logo"
						src="/glass.png"
					/>
				</View>
			);
		},
	};
	return (
		<React.StrictMode>
			<ThemeProvider theme={theme} colorMode="system">
				<Authenticator components={components}>
					<App />
				</Authenticator>
			</ThemeProvider>
		</React.StrictMode>
	);
}
