import { Routes, Route } from 'react-router-dom';
import './app.scss';
import Home from '../../component/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
