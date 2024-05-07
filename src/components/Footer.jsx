
import { Container, Row, Col } from 'react-bootstrap';
import x from '../assets/images/x.png';
import youtube from '../assets/images/youtube.png';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';

export const Footer = () => {
    return (
        <footer style={{ 
            background: 'linear-gradient(to right, rgb(95 255 120), rgb(254 123 244))',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px 0', 
            marginTop: '20px', 
            height: '100px' 
        }}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Row className="justify-content-center align-items-center">
                            <Col xs={3}>
                                <img src={x} alt="" style={{ maxWidth: '30px', marginBottom: '10px' }} />
                            </Col>
                            <Col xs={3}>
                                <img src={youtube} alt="" style={{ maxWidth: '30px', marginBottom: '10px' }} />
                            </Col>
                            <Col xs={3}>
                                <img src={instagram} alt="" style={{ maxWidth: '30px', marginBottom: '10px' }} />
                            </Col>
                            <Col xs={3}>
                                <img src={facebook} alt="" style={{ maxWidth: '30px', marginBottom: '10px' }} />
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} style={{ textAlign: 'center' }}>
                                <p style={{ color: '#fff', marginBottom: '20px' }}>© 2024 Web Viajeros COL. Todos los derechos reservados.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
