import './styles/App.css';
import ProgressBar from './components/ProgressBar';
import classes from './styles/style.module.css'

const App = () => {

  const items = [
    {name: 'Sold', color: '#BD1FBE', value: 0.3},
    {name: 'Got free', color: '#FC64FF', value: 94},
    {name: 'Burned', color: '#1AE243', value: 45},
    {name: 'Free float', color: '#fff', value: 80},
  ]

  return (
    <div className="App">
      <div className={classes.content}>
        <ProgressBar items={items} height={30} width={800} />
      </div>
    </div>
  );
}

export default App;
