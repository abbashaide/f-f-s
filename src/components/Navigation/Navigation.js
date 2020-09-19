import	React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faPlus, faFingerprint, faFileUpload, faLink } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
	return(
		<div>
			<nav className = 'bb b--black-20 bg-white tc mw10 center' style ={{display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
				<p className ='f4 fw6 ttc tracked link dim dib black pa2 pointer padd mt1 mb0'><FontAwesomeIcon icon={faHome} /> Home</p>
				<p className ='f4 fw6 ttc tracked link dim black pa2 pointer padd mt1 mb1'><FontAwesomeIcon icon={faUserCircle} /> Profile</p>
				<p className ='f4 fw6 ttc tracked link dim black pa2 pointer padd mt1 mb1'><FontAwesomeIcon icon={faPlus} /> Upload</p>
				<p className ='f4 fw6 ttc tracked link dim black pa2 pointer padd mt1 mb1'><FontAwesomeIcon icon={faFingerprint} /> Identify</p>
			</nav>

			<nav className = 'bb b--black-20 bg-white tc mw10 center' style ={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
				<p className ='f5 fw6 ttc tracked link dim dib black pa2 pointer paddd mt0 mb0'><FontAwesomeIcon icon={faFileUpload} /> File</p>
				<p className ='f5 fw6 ttc tracked link dim dib black pa2 pointer paddd mt0 mb0'><FontAwesomeIcon icon={faLink} /> Url</p>
			</nav>

		</div>
	);
}

export default Navigation;