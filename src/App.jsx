import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login1 from "./Components/LoginCreate/Login1/Login1";
import Login2 from "./Components/LoginCreate/Login2/Login2";
import Create from "./Components/LoginCreate/Create1/Create";
import Create1 from "./Components/LoginCreate/Create2/Create1";
import Create2 from "./Components/LoginCreate/Create3/Create2";
import Create3 from "./Components/LoginCreate/Create4/Create3";
import Home from "./Components/Dashboard/Home";
import HomeI from "./Components/Dashboard2(image)/HomeI";
import HomeII from "./Components/Dashboard2(image) copy/HomeII";
import HomeIII from "./Components/Dashboard3(imageediting(/HomeIII";
import Share from "./Components/Share/Share";
import HomeIIIII from "./Components/ChatDash/HomeIIIII";
import HomeIIIIII from "./Components/ChatDash copy/HomeIIIII";
import HomeLib from "./Components/Library/HomeLib";
import Test from "./Components/Library/Test";
import Trail from "./Components/Trail";
import { useState, useEffect } from "react";
import Authapi from "./Authapi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/image",
    element: <HomeI />,
  },
  {
    path: "/image1",
    element: <HomeII />,
  },
  {
    path: "/edit",
    element: <HomeIII />,
  },
  {
    path: "/chat",
    element: <HomeIIIII />,
  },
  {
    path: "/chatimg",
    element: <HomeIIIIII />,
  },
  {
    path: "/share",
    element: <Share />,
  },
  {
    path: "/library",
    element: <HomeLib />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/login",
    element: <Login1 />,
  },
  {
    path: "/login1",
    element: <Login2 />,
  },
  {
    path: "/create1",
    element: <Create />,
  },
  {
    path: "/create2",
    element: <Create1 />,
  },
  {
    path: "/create3",
    element: <Create2 />,
  },
  {
    path: "/create4",
    element: <Create3 />,
  },
  {
    path: "/Trail",
    element: <Trail />,
  },
]);

function App() {
  const [auth, setAuth] = useState(false);
  const [chat, setChat] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [questions, setQuestions] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    // Check if auth state is stored in local storage
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth && storedAuth.isAuthenticated) {
      setAuth(true);
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever auth state changes
    localStorage.setItem("auth", JSON.stringify({ isAuthenticated: auth }));
  }, [auth]);

  const AuthContextValue = {
    auth,
    setAuth,
    chat,
    setChat,
    inputValue,
    setInputValue,
    questions,
    setQuestions,
    isGenerating,
    setIsGenerating,
    userInput,
    setUserInput,
    response,
    setResponse,
  };

  return (
    <>
      <Authapi.Provider value={AuthContextValue}>
        <RouterProvider router={router}>
          <Analytics />
        </RouterProvider>
      </Authapi.Provider>
    </>
  );
}

export default App;
