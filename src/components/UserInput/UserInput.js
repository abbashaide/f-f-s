import React from 'react';
import './UserInput.css';

const UserInput = ({ route }) => {
	return(
		<div className='body flexCon shadow-4'>
				<p className='f1 flexCon'>Whose thy Friend or Enemy!</p>

			<div className='radios flexCon'>
				<label className='grow pointer'>
					<input className='flexCon' type="radio" id="fr" name="rel" value="fr" checked={true} /> <span className='flexCon'>Friend</span>
					<div className="check flexCon"></div>
				</label>

				<label className='grow pointer'>
				<input className='flexCon' type="radio" id="en" name="rel" value="en" /> <span className='flexCon'>Enemy</span>
				<div className="check flexCon"></div>
				</label>
			</div>
			
			{ route === 'addImage' ?
			<label className='flexCon'>
				<span className='flexCon nameI'>Enter name: </span><input className='flexCon ml3 mt5 mb5 mr3 pa2 bg-moon-gray bn' type="text" id="name" name="name" placeholder='' />
			</label> :
			<div className='mt3 mb3'></div>
		  }
		</div>
	);
}

export default UserInput;