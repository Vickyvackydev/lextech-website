function getRandomColors() {
  const colors = ["#CDEED3", "#79747E", "#F2DFA0", "#D5D5D5", "#DDEBDF"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export { getRandomColors };
