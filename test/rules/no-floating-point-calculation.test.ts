import rule from '../../src/rules/no-floating-point-calculation'
import { RuleTester } from 'eslint'

const ruleTester = new RuleTester();

const valids = [
  '1 + 2',
  '1 - 2',
  '1 * 2',
  '1 / 2',

  '1 + 2 + 3',
  '1 - 2 - 3',
  '1 * 2 - 3',
  '1 / 2 / 3',

  `'0.1' + '2'`,
  `'0.1' - '2'`,
  `'0.1' * '2'`,
  `'0.1' / '2'`,

  `'1' + '0.2'`,
  `'1' - '0.2'`,
  `'1' * '0.2'`,
  `'1' / '0.2'`,

  `'0.1' + '0.2'`,
  `'0.1' - '0.2'`,
  `'0.1' * '0.2'`,
  `'0.1' / '0.2'`,
]
const invalids = [
  '0.1 + 2',
  '1 + 0.2',
  '0.1 + 0.2',

  '0.1 - 2',
  '1 - 0.2',
  '0.1 - 0.2',

  '0.1 * 2',
  '1 * 0.2',
  '0.1 * 0.2',

  '0.1 / 2',
  '1 / 0.2',
  '0.1 / 0.2',
]

ruleTester.run("no-floating-point-calculation", rule, {
  valid: valids,
  invalid: invalids.map(item => {
    const error = {
      message: 'Floating point calculation not allowed.',
      type: 'BinaryExpression'
    }

    // For two float between left and right hand.
    if (item.split('.').length === 3) {
      return {
        code: item,
        errors: [
          error,
          error
        ]
      }
    }

    return {
      code: item,
      errors: [
        error
      ]
    }
  })
});
