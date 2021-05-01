import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [trackUri]);

  if (!accessToken) return null;
console.log('trackUri', trackUri);
  return (
    <div>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}
        play={play}
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
      />
    </div>
  );
}
