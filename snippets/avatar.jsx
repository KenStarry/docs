export const Author = ({ name }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <img src="https://github.com/KenStarry.png" style={{ borderRadius: '50%', width: 40 }} />
    <span>Created by <strong>{name}</strong></span>
  </div>
);