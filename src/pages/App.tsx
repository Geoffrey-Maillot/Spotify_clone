// Import Router
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Component
import Home from './Home';
import Search from './Search';
import Playlist from './Collection/Playlists';
import Podcasts from './Collection/Podcats';
import Artists from './Collection/Artists';
import Albums from './Collection/Albums';
import TraksPlaylist from './Playlist/Playlist';
import LikedTraks from './Collection/LikedTracks';
import GenrePage from './GenrePage';
import Genre from './Collection/Genre';
import Podcast from './Podcast/Podcast';
import Episode from './Episode';

//Todo : Faire une 404
// Todo : Faire un composant pour les headers
// Todo : Pour les headers, conditionner l'image du background ou la couleur et l'image de gauche si il y en une

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="collection">
        <Route
          index
          element={<Navigate to="/collection/playlists" replace />}
        />
        <Route path="playlists" element={<Playlist />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="artists" element={<Artists />} />
        <Route path="albums" element={<Albums />} />
        <Route path="tracks" element={<LikedTraks />} />
      </Route>
      <Route path="playlist/:id" element={<TraksPlaylist />} />
      <Route path="genrepage/:genre" element={<GenrePage />} />
      <Route path="genre/:genre" element={<Genre />} />
      <Route path="show/:id" element={<Podcast />} />
      <Route path="episode/:id" element={<Episode />} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
