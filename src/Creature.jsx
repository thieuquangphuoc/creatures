function Creature({ creature, onWake }) {
  const { id, isAwake, top, left, sleepImageUrl, awakeImageUrl } = creature;
  return (
    <img
      src={isAwake ? awakeImageUrl : sleepImageUrl}
      onClick={() => onWake(id)}
      style={{ position: 'absolute', top: `${top}%`, left: `${left}%`, width: '100px', cursor: 'pointer' }}
      alt={isAwake ? 'awake creature' : 'sleeping creature'}
    />
  );
}
export default Creature;