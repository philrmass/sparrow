import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import styles from './Node.module.css';

export default function Node() {
  const id = 'me';

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'Node',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [id]);

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <div ref={drag} className={styles.node}>
      {`N [${isDragging ? 'X' : '_'}]`}
    </div>
  );
}
/*
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);
*/
