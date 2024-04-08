import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "./UserReducer";
function Home() {
  const users = useSelector((state) => state.users);
  const dispath = useDispatch();
  function handleDelete(id) {
    dispath(deleteUser({ id: id }));
  }
  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginLeft: "200px" }}
    >
      <h2>Crub App</h2>
      <Link to={"/create"}>
        <button className="btn btn-success my-3">Create +</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`}>
                  <button className="btn btn-sm btn-primary">Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
