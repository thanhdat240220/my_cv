export const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 4; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  color += "00";
  return color;
};
