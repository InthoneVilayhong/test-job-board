import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header name="The Job Board" />
            <div className="container">
                <div>
                    <Jobs />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
