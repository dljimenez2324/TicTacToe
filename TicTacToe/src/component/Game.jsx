// this holds all of the history of the game's square state changes
import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {

    // Initialize state to keep track of game history and the current move
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0; // Determine if X is the next player
    const currentSquares = history[currentMove]; // Get the squares for the current move

    // useEffect to log the current move to the console whenever currentMove changes
    useEffect(() => {
        console.log(`Current move: ${currentMove}`);
    }, [currentMove]);

    // Handle a play (when a square is clicked)
    function handlePlay(nextSquares) {
        // Create a new history array including the new move
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory); // Update the history state
        setCurrentMove(nextHistory.length - 1); // Update the current move state
    }

    // Jump to a specific move in the game history
    function jumpTo(nextMove) {
        setCurrentMove(nextMove); // Update the current move state
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
                {/* Render the Board component */}
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                {/* Render the list of moves */}
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;