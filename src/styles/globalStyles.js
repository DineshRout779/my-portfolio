import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';

// main container
export const Container = styled.div`
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;

  li a {
    margin-right: 2em;
    padding: 0.2em 0;
    color: var(--link-color);
    border-radius: 4px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    /* hover border animation */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background-color: var(--link-active-color);
      transition: width 0.4s ease-in-out;
    }

    :hover {
      color: var(--link-active-color);
    }

    :hover::after {
      width: 100%;
    }
  }

  li a.active {
    color: var(--link-active-color);
  }

  li a.active::after {
    width: 100%;
    background-color: var(--link-active-color);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const swipe = keyframes`
 0% {
    left: -64px;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  100% {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export const NormalLink = styled.a`
  background-color: var(--accent-blue);
  text-decoration: none;
  padding: 0.6em 1.2em;
  border-radius: 4px;
  color: white;
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: white;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(30deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    /* animation-name: ${swipe};
    animation-duration: 2s;
    animation-iteration-count: infinite; */
  }

  svg {
    margin-left: 8px;
  }

  :hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export const HighlightedLink = styled.a`
  background-color: var(--accent-blue);
  text-decoration: none;
  padding: 0.6em 1.2em;
  border-radius: 4px;
  color: white;
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: white;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(30deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    animation-name: ${swipe};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  svg {
    margin-left: 8px;
  }

  /* :hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  } */
`;

export const ButtonLink = styled(Link)`
  background-color: var(--accent-blue);
  text-decoration: none;
  padding: 0.6em 1.2em;
  border-radius: 4px;
  color: white;
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: white;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(30deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  svg {
    margin-left: 8px;
  }

  :hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  margin: 0 auto;
  margin-bottom: 1em;
`;

export const TransparentButton = styled(Link)`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 100px;
  margin: 0 auto;
  width: fit-content;
  padding: 0.5em 1.5em;
  text-decoration: none;
  color: var(--para-color);

  svg {
    margin-left: 8px;
    font-size: 0.8em;
  }
`;

// styled heading / section heading
export const SectionTitle = styled.h1`
  font-weight: 600;
  position: relative;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  margin-top: 1em;

  /* &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 16px;
    background-color: var(--underline);
    z-index: -1;
  } */
`;
