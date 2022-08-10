import { createContext,useReducer } from "react";
export  const ThemeContext = createContext();

const initalState = {darkmode : false};

const themeReducer= (state,action)=>{

    switch(action.type){

        case 'toggle':
            return{darkmode: !state.darkmode};
        default:
            return state;
    }
}

export const ThemeProvider=(props)=>{
    const[state,dispatch] = useReducer(themeReducer,initalState)
    return(
    

        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    );
};