import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		console.log('cool');
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		return(
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temps} color="orange" units="F"/></td>
				<td><Chart data={pressures} color="red" units="hPa" /></td>
				<td><Chart data={humidities} color="blue" units="%"/></td>
			</tr>
		);
	}

	render() {
		console.log('cool table');
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// function mapStateToProps(state) {
// 	return { weather: state.weather };
// }


// ES6 Varient
function mapStateToProps({ weather }) {
	console.log('weather', weather)
	return { weather }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);