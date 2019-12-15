import React from 'react'
import { Media } from 'reactstrap'

import NavbarUser from '../../../components/navbars/Main_navbar'
import Footer from '../../../components/footer/Footer';

import {Form, 
    FormGroup, 
    Input, 
    Button,
    Container,
    Row,
    Col} from 'reactstrap';

import './book_detail.css'

const Book_detail = () => 
    <div>
        <NavbarUser></NavbarUser>
            
                <Media className="margin-top-title">
                    <Row>
                    <Col xs="12" sm="12" md="12" lg="6" xl="6">
                        <center>
                            <Media left href="#">
                            <Media object src="https://image.freepik.com/free-vector/book-cover-template-design_1201-30.jpg" alt="books" />
                            </Media>
                        </center>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="6" xl="6">
                        <Media body>  
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input type="number" className="numberStock" name="number"></Input>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Button color="success"><i className="fa fa-plus"></i> Add Cart</Button>
                            </FormGroup>
                        </Form>
                        <Media heading>
                            Annual Report 2017
                        </Media>
                            Ini adalah buku untuk membamtu semua karyawan untuk bekerja sama dengan baik Ini adalah buku untuk membamtu semua karyawan untuk bekerja sama dengan baik Ini adalah buku untuk membamtu semua karyawan untuk bekerja sama dengan baik  
                            <p className="p-pengarang">Harga: Rp 250.000,00-</p>
                            <p>Pengarang : Inovation Team Work</p>
                        </Media>
                    </Col>
                    </Row>
                </Media>
        <Footer></Footer>
    </div>
export default Book_detail