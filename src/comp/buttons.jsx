import React from 'react'
import cls from './quiz.module.css';

const Buttons = ({
  click,
  click2
}) => {
  return (
    <div className={cls.btns}>
		 <button className={cls.btn} onClick={click}>next</button>
		 <button onClick={click2} className={cls.btn}>submit</button>
    </div>

  )
};

export default Buttons;