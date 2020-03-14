module.exports = {
  rules: {
    'no-float-calculation': require('./rules/no-float-calculation').default
  },

  configs: {
    recommended: {
      plugins: [
        'financial'
      ],
      rules: {
        'financial/no-float-calculation': 'error',
      }
    }
  }
};
