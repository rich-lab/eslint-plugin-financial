module.exports = {
  rules: {
    'no-float-calculation': require('./rules/no-float-calculation').default,
    'no-division': require('./rules/no-division').default
  },

  configs: {
    recommended: {
      plugins: [
        'financial'
      ],
      rules: {
        'financial/no-float-calculation': 'error',
        'financial/no-division': 'error',
      }
    }
  }
};
