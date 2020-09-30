import React from'react';
import './ImageSlide.css';

const ImageSlide = ({ onImageSelect }) => {
	let images = [
	{ id: 1, url: 'https://clarifai.com/cms-assets/20180320222304/demographics-001.jpg' },
	{ id: 2, url: 'https://clarifai.com/cms-assets/20180320222305/demographics-002.jpg' },
	{ id: 3, url: 'https://clarifai.com/cms-assets/20180320222305/demographics-003.jpg' },
	{ id: 4, url: 'https://clarifai.com/cms-assets/20180320222306/demographics-004.jpg' },
	{ id: 5, url: 'https://clarifai.com/cms-assets/20180320222307/demographics-005.jpg' },
	{ id: 6, url: 'https://clarifai.com/cms-assets/20180320222308/demographics-006.jpg' },
	{ id: 7, url: 'https://clarifai.com/cms-assets/20180320222310/demographics-007.jpg' },
	{ id: 8, url: 'https://clarifai.com/cms-assets/20180320222310/demographics-008.jpg' },
	{ id: 9, url: 'https://clarifai.com/cms-assets/20180320222311/demographics-009.jpg' },
	{ id: 10, url: 'https://clarifai.com/cms-assets/20180320222312/demographics-010.jpg' }
	
	]
	return(
		<div className='center bg-gray bdy flex justify-start pa2'>
			
			<div className='center flexCon'>
			{images.map((item) => {
				return(
					<div className='flexCon pointer'>
						<img className='mr4 ml3 grow' alt='slideImg' src={item.url} width='50' height='40' onClick={() => onImageSelect(item.url)} />
					</div>
				);
			})
			}
			</div>
			
		</div>
	);
}

export default ImageSlide;