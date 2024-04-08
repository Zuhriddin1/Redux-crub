import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Uptade() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispath = useDispatch();
  const navigate = useNavigate();
  function handleUpdate(e) {
    e.preventDefault();
    dispath(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "200px" }}
    >
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Uptade User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Uptade</button>
        </form>
      </div>
    </div>
  );
}

export default Uptade;
