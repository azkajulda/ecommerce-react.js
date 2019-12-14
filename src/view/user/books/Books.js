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
                        <CardImg top width="100%" className="responsive-img" src="https://image.freepik.com/free-vector/book-cover-template-design_1201-30.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <Card>
                        <CardImg top width="100%" className="responsive-img" src="https://images-na.ssl-images-amazon.com/images/I/41UHen-IwaL._SX327_BO1,204,203,200_.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <Card>
                        <CardImg top width="100%" className="responsive-img" src="https://cdn.shopify.com/s/files/1/1320/0869/products/Book_1_Julia_s_Story_Cover_SMALL_WEB_1024x1024.jpg?v=1550375601" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
    </div>

export default Books