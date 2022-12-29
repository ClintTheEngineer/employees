import './App.css';
import EnterEmployee from './components/EnterEmployee';
import DisplayEmployees from './components/DisplayEmployees';

function App() {
  return (
   <>
    <div className='container'>
    <EnterEmployee />
    <DisplayEmployees />
    </div>
   </>
  );
}

export default App;
