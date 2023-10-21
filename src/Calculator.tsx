import { FC, useState } from "react"
import { ButtonGrid } from "./ButtonGrid";
import { TextDisplay } from "./TextDisplay";
import "./Calculator.css"


export const Calculator : FC = () => {

    const [text, setText] = useState<string>("")    

    return (
        <div className="Calculator">
                <TextDisplay textProp={text}/>
                <ButtonGrid textSetterProp={setText}/>
        </div>
    );
}

