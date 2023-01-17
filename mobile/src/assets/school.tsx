import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.542 20.617v7.833l13.416 7.48 13.417-7.48v-7.833l-13.417 7.48-13.416-7.48zM21.958.682L.875 12.432 21.958 24.18l17.25-9.615v13.531h3.834V12.431L21.958.682z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
