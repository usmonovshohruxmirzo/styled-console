function styledConsole(text, styles) {
  const stylesObj = Object.entries(styles)
    .map(([key, value]) => `${camelToKebabCase(key)}: ${value}`)
    .join("; ");

  console.log(`%c${text}`, stylesObj);
}
