import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsSpotify } from 'react-icons/bs';
import styled from 'styled-components';
import { Container } from '../styles/globalStyles';
import Equilizer from './Equilizer';

const API_URL = process.env.REACT_APP_API;

const SpotifyStatus = () => {
  const [song, setSong] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCurrentTrack = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${API_URL}/getCurrentTrack`);

        const { isPlaying, ...songData } = data;

        setSong(songData.song);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getCurrentTrack();
  }, []);

  if (!song || isLoading) {
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
          <SpotifyHeaderLeft>
            <Equilizer />
            <small style={{ textTransform: 'uppercase' }}>
              Listening to spotify
            </small>
            {/* <BsSpotify color='#1DB954' /> */}
          </SpotifyHeaderLeft>
        </SpotifyHeader>

        <SongInfo href={song.songUrl} target='_blank' rel='noreferrer'>
          <img src={song.albumImageUrl} alt={song.title} />
          <div>
            <h3>{song.title}</h3>
            <p>by {song.artist}</p>
          </div>
        </SongInfo>

        {/* <SpotifyPlayButton href={song.songUrl} target='_blank' rel='noreferrer'>
          Play in <BsSpotify color='#1DB954' />
        </SpotifyPlayButton> */}
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
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const SpotifyHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// const SpotifyPlayButton = styled.a`
//   background-color: var(--bg-color);
//   color: #1dd05d;
//   font-size: 10px;
//   padding: 4px 24px;
//   border-radius: 4px;
//   text-decoration: none;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   text-align: center;
//   font-weight: 600;
//   display: flex;
//   align-items: center;
//   gap: 4px;
// `;

const SongInfo = styled.a`
  display: flex;
  margin: 1em 0;
  text-decoration: none;

  img {
    width: 60px;
    height: 60px;
    margin-right: 1em;
    border-radius: 6px;
  }
`;
