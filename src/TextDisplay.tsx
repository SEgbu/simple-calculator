import { FC } from "react";
import "./TextDisplay.css"

type TextDisplayProps = {
    textProp : string;
}

export const TextDisplay : FC<TextDisplayProps> = ({textProp: text}) => {

    return (
        <div className="TextDisplay">
            <p>{text == "" ? "0" : text}</p>
        </div>
    )
}