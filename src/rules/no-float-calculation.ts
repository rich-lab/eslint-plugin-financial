import { Rule } from 'eslint';
import {
  Node,
  Literal,
  BinaryExpression,
} from 'estree';

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',

    docs: {
      description: 'disallow floating point calculation',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/ulivz/eslint-plugin-financial/blob/master/docs/rules/no-floating-point-calculation.md'
    }
  },

  // @ts-ignore
  create: function (context: Rule.RuleContext) {
    const DANGROUS_OPERATORS = [
      '+',
      '-',
      '*',
      '/'
    ]

    function isNumberLike(literal: Literal) {
      if (typeof literal.value === 'number') {
        return true
      }

      if (typeof literal.value === 'string') {
        const num = new Number(literal.value)
        if (!isNaN(num as number)) {
          return true
        }
      }

      return false
    }

    function lintLiteral(literal: Literal, node: Node): void {
      if (isNumberLike(literal)
        && literal.raw
        && literal.raw.includes('.')
      ) {
        context.report({
          node,
          message: 'Disallow floating point calculation.'
        })
      }
    }

    function lintBinaryExpressionElement(el: any, node: BinaryExpression): void {
      if (el.type === 'Literal') {
        el as Literal;
        lintLiteral(el, node)
      }

      if (el.type === 'BinaryExpression') {
        el as BinaryExpression;
        lintBinaryExpression(el)
      }
    }

    function lintBinaryExpression(node: BinaryExpression): void {
      let { left, right, operator } = node;

      if (DANGROUS_OPERATORS.includes(operator)) {
        lintBinaryExpressionElement(left, node)
        lintBinaryExpressionElement(right, node)
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
