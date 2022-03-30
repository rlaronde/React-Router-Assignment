import {Outlet, Link} from "react-router-dom";
import Heada from "./components/Heada"
import Foota from "./components/foota"
import "./assets/css/styles.css";
export default function App() {
  return (
    <div>
      <Heada />
      <main>
      </main>
      <Outlet />
      <Foota />
    </div>
  );
}