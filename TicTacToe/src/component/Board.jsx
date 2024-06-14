// import our react component square
import Square from "./Square"

const Board = () => {
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

export default Board

