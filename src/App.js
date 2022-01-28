import "./App.css";
import User from "./components/User" 
import Skills from './components/Skills'
import Profil from './components/Profil' 
import FormationExperiences from "./components/FormationExperiences"
import DarkMode from "./components/DarkMode"

function App() {

    return (
      <div className="App">
        <div className="grid__container">
          <div className="sidebar">
            <div className="actions">
            <DarkMode/>
            <button>pdf</button>
            </div>
            <User />
            <Skills />
          </div>
          <div className="main">
            <Profil />
            <FormationExperiences />
          </div>
        </div>

        {/* colonne de droite */}
        {/* profil - profil */}
        {/* formations -formations  */}
        {/* exp - experiences */}
        {/* light/dark mode */}
        {/* generation pdf  */}
      </div>
    );
  }



export default App;