import React from 'react';
import Nodes from '../features/nodes/Nodes.jsx';
import Container from '../shared/Container';
import TitleHeader from '../shared/TitleHeader';
import ToolBar from '../features/tools/ToolBar.jsx';
import FullscreenButton from '../features/tools/FullscreenButton.jsx';

function App() {
  return (
    <Container>
      <TitleHeader>Pathfinding tool</TitleHeader>
      <ToolBar />
      <Nodes animationFrameDuration={20} />
      <FullscreenButton />
    </Container>
  );
}

export default App;
