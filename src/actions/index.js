import axios from 'axios';

const API_KEY = 'eaba41413d6e0956cd2228b2e985c2dd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request:', request);
	console.log('URL:', url);

	return{
		type: FETCH_WEATHER, 
		payload: request
	};
}