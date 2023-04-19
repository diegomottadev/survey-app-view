// import './App.css';
import CardRecomended from './components/CardRecomended';
import CardWithQuestion from './components/CardWithQuestion';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/:id" element={<CardWithQuestion />} />
        <Route path="/product" element={<CardRecomended />} />

      </Routes>
      </Router>
  );
}

export default App;
