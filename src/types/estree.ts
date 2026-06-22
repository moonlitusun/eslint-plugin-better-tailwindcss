import type { Node as ESNode } from "estree";


export type WithParent<BaseNode> = BaseNode & {
  parent?: ESNode | null;
};
