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
import NotFound from "./components/NotFound";
import AuthProvider from "./contexts/auth";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader({ request }) {
      const url = new URL(request.url);
      const searchTerm = url.searchParams.get("q");
      // Our root route always provides the user, if logged in
      return { user: fakeAuthProvider.username, searchTerm };
    },
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "todos",
        loader: protectedLoader,
        Component: Todos,
      },
      {
        path: "about",
        Component: About,
      },
    ],
    ErrorBoundary: NotFound,
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

function App() {
  return (
    <AuthProvider>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </AuthProvider>
  );
}

export default App;
