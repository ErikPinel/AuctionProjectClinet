import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.CardImg}  alt="none"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="sucsses">palce bid</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;