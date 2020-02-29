import React, {useState}from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './comp/Header'



const Hero = props => {
  return (
    <div className = "pro">
      <Header/>
      <h2>Name {props.name.toLowerCase()}</h2>
      <p>Age {props.age}</p>
    </div>
  
  );
}



const App = () => {

  const [profile, setProfile] = useState([
  {name:"Vijay", age:"45"}, 
  {name:"Vigneshwar", age :"25 "}, 
  {name :"thalapathi vijay", age :"45"}
  ]);


  return (
    <div className="App2 App">
      <h1>User details</h1>
      {profile.map(pro => {
      return <Hero name = {pro.name} age= {pro.age}/>
      })} 
    </div>
  );
}



export default App;