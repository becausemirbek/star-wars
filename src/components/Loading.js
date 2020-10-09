import React from 'react';
import { Spinner, Row } from 'reactstrap';

const Loading = () => {
  return (
    <Row className="justify-content-center mt-5 mb-5">
      <Spinner color="primary" style={{ width: '5rem', height: '5rem' }} />
    </Row>
  );
}
export default Loading;
