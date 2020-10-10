import React from 'react';

class Profile extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		
		return(
			<div className='mt7'>
				<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-4">
					<main className="pa4 black-80">
					  <div className="measure center">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f1 fw6 ph0 mh0">Profile</legend>
	 							<div className="mt3 bb b--black-10">
					        <label className="db fw6 lh-copy f6 mb2" htmlFor="name">
					        <span className='w-20 mr3 f5'>Name :</span>
					        <input className="pa2 input-reset bn bg-transparent hover-bg-black hover-white w-80 f3" type="text" name="name"  id="name" value="Abbas"/>
					      	</label>
					      </div> 
					      <div className="mv3 bb b--black-10">
					        <label className="db fw6 lh-copy f6 mb2" htmlFor="email-address">
					        <span className='w-20 mr3 f5'>Email :</span>
					        <input className="pa2 input-reset bn bg-transparent hover-bg-black hover-white w-80 f3" type="email" name="email-address"  id="email-address" value="abbas@gmail.com" />
					      	</label>
					      </div> 
					      <div className="mv3 bb b--black-10">
					        <label className="db fw6 lh-copy f6 mb2" htmlFor="password">
					        	<span className='w-40 mr3 f5'>New Password :</span>
					        	<input className="b pa2 input-reset bn bg-transparent hover-bg-black hover-white w-60 f3" type="password" name="password"  id="password" />
					      	</label>
					      </div>
					    </fieldset>
					    <div className="">
					      <input onClick={() => this.props.history.push('/home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-30 mr3" type="submit" value="Cancel" />
					    		
					      <input onClick={() => this.props.history.push('/profile')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-30 ml3" type="submit" value="Save" />
					    </div>
					  </div>
					</main>
				</article>
				<div></div>
			</div>
		);
	}
}

export default Profile;