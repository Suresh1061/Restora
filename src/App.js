import React, { Fragment } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dishes from './pages/Dishes'
import About from './pages/About'
import Menu from './pages/Menu'
import Review from './pages/Review'
import Order from './pages/Order'
import Footer from './component/Footer'
import Cart from './pages/Cart'
import Favourite from './pages/Favourite'
import { Provider } from 'react-redux'
import { Store } from './Reducer/Store/Store'

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Navbar />
        <Routes>
          <Route exact path='/'
            element={
              <Fragment>
                <Home />
                <Dishes />
                <About />
                <Menu />
                <Review />
                <Order />
                <Footer />
              </Fragment>
            } />
          <Route exact path='/dishes' Component={Dishes} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/menu' Component={Menu} />
          <Route exact path='/review' Component={Review} />
          <Route exact path='/order' Component={Order} />
          <Route exact path='/favourite' Component={Favourite} />
          <Route exact path='/cart' Component={Cart} />
          
        </Routes>
      </Provider>
    </>
  )
}

export default App;