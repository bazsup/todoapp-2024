import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const navigate = useNavigate();
  const { username, isAuthenticated, signin, signout } = useAuth();
  return (
    <nav>
      <div className="max-w-screen-lg text-right mx-auto flex justify-between py-4 px-4">
        <Link to="/" className="items-center text-2xl">
          📝 Todo
        </Link>
        <div className="flex gap-5 items-center justify-end">
          {isAuthenticated && <Link to="/todos">Go to App</Link>}
          <Link to="/about?q=wow">About</Link>
          {isAuthenticated ? (
            <>
              <span>Hi! {username}</span>
              <button
                className="rounded-full bg-blue-500 text-white px-4 py-2"
                onClick={() =>
                  signout().then(() => {
                    alert("logout success");
                    navigate("/");
                  })
                }
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="rounded-full bg-blue-500 text-white px-4 py-2"
              onClick={() => {
                const username = import.meta.env.VITE_USERNAME;
                signin(username).then(() => {
                  alert("login success");
                  navigate("/todos");
                });
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
