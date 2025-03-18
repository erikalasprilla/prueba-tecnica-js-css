export default (json) => {
    // Do your thing here!
    const calMedia = (datos) => {
    const edades = datos.map(({ edad }) => edad);
    const sum = edades.reduce((acc, edad) => acc + edad, 0);
    return (sum / edades.length).toFixed(2);
  };

  return `${calMedia(json)}`;

  };
  