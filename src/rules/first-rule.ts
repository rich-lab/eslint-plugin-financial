import { Rule } from 'eslint'
import {
  CallExpression,
  MemberExpression,
  Identifier,
} from 'estree';

export default function (context: Rule.RuleContext) {
  return {
    "CallExpression": function (node: CallExpression) {
      let callee = node.callee;
      if (callee.type === 'MemberExpression') {
        callee as MemberExpression

        const { object, property } = callee

        if (object.type === 'Identifier' && property.type === 'Identifier') {
          object as Identifier
          property as Identifier

          if (object.name === "sounds" && property.name === "get") {
            // Now we only match the methods that we are looking for

            if (!node.arguments[0] || node.arguments[0].value === null) {
              context.report({
                node,
                message: 'You cannot use sounds.get method.'
              })
            }
          }
        }
      }
    }
  }
}

export const schema = []
