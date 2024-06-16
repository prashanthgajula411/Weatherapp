

import {Component} from 'react'

 import { FaSearch } from "react-icons/fa";
 import { MdDarkMode } from "react-icons/md";



import WeatherItem from './components/WeatherItem'

import './App.css';

class App extends Component{

  state={userInput:"Delhi", weatherData:{},isDark:false}

  componentDidMount(){
    this.getWeatherdata()
  }

  getUserinput=(event)=>(
this.setState({userInput:event.target.value})
  )

  toggleTheme=()=>(
    this.setState((prevState)=>({
     isDark:!prevState.isDark 
    }))
  )

 Header=()=>{
  const {userInput}=this.state
  return(
  <div>
    <input type="search" className="search-input-bar"  value={userInput} onChange={this.getUserinput} placeholder='Location'/>
    <button onClick={this.getWeatherdata} className="button"><FaSearch className='button-icon'/></button>
     
  </div>)
 }

 toggleButton=()=>(
  <button className="toggle-button" onClick={this.toggleTheme}>Change Theme:<MdDarkMode /></button>
 )

  getWeatherdata= async ()=>{

    const {userInput}=this.state
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=f5534c268c7e3da5379f885a11300029`

    const response=await fetch(url)
    const data= await response.json()
    if (response.ok){
      const formatteddata={
        humidity:data.main.humidity,
        windspeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon:data.weather[0].icon,
        description:data.weather[0].description
      }
      this.setState({weatherData:formatteddata})
    }
    else{
      alert("somethimg went wrong")
    }
  }

  render(){
    const {weatherData, isDark}=this.state
    return(
      <div>
      <div className={`${isDark ? "dark-con":"white-con"}`}>
        <div className="weather-card-con">
          
         {this.toggleButton()}
         <h1 className="title">Geo Weatherapp</h1>
        {this.Header()}
<WeatherItem  weatherData={weatherData} key={weatherData.key}/>
<hr/>
<p className="weather-description">there is {weatherData.description} weather in {weatherData.location}</p>
      </div>
      </div>
      </div>
    )
  }
}

export default App;
