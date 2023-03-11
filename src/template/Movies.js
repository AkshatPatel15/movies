import { Button, Card, Container, Pagination, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data.js";
import MoviesCard from "./MovieCard";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Movies(props) {
  const itemsPerPage = 12;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = data.slice(startIndex, endIndex);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center m-3">
          {slicedData.map((item) => (
            <MoviesCard id={data.imdbid} data={item} />
          ))}
        </Row>
      </Container>

      {/* pagination */}
      <Pagination className="justify-content-md-center">
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() =>
            handlePageChange(currentPage === 1 ? 1 : currentPage - 1)
          }
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item
            key={i}
            active={i + 1 === currentPage}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            handlePageChange(
              currentPage === totalPages ? totalPages : currentPage + 1
            )
          }
        />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </>
  );
}

export default Movies;
