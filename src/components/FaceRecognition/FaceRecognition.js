import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box, selectedBox, demograph, onFaceSelect, onFaceUnselect }) => {
	
	return(
		<div className='flex justify-center faceRecBody ma bg-gray shadow-4'>
			<div className='relative mt1 mb2'>
				<img id='inputimages' alt='' src={imageUrl} width='auto' height='474'/>
				

				{ //Bounding Box(BB) functionality!
					//when a face is hovered upon only that BB is displayed
					selectedBox.length!==0 ? 

					<div className="bounding-box" onMouseLeave={() => onFaceUnselect()}
					style={{top: selectedBox.topRow, 
					right: selectedBox.rightCol, 
					bottom: selectedBox.bottomRow, 
					left: selectedBox.leftCol}}>
					</div> : 
					//if a face is not hovered upon all the BB's are displayed
					box.map((face, i) => {
					return(
						<div className="bounding-box" key={i} title={`${i+1}`} onMouseEnter={() => onFaceSelect(box, demograph[i],i)} onMouseLeave={() => onFaceUnselect()}
						style={{top: face.topRow, 
						right: face.rightCol, 
						bottom: face.bottomRow, 
						left: face.leftCol}}><div className='bounding-box-concept' ><div className='box-concept'><span style={{color: 'white'}}>{`${i+1}`}</span></div></div>
						</div>
					)
					})
				}


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