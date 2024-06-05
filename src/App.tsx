import type { LoaderFunctionArgs } from "react-router-dom";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import About from "./components/About";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      // Our root route always provides the user, if logged in
      return { user: fakeAuthProvider.username };
    },
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "protected",
        loader: protectedLoader,
        Component: ProtectedPage,
      },
      {
        path: "todos",
        Component: Todos,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect("/");
    },
  },
]);

function Layout() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-lg mx-auto pt-10 px-4">
        <Outlet />
      </main>
    </>
  );
}

// TODO: protected route
function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!fakeAuthProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/?" + params.toString());
  }
  return null;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
