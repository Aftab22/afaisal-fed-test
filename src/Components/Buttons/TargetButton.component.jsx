import React from 'react';
import './TargetButton.styles.css';

function TargetButton(props) {
	return (
		<>
			<div id="fetch-more-button">
				<button onClick={() => props.clickAction()}>{props.text}</button>
			</div>
		</>
	);
}

export default TargetButton;
