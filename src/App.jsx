import Routes from "./Routes";
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <RouterProvider router={Routes} />
    </Suspense>
  );
};

export default App;
