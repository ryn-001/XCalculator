import { useState } from "react";
import "./Calculator.css"

export default function Calculator() {
    const [answer, setAnswer] = useState(" ");
    const [input, setInput] = useState("")

    const handleClick = (e) => {
        const value = e.target.value;

        if (value === "C") {
            setInput("");
        } else if (value === "=") {
            try {
                if (input.trim() === "") throw new Error("empty");
                const result = eval(input);
                setInput(result.toString());
            } catch {
                setInput("Error");
            }
        } else {
            if (input === "Error") setInput("");
            setInput((prev) => prev + value);
        }

    }

    return (
        <div className="calculator" style={{ padding: "1rem" }}>
            <h1>React Calculator</h1>

            <div>
                <input type="text" className="calculator-input" readOnly value={input} />
                <div id="root" style={{ padding: "1.5rem", color: "lightgray" }}>{answer}</div>

                <div className="buttons">
                    {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map(
                        (btn) => (
                            <button key={btn} value={btn} onClick={handleClick}>
                                {btn}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
