import Action from "./Components/Action";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Table from "./Components/Table";
import "../src/App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Action />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
