import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import styles from './App.module.css';

import Board from './Board';
import Node from './Node';
import NodeDragLayer from './NodeDragLayer';

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Node />
      <div className={styles.viewport}>
        <NodeDragLayer />
        <Board />
      </div>
    </DndProvider>
  );
}
