import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landing-page";
import AppHeader from "./app-header";

function App() {

  return (
    <div className="App">
      <AppHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
