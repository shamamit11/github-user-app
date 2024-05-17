import { createBrowserRouter } from "react-router-dom";
import { URL } from "./utils/constants";
import { HomePage } from "./pages/HomePage";
import { UsersPage } from "./pages/UsersPage";

export const router = createBrowserRouter([
    {
      path: URL.HOME,
      element: <HomePage />
    },
    {
      path: URL.USERS,
      element: <UsersPage/>
    },
  ]);