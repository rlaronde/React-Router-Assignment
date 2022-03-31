/*imports */
import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
import App from "./App";
import Projects from "./routes/projects";
import Projects2 from "./routes/projects2";
import About from "./routes/about";
import Contact from "./routes/contact";
import Home from "./routes/home";

/*content*/
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />  
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} >
        <Route path=":projects2" element={<Projects2 />} />
        </Route>
      <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
 </BrowserRouter>,

  rootElement
);