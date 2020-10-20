import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import {Image, Container, Row, Col, Modal, Spinner} from 'react-bootstrap';
import './App.css';
import mosh from './helpers/mosh.js';
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[
                {value: 'https://finn-deconstruction.s3.amazonaws.com/example1.jpg', base64: null},
                {value: 'https://finn-deconstruction.s3.amazonaws.com/example2.jpg', base64: null},
                {value: 'https://finn-deconstruction.s3.amazonaws.com/example3.jpg', base64: null},
                {value: 'https://finn-deconstruction.s3.amazonaws.com/example4.jpg', base64: null}
            ]
        };
    }
    handleClick(image) {
    const {images} = this.state;
    this.setState({loading: true});
    mosh(
        {
            read: image,
            mode: 'schifty',
            headers: {
                [`Sec-Fetch-Mode`]: `no-cors`
            }
        },
        (err, moshedImg) => {
            this.setState({loading: false});
            if (err) return console.error(err)
            images.push({value: `data:image/png;base64,${moshedImg.toString('base64')}`, base64: moshedImg.toString('base64')});
            this.setState({images});
        }
    )
    }
    render() {
        const {images,loading} = this.state;
        return (
        <Container fluid className={'p-5 images-outer-container'}>
            {!loading &&
            <Row>
                {images && images.map(image => {
                    const {value, base64} = image;
                    return (
                        <Col sm={6} className={'mb-2'}>
                            <Image onClick={() => this.handleClick(value)} src={value} fluid/>
                        </Col>
                    )
                })}
            </Row>
            }
            {loading &&
            <Modal
                show={loading}
                dialogClassName="modal-90w"
                aria-labelledby="loading"
            >
                <Modal.Body>
                    <p>
                       Deconstructing.... stand by.
                    </p>
                </Modal.Body>
            </Modal>
            }
        </Container>
        );
    }
}

export default Gallery;
