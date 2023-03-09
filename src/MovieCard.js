import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

function MoviesCard(props) {
  //   const handleClick = (e) => {};
  return (
    <Card
      //   onClick={handleClick(props.data.handleClick)}
      className="m-3 p-0"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
        {/* <Link to="/about">here</Link> */}
      </Card.Body>
    </Card>
  );
}

export default MoviesCard;
