export const rgbToHex = (rgb: string) => {
  const colorArray = rgb.split(" ");

  const r = parseInt(colorArray[0], 10).toString(16).padStart(2, "0");
  const g = parseInt(colorArray[1], 10).toString(16).padStart(2, "0");
  const b = parseInt(colorArray[2], 10).toString(16).padStart(2, "0");

  return `${r}${g}${b}`;
};