import { Outlet } from "react-router-dom";


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
        </div>
                
      </main>
    
  
    </div>
  );
}