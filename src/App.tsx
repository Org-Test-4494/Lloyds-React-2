import Components from "./components/Components";
import ConditionalPage from "./components/ConditionalPage";
import EventHandling from "./components/EventHandling";
import ExternalDataPage from "./components/ExternalDataPage";
import Home from "./components/Home";
import Props from "./components/Props";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StatePage from "./components/state/StatePage";
import TrainerContainer from "./components/server/TrainerContainer";

function App() {

  console.log("Hi from App!");

  return (
    // to interact with the routing you must be in Link ROUTER
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/components">Components</Link>
          <Link to="/props">Props</Link>
          <Link to="/conditional">Conditionals</Link>
          <Link to="/external">Externals</Link>
          <Link to="/events">Events</Link>
          <Link to="/state">State</Link>
          <Link to="/fetch">Fetch</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/props" element={<Props />} />
        <Route path="/conditional" element={<ConditionalPage />} />
        <Route path="/external" element={<ExternalDataPage />} />
        <Route path="/events" element={<EventHandling />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/fetch" element={<TrainerContainer />} />

      </Routes>

    </Router>
  );
}

export default App