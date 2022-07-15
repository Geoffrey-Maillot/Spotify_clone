// Import Router
import { useLocation } from "react-router-dom";

// Import Component
import H2 from "../Typo/H2/H2";

interface Props {
  artist: string;
}

// == Component =>
const DiscographyHeader = ({artist}: Props) => {
  const location = useLocation()
  const path = location.pathname.split('/').pop()
  console.log(path)
return (
  <header>
  <H2 label={artist} size="xl2"/>
  <div>
    <div>
      <select  >
      <option value="all">Tous</option>
      <option value="album">Albums</option>
      <option value="single">Singles et EP</option>
      <option value="compilation">Compiles</option>
    </select>
    </div>
  </div>
  </header>
)};

export default DiscographyHeader;
