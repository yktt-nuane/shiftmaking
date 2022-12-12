const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  './**/*.{css,scss}': (filenames) => [
    `npm run stylelint ${filenames.join(' ')}`,
  ],
  './**/*.{js,jsx,ts,tsx,css,scss,md,mdx}': (filenames) => [
    `npm run prettier ${filenames.join(' ')}`,
  ],
}
