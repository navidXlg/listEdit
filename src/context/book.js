import { createContext } from "react";
import { useState } from "react";

const bookContext = createContext();

function Provider({childern}){
    const [count, countIncrise] = useState(5);
    const retunValue = {
        count,
        incriseCount:()=>{
            countIncrise(count+1);
        }
    }

  return (
    <bookContext.Provider value = {retunValue}>
        {childern}
    </bookContext.Provider>
  )  
};

export {Provider};
export default bookContext;