import React from 'react';
import './App.css';
import Nodes from '../features/nodes/Nodes.jsx';
import ResetButton from '../features/nodes/ResetButton';
import Container from '../shared/Container';
import TitleHeader from '../shared/TitleHeader';

function App() {
  return (
    <Container>
      <TitleHeader>Pathfinding tool</TitleHeader>
      <Nodes animationFrameDuration={10} />
      <ResetButton />
    </Container>
  );
}

export default App;
