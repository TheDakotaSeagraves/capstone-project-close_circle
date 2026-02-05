import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Close Circle
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/lists">Lists</Link>
          </li>

          {/* Show Logout if user is logged in */}
          {localStorage.getItem("learning_user") ? (
            <li>
              <Link
                to=""
                onClick={() => {
                  localStorage.removeItem("learning_user");
                  navigate("/login", { replace: true });
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </nav>
  );
};
