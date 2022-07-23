import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { lazy, useEffect, useState } from 'react';
import { data } from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './router/detail';
import axios from 'axios';
// import Cart from './router/cart';
import { useQuery } from 'react-query';

const Cart = lazy(() => import('./router/cart'));

function App() {
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  // eslint-disable-next-line no-unused-vars
  let [shoes, setShoes] = useState(data);

  return (
    <div className={'App'}>
      <Navigation />
      <Routes>
        <Route
          path={'/'}
          element={
            <>
              <div className={'main-bg'}></div>
              <div className={'container'}>
                <div className={'row'}>
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
                <button
                  onClick={() => {
                    axios
                      .get('https://codingapple1.github.io/shop/data2.json')
                      .then((value) => {
                        let copy = [...shoes, ...value.data];
                        setShoes(copy);
                      })
                      .catch(() => {
                        alert('fail');
                      });
                  }}
                >
                  btn
                </button>
              </div>
            </>
          }
        />
        <Route path={'/detail/:id'} element={<Detail shoes={shoes} />} />
        <Route path={'/about'} element={<About />}>
          <Route path={'member'} element={<div>member</div>} />
        </Route>
        <Route path={'*'} element={<div>error</div>} />
        />
        <Route path={'/cart'} element={<Cart />} />
      </Routes>
    </div>
  );
}

function About(props) {
  return (
    <div>
      <h4>company</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Navigation(props) {
  let navigate = useNavigate();

  let result = useQuery('userdata', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((value) => {
      console.log('request');
      return value.data;
    });
  });

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">wumeenna</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/detail');
            }}
          >
            Detail
          </Nav.Link>
        </Nav>
        <Nav className={'ms-auto'}>hello</Nav>
      </Container>
    </Navbar>
  );
}

function Card(props) {
  return (
    <div className={'col-md-4'}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'}
        width={'80%'}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

function child() {
  return <div>child</div>;
}

export default App;
