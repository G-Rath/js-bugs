import { AST_NODE_TYPES, TSESTree } from 'ts-estree';

interface StringLiteral<Value extends string = string>
  extends TSESTree.StringLiteral {
  value: Value;
}

const isStringLiteral = <V extends string>(
  node: TSESTree.Node,
  value?: V
): node is StringLiteral<V> =>
  node.type === AST_NODE_TYPES.Literal &&
  typeof node.value === 'string' &&
  (value === undefined || node.value === value);

interface TemplateLiteral<Value extends string = string>
  extends TSESTree.TemplateLiteral {
  quasis: [TSESTree.TemplateElement & { value: { raw: Value; cooked: Value } }];
}

const isTemplateLiteral = <V extends string>(
  node: TSESTree.Node,
  value?: V
): node is TemplateLiteral<V> =>
  node.type === AST_NODE_TYPES.TemplateLiteral &&
  node.quasis.length === 1 && // bail out if not simple
  (value === undefined || node.quasis[0].value.raw === value);

type StringNode<S extends string = string> =
  | StringLiteral<S>
  | TemplateLiteral<S>;

const isStringNode = <V extends string>(
  node: TSESTree.Node,
  specifics?: V
): node is StringNode<V> =>
  isStringLiteral(node, specifics) || isTemplateLiteral(node, specifics);

const fn = (argument: TSESTree.LiteralExpression) => {
  if (!isStringNode(argument)) {
//    if (argument.type === AST_NODE_TYPES.TemplateLiteral) {
//      //
//    }

    return;
  }

  if (argument.type === AST_NODE_TYPES.TemplateLiteral) {
    //
  }
};
