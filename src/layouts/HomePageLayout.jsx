import React from 'react'
import Header from '../components/Header/index';


const HomePageLayout = props => {
  return (
    <div className="fullHeight">
      <Header />
        {props.children}
    </div>
  )
}

export default HomePageLayout
