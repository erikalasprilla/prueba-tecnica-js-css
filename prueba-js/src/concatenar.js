export default (json) => {
  // Do your thing here!
  const capitalize = (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return json
    .map(
      ({ nombre, apellido, apellido2 }) =>
        `<p>${capitalize(nombre)} ${capitalize(apellido)} ${capitalize(apellido2)}</p>`
    )
    .join("\n");
};