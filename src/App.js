import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoComponent from './Components/LogoComponent/LogoComponent';
import DropdownComponent from './Components/DropdownComponent/DropdownComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <LogoComponent />
      <DropdownComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
