import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './face.png';

const Logo = () => {
	return(
		<div>
			<div className='bg-black' style ={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: 'max'}}>	
				<Tilt className="Tilt mt2 mb2 br2" options={{ max : 30 }} style={{ height: 81, width: 80 }} >
	 				<div className="Tilt-inner pa1 bg-white"><img src={face} alt='logo' /></div>
				</Tilt>

				<p className ='white b code f2 ttl tc dib mt4 mb0'>F a c o g n i t i o n</p>
			</div>

			<div className ='pa2 myBack'>
			</div>	

		</div>
	);
}

export default Logo;