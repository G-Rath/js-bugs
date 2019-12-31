import { AST_NODE_TYPES, AST_TOKEN_TYPES } from './ast-node-types';

export interface BaseNode {}

export declare type Node =
  | BigIntLiteral
  | BooleanLiteral
  | NumberLiteral
  | RegExpLiteral
  | NullLiteral
  | StringLiteral
  | TaggedTemplateExpression
  | TemplateElement
  | TemplateLiteral;
export declare type LeftHandSideExpression =
  | LiteralExpression
  | TaggedTemplateExpression;
export declare type Literal =
  | BooleanLiteral
  | NumberLiteral
  | NullLiteral
  | RegExpLiteral
  | StringLiteral;
export declare type LiteralExpression =
  | BigIntLiteral
  | Literal
  | TemplateLiteral;
interface LiteralBase extends BaseNode {
  raw: string;
  value: boolean | number | RegExp | string | null;
  regex?: {
    pattern: string;
    flags: string;
  };
}
export interface BigIntLiteral extends LiteralBase {
  type: AST_NODE_TYPES.BigIntLiteral;
}
export interface BooleanLiteral extends LiteralBase {
  type: AST_NODE_TYPES.Literal;
  value: boolean;
}
export interface NumberLiteral extends LiteralBase {
  type: AST_NODE_TYPES.Literal;
  value: number;
}
export interface NullLiteral extends LiteralBase {
  type: AST_NODE_TYPES.Literal;
  value: null;
}
export interface RegExpLiteral extends LiteralBase {
  type: AST_NODE_TYPES.Literal;
  value: RegExp;
}
export interface StringLiteral extends LiteralBase {
  type: AST_NODE_TYPES.Literal;
  value: string;
}
export interface TaggedTemplateExpression extends BaseNode {
  type: AST_NODE_TYPES.TaggedTemplateExpression;
  tag: LeftHandSideExpression;
  quasi: TemplateLiteral;
}
export interface TemplateElement extends BaseNode {
  type: AST_NODE_TYPES.TemplateElement;
  value: {
    raw: string;
    cooked: string;
  };
  tail: boolean;
}
export interface TemplateLiteral extends BaseNode {
  type: AST_NODE_TYPES.TemplateLiteral;
  quasis: TemplateElement[];
}
export interface TSLiteralType extends BaseNode {
  type: AST_NODE_TYPES.TSLiteralType;
  literal: LiteralExpression;
}
export {};
