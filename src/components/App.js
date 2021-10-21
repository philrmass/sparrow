import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { getWeather } from '../redux/weatherActions';

import Board from './Board';
import Node from './Node';

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
      <DndProvider backend={HTML5Backend}>
        <Node />
        <Board />
      </DndProvider>
    </div>
  );
}
