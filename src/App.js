import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Input from './Input'
import 'bootstrap/dist/css/bootstrap.min.css';
import Redirect from './Redirect';
import NotFound from './NotFound';
import BackgroundAnimation from './BackgroundAnimation';

function App() {
  return (
    <div>
      <Router>
        <BackgroundAnimation></BackgroundAnimation>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/:slug" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
