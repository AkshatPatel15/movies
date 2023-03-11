import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function MoviesCard(props) {
  console.log(props.data);
  const history = useNavigate();

  const handleClick = (id) => {
    history(`/about${id}`);
  };
  // function handleClick(id) {
  //   const navigate = useNavigate();
  //   navigate(`/about/${id}`);
  // }
  return (
    <>
      <Card
        id={props.data.imdbid}
        className="m-3 p-0"
        style={{ width: "18rem" }}
        onClick={handleClick(props.data.imdbid)}
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
