import '../public/assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import { useState } from 'react';
import WheaterWeekly from './components/WheaterWeekly';
import NotFound from './components/NotFound';
import WheaterNav from './components/WheaterNav';
import WheaterDefault from './components/WheaterDefault';

function App() {
  const [searched, setSearched] = useState('');
  const [nation, setNation] = useState('');
  const [id, setId] = useState('');
  const handleResearch = (data) => {
    setSearched(data);
  };
  const handleNation = (data) => {
    setNation(data);
  };
  const handleId = (data) => {
    setId(data);
  };
  console.log(nation);
  return (
    <BrowserRouter>
      <Container fluid className='App p-0 vh-100'>
        <header>
          <WheaterNav
            handleResearch={handleResearch}
            handleNation={handleNation}
            id={id}
          />
        </header>
        <main className='bg-dark'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Welcome></Welcome>
                  <WheaterDefault
                    searched={searched}
                    nation={nation}
                    handleId={handleId}
                  ></WheaterDefault>
                </>
              }
            ></Route>
            <Route
              path='/details/:city'
              element={
                <WheaterWeekly
                  handleResearch={handleResearch}
                  handleNation={handleNation}
                />
              }
            ></Route>
            <Route
              path='*'
              element={
                <NotFound
                  handleResearch={handleResearch}
                  handleNation={handleNation}
                />
              }
            ></Route>
          </Routes>
        </main>
      </Container>
    </BrowserRouter>
  );
}

export default App;
