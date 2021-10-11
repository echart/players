import propTypes from 'prop-types';
import { gql } from 'graphql-request';
import useQuery from './useQuery';

export const getPlayersQuery = (search, order) => {
  const searchBy = `"%${search}%"`;
  return gql`
    query PlayersQuery {
      players(order_by: { ${order.prop}: ${order.direction} }, where: { name: { _ilike: ${searchBy} } }) {
        name
        matches
        id
        goals
        shirt_number
      }
    }
  `;
};

const usePlayers = (search = '', order = { direction: 'asc', prop: 'name' }) =>
  useQuery(['players', search, order.prop, order.direction], getPlayersQuery(search, order));

usePlayers.propTypes = {
  search: propTypes.string,
  order: propTypes.shape({
    direction: propTypes.string,
    prop: propTypes.string,
  }),
};

export default usePlayers;
