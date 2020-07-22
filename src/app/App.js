import React from 'react';
import Nodes from '../features/nodes/Nodes.jsx';
import Container from '../shared/Container';
import TitleHeader from '../shared/TitleHeader';
import ToolBar from '../features/tools/ToolBar.jsx';
import FullscreenButton from '../features/tools/FullscreenButton.jsx';
import OperationsPanel from '../features/tools/OperationsPanel.jsx';
import { useSelector } from 'react-redux';

function App() {
  const fullscreen = useSelector(({ tools }) => tools.fullscreen);
  return (
    <Container>
      {fullscreen || <TitleHeader>Pathfinding tool</TitleHeader>}
      <ToolBar />
      <Nodes />
      <OperationsPanel />
      <FullscreenButton />
    </Container>
  );
}

export default App;
