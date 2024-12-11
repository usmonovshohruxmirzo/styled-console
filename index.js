function camelToKebabCase(camel) {
  return camel.replace(/([A-Z])/g, "-$1").toLowerCase();
}

function themes(type) {
  const colors = {
    primary: 210,
    secondary: 220,
    success: 120,
    info: 200,
    warning: 40,
    help: 280,
    danger: 0,
  };

  switch (type) {
    case "primary":
      return `hsl(${colors.primary}, 85%, calc(50 * 1%))`;
    case "danger":
      return `hsl(${colors.danger}, 85%, calc(50 * 1%))`;
    case "help":
      return `hsl(${colors.help}, 85%, calc(50 * 1%))`;
    case "info":
      return `hsl(${colors.info}, 85%, calc(50 * 1%))`;
    case "secondary":
      return `hsl(${colors.secondary}, 85%, calc(50 * 1%))`;
    case "success":
      return `hsl(${colors.success}, 85%, calc(50 * 1%))`;
    case "warning":
      return `hsl(${colors.warning}, 85%, calc(50 * 1%))`;
    default:
      return type;
  }
}

function styledConsole(text, styles = {}, theme = "primary", delay = 0) {
  const defaultStyles = {
    color: "#fff",
    fontSize: "16px",
    background: themes(theme),
    padding: "10px",
  };

  const combinedStyles = { ...defaultStyles, ...styles };

  try {
    const stylesObj = Object.entries(combinedStyles)
      .map(([key, value]) => `${camelToKebabCase(key)}: ${value}`)
      .join("; ");

    setTimeout(() => {
      console.log(`%c${text}`, stylesObj);
    }, delay);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export default styledConsole;
