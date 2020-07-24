import React from 'react';
import algorithmId from '../../util/algorithms/algorithmId';
import { useDispatch, useSelector } from 'react-redux';
import { setPathfindingAlgorithm } from './toolsSlice';
import styled from 'styled-components';
import InlineFlex from '../../shared/InlineFlex';
import Label from '../../shared/Label';

const Select = styled.select`
  width: 90%;
  color: var(--text-clr);
  border-radius: 5px;
  border: 3px solid black;
  font-size: inherit;
  padding: 0.2em 0.4em;
  background-color: var(--empty-node-clr);
`;

const Option = styled.option`
  background-color: ${(props) =>
    props.isSelected ? 'var(--empty-node-clr)' : 'var(--background-clr)'};
`;

const AlgorithmPicker = () => {
  const selectedAlgorithm = useSelector(
    ({ tools }) => tools.pathfindingAlgorithm
  );
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setPathfindingAlgorithm(e.target.value));
  };
  return (
    <InlineFlex direction='column'>
      <Label htmlFor={'algorithm-select'}>Algorithm</Label>
      <Select
        id={'algorithm-select'}
        onChange={handleChange}
        value={selectedAlgorithm}
      >
        {Object.entries(algorithmId).map(([key, value]) => (
          <Option
            key={key}
            value={value}
            isSelected={selectedAlgorithm === value}
          >
            {value}
          </Option>
        ))}
      </Select>
    </InlineFlex>
  );
};

export default AlgorithmPicker;
