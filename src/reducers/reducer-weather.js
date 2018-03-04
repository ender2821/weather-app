import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	console.log('Action Recieved', action);
	// debugger
	if(action.payload && action.payload.data) {
		debugger
	}
	switch(action.type) {
	case FETCH_WEATHER: 
		console.log("FETCH_WEATHER")
		// NEVER DO THIS!!!! - Mutate State. " state.push(action.payload.data) "

		// return state.concat([action.payload.data]); ES6 variant below

		return [action.payload.data, ...state];
	}
	return state;
}