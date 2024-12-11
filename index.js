function camelToKebabCase(camel) {
  return camel.replace(/([A-Z])/g, "-$1").toLowerCase();
}

function styledConsole(text, styles = {}) {
  const defaultStyles = {
    color: "blue",
    fontSize: "16px",
    background: "#fff",
    padding: "50px",
  };

  const combinedStyles = { ...defaultStyles, ...styles };

  try {
    const stylesObj = Object.entries(combinedStyles)
      .map(([key, value]) => `${camelToKebabCase(key)}: ${value}`)
      .join("; ");

    console.log(`%c${text}`, stylesObj);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export default styledConsole;
