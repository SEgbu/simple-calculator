import { FC, useContext } from "react";
import "./TextDisplay.css"

export const TextDisplay:FC = () => {
    const [textOnScreen, setTextOnScreen] = useContext(textOnScreenContext);

    console.log(textOnScreen);
    return (
        <div className="TextDisplay">
            <p>{textOnScreen}</p>
        </div>
    )
}