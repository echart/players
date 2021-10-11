import { gql, request } from 'graphql-request';
import { useMutation } from 'react-query';
import { endpoint } from '../config/config';

const Mutation = gql`
  mutation UpdatePlayer(
    $id: Int!
    $goals: Int!
    $matches: Int!
    $shirt_number: Int!
  ) {
    update_players_by_pk(
      _set: { goals: $goals, matches: $matches, shirt_number: $shirt_number }
      pk_columns: { id: $id }
    ) {
      goals
      id
      matches
      name
      shirt_number
    }
  }
`;

function useEditPlayer({ onSave }) {
  const player = JSON.parse(localStorage.getItem('player'));
  const clear = () => localStorage.removeItem('player');
  const mutation = useMutation((formData) => {
    return request(endpoint, Mutation, {
      ...formData,
      id: player.id,
    });
  });

  const save = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const obj = {
      id: player.id,
      goals: form.get('goals'),
      matches: form.get('matches'),
      shirt_number: form.get('shirt_number'),
    }
    mutation.mutate(obj, {
      onSuccess: onSave,
    });
  };
  return { player, clear, save, mutation };
}

export default useEditPlayer;
