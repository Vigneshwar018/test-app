import React from 'react'


const Timer = ({
  clsTime,
  time
}) => {



  let min = Math.floor(time / 60),
  sec = time % 60;

  return (

    <h2 className={clsTime}>{min < 10 ? '0'+min: min}:{sec < 10 ? '0'+sec: sec} </h2>

  )
}

export default Timer;