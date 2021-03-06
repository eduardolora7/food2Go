import React,{ Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { faStar, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';
import '../assets/css/infoProduct.scss';
import { Link } from 'react-router-dom';
import { getToken } from '../routes/validate_login';

const url = 'http://127.0.0.1:8000/storage/'

class InfoProduct extends Component{
    constructor() {
        super();
        
        this.state = {
            productos: [],
            quantity: '',
        }
        this.handleChangeQty = this.handleChangeQty.bind(this);   
    }
    
    handleChangeQty(event) {
        this.setState({quantity: event.target.value});
    }

    componentDidMount() {
        
        const { match } = this.props;
        
        axios.get(`http://localhost:8000/api/products/${match.params.pizzaId}`)
        .then(res => {
            const productos = res.data;
            // console.log(productos);
            this.setState({ productos });
        })
    } 

    submit() {

        let formData = new FormData();
        formData.append('product_id', this.state.productos.id)
        formData.append('qty', this.state.quantity)

        axios.post('http://localhost:8000/api/auth/cart/add-product', formData, {
            headers: {
                'Authorization' : `Bearer ${getToken()}`
            }
        })
        .then(response => {
            console.log(response);
            console.log("Agregado");
        })
    }
    
    render(){
        return(
            <Container className="container">
                <button href="" onClick={() => this.props.history.goBack()}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} size="3x" className="arrow_back"/>
                </button >
                <Row className="center_content">
                    <Col xs={6} md={4} lg="5" className="image center_items">
                        <Image className="image_product" src={url+this.state.productos.image} rounded />
                    </Col>
                    <Col xs lg="5" className="header_info">
                        <div>
                            <h2>{this.state.productos.name}</h2>
                            <p className="precio">$<u>{this.state.productos.price}</u></p>
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                            </div>
                            <div className="mt-3">
                                <p>{this.state.productos.description}</p>
                            </div>
                            <div className="py-3">
                                <Row >
                                    <Col>
                                        <h6>Cantidad: </h6>
                                        <div className="quantity">
                                            <input type="number" name="quantity" id="quantity" min="1" max="100" step="1" 
                                                    placeholder="0" value={this.state.quantity} onChange={this.handleChangeQty}/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col className="col-6">
                                        <Link to="/shopping_cart">
                                            <Button className="btn_buy" onClick={()=>this.submit()}>Agregar al Carrito</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default InfoProduct;