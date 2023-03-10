import { useLocation } from "react-router-dom";

function AboutMovie() {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const data = JSON.parse(decodeURIComponent(queryParams.get("data")));

  const location = useLocation();
  let data = null;

  if (location.state) {
    data = location.state.data;
  }

  console.log(data);

  return (
    <div>
      {/* <h1>{data.title}</h1>
      <p>{data.description}</p> */}
      <div>
        <h1>{data.title}</h1>
        <img src={data.image} alt={data.title} />
        <p>{data.description}</p>
      </div>
      <p>hello from about</p>
    </div>
  );
}

export default AboutMovie;
