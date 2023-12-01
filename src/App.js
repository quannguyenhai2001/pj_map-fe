import React from "react";
import { RenderRoutes } from "routes/RouterConfigs";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  );
}

export default App;