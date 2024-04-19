import { ReactElement } from "react";
import { Path, Svg } from "react-native-svg";

export default function infinityLoadingLight ():ReactElement {
    return(
      <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    preserveAspectRatio="xMidYMid"
    style={{
      margin: "auto",
      backgroundC: "0 0",
      display: "block",
      shapeRendering: "auto",
    }}
    viewBox="0 0 100 100"
  >
    <Path
      fill="none"
      stroke="#ffff"
      strokeDasharray="205.271142578125 51.317785644531256"
      strokeLinecap="round"
      strokeWidth={4}
      d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40C88.6 30 95 43.3 95 50s-6.4 20-19.3 20c-19.3 0-32.1-40-51.4-40z"
      style={{
        transform: "scale(.8)",
        transformOrigin: "50px 50px",
      }}
    ></Path>
  </Svg>
    )
}