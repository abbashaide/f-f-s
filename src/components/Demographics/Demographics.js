import React from 'react';
import './Demographics.css';
const Demographics = () => {
	return(
	<div className='body shadow-4 flexCon bg-light-blue'>
		
		<div className='pa2 w-70'>
			<div className=''>
				<img className='bg-light-blue' id='inputimage' alt='' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' width='900' height='auto' />
			</div>
		</div>

		<div className='pa4 w-30'>
			<p className=''>{`Faces`}</p>
			<p className=''>{`Gender : Masculine`}</p>
			<p className=''>{`Age : 23`}</p>
			<p className=''>{`Ethinicty : Asian`}</p>
		</div>
	</div>	
	);
}

export default Demographics;