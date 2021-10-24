import { useDragLayer } from 'react-dnd';

import styles from './NodeDragLayer.module.css';

export default function NodeDragLayer() {
  const { isDragging, coords } = useDragLayer(
    monitor => ({
      isDragging: monitor.isDragging(),
      coords: monitor.getSourceClientOffset(),
      //item: monitor.getItem(),
    }),
  );

  const buildBox = (name, coords) => {
    const style = {
      top: `${coords?.y}px`,
      left: `${coords?.x}px`,
    };

    return (
      <div className={styles.preview} style={style}>
        {name}
      </div>
    );
  };

  if (!isDragging) {
    return null;
  }

  return (
    <>
      {buildBox('N', coords)}
    </>
  );
}
