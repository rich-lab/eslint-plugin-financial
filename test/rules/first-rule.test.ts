import rule from '../../src/rules/first-rule'
import { RuleTester } from 'eslint'

const ruleTester = new RuleTester();

ruleTester.run("no-full-fp-lib", rule, {
  valid: [
    "sounds.get(1)",
  ],

  invalid: [
    {
      code: "sounds.get()",
      errors: [{
        message: "You cannot use sounds.get method.",
        type: "CallExpression"
      }]
    }
  ]
});
