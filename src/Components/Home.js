import React from 'react'
import Carousel from './Carousel'
import Users from './Users'

const Home = (props) => {
  console.log(props.loggedin)
  return (
    <div>
      <Carousel/>
      <Users setReciever={props.setReciever} loggedin={props.loggedin}/>
    </div>
  )
}

export default Home
