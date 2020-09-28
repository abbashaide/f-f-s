import React from 'react';
import './Demographics.css';
const Demographics = ({ imageUrl }) => {
	return(
	<div className='body shadow-4 flexCon bg-gray'>
		
		<div className='pa2 w-70 bg-light-gray'>
			<div className=''>
				<img className='bg-light-blue mt9 mb9 mr0 ml0' id='inputimage' alt='inputimage' src={imageUrl} width='712' height='474' />
			</div>
		</div>

		<div className='w-30 bg-white myH'>
			<p className='f2'>Demographics</p>
			<div className='pa2 bb b--black-10'>
				<p className=''>{`0 Face(s) detected!`}</p>
			</div>

			<div className='pa3 center'>
				<p className='f4 pa3 bt bb b--black-10 center taj pointer hover-bg-light-blue mb0'>Gender: Masculine</p>
				<p className='f4 pa3 bb b--black-10 center taj pointer hover-bg-light-blue mt0 mb0'>Age:  23</p>
				<p className='f4 pa3 bb b--black-10 center taj pointer hover-bg-light-blue mt0'>Ethnicity:  Asian</p>
			</div>
		</div>
	</div>	
	);
}

export default Demographics;