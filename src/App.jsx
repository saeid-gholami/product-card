import "./App.css"
import Header from "./Header/Header";
import Main from "./Main/Mian";


function App() {
    return (
        <div className="container">
            <Header />
            <div className="Card__wrapper">
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
            </div>
        </div>
    )
}

export default App;