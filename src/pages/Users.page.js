import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchData } from '../Actions';
import TargetButton from '../Components/Buttons/TargetButton.component.jsx';
import Loader from '../Components/Loader/Loader.component.jsx';
import UserCard from '../Components/UserCard/UserCard.component.jsx';

import './styles/Users.page.styles.css';

class UsersPage extends React.PureComponent {
	componentDidMount() {
		this.props.fetchData(this.props.pageNumber);
	}
	render() {
		const { users } = this.props;
		if (!users.length) {
			return <Loader />;
		}
		console.warn(this.props);
		return (
			<>
				<div className="user-list-container" id="style-2">
					{users &&
						users.map((each, index) => {
							console.warn(each);
							const { name, email, picture, location } = each;
							const { first } = name;
							const { large } = picture;
							const { city } = location;
							let targetEmail = email.replace('@example.com', '');
							return <UserCard index={index} name={first} large={large} city={city} targetEmail={targetEmail} />;
						})}
				</div>
				<TargetButton clickAction={() => this.props.fetchData(this.props.pageNumber)} text="FETCH MORE" />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.itemReducer.items,
		errors: state.itemReducer.error,
		status: state.itemReducer.status,
		pageNumber: state.itemReducer.pageNumber
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			fetchData
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
