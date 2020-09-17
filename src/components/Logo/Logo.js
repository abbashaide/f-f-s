import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './face.png';

const Logo = () => {
	return(
		<div className='bg-blue' style ={{display: 'flex', justifyContent: 'center'}}>	
			<Tilt className="Tilt br2 shadow-1" options={{ max : 25 }} style={{ height: 80, width: 80 }} >
 				<div className="Tilt-inner"><img src={face} alt='logo' /></div>
			</Tilt>
			<p className ='mytext b courier f2 ttu tc dib mt3 mb0'>Facognition</p>
		</div>	
	);
}

export default Logo;