import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectSearchBar from './SelectSearchBar';
import BarChart from './BarChart';
import Carousel from 'react-elastic-carousel';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      winner : '',
      probability: '',

      fighter1InputValue: '',
      fighter1SelectedValue: null,
      fighter1BodyStrPerc: 0,
      fighter1ClinchStrPerc: 0,
      fighter1CtrlPerc: 0,
      fighter1DOB: '',
      fighter1DistanceStrPerc: 0,
      fighter1GroundStrPerc: 0,
      fighter1HeadStrPerc: 0,
      fighter1Height: '',
      fighter1KDAvg: 0,
      fighter1LastFight: '',
      fighter1LegStrPerc: 0,
      fighter1RD: 0,
      fighter1Rating: 0,
      fighter1Reach: '',
      fighter1RevAvg: 0,
      fighter1SApM: 0,
      fighter1SLpM: 0,
      fighter1Stance: '',
      fighter1StrAtkPerc: 0,
      fighter1StrDefPerc: 0,
      fighter1SubAvg: 0,
      fighter1TDAtkPerc: 0,
      fighter1TDAvg: 0,
      fighter1TDDefPerc: 0,
      fighter1Odds: '',

      fighter2InputValue: '',
      fighter2SelectedValue: null,
      fighter2BodyStrPerc: 0,
      fighter2ClinchStrPerc: 0,
      fighter2CtrlPerc: 0,
      fighter2DOB: '',
      fighter2DistanceStrPerc: 0,
      fighter2GroundStrPerc: 0,
      fighter2HeadStrPerc: 0,
      fighter2Height: '',
      fighter2KDAvg: 0,
      fighter2LastFight: '',
      fighter2LegStrPerc: 0,
      fighter2RD: 0,
      fighter2Rating: 0,
      fighter2Reach: '',
      fighter2RevAvg: 0,
      fighter2SApM: 0,
      fighter2SLpM: 0,
      fighter2Stance: '',
      fighter2StrAtkPerc: 0,
      fighter2StrDefPerc: 0,
      fighter2SubAvg: 0,
      fighter2TDAtkPerc: 0,
      fighter2TDAvg: 0,
      fighter2TDDefPerc: 0,
      fighter2Odds: ''
    }
  }

  convertDateFormat = value => {
    const date_arr = value.split(".")

    if (date_arr.length > 1) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

      const date_day = date_arr[1]
      const date_month = months[parseInt(date_arr[0]) - 1]
      const date_year = date_arr[2].substring(2)
  
      return (date_day + "-" + date_month + "-" + date_year)
    }
    else {
      return value
    }
  }

  handlePredictButtonPress = async (event) => {
    event.preventDefault()

    if (this.state.fighter1SelectedValue == null) {
      alert("Please select a name for fighter 1")
    }
    else if (this.state.fighter2SelectedValue == null) {
      alert("Please select a name for fighter 2")
    }
    else if (this.state.fighter1SelectedValue.value == this.state.fighter2SelectedValue.value) {
      alert("Please ensure that fighter 1 and fighter 2 are different")
    }
    else if (isNaN(parseFloat(this.state.fighter1Odds)) || this.state.fighter1Odds.indexOf('.') == -1 || parseFloat(this.state.fighter1Odds) <= 1.0) {
      alert("Please enter valid decimal odds for fighter 1 (must be a float greater than 1.0)")
    }
    else if (isNaN(parseFloat(this.state.fighter2Odds)) || this.state.fighter2Odds.indexOf('.') == -1 || parseFloat(this.state.fighter2Odds) <= 1.0) {
      alert("Please enter valid decimal odds for fighter 2 (must be a float greater than 1.0)")
    }
    else {
      const response = await fetch('https://mma-fight-predictor.herokuapp.com/api/predict/' + this.state.fighter1SelectedValue.value + '/' + this.state.fighter2SelectedValue.value + '/' + parseFloat(this.state.fighter1Odds).toString() + '/' + parseFloat(this.state.fighter2Odds).toString());
      const json = await response.json();
      console.log(json)
      this.setState({
        winner: json.winner,
        probability: json.probability
      })
    }
  }

  handleFighter1OddsChange = (event) => {
    event.preventDefault()

    this.setState({
      fighter1Odds: event.target.value
    })
  }

  handleFighter2OddsChange = (event) => {
    event.preventDefault()

    this.setState({
      fighter2Odds: event.target.value
    })
  }

  handleFighter1InputChange = value => {
    this.setState({
      fighter1InputValue: value
    })
  }

  handleFighter2InputChange = value => {
    this.setState({
      fighter2InputValue: value
    })
  }

  handleFighter1Change = async (value) => {
    this.setState({
      fighter1SelectedValue: value
    })
    
    const response = await fetch('https://mma-fight-predictor.herokuapp.com/api/stats/' + value.value);
    const json = await response.json();

    this.setState({
        fighter1BodyStrPerc: json['Body Str. %'],
        fighter1ClinchStrPerc: json['Clinch Str. %'],
        fighter1CtrlPerc: json['Ctrl. %'],
        fighter1DOB: json['DOB'],
        fighter1DistanceStrPerc: json['Distance Str. %'],
        fighter1GroundStrPerc: json['Ground Str. %'],
        fighter1HeadStrPerc: json['Head Str. %'],
        fighter1Height: json['Height'],
        fighter1KDAvg: json['KD Avg.'],
        fighter1LastFight: this.convertDateFormat(json['Last Fight']),
        fighter1LegStrPerc: json['Leg Str. %'],
        fighter1RD: json['RD'],
        fighter1Rating: json['Rating'],
        fighter1Reach: json['Reach'],
        fighter1RevAvg: json['Rev. Avg.'],
        fighter1SApM: json['SApM'],
        fighter1SLpM: json['SLpM'],
        fighter1Stance: json['Stance'],
        fighter1StrAtkPerc: json['Str. Atk. %'],
        fighter1StrDefPerc: json['Str. Def. %'],
        fighter1SubAvg: json['Sub. Avg.'],
        fighter1TDAtkPerc: json['TD Atk. %'],
        fighter1TDAvg: json['TD Avg.'],
        fighter1TDDefPerc: json['TD Def. %']
    })
  }

  handleFighter2Change = async (value) => {
    this.setState({
      fighter2SelectedValue: value,
    })
    
    const response = await fetch('https://mma-fight-predictor.herokuapp.com/api/stats/' + value.value);
    const json = await response.json();

    this.setState({
      fighter2BodyStrPerc: json['Body Str. %'],
      fighter2ClinchStrPerc: json['Clinch Str. %'],
      fighter2CtrlPerc: json['Ctrl. %'],
      fighter2DOB: json['DOB'],
      fighter2DistanceStrPerc: json['Distance Str. %'],
      fighter2GroundStrPerc: json['Ground Str. %'],
      fighter2HeadStrPerc: json['Head Str. %'],
      fighter2Height: json['Height'],
      fighter2KDAvg: json['KD Avg.'],
      fighter2LastFight: this.convertDateFormat(json['Last Fight']),
      fighter2LegStrPerc: json['Leg Str. %'],
      fighter2RD: json['RD'],
      fighter2Rating: json['Rating'],
      fighter2Reach: json['Reach'],
      fighter2RevAvg: json['Rev. Avg.'],
      fighter2SApM: json['SApM'],
      fighter2SLpM: json['SLpM'],
      fighter2Stance: json['Stance'],
      fighter2StrAtkPerc: json['Str. Atk. %'],
      fighter2StrDefPerc: json['Str. Def. %'],
      fighter2SubAvg: json['Sub. Avg.'],
      fighter2TDAtkPerc: json['TD Atk. %'],
      fighter2TDAvg: json['TD Avg.'],
      fighter2TDDefPerc: json['TD Def. %']
   })
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h3> MMA Fight Predictor </h3>
        </div>
        <div className="Info">
          <p> Created by: Janahan Dhushenthen and Jordan Schneider </p>
          <p> Last updated: 26/06/2021 </p>
        </div>

        <div className="Row">
          <div className="Card">
            <h3><b>Fighter 1</b></h3>

            <SelectSearchBar selectedValue={this.state.fighter1SelectedValue} hendleInputChange={this.handleFighter1InputChange} handleChange={this.handleFighter1Change}></SelectSearchBar>
            
            <form>
              <label> Decimal Fight Odds: </label>
              <input type="text" value={this.state.fighter1Odds} onChange={this.handleFighter1OddsChange}></input>
            </form>

            <p> Height: {this.state.fighter1Height}" | Reach: {this.state.fighter1Reach}" | Stance: {this.state.fighter1Stance} | DOB: {this.state.fighter1DOB} | Last Fight: {this.state.fighter1LastFight} </p>

            <Carousel>
              <BarChart 
                labels={['Rating', 'RD']}
                data={[this.state.fighter1Rating, this.state.fighter1RD]}
              ></BarChart>
              <BarChart 
                labels={['SLpM', 'SApM', 'TD Avg.', 'KD Avg.', 'Sub. Avg.', 'Rev. Avg.']}
                data={[this.state.fighter1SLpM, this.state.fighter1SApM, this.state.fighter1TDAvg, this.state.fighter1KDAvg, this.state.fighter1SubAvg, this.state.fighter1RevAvg]}
                ></BarChart>
              <BarChart 
                labels={['Str. Atk. %', 'Str. Def. %', 'TD Atk. %', 'TD Def. %', 'Ctrl. %', 'Head Str. %', 'Body Str. %', 'Leg Str. %', 'Distance Str. %', 'Clinch Str. %', 'Ground Str. %']}
                data={[this.state.fighter1StrAtkPerc, this.state.fighter1StrDefPerc, this.state.fighter1TDAtkPerc, this.state.fighter1TDDefPerc, this.state.fighter1CtrlPerc, this.state.fighter1HeadStrPerc, this.state.fighter1BodyStrPerc, this.state.fighter1LegStrPerc, this.state.fighter1DistanceStrPerc, this.state.fighter1ClinchStrPerc, this.state.fighter1GroundStrPerc]}
              ></BarChart>
            </Carousel>
          </div>

          <div className="Card">
            <h3><b>Fighter 2</b></h3>

            <SelectSearchBar selectedValue={this.state.fighter2SelectedValue} hendleInputChange={this.handleFighter2InputChange} handleChange={this.handleFighter2Change}></SelectSearchBar>
            
            <form>
              <label> Decimal Fight Odds: </label>
              <input type="text" value={this.state.fighter2Odds} onChange={this.handleFighter2OddsChange}></input>
            </form>

            <p> Height: {this.state.fighter2Height}" | Reach: {this.state.fighter2Reach}" | Stance: {this.state.fighter2Stance} | DOB: {this.state.fighter2DOB} | Last Fight: {this.state.fighter2LastFight} </p>

            <Carousel>
            <BarChart 
                labels={['Rating', 'RD']}
                data={[this.state.fighter2Rating, this.state.fighter2RD]}
              ></BarChart>
              <BarChart 
                labels={['SLpM', 'SApM', 'TD Avg.', 'KD Avg.', 'Sub. Avg.', 'Rev. Avg.']}
                data={[this.state.fighter2SLpM, this.state.fighter2SApM, this.state.fighter2TDAvg, this.state.fighter2KDAvg, this.state.fighter2SubAvg, this.state.fighter2RevAvg]}
                ></BarChart>
              <BarChart 
                labels={['Str. Atk. %', 'Str. Def. %', 'TD Atk. %', 'TD Def. %', 'Ctrl. %', 'Head Str. %', 'Body Str. %', 'Leg Str. %', 'Distance Str. %', 'Clinch Str. %', 'Ground Str. %']}
                data={[this.state.fighter2StrAtkPerc, this.state.fighter2StrDefPerc, this.state.fighter2TDAtkPerc, this.state.fighter2TDDefPerc, this.state.fighter2CtrlPerc, this.state.fighter2HeadStrPerc, this.state.fighter2BodyStrPerc, this.state.fighter2LegStrPerc, this.state.fighter2DistanceStrPerc, this.state.fighter2ClinchStrPerc, this.state.fighter2GroundStrPerc]}
              ></BarChart>
            </Carousel>
          </div>
        </div>

        <div className="Row">
          <div className="Card">
            <p className="Winner">WINNER: {
              this.state.winner != '' && 
              <b> {this.state.winner} ({this.state.probability}%) </b>
            }
            </p>
          </div>
        </div>

        <div className="Row">
          <button className="Button" onClick={this.handlePredictButtonPress}>
            Predict
          </button>
        </div>

      </div>
    );
  }
}
export default App;
