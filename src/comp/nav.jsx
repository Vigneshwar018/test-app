import React, {
  useState,
  useEffect
}from 'react'
import cls from './nav.module.css';



const Nav = () => {

  const [adCls,
    setAdCls] = useState(false)

  const menuHandeler = () => {
    let currentState = adCls
    setAdCls(!adCls)

  }

  return (

    <nav className={cls.nav}>

			<button className={[cls.btn, adCls ? (cls.toggle): null].join(' ')} onClick={menuHandeler}><span className={cls.span}></span></button>
      <h1>{adCls.toString()}</h1>
			<ul id="menu" className={adCls ? (cls.active): null}>
				<li><a href="index.html"><i className="fa fa-home"></i><span className={cls.span}>hom</span></a></li>
				<li><a href="about.html"><i className="fa fa-address-book"></i><span className={cls.span}>about</span></a></li>
				<li><a href="blog.html"><i className="fa fa-rss-square"></i><span className={cls.span}>blog</span></a></li>
				<li><a href="products.html"><i className="fa fa-cart-plus"></i><span className={cls.span}>products</span></a></li>
				<li><a href="contact.html"><i className="fa fa-phone"></i><span className={cls.span}>contact</span></a></li>
    </ul>
    </nav>
  );
}



export default Nav;