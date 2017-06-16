import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Spinner } from './common';
import { employeesFetch } from '../actions';
import ListItem from './list_item';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(employees);
	}

	renderRow(employee) {
		return <ListItem employee={employee} />;
	}

	render() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees.employees, (val, uid) => ({
		...val,
		uid
	}));
	return { employees, loading: state.employees.loading };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
