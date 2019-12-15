import React, { useState } from 'react'

import NavbarUser from '../../../components/navbars/Main_navbar'
import Footer from '../../../components/footer/Footer';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Container, Row, Col, Form,
    FormGroup, Label, Input
  } from 'reactstrap';

import './books.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Books = () =>
    <div>
        <NavbarUser></NavbarUser>
        <Container className="margin-top-title">
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="search-books"><i className="fa fa-search"></i> Search</Label>
                            <Input
                            type="search"
                            name="search"
                            id="search-books"
                            placeholder="Go To Explore your world"
                            />
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <Card>
                        <a href="/book_detail">
                            <CardImg top width="100%" className="responsive-img" src="https://image.freepik.com/free-vector/book-cover-template-design_1201-30.jpg" alt="Card image cap" />
                        </a>
                        <CardBody>
                        <CardTitle tag={Link} to="/book_detail"><h5>Annual Report 2017</h5></CardTitle>
                        <CardSubtitle>Inovation Team Work</CardSubtitle>
                        <CardText>Ini adalah buku untuk membamtu semua karyawan untuk bekerja sama dengan baik</CardText>
                        <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <Card>
                        <a href="/book_detail">
                            <CardImg top width="100%" className="responsive-img" src="https://images-na.ssl-images-amazon.com/images/I/41UHen-IwaL._SX327_BO1,204,203,200_.jpg" alt="Card image cap" />
                        </a>
                        <CardBody>
                        <CardTitle tag={Link} to="/book_detail"><h5>A Cover-to-Cover</h5></CardTitle>
                        <CardSubtitle>keith Houston</CardSubtitle>
                        <CardText>read all the way through from the beginning to the end</CardText>
                        <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <Card>
                        <a href="/book_detail">
                            <CardImg top width="100%" className="responsive-img" src="https://cdn.shopify.com/s/files/1/1320/0869/products/Book_1_Julia_s_Story_Cover_SMALL_WEB_1024x1024.jpg?v=1550375601" alt="Card image cap" />
                        </a>
                        <CardBody>
                        <CardTitle tag={Link} to="/book_detail"><h5>Julia's Story</h5></CardTitle>
                        <CardSubtitle>J Mary Masters</CardSubtitle>
                        <CardText>Menceritakan Sebuah cerita tentang keseharian julia</CardText>
                        <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <Card>
                        <a href="/book_detail">
                            <CardImg top width="100%" className="responsive-img" src="https://images-na.ssl-images-amazon.com/images/I/41UHen-IwaL._SX327_BO1,204,203,200_.jpg" alt="Card image cap" />
                        </a>
                        <CardBody>
                        <CardTitle tag={Link} to="/book_detail"><h5>A Cover-to-Cover</h5></CardTitle>
                        <CardSubtitle>keith Houston</CardSubtitle>
                        <CardText>read all the way through from the beginning to the end</CardText>
                        <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <Card>
                        <a href="/book_detail">
                            <CardImg top width="100%" className="responsive-img" src="https://cdn.shopify.com/s/files/1/1320/0869/products/Book_1_Julia_s_Story_Cover_SMALL_WEB_1024x1024.jpg?v=1550375601" alt="Card image cap" />
                        </a>
                        <CardBody>
                        <CardTitle tag={Link} to="/book_detail"><h5>Julia's Story</h5></CardTitle>
                        <CardSubtitle>J Mary Masters</CardSubtitle>
                        <CardText>Menceritakan Sebuah cerita tentang keseharian julia</CardText>
                        <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <Card>
                        <a href="/book_detail">
                            <CardImg top width="100%" className="responsive-img" src="https://image.freepik.com/free-vector/book-cover-template-design_1201-30.jpg" alt="Card image cap" />
                        </a>
                        <CardBody>
                        <CardTitle tag={Link} to="/book_detail"><h5>Annual Report 2017</h5></CardTitle>
                        <CardSubtitle>Inovation Team Work</CardSubtitle>
                        <CardText>Ini adalah buku untuk membamtu semua karyawan untuk bekerja sama dengan baik</CardText>
                        <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
    </div>

export default Books