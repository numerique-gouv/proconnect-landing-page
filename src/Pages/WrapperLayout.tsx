import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './layout.css'

function WrapperLayout(props: { children: JSX.Element }) {
  return (
    <div className='app'>
      <Header/>
        <div className='content'>
          {props.children}
        </div>
      <Footer/>
    </div>
  )
}

export default WrapperLayout
