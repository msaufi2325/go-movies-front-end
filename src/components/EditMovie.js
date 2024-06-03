import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Input from "./form/Input";

const EditMovie = () => {
  const navigate = useNavigate();
  const { jwtToken } = useOutletContext();

  const [error, setError] = useState(null);
  const [errors, setErrors] = useState([]);

  const hasError = (key) => {
    return errors.indexOf(key) !== -1;
  };
  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    release_date: "",
    mpaa_rating: "",
    description: "",
  });

  // get id from the URL
  let { id } = useParams();

  useEffect(() => {
    if (jwtToken === "") {
      navigate("/login");
      return;
    }
  }, [jwtToken, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  return (
    <div className="text-center">
      <h2>add/ Edit Movie</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={movie.id} id="id"></input>

        <Input
          title={"Title"}
          className={"form-control"}
          type={"text"}
          name={"title"}
          value={movie.title}
          onChange={handleChange("title")}
          errorDiv={hasError("title") ? "text-danger" : "d-none"}
          errorMsg={"Please enter a title"}
        />
      </form>
    </div>
  );
};

export default EditMovie;
