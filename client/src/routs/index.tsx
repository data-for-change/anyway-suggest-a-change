import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const Router = () => (
  <Routes>
    {
      routes.map(({ path, Element }) => {
        return (
          <Route
            key={path}
            path={path}
            element={Element}
          />
        );
      })}
  </Routes>
);

export default Router;