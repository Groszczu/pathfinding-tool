const { useSelector } = require("react-redux")

const useNodesSlice = () => {
  const nodesData = useSelector(({ nodes }) => nodes);

  return nodesData;
};

export default useNodesSlice;