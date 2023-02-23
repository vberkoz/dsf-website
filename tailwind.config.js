

const plugin = require('tailwindcss/plugin');

const hoverPlugin = plugin(function({ addVariant, e, postcss }) {
    addVariant('hover', ({ container, separator }) => {
        const hoverRule = postcss.atRule({ name: 'media', params: '(hover: hover)' });
        hoverRule.append(container.nodes);
        container.append(hoverRule);
        hoverRule.walkRules(rule => {
            rule.selector = `.${e(`hover${separator}${rule.selector.slice(1)}`)}:hover`
        });
    });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [hoverPlugin],
};
