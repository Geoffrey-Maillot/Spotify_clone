import { Routes, Route } from 'react-router-dom';
import Home from '../../component/Home/Home';

//Todo : Faire une 404

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Home />} />
      <Route path="collection">
        <Route index element={<Home />} />
        <Route path="playlists" element={<Home />} />
        <Route path="podcats" element={<Home />} />
        <Route path="artists" element={<Home />} />
        <Route path="albums" element={<Home />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
