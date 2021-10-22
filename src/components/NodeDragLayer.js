import { useDragLayer } from 'react-dnd';

import styles from './NodeDragLayer.module.css';

export default function NodeDragLayer() {
  const { isDragging, ini, iniS, cli, cliS, diff } = useDragLayer(
    monitor => ({
      isDragging: monitor.isDragging(),
      ini: monitor.getInitialClientOffset(),
      iniS: monitor.getInitialSourceClientOffset(),
      cli: monitor.getClientOffset(),
      cliS: monitor.getSourceClientOffset(),
      diff: monitor.getDifferenceFromInitialOffset(),
      //item: monitor.getItem(),
    }),
  );

  const buildBox = (name, coords, color) => {
    const style = {
      top: `${coords?.y}px`,
      left: `${coords?.x}px`,
      background: color,
    };

    return (
      <div className={styles.box} style={style}>
        {name}
      </div>
    );
  };

  const buildContent = () => {
    if (!isDragging) {
      return <div className={styles.text}>DRAG-LAYER</div>;
    }
    return (
      <>
        {buildBox('ini', ini, '#f00')}
        {buildBox('iniS', iniS, '#f80')}
        {buildBox('cli', cli, '#00f')}
        {buildBox('cliS', cliS, '#80f')}
        {/*
        */}
        <div className={styles.text}>
          <div>{`ini (${ini?.x} ${ini?.y})`}</div>
          <div>{`iniS (${iniS?.x} ${iniS?.y})`}</div>
          <div>{`cli (${cli?.x} ${cli?.y})`}</div>
          <div>{`cliS (${cliS?.x} ${cliS?.y})`}</div>
          <div>{`diff (${diff?.x} ${diff?.y})`}</div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.dragLayer}>
      {buildContent()}
    </div>
  );
}
