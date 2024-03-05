/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {
      green759457: "hsl(75, 94%, 57%)",
      grey20: "hsl(0, 0%, 20%)",
      darkGrey12: "hsl(0, 0%, 12%)",
      offBlack8: "hsl(0, 0%, 8%)",
    },
  },
  plugins: [],
};

/**
 * Green: hsl(75, 94%, 57%)

## Colors

### Primary

- Green: hsl(75, 94%, 57%)

### Neutral

- White: hsl(0, 0%, 100%)
- Grey: hsl(0, 0%, 20%)
- Dark Grey: hsl(0, 0%, 12%)
- Off Black: hsl(0, 0%, 8%)

## Typography

### Body Copy

- Font size (paragraph): 14px

### Font

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400, 600, 700
 *  */
