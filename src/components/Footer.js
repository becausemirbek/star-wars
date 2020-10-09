import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer bg-dark" style={{boxShadow: '0 0 10px rgba(0,0,0,0.5)'}}>
        <Row className="footer-nav p-5">
          <Container className="d-flex justify-content-between flex-md-nowrap flex-wrap">
            {/* <Link>About us</Link> */}
            <p className="ml-4 text-white">
              «Звёздные во́йны» — медиафраншиза в жанре космическая опера, 
              включающая в себя 11 художественных фильмов, а также анимационные сериалы,
              мультфильмы, телефильмы, книги, комиксы, видеоигры, игрушки и прочие произведения,
              созданные в рамках единой фантастической вселенной «Звёздных войн»
            </p>
          </Container>
        </Row>
    </footer>
    );
  }
}

export default Footer;