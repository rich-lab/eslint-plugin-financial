export default {
  rules: {
    'financial/no-floating-point-calculation': require('./rules/no-floating-point-calculation')
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
