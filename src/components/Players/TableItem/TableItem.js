import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import './TableItem.scss';

function Item({ id, shirt, name, goals = 0, matches = 0 }) {
  const saveToStorage = () =>
    localStorage.setItem('player', JSON.stringify({
      id,
      shirt,
      name,
      goals,
      matches,
    }));

  return (
    <tr className="row" data-testid="row">
      <td>
        <span className="shirt">{shirt}</span>
      </td>
      <td className="name">{name}</td>
      <td className="goals">{goals}</td>
      <td className="matches">{matches}</td>
      <td className="action">
        <Link onClick={saveToStorage} to={`/players/${id}/edit`}>
          Editar
        </Link>
      </td>
    </tr>
  );
}

Item.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  shirt: propTypes.number.isRequired,
  goals: propTypes.number,
  games: propTypes.number,
};

export default Item;
