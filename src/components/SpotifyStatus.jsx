import { useEffect } from 'react';
import { useState } from 'react';
import { BsSpotify } from 'react-icons/bs';
import styled from 'styled-components';
import { Container } from '../styles/globalStyles';

const SpotifyStatus = () => {
  const [song, setSong] = useState(null);
  const [isPlaying, setisPlaying] = useState(false);

  useEffect(() => {
    const getCurrentSong = async () => {
      try {
        let res = await fetch(
          'https://api.spotify.com/v1/me/player/currently-playing?market=ES',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization:
                'Bearer BQC_i6UZotCwsNQTb1pkHwCo_v_KalDSsJvYpUbW4PVXjkLh42x-TCF2GsBWDPSu4u0VUZfr9Ph7netFvkRv34vkODSVME0Yaug5IJFclihr-yLVbfnSy0ok3LNxtnkvQMT8DvdFxCwgef3kfQ52ypzrX40LzEfOA_kiX6392gOAai8GcKu8_hnWgHYrZpRI8YQfhndQ',
            },
          }
        );
        const data = await res.json();

        setisPlaying(data.is_playing);

        setSong({
          title: data?.item.name,
          artist: data?.item.artists[0].name,
          coverImg: data?.item?.album?.images[1].url,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getCurrentSong();
  }, []);

  if (!isPlaying) {
    return (
      <Container>
        <div
          style={{
            margin: '1em 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <BsSpotify color='#1DB954' /> Not Playing - Spotify
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <SpotifyWrapper>
        <SpotifyHeader>
          <BsSpotify color='#1DB954' />{' '}
          <small style={{ textTransform: 'uppercase' }}>
            Listening to spotify
          </small>
        </SpotifyHeader>

        <SongInfo>
          <img src={song?.coverImg} alt={song?.title} />
          <div>
            <h3>{song?.title}</h3>
            <p>by {song?.artist}</p>
          </div>
        </SongInfo>
      </SpotifyWrapper>
    </Container>
  );
};
export default SpotifyStatus;

const SpotifyWrapper = styled.div`
  margin: 2.2em 0;
`;

const SpotifyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SongInfo = styled.div`
  display: flex;
  margin: 1em 0;

  img {
    width: 60px;
    height: 60px;
    margin-right: 1em;
    border-radius: 6px;
  }
`;
