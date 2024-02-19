import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Youtube from "react-youtube";
import { SongType } from "../App";
type PropsType = { songs: SongType[] };
type SongParam = { id: string };

const Player = (props: PropsType) => {
  const params = useParams<SongParam>();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("");

  useEffect(() => {
    const id = params.id ? parseInt(params.id, 10) : 0;
    const song = props.songs.find((song) => song.id === id);
    if (song) {
      setTitle(song?.title ? song.title : "");
      setYoutubeLink(song?.youtube_link ? song.youtube_link : "");
    } else {
      navigate("/songs");
    }
  });

  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link className="menu" to="/songs">
            <span className="float-start badge bg-secondary pointer">X</span>
          </Link>
          <span className="title">&nbsp;&nbsp;&nbsp;{title}</span>
        </div>
        <div className="player">
          <div>
            <Youtube videoId={youtubeLink} opts={{ width: "320", height: "240", playerVars: { autoplay: 1 } }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
