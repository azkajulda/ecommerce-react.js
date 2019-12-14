import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';

import NavbarUser from '../../../components/navbars/Main_navbar';
import Carousel_products from '../../../components/carousel/Carousel_products';
import Footer from '../../../components/footer/Footer';

import './landing_page_user.css';
import logo from './foto/Azka.jpg';

const Landing_page_user = () => 
    <div>
        <NavbarUser></NavbarUser>
        <Carousel_products></Carousel_products>
        <Container>
            <Row>
                <Col xs="0" sm="1" md="2" lg="2" xl="2"></Col>
                <Col xs="12" sm="10" md="8" lg="8" xl="8" className="title-landing">
                    <h1>Welcome To Lulus Tepat Waktu Store</h1>
                    <p>Website ini merupakan marketplace untuk menjual aneka buku yang sangat menginspirasi 
                        semua orang yang membacanya</p>
                </Col>
                <Col xs="0" sm="1" md="2" lg="2" xl="2"></Col>
            </Row>
        </Container>
        <Row className="title-landing testimoni">
            <Col xs="12" sm="12" md="12" lg="12" xl="12" className="title-landing">
                <h1>Testimoni</h1>
            </Col>
            <Col xs="0" sm="12" md="1" lg="4" xl="4" className="title-landing comment">
                <img src={logo} alt={"logo"} className="rounded-circle"/>
                <h5>Mohamad Azka Julda S</h5>
                <p>Saya telah mendapatkan uang dari penjualan online ini</p>
            </Col>
            <Col xs="12" sm="12" md="10" lg="4" xl="4" className="title-landing comment">
                <img src={logo} alt={"logo"} className="rounded-circle"/>
                <h5>Mohamad Azka Julda S</h5>
                <p>Saya telah mendapatkan uang dari penjualan online ini</p>
            </Col>
            <Col xs="0" sm="12" md="1" lg="4" xl="4" className="title-landing comment">
                <img src={logo} alt={"logo"} className="rounded-circle"/>
                <h5>Mohamad Azka Julda S</h5>
                <p>Saya telah mendapatkan uang dari penjualan online ini</p>
            </Col>
        </Row>
        <Footer></Footer>
    </div>
export default Landing_page_user