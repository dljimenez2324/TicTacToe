// this holds all of the history of the game's square state changes

import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    // useEffect to console log the current move and update only when current move is changed
    useEffect(() => {
        console.log(`Current move: ${currentMove}`);
    }, [currentMove]);

    // Handle a play (when a square is clicked)
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    // Jump to a specific move in the game history
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    // Create the list of moves for the game history
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;
