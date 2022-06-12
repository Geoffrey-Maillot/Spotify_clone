// Import Router
import { Routes, Route } from 'react-router-dom';

// Import Component
import Home from './Home';

//Todo : Faire une 404

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 
      <Route path="search" element={<Home />} />
      <Route path="collection">
        <Route index element={<Home />} />
        <Route path="playlists" element={<Home />} />
        <Route path="podcasts" element={<Home />} />
        <Route path="artists" element={<Home />} />
        <Route path="albums" element={<Home />} />
      </Route>
*/}
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
