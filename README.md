# @webbro-software/styled-console

`@webbro-software/styled-console` is a JavaScript package that allows you to style console logs with customizable CSS styles. It supports dynamic styling of console messages with the ability to use camelCase property names that will be automatically converted to kebab-case for compatibility with CSS.

## Features

- Easily style console messages.
- Convert camelCase CSS properties to kebab-case.
- Supports dynamic styles via JavaScript objects.
- Simple and lightweight solution for styled console output.

## Installation

### Install via npm

To install the package, run:

```bash
npm install @webbro-software/styled-console
```

## Usage

Once installed, you can import the `styledConsole` function and start using it right away.

#### `styledConsole(text: string, styles: Object)`

The `styledConsole` function takes two arguments:

- **`text`**: The message you want to log to the console.
- **`styles`**: An object containing the CSS styles you want to apply to the console output.

**Parameters**:

- `text` (string): The message you want to log.
- `styles` (object): An object where each key-value pair represents a CSS property and its value. The keys should be in camelCase, and they will be automatically converted to kebab-case.

#### Example Usage

```javascript
import styledConsole from "@webbro-software/styled-console";

// Simple styling example
styledConsole("Hello, styled world!", {
  color: "red",
  backgroundColor: "yellow",
});

// More complex styling
styledConsole("This is a styled message!", {
  fontSize: "20px",
  padding: "10px",
  textAlign: "center",
});
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

   styledConsole("Hello from Vite!", {
     color: "blue",
     fontSize: "16px",
   });
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to the URL provided by Vite (e.g., `http://localhost:3000`) and check the browser console for styled logs.

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

## Development

If you want to contribute to the development of `@webbro-software/styled-console`, follow these steps:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the build script to compile TypeScript (if applicable) with `npm run build`.

## License

MIT License. See [LICENSE](./LICENSE) for more details.
