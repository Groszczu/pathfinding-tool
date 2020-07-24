import { basicAStar } from './aStar';
import { dijkstraHeuristic } from './heuristics';

export default function dijkstra(nodes, startNode, endNode) {
  return basicAStar(nodes, startNode, endNode, dijkstraHeuristic);
}
