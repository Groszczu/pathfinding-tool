import aStar from './aStar';
import dijkstra from './dijkstra';
import greedy from './greedy';

const algorithmId = {
  dijkstra: "Dijkstra's",
  aStar: 'A*',
  greedy: 'Greedy',
};

export function mapAlgorithmIdToFunc(id) {
  switch (id) {
    case algorithmId.dijkstra:
      return dijkstra;
    case algorithmId.aStar:
      return aStar;
    case algorithmId.greedy:
      return greedy;
    default:
      return;
  }
}

export default algorithmId;
