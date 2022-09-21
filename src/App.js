import { useSelector } from 'react-redux';
import ProgressBar from './components/FirstTask/ProgressBar';
import Inputs from './components/FirstTask/Inputs';
import ProgressBarInfo from './components/FirstTask/ProgressBarInfo';
import classes from './styles/first.module.css';
import './styles/App.css';

const App = () => {

  const params = useSelector(store => store.paramsReducer)

  const items = [
    {name: 'Sold', color: '#9e6719', value: 265},
    {name: 'Got free', color: '#3FC1C9', value: 294},
    {name: 'Burned', color: '#F5F5F5', value: 45},
    {name: 'Free float', color: '#FC5185', value: 80},
  ]

  return (
    <div className="App">
      <div className={classes.content}>
        <div className={classes.center}>  
          <ProgressBar items={items} height={params.height} width={params.width} />
          <ProgressBarInfo items={items} />
        </div>
        <Inputs />
      </div>
    </div>
  );
}

export default App;
