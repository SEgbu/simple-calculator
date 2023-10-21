import { FC } from "react";
import "./ButtonGrid.css"

type ButtonGridProps = {
    textSetterProp : React.Dispatch<React.SetStateAction<string>>;
}

export const ButtonGrid:FC<ButtonGridProps> = ({textSetterProp : textSetter}) => {

    const handleNumberClick = (event : React.MouseEvent) => {
        const temp = event.currentTarget.innerHTML;
        textSetter(currentText => currentText += temp);
    }
    
    return (
        <div className="ButtonGrid">
            <div className="Numbers">
                <button onClick={e => handleNumberClick(e)}>0</button>
                <button onClick={e => handleNumberClick(e)}>1</button>
                <button onClick={e => handleNumberClick(e)}>2</button>
                <button onClick={e => handleNumberClick(e)}>3</button>
                <button onClick={e => handleNumberClick(e)}>4</button>
                <button onClick={e => handleNumberClick(e)}>5</button>
                <button onClick={e => handleNumberClick(e)}>6</button>
                <button onClick={e => handleNumberClick(e)}>7</button>
                <button onClick={e => handleNumberClick(e)}>8</button>
                <button onClick={e => handleNumberClick(e)}>9</button>
                <button onClick={() => textSetter("")}>AC</button>
            </div>      
            <div className="Symbols">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>     
        </div>
    )
}