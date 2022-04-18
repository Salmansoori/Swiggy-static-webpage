import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Content />
              <Footer />
            </>}>
          </Route>
          <Route path="/SignIn" element={
            <>
              <h1>please SignIn</h1>
              <button><Link to="/">Back</Link></button>
            </>
          }>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
