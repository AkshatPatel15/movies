import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function MoviesCard(props) {
  console.log(props.data);
  const history = useNavigate();

  const handleClick = () => {
    // Code to run when the component is clicked
    // Pass data to the new page using the `state` property of the location object
    history("/about", { data: props.data });
  };
  return (
    <>
      <Card
        className="m-3 p-0"
        style={{ width: "18rem" }}
        onClick={handleClick}
      >
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.description}</Card.Text>
          {/* <Link to={{ pathname: "/new-page", state: { data: props.data } }}>
            <Button variant="primary">Go somewhere</Button>
          </Link> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default MoviesCard;
