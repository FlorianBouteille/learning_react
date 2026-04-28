type pageProps =
{
    page: string,
    switchPage : (p : string) => void
}

export function Index({switchPage} : pageProps)
{
    return <>
        <nav className = "menu-container">
            <div className="button" onClick={() => switchPage("weedle")}>Weddle</div>
            <div className="button" onClick={() => switchPage("squares")}>Squares</div>
            <div className="button" onClick={() => switchPage("poke")}>Pokemon</div>
            <div className="button" onClick={() => switchPage("accept")}>Accept</div>
            <div className="button" onClick={() => switchPage("myMarket")}>custom Market</div>
            <div className="button" onClick={() => switchPage("cleanMarket")}>clean Market</div>
            <div className="button" onClick={() => switchPage("planets")}>Planets</div>
            <div className="button" onClick={() => switchPage("tictactoe")}>Tic Tac Toe</div>
            <div className="button" onClick={() => switchPage("timer")}>Timer</div>
        </nav>
    </>
}