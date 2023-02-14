import React, { Component } from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import ToDo from '../components/layout/ToDo'


export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ToDo />
        <Footer/>
      </div>
    )
  }
}

export default Home