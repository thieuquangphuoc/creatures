import { useState } from 'react';
import Creature from './Creature';

function CreatureField() {
  const [creatures, setCreatures] = useState([
    { id: 1, isAwake: false, top: 10, left: 10, sleepImageUrl: '/images/first_sleep.png',  awakeImageUrl: '/images/first_awake.png' },
    { id: 2, isAwake: false, top: 30, left: 50, sleepImageUrl: '/images/second_sleep.png', awakeImageUrl: '/images/second_awake.png' },
    { id: 3, isAwake: false, top: 55, left: 20, sleepImageUrl: '/images/third_sleep.png',  awakeImageUrl: '/images/third_awake.png' },
    { id: 4, isAwake: false, top: 20, left: 70, sleepImageUrl: '/images/fourth_sleep.png', awakeImageUrl: '/images/fourth_awake.png' },
    { id: 5, isAwake: false, top: 60, left: 60, sleepImageUrl: '/images/fifth_sleep.png',  awakeImageUrl: '/images/fifth_awake.png' },
  ]);

  const handleWake = (id) => {
    setCreatures(creatures.map(c =>
      c.id === id
        ? { ...c, isAwake: !c.isAwake, top: Math.random() * 80, left: Math.random() * 80 }
        : c
    ));
  };

  const awakeCount = creatures.filter(c => c.isAwake).length;       
  const allAwake = awakeCount === creatures.length;                   

  return (
    <div style={{ position: 'relative', height: '500px', background: allAwake ? '#fff3cd' : '#e8e8f0' }}>
      <p>{awakeCount} of {creatures.length} creatures awake</p>
      {creatures.map(c => (
        <Creature key={c.id} creature={c} onWake={handleWake} />
      ))}
    </div>
  );
}
export default CreatureField;