function camelToKebabCase(camel) {
  return camel.replace(/([A-Z])/g, "-$1").toLowerCase();
}

function styledConsole(text, styles) {
  const stylesObj = Object.entries(styles)
    .map(([key, value]) => `${camelToKebabCase(key)}: ${value}`)
    .join("; ");

  console.log(`%c${text}`, stylesObj);
}

module.exports = styledConsole;
