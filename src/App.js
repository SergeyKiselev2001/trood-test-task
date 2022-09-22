import { useState } from 'react';
import FirstTask from './components/FirstTask/FirstTask';
import SecondTask from './components/SecondTask/SecondTask';
import './styles/App.css';

const App = () => {
  const [toggleTask, setToggleTask] = useState(false)
  const toggleTaskHandle = () => setToggleTask(!toggleTask)

  return (
    <div className="App">
      {
        toggleTask ? <FirstTask /> : <SecondTask />
      }
      <button className='toggleBtn' onClick={toggleTaskHandle}>
        { toggleTask ? 'Show second task' : 'Show first task' }
      </button>
    </div>
  );
}

export default App;
