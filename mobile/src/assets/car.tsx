import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg width={30} height={31} viewBox="0 0 37 30" fill="none">
      <Path
        d="M30.215 1.85A2.745 2.745 0 0027.606 0H7.394c-1.213 0-2.223.77-2.61 1.85L.964 12.827v14.658A1.84 1.84 0 002.8 29.317h1.838a1.84 1.84 0 001.837-1.833v-1.832h22.05v1.832a1.84 1.84 0 001.837 1.833H32.2a1.84 1.84 0 001.837-1.833V12.826L30.215 1.851zM7.394 20.156a2.749 2.749 0 110-5.497 2.749 2.749 0 110 5.497zm20.212 0a2.749 2.749 0 110-5.497 2.749 2.749 0 110 5.497zM4.638 10.994l2.756-8.246h20.212l2.756 8.246H4.638z"
        fill="#ABABAB"
      />
    </Svg>
  );
}

export default SvgComponent;
