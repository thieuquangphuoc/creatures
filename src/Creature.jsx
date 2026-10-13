import { useState } from 'react';

function Creature({ sleepImageUrl, awakeImageUrl }) {
  const [isAwake, setIsAwake] = useState(false);          
  const [pos, setPos] = useState({ top: 0, left: 0 });    

  const handleClick = () => {                              
    setIsAwake(prev => !prev);                            
    if (!isAwake) {                                        
      setPos({
        top: Math.random() * 80,                          
        left: Math.random() * 80,
      });
    }
  };

  return (
    <img
      src={isAwake ? awakeImageUrl : sleepImageUrl}       
      onClick={handleClick}
      style={{ position: 'absolute', top: `${pos.top}%`, left: `${pos.left}%`, width: '100px', cursor: 'pointer' }}
      alt={isAwake ? 'awake creature' : 'sleeping creature'}
    />
  );
}

export default Creature;