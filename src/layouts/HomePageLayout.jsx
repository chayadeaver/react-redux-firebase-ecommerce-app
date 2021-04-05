import React from 'react'
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';


const HomePageLayout = props => {
  return (
    <div className="fullHeight">
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export default HomePageLayout
