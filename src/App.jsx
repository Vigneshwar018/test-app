import React, {
  useState,
  useEffect
}from 'react'
import Quiz from './comp/Quiz'
import Buttons from './comp/buttons'
import db from './data/quiz'
import cls from './App.module.css';
import Timer from './comp/timer'



const App = () => {

  const API = 'http://localhost:5000/api/quiz'

  const [data,
    setData] = useState(db)
  const [loading,
    setLodaing] = useState (false)

  const [currentPage,
    setCurrentPage] = useState(1)
  const [postPerPage] = useState(1)

  const [userSelect,
    setUserSelect] = useState('')
  const [score,
    setScore] = useState (0)
  const [total,
    setTotal] = useState (0)

  const [cross,
    setCross] = useState ('')
  const [resetState,
    setResetState] = useState (false)

  const sec = 100
  const [time,
    setTime] = useState (sec)

  const submit = () => {
    if (userSelect === cross && data.results.length >= currentPage) {

      setScore(prevScore => prevScore + 1)

    }
    setLodaing(true)
    setTotal(data.results.length)
    setTime(-1)
    setTimeout (() => setLodaing(false), 2000)

  }





  useEffect(() => {
    const fetchData = async () => {
      setLodaing(true)
      const base = await fetch(API);
      const jdata = await base.json();

      setData(jdata)
      setLodaing(false)

    }
    fetchData()}, [resetState])


  useEffect(() => {

    if (time !== -1 && loading !== true) {
      const interval = setInterval(() => {

        setTime(prevTime => prevTime >= 1 ? prevTime - 1: submit())

      },
        1000);
      return () => clearInterval(interval);
    }
  },
    // eslint-disable-next-line
    [loading]);

  const reset = () => {
    setLodaing(true)
    setTotal(0)
    setScore (0)
    setUserSelect('')
    setCross('')
    setCurrentPage(1)
    setLodaing(false)
    setTime(sec)
    setResetState(prevResetState => !prevResetState)
  }

  if (loading) {
    return <h2 className={cls.h1}>Loading... </h2>
  }

  if (total === data.results.length) {
    return (<div className={cls.h1}>
      <h1>Score : {score}/{total} </h1>
      <button onClick={reset} className={cls.reset}>play again </button>
    </div>
    )
  }

  const last = currentPage * postPerPage
  const frist = last - postPerPage
  const current = data.results.slice(frist, last)

  const changePage = () => {
    if (userSelect !== '') {

      setCurrentPage(prevCurrentPage => data.results.length === currentPage ? prevCurrentPage + 0: prevCurrentPage + 1)

      setTotal(prevTotal => prevTotal + 1)

      if (userSelect === cross && data.results.length >= currentPage) {

        setScore(prevScore => prevScore + 1)

      }

      setUserSelect('')
      setCross('')
    } else {
      alert('please select an option!')
    }

  }



  const check = (val) => {
    setUserSelect(val)

  }



  return (
    <div className={cls.bg}>
    <Timer clsTime={cls.time} time={time} />
    <section>
        {current.map((res, index) => <Quiz currentPage={currentPage} setCross={setCross} userSelect={userSelect} score={score} check={check} id={index} key={index} q={res.question} ans={res.correct_answer} ans2={res.incorrect_answers} />)}
        <Buttons click={changePage} click2={submit} />
    </section>
    </div>
  );

}

export default App;