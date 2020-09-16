import	React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faPlus, faFingerprint } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
	return(

		<nav className = 'bt bb tc mw10 center mt4' style ={{display: 'flex', justifyContent: 'center'}}>
			<p className ='f3 fw6 ttu tracked link dim dib black pa3 pointer'><FontAwesomeIcon icon={faHome} /> Home</p>
			<p className ='f3 fw6 ttu tracked link dim black pa3 pointer'><FontAwesomeIcon icon={faUserCircle} /> Profile</p>
			<p className ='f3 fw6 ttu tracked link dim black pa3 pointer'><FontAwesomeIcon icon={faPlus} /> Upload</p>
			<p className ='f3 fw6 ttu tracked link dim black pa3 pointer'><FontAwesomeIcon icon={faFingerprint} /> Identify</p>
		</nav>
	);
}

export default Navigation;