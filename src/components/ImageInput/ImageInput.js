import React from 'react';
import './ImageInput.css'

const ImageInput = () => {
	return(
		<div className='flexCon'>
			<div className='flexCon Imform pa4 br3 shadow-3 mb2 mt2'>
				<input className='f4 pa2 w-70 center bn' type='text'/>
				<button className='w-30 grow f4 link ph3 pv2 white bg-moon-gray bn pointer'>{'Upload'}</button>
			</div>
		</div>
	);
}

export default ImageInput;