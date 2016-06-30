module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'mocha': true
  },
  'globals': {
    'sinon': true
  },
  'extends': 'eslint:recommended',
  'plugins': ['mocha'],
  'rules': {
    'indent': ['warn',2],
    'linebreak-style': ['error','unix'],
    'quotes': ['error','single', {'allowTemplateLiterals': true}],
    'semi': ['error', 'always'],
    'mocha/no-underscore-dangle': 0,
    'mocha/func-names': 0,
    'mocha/no-exclusive-tests': 0,
    'mocha/no-skipped-tests': 0,
    'mocha/no-pending-tests': 0,
    'mocha/handle-done-callback': 0,
    'mocha/no-synchronous-tests': 0,
    'mocha/no-global-tests': 0
  }
};