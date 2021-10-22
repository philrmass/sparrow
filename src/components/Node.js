import { useDrag } from 'react-dnd';

import styles from './Node.module.css';

export default function Node() {
  const id = 'me';

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Node',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [id]);

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
