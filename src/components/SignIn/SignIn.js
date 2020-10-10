import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import face from './face.png';
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return(
			<div className='mt6'>
				<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
					<main className="pa4 black-80">
					  <div className="measure center">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f1 fw6 ph0 mh0">facognition</legend>
					      <div className="pa4">
	 								<img src={face} alt='logo' />
	 							</div>
					      <div className="mt3 bb b--black-10">
					        <label className="db fw6 lh-copy f6 mb2" htmlFor="email-address">
					        <span className='w-20 mr3 f3'><FontAwesomeIcon icon={faEnvelope} /></span>
					        <input className="pa2 input-reset bn bg-transparent hover-bg-black hover-white w-80" type="email" name="email-address"  id="email-address" />
					      	</label>
					      </div> 
					      <div className="mv3 bb b--black-10">
					        <label className="db fw6 lh-copy f6 mb2" htmlFor="password">
					        	<span className='w-20 mr3 f3'><FontAwesomeIcon icon={faLock} /></span>
					        	<input className="b pa2 input-reset bn bg-transparent hover-bg-black hover-white w-80" type="password" name="password"  id="password" />
					      	</label>
					      </div>
					    </fieldset>
					    <div className="">
					      <input onClick={() => this.props.history.push('/home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-100" type="submit" value="Sign in" />
					    </div>
					    <div className="lh-copy mt3">
					      <p className="f6 link dim black db pointer" onClick={() => this.props.history.push('/register')}>New here ?</p>
					    </div>
					  </div>
					</main>
				</article>
				<div></div>
			</div>
		);
	}
}

export default withRouter(SignIn);