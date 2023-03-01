 import './App.css';
import InputField from './components/InputField';
import Login from './components/Login';
import ReviewPage from './components/ReviewPage';
import './Style.css'
function App() {
  return (
    <div className="App">
     <Login/>
      <h1 id='para'>Reviews Page</h1>
  <ReviewPage/>
    <InputField/>
     
    </div>
  );
}

export default App;
