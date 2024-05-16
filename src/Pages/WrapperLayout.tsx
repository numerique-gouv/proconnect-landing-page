import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './layout.css'
import React from 'react'

function WrapperLayout(props: { children: JSX.Element }) {
  return (
    <React.Fragment>
      <Header/>
        {props.children}
      <Footer/>
    </React.Fragment>
  )
}

export default WrapperLayout
