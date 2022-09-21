import { useState } from 'react';
import FirstTask from './components/FirstTask/FirstTask';
import './styles/App.css';

const App = () => {
  const [toggleTask, setToggleTask] = useState(true)
  const toggleTaskHandle = () => setToggleTask(!toggleTask)

  return (
    <div className="App">
      {
        toggleTask ? <FirstTask /> : null
      }
      <button className='toggleBtn' onClick={toggleTaskHandle}>
        { toggleTask ? 'Show second task' : 'Show first task' }
      </button>
    </div>
  );
}

export default App;
