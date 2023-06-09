// import './App.css';
import { MDBContainer } from 'mdb-react-ui-kit';
import CardRecomended from './components/CardRecomended';
import CardWithQuestion from './components/CardWithQuestion';
import EndSurvey from './components/EndSurvey';
import PageNotExist from './components/PageNotExist';

import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App() {

  return (



      <Router>
        <Routes>
          <Route path="/:code" element={<CardWithQuestion />} />
          <Route path="/product" element={<CardRecomended />} />
          <Route path="/end" element={<EndSurvey/>} />
          <Route path="/" element={<PageNotExist/>} />
        </Routes>
      </Router>



  );
}

export default App;
