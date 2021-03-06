import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { Header, Main, Footer } from './components/Export';

import styled from 'styled-components';
import './App.css';

const Site = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 30px;
  min-height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Site>
          <Helmet
            title="React + Contentful + Netlify"
            meta={[
              { name: 'description', content: 'test react app w/ contenful and deploy on netlify' },
              { name: 'keywords', content: 'resume, blog, porfolio, react, contentful, netlify' },
            ]}
            script={[
              { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
            ]}
            link={[
              {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
            ]}
          />
          <Header />
          <Main />
          <Footer />
        </Site>
      </BrowserRouter>
    );
  }
}

export default App;
