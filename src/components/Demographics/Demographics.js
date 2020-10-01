import React from 'react';
import './Demographics.css';
const Demographics = ({ demograph, onFaceSelect, selectedFace }) => {

	let age, gender, race;
		age = '23';
		gender = 'Feminine';
	  race = 'Black or African American';
		
	
	return(
	<div className='body shadow-4 flexCon bg-light-gray'>
		

		<div className='bg-white myH'>
			<p className='f2'>Demographics</p>
			<div className='pa2 bb b--black-10'>
				<p className=''>{`${demograph.length} Face(s) detected!`}</p>
				<div>
				{
					demograph.map((faceDetails, i) => {
						return(
							<button className="grow" key={i}  width='50' height='40' onClick={() => onFaceSelect(faceDetails)}>{`Face no.${i+1}`}</button>
						)
					})
				}
				</div>
			</div>

			<div className='pa3 center'>
				<p className='f4 pa3 bt bb b--black-10 center taj pointer hover-bg-light-blue mb0'>Age: {selectedFace.age}</p>
				<p className='f4 pa3 bb b--black-10 center taj pointer hover-bg-light-blue mt0 mb0'>Gender:  {selectedFace.gender}</p>
				<p className='f4 pa3 bb b--black-10 center taj pointer hover-bg-light-blue mt0'>Ethnicity:  {selectedFace.race}</p>
			</div>
		</div>

	</div>	
	);
}

export default Demographics;