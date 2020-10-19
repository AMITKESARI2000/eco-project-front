import React from 'react';

class DataDropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			states : [],
			districts : [],
			nutrients: [],
			selectedState : '--Choose State--',
			selectedDistrict : '--Choose District--'
		};
		this.changeState = this.changeState.bind(this);
		this.changeDistrict = this.changeDistrict.bind(this);
	}
  	
	componentDidMount() {
		this.setState({
			states : [
				{ name: 'MH', districts:  [{name: 'Pune',nutrients: ['N : 63.48%','OC : 73.36%','P : 5.65%','K : 3.41%']},{name: 'Nagpur',nutrients: ['N : 63.48%','OC : 73.36%','P : 5.65%','K : 3.41%']}]},
				{ name: 'AP', districts:  [{name: 'Chittoor',nutrients: ['N : 63.48%','OC : 73.36%','P : 5.65%','K : 3.41%']},{name: 'East Godavari',nutrients: ['N : 63.48%','OC : 73.36%','P : 5.65%','K : 3.41%']}]},
				{ name: 'UP', districts:  [{name: 'Haridwar',nutrients: ['N : 63.48%','OC : 73.36%','P : 5.65%','K : 3.41%']},{name: 'Dehradun',nutrients: ['N : 63.48%','OC : 73.36%','P : 5.65%','K : 3.41%']}]},
				{ name: 'MP', districts: [{name: 'Bhopal',nutrients: ['N : 85.72%','OC : 11.43%','P : 54.28%','K : 17.14%']},{name: 'Indore',nutrients: ['N : 99.82%','OC : 76.80%','P : 98.83%','K : 0.30%']}]},
				{ name: 'TS', districts:  [{name: 'Karimnagar',nutrients: ['N : 63.48%','OC : 73.36%','P : 5.65%','K : 3.41%']},{name: 'Warangal',nutrients: ['N : 97.54%','OC : 81.96%','P : 21.62%','K : 15.05%']}]},
			]
		});
	}
  
	changeState(event) {
		this.setState({selectedState: event.target.value});
		this.setState({districts : this.state.states.find(dis => dis.name === event.target.value).districts});
	}

	changeDistrict(event) {
		this.setState({selectedDistrict: event.target.value});
		const stats = this.state.states.find(state => state.name === this.state.selectedState).districts;
		this.setState({nutrients : stats.find(stat => stat.name === event.target.value).nutrients});
	}
	
	render() {
		return (
			<div id="container">
				<div>
					<label>State</label>
					<select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
						<option> -- Choose State -- </option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div>
					<label>District</label>
          
					<select placeholder="District" value={this.state.selectedDistrict} onChange={this.changeDistrict}>
						<option>--Choose District--</option>
						{this.state.districts.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				
				<div>
					<label>Nutrients :</label>
					<div placeholder="Nutrients">
					          {this.state.nutrients.map((e, key) => {
						return <div key={key}>{e}</div>;
					           })}
					</div>
				</div>
			</div>
		)
	}
}

export default DataDropDown;