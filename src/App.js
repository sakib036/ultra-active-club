import logo from './logo.svg';
import './App.css';
import Card from './component/Card/Card';
import ExerciseDetail from './component/ExerciseDetail/ExerciseDetail';

function App() {
  return (
    <div className="container">
      <div className='card-container'>
        <Card></Card>
      </div>
      <div className='exercise-detail'>
        <ExerciseDetail></ExerciseDetail>
      </div>
     
    </div>
  );
}

export default App;
