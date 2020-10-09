import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPeoples, setDetailCard } from '../../redux/actions/starships-actions.js';
import Loading from '../Loading';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'reactstrap'


class Peoples extends Component {
  componentDidMount() {
    this.props.fetchPeoples();
  }

// функция которая получает url(id элемента) 
 handleDetailPeople = url => {
   this.props.setDetailCard(url)
 }

  render() {
    const {data, isLoaded, detailCard} = this.props
    console.log(data);
    return isLoaded ? (<Loading />):(
      <Container>
        <Row>
          <Col md={6} className="mt-5 mb-5">
          {this.props.data.map((item) => {
            return <ListGroup key={item.name}>
              <ListGroupItem active className="mb-1" style={{cursor: 'pointer' }} onClick={() => this.handleDetailPeople(item.url)}>{item.name}</ListGroupItem>
            </ListGroup>;
          })}
          </Col>
          <Col md={6}>
            {detailCard && (
              <Row className="justify-content-center mt-5 bg-dark text-white" style={{borderRadius: '5px' }}>
                <div>
                  <h2>{detailCard.name}</h2>
                  <p>Рост: {detailCard.height}см</p>
                  <p>Вес: {detailCard.mass}кг</p>
                  <p>Цвет волос: {detailCard.hair_color}</p>
                  <p>Цвет скина: {detailCard.skin_color}</p>
                </div>
              </Row>
            )}
          </Col>
        </Row>
      </Container>);
  }
}

// Получаем дату из state

const mapStateToProps = (state) => {
  const { data, isLoaded, detailCard } = state.AppReducer;
  return { data, isLoaded, detailCard };
};

// получаем функции из actions

const mapDispatchToProps = (dispatch) => ({
  fetchPeoples: () => dispatch(fetchPeoples()),
  setDetailCard: (url) => dispatch(setDetailCard(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Peoples);
