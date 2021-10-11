import { request } from 'graphql-request';
import { useQuery } from 'react-query';

import { endpoint } from '../config/config';

function useCustomQuery(id, query) {
  const { data, isLoading, error } = useQuery(id, () => {
    return request(endpoint, query);
  });

  return { data, isLoading, error };
}

export default useCustomQuery;
