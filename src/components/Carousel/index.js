import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Slider1 from '../../assets/star-wars.jpeg';
import Logo from '../../assets/destiny_logo.jpg';
import Slider2 from '../../assets/sw.jpg'

const items = [
  {
    src: Slider1,
    altText: 'Star Wars',
    header: 'Star Wars',
    key: '1'
  },
  {
    src: Logo,
    key: '2'
  },
  {
    src: Slider2,
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;