import React from 'react';

const ImageInput = () => {
	return(
		<div className='flexCon'>
			<div className='flexCon pa4 br3 shadow-3 mb2 mt2'>
				<input className='f4 pa2 w-70 center' type='text'/>
				<button className='w-30 f4 link ph3 pv2 white bg-light-blue'>{'Upload'}</button>
			</div>
		</div>
	);
}

export default ImageInput;