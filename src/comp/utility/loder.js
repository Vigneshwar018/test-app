import React from 'react'
import cls from './loder.module.css';

const Loding = ({
  click,
  click2
}) => {
  return (
    <div className={cls.h1}>
      <div className={cls.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>

  )
};

export default Loding;