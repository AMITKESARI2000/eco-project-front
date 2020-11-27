var y1 = 80;
var x = 200;
var y2 = 60;
var xspace = 500;

var pos1 = [
  {
    style: {
      position: 'absolute',
      left: x + 0 * xspace + 'px',
      top: y2 + '%',
    },
  },
  {
    style: {
      position: 'absolute',
      left: x + 1 * xspace + 'px',
      top: y1 + '%',
    },
  },
  {
    style: {
      position: 'absolute',
      left: x + 2 * xspace + 'px',
      top: y1 + '%',
    },
  },
  {
    style: {
      position: 'absolute',
      left: x + 3 * xspace + 'px',
      top: y2 + '%',
    },
  },
];
y1 = 50;
y2 = 40;
x = 400;
xspace = 400;
var pos2 = [
  {
    style: {
      position: 'absolute',
      left: x + 0 * xspace + 'px',
      top: y2 + '%',
    },
  },
  {
    style: {
      position: 'absolute',
      left: x + 1 * xspace + 'px',
      top: y1 + '%',
    },
  },
  {
    style: {
      position: 'absolute',
      left: x + 2 * xspace + 'px',
      top: y1 + '%',
    },
  },
  {
    style: {
      position: 'absolute',
      left: x + 3 * xspace + 'px',
      top: y2 + '%',
    },
  },
];

for (let i = 0; i < pos2.length; i++)
  pos1.push (pos2[i]);

const pos = pos1;
export default pos;
