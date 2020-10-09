import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="bg-dark" style={{boxShadow:'0 0 10px rgba(0,0,0,0.5)'}}>
        <Container>
          <Row className="d-flex justify-content-between">
              <Link to="/" style={{textDecoration:'none'}}><h2>ICON</h2></Link>
              <div className="d-flex align-items-center">
                <Link to="/planets" className="mr-5"><div>Planets</div></Link>
                <Link to="/peoples"><div>Peoples</div></Link>
              </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;