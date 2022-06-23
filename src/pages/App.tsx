// Import Router
import { Routes, Route , Navigate} from 'react-router-dom';

// Import Component
import Home from './Home';
import Search from './Search';
import Playlist from './Collection/Playlist';
import Podcasts from './Collection/Podcats';
import Artists from './Collection/Artists';
import Albums from './Collection/Albums';
import TraksPlaylist from './PlaylistListTracks/TracksPlaylist';

//Todo : Faire une 404

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="collection">
        <Route index element={<Navigate to="/collection/playlists" replace/>} />
        <Route path="playlists" element={<Playlist />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="artists" element={<Artists />} />
        <Route path="albums" element={<Albums />} />
      </Route>
      <Route path='playlist/:id' element={<TraksPlaylist />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
