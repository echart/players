import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

function useRedirect(route) {
  const history = useHistory();

  return () => {
    localStorage.clear();
    history.push(route);
  };
}

useRedirect.propTypes = {
  route: propTypes.string.isRequired,
}

export default useRedirect;
