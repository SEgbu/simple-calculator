import { FC, createContext, useState } from "react"
import { ButtonGrid } from "./ButtonGrid";
import { TextDisplay } from "./TextDisplay";
import "./Calculator.css"

export const Calculator : FC = () => {
    const textStateArray = useState<string>("");
    
    const textOnScreenContext = createContext(textStateArray);

    return (
        <textOnScreenContext.Provider value={textStateArray}>
            <div className="Calculator">
                <TextDisplay />
                <ButtonGrid />
            </div>
        </textOnScreenContext.Provider>
    );
}

