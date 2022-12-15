import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <Square squares={squares} handleClick={handleClick} />
      </div>
    </div>
  );
}
