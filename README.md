# @webbro-software/styled-console

`@webbro-software/styled-console` is a JavaScript package that allows you to style console logs with customizable CSS styles. It supports dynamic styling of console messages with the ability to use camelCase property names that will be automatically converted to kebab-case for compatibility with CSS.

## Features

- Easily style console messages.
- Convert camelCase CSS properties to kebab-case.
- Supports dynamic styles via JavaScript objects.
- Apply pre-defined themes (`primary`, `danger`, `help`, etc.) for quick styling.
- Add optional delays to console messages.
- Simple and lightweight solution for styled console output.

## Installation

### Install via npm

To install the package, run:

```bash
npm install @webbro-software/styled-console
```

## Usage

Once installed, you can import the `styledConsole` function and start using it right away.

#### `styledConsole(text, styles, theme, delay)`

The `styledConsole` function takes four arguments:

- **`text`**: The message you want to log to the console.
- **`styles`**: An object containing the CSS styles you want to apply to the console output.
- **`theme`** _(optional)_: A pre-defined theme for quick styling (e.g., `primary`, `danger`). Defaults to `primary`.
- **`delay`** _(optional)_: A delay in milliseconds before the message is logged. Defaults to `0`.

**Parameters**:

- `text`: The message you want to log.
- `styles`: An object where each key-value pair represents a CSS property and its value. The keys should be in camelCase, and they will be automatically converted to kebab-case.
- `theme`: A string representing a pre-defined theme. Supported themes include:
  - `primary`
  - `danger`
  - `help`
  - `info`
  - `secondary`
  - `success`
  - `warning`
- `delay`: Time in milliseconds to delay the console output.

#### Example Usage

```javascript
import styledConsole from "@webbro-software/styled-console";

// Simple styling example
styledConsole("Hello, styled world!", {
  color: "red",
  backgroundColor: "yellow",
});

// More complex styling with theme
styledConsole(
  "This is a styled message!",
  {
    fontSize: "20px",
    padding: "10px",
    textAlign: "center",
  },
  "success"
);

// Adding a delay
styledConsole("This message will appear after 2 seconds", {}, "info", 2000);
```

### Using with Vite

If you're working on a Vite-based project, integrating `@webbro-software/styled-console` is straightforward.

#### Steps:

1. **Create a Vite project**:

   ```bash
   npm create vite@latest my-vite-app
   cd my-vite-app
   npm install
   ```

2. **Install the package**:

   ```bash
   npm install @webbro-software/styled-console
   ```

3. **Update `src/main.js` or `src/main.ts`**:

   ```javascript
   import styledConsole from "@webbro-software/styled-console";

   styledConsole(
     "Hello from Vite!",
     {
       color: "blue",
       fontSize: "16px",
       background: "#fff",
       padding: "50px",
     },
     "primary"
   );
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to the URL provided by Vite (e.g., `http://localhost:5174`) and check the browser console for styled logs.

---

### Converting camelCase to kebab-case

The library automatically converts camelCase property names to kebab-case before applying the styles. For example:

```javascript
styledConsole("Hello!", { backgroundColor: "green", fontSize: "16px" });
```

This would be transformed into:

```css
background-color: green;
font-size: 16px;
```

---

### Themes

You can use pre-defined themes for quick and consistent styling. The available themes are:

- `primary`: HSL color with a blue tone.
- `danger`: HSL color with a red tone.
- `help`: HSL color with a purple tone.
- `info`: HSL color with a light blue tone.
- `secondary`: HSL color with a gray-blue tone.
- `success`: HSL color with a green tone.
- `warning`: HSL color with an orange tone.

Themes can be applied by passing their name as the third argument:

```javascript
styledConsole("This is a success message!", {}, "success");
styledConsole("This is a danger message!", {}, "danger");
```

---

## Development

If you want to contribute to the development of `@webbro-software/styled-console`, follow these steps:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the build script to compile TypeScript (if applicable) with `npm run build`.

## License

MIT License. See [LICENSE](./LICENSE) for more details.

---

![NPM Downloads](https://img.shields.io/npm/dw/@webbro-software/sytled-console)
