import React from 'react';
import './Demographics.css';
const Demographics = ({ demograph, onFaceSelect, selectedFace, onFaceUnselect, box }) => {
		
	return(
	<div className='body shadow-4 flexCon bg-light-gray'>
		

		<div className='bg-white myH'  style={{overflowX: 'scroll', overflowY: 'hidden'}}>
			<p className='f3 mb0 pa2 tc bb b--black-10'>Demographics</p>
			<div className='pa2'>
				<p className='tc'>{`${demograph.length} Face(s) detected!`}</p>
				<div className='flex ml3'>
				{
					demograph.map((faceDetails, i) => {
						return(
							<button className="grow tc mr1 ml1" key={i} style={{width: 30, height: 30}} onMouseLeave={() => onFaceUnselect()} onClick={() => onFaceSelect(box, faceDetails, i)} >{`${i+1}`}</button>
						)
					})
				}
				</div>
			</div>

			<div className='mt3 pa3 center' style={{width: 400, height: 316}}>
				<div style={{height: 72}}>
					<p className='mb0 f6 mt2 tl'>Age :</p>
					<p className='f4 pa3 bb b--black-10 pointer hover-bg-light-blue mt0 tl ttc'>{selectedFace.age}</p>
				</div>
				<div style={{height: 72}}>
					<p className='mb0 f6 mt2 tl'>Gender :</p>
					<p className='f4 pa3 bb b--black-10 pointer hover-bg-light-blue mt0 tl ttc '>{selectedFace.gender}</p>
				</div>
				<div style={{height: 72}}>
					<p className='mb0 f6 mt2 tl'>Ethnicity :</p>
					<p className='f4 pa3 bb b--black-10 pointer hover-bg-light-blue mt0 tl ttc'>{selectedFace.race}</p>
				</div>
			</div>
		</div>

	</div>	
	);
}

export default Demographics;