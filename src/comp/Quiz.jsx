import React from 'react'
import he from 'he';
import cls from './quiz.module.css';



const Quiz = ({
  q,
  ans,
  id,
  ans2,
  score,
  check,
  userSelect,
  setCross,
  currentPage
}) => {

  // const [adCls, setAdCls] = useState(false)






  // const menuHandeler = () => {
  //   let currentState = adCls
  //    setAdCls(!adCls)

  //  }


  const answer = (a, a2) => {

    if (a2.indexOf(a) === -1) {
      let a3 = a2;
      //a3.push(ans)
      a3.splice(Math.floor(Math.random()*(a2.length+1)), 0, a)
      return a3
    } else {
      return a2
    }
  }

  const a = answer(ans, ans2);

  setCross(ans);


  return (

    <div className={cls.card} key={id}>
		  <h1 className={cls.question}>{currentPage}). {he.decode(q)}</h1>
		 <div className={cls.answers}>
		   <ul>
		     {a.map((opt, key) => <li key={key}><input type="radio" name={id} id={id + opt} value={opt}></input><label onClick={() => { check(opt); } } className={opt === userSelect ? cls.answer: cls.notAnswer} htmlFor={id + opt}>{he.decode(opt)}</label></li>) }
    </ul>
    </div>
  </div>
);
}



export default Quiz;