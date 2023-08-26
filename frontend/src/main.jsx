import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { PostProvider } from "./contexts/PostContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <PostProvider>
          <App />
        </PostProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
