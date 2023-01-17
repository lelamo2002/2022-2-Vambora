import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg width={31} height={30} viewBox="0 0 37 30" fill="none">
      <Path
        d="M15.057 14.836c4.16 0 7.529-3.32 7.529-7.418C22.586 3.32 19.216 0 15.057 0 10.897 0 7.53 3.32 7.53 7.418c0 4.099 3.369 7.418 7.528 7.418zm0 3.71C10.032 18.546 0 21.03 0 25.963v3.709h30.114v-3.71c0-4.933-10.032-7.418-15.057-7.418z"
        fill="#ABABAB"
      />
    </Svg>
  );
}

export default SvgComponent;
