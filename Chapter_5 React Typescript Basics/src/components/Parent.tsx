import type { ReactNode } from "react";
// Note: 'ReactNode' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.

type Props = { children: ReactNode };

const Parent = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Parent;
