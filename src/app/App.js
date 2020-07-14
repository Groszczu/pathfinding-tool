import React from 'react';
import Nodes from '../features/nodes/Nodes.jsx';
import ResetButton from '../features/nodes/ResetButton';
import Container from '../shared/Container';
import TitleHeader from '../shared/TitleHeader';
import ToolBar from '../features/tools/ToolBar.jsx';
import ClearButton from '../features/nodes/ClearButton.jsx';
import FullscreenButton from '../features/tools/FullscreenButton.jsx';

function App() {
  return (
    <Container>
      <TitleHeader>Pathfinding tool</TitleHeader>
      <ToolBar />
      <Nodes animationFrameDuration={5} />
      <ResetButton />
      <ClearButton />
      <FullscreenButton />
    </Container>
  );
}

export default App;
