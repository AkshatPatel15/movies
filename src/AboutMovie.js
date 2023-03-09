import { useLocation } from "react-router-dom";

function AboutMovie() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = JSON.parse(decodeURIComponent(queryParams.get("data")));

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>hello from about</p>
    </div>
  );
}

export default AboutMovie;
