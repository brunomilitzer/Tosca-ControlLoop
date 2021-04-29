import {Card} from "react-bootstrap";

const ToscaCard = (props) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>Monitoring App</Card.Title>
                <Card.Text><h1>Hello World</h1></Card.Text>
            </Card.Body>
            <Card.Footer>Test</Card.Footer>
        </Card>
    );
}

export default ToscaCard;
