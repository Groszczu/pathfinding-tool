import { basicAStar } from './aStar';
import { greedyHeuristic } from './heuristics';

export default function greedy(nodes, startNode, endNode) {
  return basicAStar(nodes, startNode, endNode, greedyHeuristic);
}
