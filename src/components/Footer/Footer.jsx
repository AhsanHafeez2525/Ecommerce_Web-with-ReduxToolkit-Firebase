import React from 'react'
import './footer.css'
import { Container, Row,Col,ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
// import logo from '../../assets/images/eco-logo.png'


const Footer = () => {

const year = new Date().getFullYear();

  return (
<footer className="footer">
  <Container>
    <Row>
      <Col lg= '4' className='mb-4' md='6'>
      <div className="logo">
            {/* <img src={logo} alt="logo" /> */}
            <div>
              <h1 className='text-white'>Multimart</h1>
            </div>


            </div>
            <p className="footer__text mt-4">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem maiores porro, hic deserunt alias reiciendis excepturi sed eveniet dicta, eum qui iusto aut? Cupiditate reprehenderit assumenda recusandae in! Voluptatibus.
</p>
      </Col>
      <Col lg= '3' md='3' className='mb-4'>
<div className="footer__quick-links">
  <h4 className="quick__links-title">
    Top Categories
  </h4>
  <ListGroup>
    <ListGroupItem className="ps-0 border-0">
      <Link to='#'>Mobile Phones</Link>
    </ListGroupItem>
    <ListGroupItem className="ps-0 border-0">
      <Link to='#'>Modern Sofa</Link>
    </ListGroupItem>
    <ListGroupItem className="ps-0 border-0">
      <Link to='#'>Arm Chair</Link>
    </ListGroupItem>
    <ListGroupItem className="ps-0 border-0">
      <Link to='#'>Smart Watches</Link>
    </ListGroupItem>
  </ListGroup>
</div>

      </Col>
      <Col lg= '2' md='3' className='mb-4'>
      <div className="footer__quick-links">
  <h4 className="quick__links-title">
    Useful Links
  </h4>
  <ListGroup>
    <ListGroupItem className="ps-0 border-0">
      <Link to='/shop'>Shop</Link>
    </ListGroupItem>
    <ListGroupItem className="ps-0 border-0">
      <Link to='/cart'>Cart</Link>
    </ListGroupItem>
    <ListGroupItem className="ps-0 border-0">
      <Link to='/login'>Login</Link>
    </ListGroupItem>
    <ListGroupItem className="ps-0 border-0">
      <Link to='#'>Privacy Policy</Link>
    </ListGroupItem>
  </ListGroup>
</div>


      </Col>
      <Col lg= '3' md='4'>

      <div className="footer__quick-links">
  <h4 className="quick__links-title">
    Contact
  </h4>
  <ListGroup className='footer__contact'>
    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
<span><i class="ri-map-pin-line"></i></span>
<p>91, VipGhori, Islamabad, Pakistan </p>
    </ListGroupItem>
    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
    <span><i class="ri-phone-line"></i></span>
<p>+923463139190</p>
    </ListGroupItem>
    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
    <span><i class="ri-mail-line"></i></span>
<p>ahsansatti402@gmail.com</p>
    </ListGroupItem>
  </ListGroup>
</div>

      </Col>
      <Col lg='12'>
      
<p className="footer__copyright">
  Copyright {year} developed by Ahsan Hafeez. All rights reserved
</p>
      </Col>
    </Row>
  </Container>
</footer>
    )
}

export default Footer