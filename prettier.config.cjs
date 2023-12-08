// prettier.cjs
module.exports = {
  // Specify the line length (default is 80)
  printWidth: 100,

  // Specify tab width
  tabWidth: 2,

  // Use spaces instead of tabs
  useTabs: false,

  // Include semicolons at the end of statements
  semi: true,

  // Use single quotes instead of double quotes where possible
  singleQuote: true,

  // Use more traditional trailing commas
  trailingComma: 'es5',

  // Bracket spacing in object literals
  bracketSpacing: true,

  // Arrow function parameter parentheses
  arrowParens: 'always',

  // Ensure compatibility with Astro files
  astroAllowShorthand: true, // If using Astro plugin for Prettier

  // Tailwind CSS compatibility settings
  tailwindConfig: './tailwind.config.cjs', // Path to your Tailwind config

  // Include the additional plugins
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
  ],

  // Override settings for specific file types
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.tsx',
      options: {
        parser: 'typescript',
      },
    },
  ],
};
