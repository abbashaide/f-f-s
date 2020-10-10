import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './ImageInput.css'

const ImageInput = ({ onInputChange, onUpload, url, requestFromAPI }) => {
	
	return(
		<Switch>
			<Route path='/app/url'>
				<div className='flexCon'>
					<div className='flexCon Imform pa4 br3 shadow-3 mb2 mt2'>
						<input className='f4 pa2 w-70 center bn' type='text' onChange={onInputChange} />
						<button className='w-30 grow f4 link ph3 pv2 white bg-moon-gray bn pointer' 
						onClick={() => {
							onUpload(url);
							requestFromAPI(url);
						}}>{'Upload'}</button>
					</div>
				</div>
			</Route>
		</Switch>
	);
}

export default ImageInput;