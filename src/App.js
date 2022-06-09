import './App.css'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import data from './data'
import { useState } from 'react'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail'

function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate()

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/')
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('./detail')
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link className='link' to='/'>
        Home{' '}
      </Link>
      <Link className='link' to='/detail'>
        Detail
      </Link>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1}></Card>
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        {/* <Route path='/about' element={<About />}>
          <Route path='member' element={<div>Member</div>}></Route>
          <Route path='location' element={<div>Location</div>}></Route>
        </Route>
        <Route path='/event' element={<Event />}>
          <Route
            path='one'
            element={<div>Free gift on the first order</div>}
          ></Route>
          <Route path='two' element={<div>Birthday Coupons!</div>}></Route>
        </Route> */}
        <Route path='*' element={<div>404 Errors</div>} />
      </Routes>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>Company Info</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Event() {
  return (
    <div>
      <h4>Today's Event!!</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img
        src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}
        width='80%'
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App
