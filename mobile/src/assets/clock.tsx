import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.984 0C7.152 0 0 7.168 0 16s7.152 16 15.984 16C24.832 32 32 24.832 32 16S24.832 0 15.984 0zM16 28.8C8.928 28.8 3.2 23.072 3.2 16 3.2 8.928 8.928 3.2 16 3.2c7.072 0 12.8 5.728 12.8 12.8 0 7.072-5.728 12.8-12.8 12.8z"
        fill="#ABABAB"
      />
      <Path
        d="M16.8 8h-2.4v9.6l8.4 5.04 1.2-1.968-7.2-4.272V8z"
        fill="#ABABAB"
      />
    </Svg>
  );
}

export default SvgComponent;
