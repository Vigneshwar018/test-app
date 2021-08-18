import React, {
  useState
} from 'react'
import db from '.././data/india'
import moment from 'moment'

const Header = () => {

  return(
    <h2> welcom </h2>



  )
};



const Hero = props => {
  return (
    <div className="pro">
      <Header />
      <h2>Name: {props.name}</h2>
      <p>
Date of birth: {props.age}
    </p>
    <p>
country: {props.team}
    </p>
    </div>

  );
}


const Players = () => {

  const [profile,
    setProfile] = useState(db);

  let date = (v) => {
    const a = new Date(v);
    return moment(a).format('ll');

  };

  return (
    <div className="App2 App">
      <h1>User details</h1>
      {profile.map((pro, index) => {

      return <Hero key={index} name={pro.Name} team={pro.Team} age={date(pro.Date_of_birth)} />
    })}
    </div>
  );
}



export default Players;