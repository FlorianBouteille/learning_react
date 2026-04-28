import { useState } from "react"

type tileTypes = 
{
    state : string, 
    id: number,
    playFunction : (n : number) => void
}

type boardTypes = 
{
    state : Array<string>
    playFunction : (n : number) => void
}

function Tile({state, id, playFunction} : tileTypes)
{
    let img = null
    if (state == "X")
        img = <img className="imgTile" src="/src/assets/cross.png" ></img>
    else if (state == "O")
        img = <img className="imgTile" src="/src/assets/circle.png" ></img>
    return <div className="gameTile" onClick={() => playFunction(id)}>
        {img}
    </div>
}

function Board({state, playFunction} : boardTypes)
{
    console.log("updating board")
    return <>
        <div className="gameRow">
            <Tile state={state[0]} id={0} playFunction={playFunction}/>
            <Tile state={state[1]} id={1} playFunction={playFunction}/>
            <Tile state={state[2]} id={2} playFunction={playFunction}/>
        </div>
        <div className="gameRow">
            <Tile state={state[3]} id={3} playFunction={playFunction}/>
            <Tile state={state[4]} id={4} playFunction={playFunction}/>
            <Tile state={state[5]} id={5} playFunction={playFunction}/>
        </div>
        <div className="gameRow">
            <Tile state={state[6]} id={6} playFunction={playFunction}/>
            <Tile state={state[7]} id={7} playFunction={playFunction}/>
            <Tile state={state[8]} id={8} playFunction={playFunction}/>
        </div>
    </>
}
export function TicTacToe()
{
    const [currentPlayer, switchPlayer] = useState(0)
    const [boardState, updateBoard] = useState(Array(9).fill(""))
    const [winner, setWinner] = useState(-1)

    const playAtIndex = (index : number) =>
    {
        if (winner != -1)
            return
        console.log("playing at index " + index)
        let newBoard = Array(9).fill("")
        for (let i = 0; i < 9; i++)
            newBoard[i] = boardState[i]
        if (newBoard[index] == "")
        {
            if (currentPlayer == 0)
            {
                newBoard[index] = "X"
                switchPlayer(1)
            }
            else
            {
                newBoard[index] = "O"
                switchPlayer(0)
            }
            checkWinner(newBoard)
            updateBoard(newBoard)
        }
    }

    const checkWinner = (boardState : Array<string>) =>
    {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6] 
        ]
        for (let line of lines)
        {
            for (let i = 0; i < 3; i++)
            {
                if (boardState[line[0]] == boardState[line[1]] && boardState[line[1]] == boardState[line[2]])
                {
                    if (boardState[line[0]] == "X")
                    {
                        setWinner(0)
                        return ;
                    }
                    else if (boardState[line[1]] == "O")
                    {
                        setWinner(1)
                        return ;
                    }
                }
            }
        }
        let filledTiles = 0
        for (let tile of boardState)
        {
            if (tile != "")
                filledTiles++
        }
        if (filledTiles == 9)
            setWinner(2)
    }

    let winZone = null
    switch (winner)
    {
        case (0):
            winZone = <div>Player "X" won !</div>
            break 
        case (1):
            winZone = <div>Player "O" won !</div>
            break
        case (2):
            winZone = <div>Draw !</div>
            break
    }
    const reset = () =>
    {
        updateBoard(Array(9).fill(""))
        setWinner(-1)
    }
    return <>
        <Board state={boardState} playFunction={playAtIndex}/>
        {winZone}
        <button onClick={reset}>Reset Game</button>
    </>
}