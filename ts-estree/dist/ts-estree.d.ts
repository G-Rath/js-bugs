import { AST_NODE_TYPES } from './ast-node-types';

export interface BaseNode {}

export declare type Node =
  | StringLiteral
  | TemplateElement
  | TemplateLiteral;
export declare type LiteralExpression =
  | StringLiteral
  | TemplateLiteral;
interface LiteralBase extends BaseNode {
  raw: string;
  value: boolean | number | RegExp | string | null;
  regex?: {
    pattern: string;
    flags: string;
  };
}
export interface StringLiteral extends LiteralBase {
  type: AST_NODE_TYPES.Literal;
  value: string;
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
export {};
