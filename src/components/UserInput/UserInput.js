import React from 'react';
import './UserInput.css';

const UserInput = () => {
	return(
		<div className='body'>
				<p className=''>Whose thy Friend or Enemy!</p>

			<div className='radios'>
				<label>
					<input className='' type="radio" id="fr" name="rel" value="fr" checked={true} /> Friend
				</label>

				<label>
				<input className='' type="radio" id="en" name="rel" value="en" /> Enemy
				</label>
			</div>
			<label>
				Enter name: <input className='' type="text" id="name" name="name" placeholder='type...' />
			</label>

		</div>
	);
}

export default UserInput;