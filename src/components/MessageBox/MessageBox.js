import React from 'react';
import './MessageBox.css'

const MessageBox = () => {
	return(
		<div className='pos display mt1 mb1'>
			<div className='alert alert-success'>
				<p className='alert-heading'>Well Done!</p>
				<p>{`his is Gandalf and Robin`}</p>
			</div>
		</div>
	);
}

export default MessageBox;