import "./style/Buttons.css";

function Buttons({ setInput, input }) {
  const handleNumberClick = (number) => {
    setInput((prev) => prev + number);
  };

  const handleOperatorClick = (operator) => {
    // Evitar operadores repetidos seguidos
    setInput((prev) => {
      const lastChar = prev.slice(-1);
      // Solo agregar operador si el último carácter no es un operador
      if (/[+\-*/]/.test(lastChar)) {
        return prev;
      }
      return prev + " " + operator + " ";
    });
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = calculate(input);
      setInput(result.toString());
    } catch (e) {
      console.error(e); // Imprimir el error para depurar
      setInput("Error");
    }
  };

  const calculate = (expression) => {
    try {
      // Primero, eliminar los espacios extra
      expression = expression.replace(/\s+/g, "");

      // Evaluación manual: solo aceptar números, operadores y un solo operador entre números
      if (/^[0-9+\-*/.]+$/.test(expression)) {
        const result = new Function(`return ${expression}`)(); // Función simplificada
        return result;
      } else {
        throw new Error("Expresión no válida");
      }
    } catch (error) {
      throw new Error("Error al calcular");
    }
  };

  return (
    <div className="buttons">
      <div>
        <button className="number" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="number" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="number" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button className="operator" onClick={() => handleOperatorClick("/")}>
          /
        </button>
      </div>
      <div>
        <button className="number" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="number" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="number" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button className="operator" onClick={() => handleOperatorClick("*")}>
          *
        </button>
      </div>
      <div>
        <button className="number" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="number" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="number" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button className="operator" onClick={() => handleOperatorClick("-")}>
          -
        </button>
      </div>
      <div>
        <button className="operator" onClick={handleClear}>
          C
        </button>
        <button className="number" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button className="operator" onClick={handleCalculate}>
          =
        </button>
        <button className="operator" onClick={() => handleOperatorClick("+")}>
          +
        </button>
      </div>
    </div>
  );
}

export default Buttons;
