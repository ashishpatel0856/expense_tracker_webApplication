import { createContext, useState } from "react";

const AppContext = createContext ();

export const AppContextProvider=({children}) => {

    const [user,setUser]= useState(null);
    const contextValue ={
      user
      
    }
    retrun (
       < AppContext.Provider value={contextValue}>
        {children}
       </AppContext.Provider>
    )
}