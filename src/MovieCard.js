import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard=({per,handleDlete})=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={per.image} />
      <Card.Body>
        <Card.Title style={{color:'black'}}>{per.MovieName}</Card.Title>
        <Card.Text style={{color:'black'}} >
          {per.Description}
        </Card.Text>
        <StarRatingComponent
          name="star" /* name of the radio input, it is required */
          value={per.rating} /* number of selected icon (`0` - none, `1` - first) */
          editing={false}
          
        />
        <Button variant ="primary"onClick={()=>handleDlete(per)}>delete</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;