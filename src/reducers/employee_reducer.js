import { EMPLOYEES_FETCH_SUCCESS, LOADING_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {
	loading: false,
	employees: {}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOADING_EMPLOYEE:
			return {
				...state,
				loading: true
			};
		case EMPLOYEES_FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				employees: action.payload
			};
		default:
			return state;
	}
};
