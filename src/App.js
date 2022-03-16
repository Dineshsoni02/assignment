import "./App.scss";
import CompanyPage from "./components/companyPage/CompanyPage";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="bottomDiv">

    
      <CompanyPage />
      <CompanyPage />
      <CompanyPage />
      </div>
    </div>
  );
}

export default App;
