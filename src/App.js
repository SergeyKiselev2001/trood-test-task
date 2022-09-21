import './styles/App.css';
import ProgressBar from './components/ProgressBar';
import classes from './styles/style.module.css'
import Inputs from './components/Inputs';
import { useSelector } from 'react-redux';

const App = () => {

  const params = useSelector(store => store.paramsReducer)


  const items = [
    {name: 'Sold', color: '#BD1FBE', value: 465},
    {name: 'Got free', color: '#FC64FF', value: 94},
    {name: 'Burned', color: '#1AE243', value: 45},
    {name: 'Free float', color: '#fff', value: 80},
  ]

  return (
    <div className="App">
      <div className={classes.content}>
        <ProgressBar items={items} height={params.height} width={params.width} />
        <Inputs />
      </div>
    </div>
  );
}

export default App;
