import React from 'react';

class DataDropDown extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      states: [],
      districts: [],
      nutrients: [],
      selectedState: '--Choose State--',
      selectedDistrict: '--Choose District--',
    };
    this.changeState = this.changeState.bind (this);
    this.changeDistrict = this.changeDistrict.bind (this);
  }

  componentDidMount () {
    this.setState ({
      states: [
        {
          name: 'Andhra Pradesh',
          districts: [
            {
              name: 'Anantapur',
              nutrients: ['N : 100.00%', 'OC : 50.00%', 'P : 0%', 'K : 0%'],
              ph: 'Moderately alkaline',
            },
            {
              name: 'Chittoor',
              nutrients: [
                'N : 96.23%',
                'OC : 36.68%',
                'P : 11.63%',
                'K : 49.93%',
              ],
              ph: 'Moderately alkaline',
            },
            {
              name: 'East Godavari',
              nutrients: [
                'N : 70.95%',
                'OC : 48.12%',
                'P : 24.45%',
                'K : 2.42%',
              ],
              ph: 'Moderately alkaline',
            },
            {
              name: 'Guntur',
              nutrients: ['N : 72.34%', 'OC : 74.47%', 'P : 8.51%', 'K : 0%'],
              ph: 'Moderately alkaline',
            },
            {
              name: 'Krishna',
              nutrients: [
                'N : 63.70%',
                'OC : 58.32%',
                'P : 1.36%',
                'K : 10.39%',
              ],
              ph: 'Moderately alkaline',
            },
            {
              name: 'Kurnool',
              nutrients: [
                'N : 98.18%',
                'OC : 62.39%',
                'P : 7.29%',
                'K : 3.66%',
              ],
              ph: 'Moderately alkaline',
            },
            {
              name: 'Prakasam',
              nutrients: [
                'N : 93.43%',
                'OC : 52.37%',
                'P : 24.88%',
                'K : 16.77%',
              ],
              ph: 'Moderately alkaline',
            },
            {
              name: 'Spsr Nellore',
              nutrients: [
                'N : 97.12%',
                'OC : 59.94%',
                'P : 11.75%',
                'K : 45.01%',
              ],
              ph: 'Moderately alkaline',
            },
            {
              name: 'Srikakulam',
              nutrients: [
                'N : 88.52%',
                'OC : 29.53%',
                'P : 42.62%',
                'K : 23.91%',
              ],
              ph: 'Moderately acidic',
            },
            {
              name: 'Vishakhapatnam',
              nutrients: [
                'N : 88.98%',
                'OC : 22.07%',
                'P : 14.41%',
                'K : 51.42%',
              ],
              ph: 'Moderately alkaline',
            },
            {
              name: 'Vizianagaram',
              nutrients: ['N : 100.00%', 'OC : 100.00%', 'P : 0%', 'K : 0%'],
              ph: 'Moderately alkaline',
            },
            {
              name: 'West Godavari',
              nutrients: [
                'N : 87.25%',
                'OC : 33.02%',
                'P : 3.41%',
                'K : 56.53%',
              ],
              ph: 'Moderately alkaline',
            },
            {
              name: 'Y.S.R.',
              nutrients: [
                'N : 98.59%',
                'OC : 63.67%',
                'P : 19.79%',
                'K : 28.43%',
              ],
              ph: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'MADHYA PRADESH',
          districts: [
            {
              name: 'Agar Malwa',
              nutrients: [
                'N : 78.15%',
                'OC : 68.07%',
                'P : 90.75%',
                'K : 1.68%%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Alirajpur',
              nutrients: ['N : 0%', 'OC : 1.12%', 'P : 100%', 'K : 32.40%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Anuppur',
              nutrients: ['N : 100%', 'OC : 0%', 'P : 0%', 'K : 0%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Ashoknagar',
              nutrients: [
                'N : 86.77%',
                'OC : 19.81%',
                'P : 59.79%',
                'K : 10.75%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Balaghat',
              nutrients: [
                'N : 34.41%',
                'OC : 22.63%',
                'P : 52.28%',
                'K : 21.87%',
              ],
              pH: 'slightly acidic',
            },
            {
              name: 'Barwani',
              nutrients: [
                'N : 56.95%',
                'OC : 27.87%',
                'P : 54.23%',
                'K : 6.44%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Betul',
              nutrients: [
                'N : 92.05%',
                'OC : 29.97%',
                'P : 92.97%',
                'K : 1.23%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bhind',
              nutrients: ['N :99.54%', 'OC :99.05%', 'P : 99.37%', 'K : 0.69%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bhopal',
              nutrients: [
                'N : 85.72%',
                'OC : 11.43%',
                'P : 54.28%',
                'K : 17.14%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Burhanpur',
              nutrients: [
                'N : 100.00%',
                'OC : 51.31%',
                'P : 97.37%',
                'K : 2.63%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chhatarpur',
              nutrients: [
                'N : 88.29%',
                'OC : 40.43%',
                'P : 45.19%',
                'K : 2.13%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chhindwara',
              nutrients: [
                'N : 56.69%',
                'OC : 17.66%',
                'P : 48.00%',
                'K : 16.84%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Damoh',
              nutrients: [
                'N : 22.70%',
                'OC : 17.15%',
                'P : 96.09%',
                'K : 11.98%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Datia',
              nutrients: ['N : 28.00%', 'OC :5.33%', 'P : 14.67%', 'K : 6.66%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dewas',
              nutrients: [
                'N : 93.42%',
                'OC : 58.93%',
                'P : 40.43%',
                'K : 32.55%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dhar',
              nutrients: ['N : 91.76%', 'OC : 75.29%', 'P : 42.33%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dindori',
              nutrients: ['N : 53.85%', 'OC : 30.77%', 'P : 100.00%', 'K : 0%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'East Nimar',
              nutrients: [
                'N : 99.23%',
                'OC : 49.23%',
                'P : 5.34%',
                'K : 3.05%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Guna',
              nutrients: [
                'N : 60.82%',
                'OC : 28.40%',
                'P : 30.49%',
                'K : 40.49%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gwalior',
              nutrients: ['N : 98.39%', 'OC : 9.68%', 'P : 1.61%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Harda',
              nutrients: ['N : 61.59%', 'OC : 0%', 'P : 8.54%', 'K : 6.71%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hoshangabad',
              nutrients: [
                'N : 80.13%',
                'OC : 40.70%',
                'P : 23.33%',
                'K : 0.94%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Indore',
              nutrients: [
                'N : 99.98%',
                'OC : 83.89%',
                'P : 99.55%',
                'K : 0.20%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'jabalpur',
              nutrients: [
                'N : 60.21%',
                'OC : 30.01%',
                'P : 42.22%',
                'K : 4.73%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jhabua',
              nutrients: [
                'N : 55.00%',
                'OC : 5.00%',
                'P : 60.00%',
                'K : 5.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'katni',
              nutrients: [
                'N : 61.90%',
                'OC : 28.57%',
                'P : 333.93%',
                'K : 23.35%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Khargone',
              nutrients: ['N : 26.47%', 'OC : 2.94%', 'P : 100%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mandla',
              nutrients: ['N : 43.75%', 'OC : 4.69%', 'P : 29.69%', 'K : 0%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Mandsaur',
              nutrients: [
                'N : 39.21%',
                'OC : 3.92%',
                'P : 98.04%',
                'K : 1.96%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Morena',
              nutrients: [
                'N : 44.99%',
                'OC : 26.99%',
                'P : 1.73%',
                'K : 1.84%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Narsinghpur',
              nutrients: [
                'N : 99.21%',
                'OC : 36.36%',
                'P : 59.80%',
                'K : 17.50%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Neemuch',
              nutrients: [
                'N : 46.71%',
                'OC : 3.89%',
                'P : 99.71%',
                'K : 0.17%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Panna',
              nutrients: [
                'N : 75.51%',
                'OC : 5.10%',
                'P : 81.63%',
                'K : 15.30%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Raisen',
              nutrients: [
                'N : 73.34%',
                'OC : 53.34%',
                'P : 60.00%',
                'K : 6.67%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rajgarh',
              nutrients: [
                'N : 91.32%',
                'OC : 64.02%',
                'P : 59.05%',
                'K : 4.35%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ratlam',
              nutrients: [
                'N : 96.83%',
                'OC : 63.96%',
                'P : 97.59%',
                'K : 0.51%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rewa',
              nutrients: [
                'N : 75.65%',
                'OC : 25.09%',
                'P : 97.78%',
                'K : 0.37%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sagar',
              nutrients: [
                'N : 13.33%',
                'OC : 13.34%',
                'P : 100%',
                'K : 46.67%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Satna',
              nutrients: [
                'N : 92.04%',
                'OC : 57.71%',
                'P : 8.00%',
                'K : 44.50%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sehore',
              nutrients: [
                'N : 50.00%',
                'OC : 33.33%',
                'P : 50.00%',
                'K : 33.33%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Seoni',
              nutrients: ['N : 53.97%', 'OC : 50.79%', 'P : 98.41%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Shahdol',
              nutrients: [
                'N : 75.57%',
                'OC : 41.33%',
                'P : 99.01%',
                'K : 0.76%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Shajapur',
              nutrients: ['N : 100.00%', 'OC : 50.00%', 'P : 0%', 'K : 50.00%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sheopur',
              nutrients: [
                'N : 96.22%',
                'OC : 55.66%',
                'P : 92.76%',
                'K : 16.35%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Shivpuri',
              nutrients: [
                'N : 85.87%',
                'OC : 80.44%',
                'P : 8.70%',
                'K : 5.44%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sidhi',
              nutrients: [
                'N : 44.28%',
                'OC : 56.00%',
                'P : 3.13%',
                'K : 2.59%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Singrauli',
              nutrients: [
                'N : 93.34%',
                'OC : 80.00%',
                'P : 20.00%',
                'K : 60.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tikamgarh',
              nutrients: [
                'N : 14.64%',
                'OC : 55.06%',
                'P : 21.77%',
                'K : 2.01%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ujjain',
              nutrients: [
                'N : 97.62%',
                'OC : 29.17%',
                'P : 20.24%',
                'K : 1.79%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Umaria',
              nutrients: [
                'N : 71.83%',
                'OC : 69.72%',
                'P : 100.00%',
                'K : 0.70%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Vidisha',
              nutrients: [
                'N : 97.40%',
                'OC : 17.86%',
                'P : 78.00%',
                'K : 2.10%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },
      ],
    });
  }

  changeState (event) {
    this.setState ({selectedState: event.target.value});
    this.setState ({
      districts: this.state.states.find (dis => dis.name === event.target.value)
        .districts,
    });
  }

  changeDistrict (event) {
    this.setState ({selectedDistrict: event.target.value});
    const stats = this.state.states.find (
      state => state.name === this.state.selectedState
    ).districts;
    this.setState ({
      nutrients: stats.find (stat => stat.name === event.target.value)
        .nutrients,
    });
  }

  render () {
    return (
      <div id="container">
        <div>
          <label>State</label>
          <select
            placeholder="State"
            value={this.state.selectedState}
            onChange={this.changeState}
          >
            <option> -- Choose State -- </option>
            {this.state.states.map ((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label>District</label>

          <select
            placeholder="District"
            value={this.state.selectedDistrict}
            onChange={this.changeDistrict}
          >
            <option>--Choose District--</option>
            {this.state.districts.map ((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label>
            Soil Deficiency in terms of Nutrients in :
          </label>
          <div placeholder="Nutrients">
            {this.state.nutrients.map ((e, key) => {
              return (
                <div key={key}>
                  {e}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DataDropDown;
