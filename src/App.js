import logo from './logo.svg';
import './App.css';
import Card from './component/Card/Card';

function App() {
  return (
    <div className="container">
      <div className='card-container'>
        <Card></Card>
      </div>
      <div className='exercise-detail'>
        <h1>Exercise Details</h1>
      </div>
     
    </div>
  );
}

export default App;
