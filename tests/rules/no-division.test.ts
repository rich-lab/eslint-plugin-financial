import rule from '../../src/rules/no-division'
import { RuleTester } from 'eslint'

const ruleTester = new RuleTester();

const valids = [
  '1 + 2',
  '1 - 2',
  '1 * 2',

  '1 + 2 + 3',
  '1 - 2 - 3',
  '1 * 2 - 3',

  `amount + 1`,
  `amount - 1`,
  `amount * 1`,

  `1 + amount`,
  `1 - amount`,
  `1 * amount`,
]

const invalids = [
  `1 / 2`,
  `1 / 2 / 3`,
  `'1' / '2'`,
  `'1' / '2' / '3'`,
  `0.1 / 0.2`,
  `'0.1' / '0.2'`,
  `amount / 1`,
  `1 / amount`,
  `amount / count`,
]

ruleTester.run("no-floating-point-calculation", rule, {
  valid: valids,
  invalid: invalids.map(item => {
    const error = {
      message: 'Disallow division.',
      type: 'BinaryExpression'
    }

    // For two float between left and right hand.
    if (item.split('/').length === 3) {
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
