import React from 'react'
import {
	Heading
} from '@aws-amplify/ui-react'
import SimpleParallax from 'simple-parallax-js'
export default function Login() {
	return (
		<React.StrictMode>
			<Heading level={1}>Among Us</Heading>
			<SimpleParallax orientation="right" scale={1.7}>
				<img src="/fa0.png"/>
			</SimpleParallax>
		</React.StrictMode>
	);
}
