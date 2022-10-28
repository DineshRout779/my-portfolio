import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsSpotify } from 'react-icons/bs';
import styled from 'styled-components';
import { Container } from '../styles/globalStyles';

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
          <BsSpotify color='#1DB954' />{' '}
          <small style={{ textTransform: 'uppercase' }}>
            Listening to spotify
          </small>
        </SpotifyHeader>

        <SongInfo>
          <img src={song.albumImageUrl} alt={song.title} />
          <div>
            <h3>{song.title}</h3>
            <p>by {song.artist}</p>
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

const SongInfo = styled.a`
  display: flex;
  margin: 1em 0;

  img {
    width: 60px;
    height: 60px;
    margin-right: 1em;
    border-radius: 6px;
  }
`;
