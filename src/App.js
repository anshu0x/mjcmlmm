import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./screens/Main.js";
import Contact from "./screens/Contact.js";
import About from "./screens/About.js";
import Whitepaper from "./screens/Whitepaper.js";
import Team from "./screens/Team.js";
import { useEffect } from "react";
import Aos from "aos";
import { Toaster } from "react-hot-toast";
import Layout_Dashboard from "./screens/Layout_Dashboard.js";
import {MetaMaskContextProvider} from './hooks/useMetamask.jsx'
const Root = () => {
 
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <MetaMaskContextProvider>
      <Toaster />
      <Outlet />
    </MetaMaskContextProvider>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
      <Route path="/dashboard" element={<Layout_Dashboard />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
