import cn from "classnames";
import { ReactNode } from "react";
import { Colors, Variant, VariantsMapping } from "./models/Variant";

import "./Index.css";

const variantsMapping: VariantsMapping = {
  display: "h1",
  headingL: "h2",
  headingM: "h3",
  headingS: "h4",
  headingSm: "h5",
  headingXs: "h6",
  subheading: "h6",
  bodym: "p",
};

type CustomTextProps = {
  variant: Variant;
  children: ReactNode;
  color?: Colors;
  mt?: number;
  mb?: number;
  size?: string;
  center?: boolean;
};

const Text = ({
  variant,
  color,
  children,
  size,
  center,
  ...props
}: CustomTextProps) => {
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={cn({
        [`text--variant-${variant}`]: variant,
        [`text--color-${color}`]: color,
      })}
      style={{
        marginTop: props.mt,
        marginBottom: props.mb,
        fontSize: size,
        textAlign: center ? "center" : "left",
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
