import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface SvgProps {
  color?: string;
}

function SvgComponent({ color = "#ababab" }: SvgProps) {
  return (
    <Svg width={30} height={30} viewBox="0 0 37 30" fill="none">
      <Path
        d="M14.622 29.593V19.148h7.311v10.445h9.14V15.667h5.483L18.278 0 0 15.667h5.483v13.926h9.14z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
