import React from 'react';
import './MessageBox.css'

const MessageBox = () => {
	return(
		<div className='display'>
			<div className='alert alert-success'>
				<p className='alert-heading'>Well Done!</p>
				<p>This is Gandalf and Robin</p>
			</div>
		</div>
	);
}

export default MessageBox;