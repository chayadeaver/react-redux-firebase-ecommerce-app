import React from 'react'
import ShopMen from './../../assets/shopMens.jpeg';
import ShopWomen from './../../assets/shopWomens.jpeg';


const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          <a href="">Shope Womens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`
          }}
        >
          <a href="">Shop Mens</a>
        </div>
      </div>
    </div>
  )
}

export default Directory;
