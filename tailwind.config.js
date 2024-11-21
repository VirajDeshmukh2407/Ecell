// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
// {
//   "animation": {
//     shimmer: "shimmer 2s linear infinite"
//   },
//   "keyframes": {
//     shimmer: {
//       from: {
//         "backgroundPosition": "0 0"
//       },
//       to: {
//         "backgroundPosition": "-200% 0"
//       }
//     }
//   }
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
