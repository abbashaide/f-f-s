import	React from 'react';
import './Navigation.css';
import { Route, Switch, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faFingerprint, faSignOutAlt ,faFileUpload, faLink } from '@fortawesome/free-solid-svg-icons';

const miniNav = () => {
	return(
		<div>
			<nav className ='bb b--black-20 bg-white tc mw10 center' style ={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
					<Link to='/app/file' className ='f5 fw6 ttc tracked link:focus no-underline dim dib black pa2 pointer paddd mt0 mb0'><FontAwesomeIcon icon={faFileUpload} /> File</Link>
					<Link to='/app/url' className ='f5 fw6 ttc tracked link:focus no-underline dim dib black pa2 pointer paddd mt0 mb0'><FontAwesomeIcon icon={faLink} /> Url</Link>
			</nav>
		</div>
	);
}


const Navigation = () => {
	
	return(
		<div>
			<div className='nav'>
				<nav className = 'bb b--black-20 bg-white tc mw10 center' style ={{display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
					<Link to='/home' className ='f4 fw6 ttc tracked link:focus no-underline dim dib black pa2 pointer padd mt1 mb0'><FontAwesomeIcon icon={faHome} /> Home</Link>
					<Link to='/profile' className ='f4 fw6 ttc tracked link:focus no-underline dim black pa2 pointer padd mt1 mb1'><FontAwesomeIcon icon={faUserCircle} /> Profile</Link>
					<Link to='/app' className ='f4 fw6 ttc tracked link:focus no-underline dim black pa2 pointer padd mt1 mb1'><FontAwesomeIcon icon={faFingerprint} /> Analyse</Link>
					<Link to='/' className ='f4 fw6 ttc tracked link:focus no-underline dim black pa2 pointer padd mt1 mb1'><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</Link>
				</nav>

				<Switch>
					<Route path='/app' component={miniNav} />
				</Switch>
			</div>
		</div>
	);
}

export default Navigation;