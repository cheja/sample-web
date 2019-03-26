const GenericDataDisplayer = ({ loading, renderLoader, data  }) => {
  if (loading) {
    return renderLoader();
  }
  return data;
};

export default GenericDataDisplayer;
