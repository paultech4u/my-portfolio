import { useRef } from "react";

export function useCountRender(){
     const render = useRef(0);
     console.log("renders: ", render.current++);
     
}


