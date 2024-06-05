import { Link, useNavigate } from "react-router-dom";
import { fakeAuthProvider } from "../auth";
import { Dispatch, SetStateAction } from "react";
import { Auth } from "../types/Auth";

function Navbar({
  auth,
  setAuth,
}: {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
}) {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="max-w-screen-lg text-right mx-auto flex justify-between py-4 px-4">
        <Link to="/" className="items-center text-2xl">
          📝 Todo
        </Link>
        <div className="flex gap-5 items-center justify-end">
          {auth.isAuthenticated && <Link to="/todos">Go to App</Link>}
          <Link to="/about?q=wow">About</Link>
          {auth.isAuthenticated ? (
            <>
              <span>Hi! {auth.username}</span>
              <button
                className="rounded-full bg-blue-500 text-white px-4 py-2"
                onClick={() =>
                  fakeAuthProvider.signout().then(() => {
                    setAuth({
                      username: fakeAuthProvider.username,
                      isAuthenticated: fakeAuthProvider.isAuthenticated,
                    });
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
                fakeAuthProvider.signin(username).then(() => {
                  setAuth({
                    username: fakeAuthProvider.username,
                    isAuthenticated: fakeAuthProvider.isAuthenticated,
                  });
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
