import { useRef, useState } from "react";
import { addUser } from "./UserReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispath = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  function handleSubmit(e) {
    e.preventDefault();
    dispath(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      onSubmit={handleSubmit}
      style={{ marginTop: "200px" }}
    >
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
