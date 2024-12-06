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

### Usage

Once installed, you can import the `styledConsole` function to your project and start using it right away.

```javascript
import styledConsole from "@webbro-software/styled-console";
```

### API

#### `styledConsole(text: string, styles: Object)`

The `styledConsole` function takes two arguments:

- **`text`**: The message you want to log to the console.
- **`styles`**: An object containing the CSS styles you want to apply to the console output.

**Parameters**:

- `text` (string): The message you want to log.
- `styles` (object): An object where each key-value pair represents a CSS property and its value. The keys should be in camelCase, and they will be automatically converted to kebab-case.

#### Example Usage:

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

#### Console Output

The output will be styled according to the CSS properties passed in the `styles` object.

```text
Hello, styled world!
```

The message will appear in red text with a yellow background.

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

### Example in HTML (Browser)

To use `@webbro-software/styled-console` in the browser, you can include it in your HTML file using a bundler like Webpack, Parcel, or Rollup, or by directly importing the package if it's published on a CDN.

Here’s an example of using it in the browser:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Styled Console Example</title>
  </head>
  <body>
    <script type="module">
      import styledConsole from "@webbro-software/styled-console";

      styledConsole("Styled Text in Browser", {
        color: "blue",
        fontSize: "18px",
      });
    </script>
  </body>
</html>
```

### Browser Compatibility

This package is compatible with modern browsers that support ES Modules and JavaScript.

## Development

If you want to contribute to the development of `@webbro-software/styled-console`, follow these steps:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the build script to compile TypeScript (if applicable) with `npm run build`.

## License

`@webbro-software/styled-console` is licensed under the ISC License. See LICENSE for more information.
