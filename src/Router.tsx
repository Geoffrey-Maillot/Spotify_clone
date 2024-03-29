// Import Router
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Mobx
import { observer } from 'mobx-react-lite';
import { useStores } from './state/storeContext';

// Import Component
import Home from './pages/Home';
import Search from './pages/Search';
import Playlist from './pages/Collection/Playlists';
import Podcasts from './pages/Collection/Podcats';
import Artists from './pages/Collection/Artists';
import Albums from './pages/Collection/Albums';
import TraksPlaylist from './pages/Playlist';
import LikedTraks from './pages/Collection/LikedTracks';
import GenrePage from './pages/GenrePage';
import Section from './pages/Section';
import Podcast from './pages/Podcast';
import Episode from './pages/Episode';
import Episodes from './pages/Collection/Episodes';
import Artist from './pages/Artist';
import Discography from './pages/Discography';
import Profil from './pages/Profil';
import Login from './pages/Login';
import ProtectedRoute from './component/UtilsComponents/ProtectedRoute';

//Todo : Faire une 404
// Todo : Faire un composant pour les headers
// Todo : Pour les headers, conditionner l'image du background ou la couleur et l'image de gauche si il y en une

const Router = observer(() => {
  const { authStore } = useStores();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedRoute isAllowed={!authStore.getAuth} redirectionPath="/">
            <Login />
          </ProtectedRoute>
        }
      />
      <Route element={<ProtectedRoute isAllowed={authStore.getAuth} />}>
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
          <Route path="episodes" element={<Episodes />} />
        </Route>
        <Route path="playlist/:id" element={<TraksPlaylist />} />
        <Route path="genrepage/:genre" element={<GenrePage />} />
        <Route path="section/:id" element={<Section />} />
        <Route path="genre/:id" element={<Section />} />
        <Route path="show/:id" element={<Podcast />} />
        <Route path="episode/:id" element={<Episode />} />
        <Route path="artist/:id" element={<Artist />} />
        <Route
          path="artist/:id/discography/:albumType"
          element={<Discography />}
        />
        <Route path="user/:id" element={<Profil />} />
      </Route>

      <Route path="*" element={<div>Error Page</div>} />
    </Routes>
  );
});

export default Router;
