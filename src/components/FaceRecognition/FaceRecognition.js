import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box, selectedBox, demograph, onFaceSelect }) => {
	return(
		<div className='flex justify-center faceRecBody ma bg-gray shadow-4'>
			<div className='relative mt1 mb2'>
				<img id='inputimages' alt='' src={imageUrl} width='auto' height='474'/>
				{box.map((face, i) => {
					return(
						<div className="bounding-box" key={i} onMouseEnter={() => onFaceSelect(demograph[i],i)}
						style={{top: face.topRow, 
						right: face.rightCol, 
						bottom: face.bottomRow, 
						left: face.leftCol}}>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default FaceRecognition;

// <div className="bounding-box"
// 					style={{top: selectedBox.topRow, 
// 					right: selectedBox.rightCol, 
// 					bottom: selectedBox.bottomRow, 
// 					left: selectedBox.leftCol}}>
// 				</div>