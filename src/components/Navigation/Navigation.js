import	React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faPlus, faFingerprint, faFileUpload, faLink } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ onRouteChange, onSemiRouteChange, route }) => {
	
	let miniNav = <div></div>;

	if(route === 'addImage'){
		miniNav = (	
			<nav className ='bb b--black-20 bg-white tc mw10 center' style ={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
					<p className ='f5 fw6 ttc tracked link dim dib black pa2 pointer paddd mt0 mb0' onClick={() => onSemiRouteChange('file')}><FontAwesomeIcon icon={faFileUpload} /> File</p>
					<p className ='f5 fw6 ttc tracked link dim dib black pa2 pointer paddd mt0 mb0' onClick={() => onSemiRouteChange('url')}><FontAwesomeIcon icon={faLink} /> Url</p>
			</nav>
		);
	}

	return(
		<div>
			<nav className = 'bb b--black-20 bg-white tc mw10 center' style ={{display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
				<p className ='f4 fw6 ttc tracked link dim dib black pa2 pointer padd mt1 mb0' onClick={() => onRouteChange('home')}><FontAwesomeIcon icon={faHome} /> Home</p>
				<p className ='f4 fw6 ttc tracked link dim black pa2 pointer padd mt1 mb1' onClick={() => onRouteChange('profile')}><FontAwesomeIcon icon={faUserCircle} /> Profile</p>
				<p className ='f4 fw6 ttc tracked link dim black pa2 pointer padd mt1 mb1' onClick={() => onRouteChange('addImage')}><FontAwesomeIcon icon={faFingerprint} /> Analyse</p>
			</nav>
			{miniNav}

		</div>
	);
}

export default Navigation;