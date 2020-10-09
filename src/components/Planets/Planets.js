import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPlanets, setDetailCard } from '../../redux/actions/starships-actions.js';
import Loading from '../Loading';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

class Planets extends Component {
  componentDidMount() {
    this.props.fetchPlanets()
  }

  // функция которая получает url(id элемента) 
  handleDetailPlanets = (url) => {
    this.props.setDetailCard(url)
  }

  render() {
    const {data, isLoaded, detailCard} = this.props
    // console.log(this.props.detailCard)
    return isLoaded ? (<Loading />):(
      <Container>
        <Row>
          <Col md={6} className="mt-5 mb-5">
            {data.map(item => {
              return <ListGroup key={item.name}>  
              <ListGroupItem active className="mb-1" style={{cursor: 'pointer' }} onClick={() => this.handleDetailPlanets(item.url)}>Планета: {item.name}</ListGroupItem>
            </ListGroup>
              
            })}
          </Col>
          <Col md={6}>
            {detailCard && (
              <Row className="justify-content-center mt-5 bg-dark" style={{ color: '#fff', borderRadius: '5px' }}>
                <div>
                <h2>{detailCard.name}</h2>
                <p>Диаметр: {detailCard.diameter}</p>
                <p>Орбитальный период: {detailCard.orbital_period}г</p>
                <p>Популяция: {detailCard.population}</p>
                </div>
                {/* {console.log(detailCard)} */}
              </Row>
            )}
            
          </Col>
        </Row>
      </Container>
    );
  }
}
// Получаем дату из state
const mapStateToProps = state => {
  const { data, isLoaded, detailCard } = state.AppReducer;
  return { data, isLoaded, detailCard };
}

// получаем функции из actions
const mapDispatchToProps = dispatch => ({
  fetchPlanets: ()=> dispatch(fetchPlanets()),
  setDetailCard: (url)=> dispatch(setDetailCard(url))
})
export default connect(mapStateToProps, mapDispatchToProps)(Planets);