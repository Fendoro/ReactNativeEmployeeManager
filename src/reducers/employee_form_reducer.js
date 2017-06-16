import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEE_SAVE_SUCCESS,
	LOADING_EMPLOYEE,
	EMPLOYEE_DELETE_SUCCESS,
	EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOADING_EMPLOYEE:
			return {
				...state,
				loading: true
			};
		case EMPLOYEE_UPDATE:
			const { prop, value } = action.payload;
			return { ...state, loading: false, [prop]: value };
		case EMPLOYEE_CREATE:
		case EMPLOYEE_SAVE_SUCCESS:
		case EMPLOYEE_DELETE_SUCCESS:
		case EMPLOYEES_FETCH_SUCCESS:
			return INITIAL_STATE;
		default:
			return state;
	}
};
