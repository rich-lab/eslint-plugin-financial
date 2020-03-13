module.exports = {
  rules: {
    'financial/no-floating-point-calculation': require('./rules/no-floating-point-calculation').default
  },

  configs: {
    recommended: {
      plugins: [
        'financial'
      ],
      rules: {
        'financial/no-floating-point-calculation': 'error',
      }
    }
  }
};
