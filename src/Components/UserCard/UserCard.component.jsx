import React from 'react';
import { target_logo, target_website } from '../../Constants/index';
import './UserCard.styles.css';

function UserCard({ first, large, city, targetEmail, index }) {
	return (
		<>
			<div key={index}>
				<div class="each_card">
					<div class="user-profile">
						<img id="avatar" src={`${large}`} alt="user_photo" />
						<div id="fullname">{first}</div>
						<div id="username">
							<span class="target_color">◎</span>Target_id : tgt_{index + 1}
						</div>
						<div class="description">
							<div>
								Email:{targetEmail}
								<span id="email">
									<span class="target_color">target</span>.com
								</span>
							</div>
							<div>
								City: <span id="city">{city}</span>
							</div>
						</div>
						<a href={target_website} target="#">
							<img id="target_logo" src={target_logo} alt="target_logo" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserCard;
