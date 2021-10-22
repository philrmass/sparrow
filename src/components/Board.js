import { useDrop } from 'react-dnd';
import cln from 'classnames';

import styles from './Board.module.css';

export default function Board() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'Node',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      console.log('DROP', delta);
    },
  }), []);

  const boardClasses = cln({
    [styles.board]: true,
    [styles.drop]: isOver,
  });

  return (
    <div ref={drop} className={boardClasses}>
    </div>
  );
}
