import React from 'react'

// Import images
import Netflix from '../assets/images/PNGs/Netflix.png'

const NavigationBar = (props) => {
	return (
		<nav>
			<img src={Netflix} alt="Netflix" />
		</nav>
	)
}

export default NavigationBar