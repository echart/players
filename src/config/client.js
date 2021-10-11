import { QueryClient } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60,
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient: client,
  persistor: localStoragePersistor,
})
