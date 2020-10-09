import React, { Component, Suspense } from 'react';

import Loading from '../Loading';
import Layout from './Layout';

const withLayout = (WrappedComponent)=>{
  const HOC = class extends Component{
    render(){
      return(
        <Suspense fallback={<Loading/>}>
          <Layout {...this.props}>
            <WrappedComponent {...this.props}/>
          </Layout>
        </Suspense>
      )
    }
  }
  return HOC
}

export default withLayout;