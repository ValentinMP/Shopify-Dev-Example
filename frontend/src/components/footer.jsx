import { Container, Row, Col} from "react-bootstrap";

const Footer = () => {  
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p> Picky Pet Shop &copy; {currentYear}</p>
                       1</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;