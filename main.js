

const rootElement = document.getElementById("root");

function TimeboxEditor() {
    return (
        <div className="TimeboxEditor inactive">
            <label>Co robisz? <input disabled value="Uczę się skrótów klawiszowych" /></label>
            <br />
            <label>Ile minut? <input disabled value="25" /></label>
        </div>
    )
}


const Clock = () => {

    return (
        <h2 className="Clock">Pozostało: <span>30:25</span></h2>
    )

}

function ProgressBar() {
    return (
        <div className="ProgressBar">
            <div></div>
        </div>
    )
}

const Buttons = () => {
    return (
        <>
            <button>Start</button>
            <button>Stop</button>
            <button>Pauzuj</button>
        </>
    )
}
class Timebox extends React.Component {
    render() {
        return (
            <div className="Timebox">
                <h1>Uczę się skrótów klawiszowych</h1>
                <Clock />
                <ProgressBar />
                <Buttons />
            </div>
        )
    }

}


class App extends React.Component {

    render() {

        return (
            <>
                <h1>Kurs Reacta Tydzień 2</h1>
                <hr />
                <div className="App">
                    <TimeboxEditor />
                    <Timebox />
                </div>
            </>
        )
    }
};

ReactDOM.render(<App />, rootElement);

