module.exports = {
  content: [
    "./src/frontend/*.{html,js}",  // Include all HTML files in your frontend directory
    "./src/frontend/renderer.js",    // Include JavaScript files if they use Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};