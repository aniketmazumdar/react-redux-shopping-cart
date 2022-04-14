import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from "react-bootstrap";

import {LayoutContainer} from './layout.style'

import Header from '../header/header.component'
import Footer from '../footer/footer.component'

export default function Layout() {
  return (
    <Fragment>
        <Header />
        <LayoutContainer>
          <Container>
            <Outlet />
          </Container>
        </LayoutContainer>
        <Footer />
    </Fragment>
  )
}

