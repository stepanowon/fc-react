import { Link } from "react-router-dom";
import { SongType } from "../App";

type Props = { songs: SongType[] };

const SongList = (props: Props) => {
  let list = props.songs.map((song) => {
    return (
      <li className="list-group-item" key={song.id}>
        <Link to={`/songs/${song.id}`} style={{ textDecoration: "none" }}>
          {song.title} ( {song.musician} )
        </Link>
      </li>
    );
  });
  return (
    <div>
      <h2 className="m-5">Song List</h2>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default SongList;
