import aStar from "./aStar";
import dijkstra from "./dijkstra";

const algorithmId = {
    dijkstra: 'dijkstra',
    aStar: 'aStar'
};

export function mapAlgorithmIdToFunc(id) {
    switch (id) {
        case algorithmId.dijkstra: return dijkstra;
        case algorithmId.aStar: return aStar;
        default: return;
    }
}

export function mapAlgorithmIdToTitle(id) {
    switch (id) {
        case algorithmId.dijkstra: return 'Dijkstra';
        case algorithmId.aStar: return 'A*';
        default: return '';
    }
}

export default algorithmId;