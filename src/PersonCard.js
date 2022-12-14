import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PersonCard=({per,handleDlete})=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={per.image} />
      <Card.Body>
        <Card.Title style={{color:'black'}}>{per.fullName}</Card.Title>
        <Card.Text style={{color:'black'}} >
          {per.age}
        </Card.Text>
        <Button variant ="primary"onClick={()=>handleDlete(per)}>delete</Button>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;