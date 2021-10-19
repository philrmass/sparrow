import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getWeather } from '../redux/weatherActions';

export default function App() {
  const dis = useDispatch();
  const weather = useSelector(state => state.weather.forecast);

  return (
    <div className={styles.app}>
      <button
        className={styles.button}
        onClick={() => dis(getWeather())}
      >
        Get Weather
      </button>
      <div>{`Weather: ${weather}`}</div>
    </div>
  );
}
