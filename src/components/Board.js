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
      BOARD
    </div>
  );
}

/*
import { useCallback, useState } from 'react';
import { ItemTypes } from './ItemTypes';
import { DraggableBox } from './DraggableBox';
import { snapToGrid as doSnapToGrid } from './snapToGrid';
import update from 'immutability-helper';
const styles = {
    width: 300,
    height: 300,
    border: '1px solid black',
    position: 'relative',
};
export const Container = ({ snapToGrid }) => {
    const [boxes, setBoxes] = useState({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
    });
    const moveBox = useCallback((id, left, top) => {
        setBoxes(update(boxes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [boxes]);


    return (<div ref={drop} style={styles}>
			{Object.keys(boxes).map((key) => (<DraggableBox key={key} id={key} {...boxes[key]}/>))}
		</div>);
};
*/

/*
export function snapToGrid(x, y) {
  const snappedX = Math.round(x / 32) * 32
  const snappedY = Math.round(y / 32) * 32
  return [snappedX, snappedY]
}
*/
