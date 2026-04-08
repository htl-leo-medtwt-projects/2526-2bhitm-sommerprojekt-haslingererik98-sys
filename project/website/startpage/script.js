document.addEventListener('DOMContentLoaded', () => {
  const scene = document.getElementById('scene');
  const stars = [
    [8,8],[15,5],[25,12],[35,4],[50,7],[62,3],[72,9],[85,6],
    [5,18],[20,22],[30,16],[45,20],[58,15],[70,18],[80,13]
  ];

  stars.forEach(([x, y]) => {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2 + 1;
    s.style.cssText = `left:${x}%;top:${y}%;width:${size}px;height:${size}px;opacity:${0.4 + Math.random() * 0.5}`;
    scene.appendChild(s);
  });
});
