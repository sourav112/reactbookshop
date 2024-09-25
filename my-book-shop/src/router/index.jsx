
import {createBrowserRouter} from "react-router-dom";
import Homepage from "../pages/Homepage";

import { Routes } from "../routes";
import Book_List_Show from "../components/Product/Book_List_Show";
import Book_Details_Page from "../pages/Book_Details_Page";
import ErrorPage from "../Extra/ErrorPage";

const router = createBrowserRouter([
    {
      path: `${Routes.Home}`,
      element: <Homepage/>,
    },
    {
      path: "*",
      element: <ErrorPage/>,
    },
    {
        path: `${Routes.Books}`,
        element: <Book_List_Show/>,
      },
      {
        path: `${Routes.Single_Book.STATIC}`,
        element: <Book_Details_Page/>,
      },
  ]);

  export default router;