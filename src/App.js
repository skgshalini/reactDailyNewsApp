import { React, useState } from 'react'
import './App.css';
import NavBar from './NavBar';
import News from './News';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const pageSize = 10
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar
          color='red'
          progress={progress}
          height={4}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" key="general" />} />
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" key="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" key="entertainment" />} />
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" key="general" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" key="health" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" key="science" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" key="sports" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" key="technology" />} />
        </Routes>
      </Router>
    </>
  );

}

export default App
