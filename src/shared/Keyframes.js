import { keyframes } from 'styled-components';

export const scaleKeyframe = keyframes`
  0% {
    transform: scale(1.4, 1.4);
    z-index: 2;
  }
  100%{
    transform: scale(1, 1);
    z-index: 0;
  }
`;

export const visitedNodeKeyframe = keyframes`
  0% {
    background-color: var(--visited-start-clr);
    transform: scale(0.4, 0.4);
    border-radius: 100%;
    z-index: 2;
  }
  50% {
    background-color: var(--visited-progress-clr);
    transform: scale(1, 1);
    border-radius: 0;
    z-index: 2;
  }
  100% {
    background-color: var(--visited-node-clr);
    z-index: 0;
  }
`;
