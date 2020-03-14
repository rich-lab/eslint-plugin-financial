import { Rule } from 'eslint';
import { BinaryExpression } from 'estree';

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',

    docs: {
      description: 'disallow division',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/ulivz/eslint-plugin-financial/blob/master/docs/rules/no-division.md'
    }
  },

  // @ts-ignore
  create: function (context: Rule.RuleContext) {
    function lintBinaryExpression(node: BinaryExpression): void {
      if (node.operator === '/') {
        context.report({
          node,
          message: 'Disallow division.'
        })
      }
    }

    return {
      BinaryExpression: function (node: BinaryExpression): void {
        return lintBinaryExpression(node)
      }
    }
  }
}

export default rule
