import "./style/Display.css";

function Display({ input }) {
  return <input type="text" className="display" value={input} readOnly />;
}

export default Display;
