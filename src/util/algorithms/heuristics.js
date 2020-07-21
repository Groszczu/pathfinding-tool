import NodeTypes from '../../features/nodes/NodeTypes';
import { neighbors, distance } from '../../features/nodes/nodeHelpers';

export const dijkstraHeuristic = {
    comparer: (a, b) => a.distanceFromStart - b.distanceFromStart,
    addHeuristics: (nodes, startNode, endNode) => nodes.map(node => ({
        ...node,
        distanceFromStart: node.type === NodeTypes.start ? 0 : Infinity,
        previousNode: null
    })),
    map: (currentNode, testedNode) => {
        const calculatedDistance = currentNode.distanceFromStart + 1;
        return neighbors(currentNode, testedNode) ?
            {
                ...testedNode,
                distanceFromStart: Math.min(testedNode.distanceFromStart, calculatedDistance),
                previousNode: testedNode.distanceFromStart > calculatedDistance ? currentNode : testedNode.previousNode
            }
            :
            testedNode;
    },
    endCondition: (currentNode) => currentNode.distanceFromStart === Infinity
};

export const aStartHeuristic = {
    comparer: (a, b) => a.combinedDistance - b.combinedDistance,
    addHeuristics: (nodes, startNode, endNode) => nodes.map(node => {
        const isStartNode = node.type === NodeTypes.start;
        const distanceFromStart = isStartNode ? 0 : Infinity;
        const distanceToEnd = Math.ceil(distance(node, endNode));
        return {
            ...node,
            distanceFromStart,
            distanceToEnd,
            combinedDistance: distanceFromStart + distanceToEnd,
            previousNode: null
        }
    }),
    map: (currentNode, testedNode) => {
        const calculatedDistanceFromStart = currentNode.distanceFromStart + 1;
        const calculatedCombinedDistance = calculatedDistanceFromStart + testedNode.distanceToEnd;
        return neighbors(currentNode, testedNode) ?
            {
                ...testedNode,
                distanceFromStart: Math.min(testedNode.distanceFromStart, calculatedDistanceFromStart),
                combinedDistance: Math.min(testedNode.combinedDistance, calculatedCombinedDistance),
                previousNode: testedNode.distanceFromStart > calculatedCombinedDistance ? currentNode : testedNode.previousNode
            }
            :
            testedNode;
    },
    endCondition: (currentNode) => currentNode.combinedDistance === Infinity
}

export const greedyHeuristic = {
    comparer: (a, b) => {
       return (a.distanceFromStart === Infinity ? Infinity : 1) * a.distanceToEnd - 
       (b.distanceFromStart === Infinity ? Infinity : 1) * b.distanceToEnd;
    },
    addHeuristics: (nodes, startNode, endNode) => nodes.map(node => {
        const isStartNode = node.type === NodeTypes.start;
        const distanceFromStart = isStartNode ? 0 : Infinity;
        const distanceToEnd = Math.ceil(distance(node, endNode));
        return {
            ...node,
            distanceFromStart,
            distanceToEnd,
            previousNode: null
        }
    }),
    map: (currentNode, testedNode) => {
        const calculatedDistanceFromStart = currentNode.distanceFromStart + 1;
        return neighbors(currentNode, testedNode) ?
            {
                ...testedNode,
                distanceFromStart: Math.min(testedNode.distanceFromStart, calculatedDistanceFromStart),
                previousNode: testedNode.distanceFromStart > calculatedDistanceFromStart ? currentNode : testedNode.previousNode
            }
            :
            testedNode;
    },
    endCondition: (currentNode) => currentNode.distanceFromStart === Infinity
}