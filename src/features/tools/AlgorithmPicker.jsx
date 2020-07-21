import React from 'react';
import algorithmId, { mapAlgorithmIdToTitle } from '../../util/algorithms/algorithmId';
import { useDispatch, useSelector } from 'react-redux';
import { changePathfindingAlgorithm } from './toolsSlice';
import styled from 'styled-components';
import InlineFlex from '../../shared/InlineFlex';
import Label from '../../shared/Label';

const Select = styled.select`
    width: 70%;
    max-width: 350px;
    font-size: 1.4rem;
`;

const AlgorithmPicker = () => {
    const selectedAlgorithm = useSelector(({ tools }) => tools.pathfindingAlgorithm);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(changePathfindingAlgorithm(e.target.value));
    }
    return (
        <InlineFlex direction='column'>
            <Label>Algorithm</Label>
            <Select onChange={handleChange} value={selectedAlgorithm}>
                {Object.entries(algorithmId).map(([key, value]) =>
                    <option key={key} value={value}>{mapAlgorithmIdToTitle(key)}</option>)}
            </Select>
        </InlineFlex>
    );
};

export default AlgorithmPicker;