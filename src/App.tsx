import { Routes, Route, useRoutes } from "react-router-dom";
import IndexPage from "./pages/index";
import DetailPage from "./pages/detail";
import "./App.less";
function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);
  return element;
}

export default App;
