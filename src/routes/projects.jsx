import { Outlet } from "react-router-dom";
import Projects2 from "./projects2";


/*projects content*/
export default function Projects() {
  return (
    <div>
      <main>
        <h2>Projects</h2>
        
        <img src={require('../assets/images/synthy.jpg')} alt="Synthesizer" />
        <img src={require('../assets/images/parasite.jpg')} alt="Parasite posters" />
        <img src={require('../assets/images/mmh.jpg')} alt="Men's Mental Health" />
        <div className="Project2">
          <Outlet />
          <Projects2 />
        </div>       
      </main>
    </div>
  );
}