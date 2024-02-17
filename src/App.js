import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HeaderComponent from './header/HeaderComponent';
import EmployeeFormComponent from './employee/EmployeeFormComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <EmployeeFormComponent/>
    </div>
  );
}

export default App;
