import { FC, useContext } from "react";
import "./ButtonGrid.css"

export const ButtonGrid:FC = () => {
    const [textOnScreen, setTextOnScreen] = useContext(textOnScreenContext)

    const handleNumberClick = (event : React.MouseEvent) => {
        setTextOnScreen(currentTextOnScreen => currentTextOnScreen += event.currentTarget.innerHTML);
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
                <button>AC</button>
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