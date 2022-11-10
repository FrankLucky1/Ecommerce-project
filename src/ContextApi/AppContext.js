import React,{useState, createContext} from "react";

export const AppContext = createContext();



export const AppProvider = ({children})=> {

    const [active, setactive] = useState();
    const [size, setsize] = useState()

   

    return(

        <AppContext.Provider value={[
            active, size, setactive,setsize
        ]} >
            {children}
        </AppContext.Provider>
    );
}