const esModules = [
  'bail',
  'character-entities',
  'comma-separated-tokens',
  'decode-named-character-reference',
  'hast-util-from-parse5',
  'hast-util-parse-selector',
  'hastscript',
  'is-plain-obj',
  'longest-streak',
  'mdast-util-from-markdown',
  'mdast-util-math',
  'mdast-util-to-markdown',
  'mdast-util-to-string',
  'micromark-extension-math',
  'micromark-factory-space',
  'micromark-util-character',
  'micromark-util-combine-extensions',
  'micromark',
  'parse-entities',
  'property-information',
  'rehype-parse',
  'remark-math',
  'remark-parse',
  'space-separated-tokens',
  'trough',
  'unified',
  'unist-util-is',
  'unist-util-stringify-position',
  'unist-util-visit',
  'vfile',
  'web-namespaces',
]

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '.*\\.d\\.ts'],
  coverageThreshold: { global: { lines: 95 } },
  preset: 'ts-jest/presets/js-with-babel',
  restoreMocks: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'node',
  transformIgnorePatterns: [`/node_modules/(?!${esModules.join('|')})`],
}
