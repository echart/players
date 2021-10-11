import propTypes from 'prop-types';
import { Fragment } from 'react';
import Button from '../../Button/Button';
import Arrows from '../../icons/Arrows';
import './Table.scss'

function Table({ children, onChangeOrder = () => null, order, direction }) {

  const Item = ({ label, orderBy }) => (
    <Button className="btn-order" type="button" onClick={() => onChangeOrder(orderBy)}>
      <Fragment>
        {label}
        <span>{Arrows(order === orderBy, direction)}</span>
      </Fragment>
    </Button>
  );

  return (
    <table className="table table-players" data-testid="table-players">
      <thead>
        <tr>
          <th></th>
          <th>
            <Item label='Jogador' orderBy="name" />
          </th>
          <th>
            <Item label='Gols' orderBy="goals" />
          </th>
          <th>
            <Item label='Partidas' orderBy="matches" />
          </th>
          <th className="action">Ações</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

Table.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.element),
    propTypes.element,
  ]).isRequired,
  onChangeOrder: propTypes.func.isRequired,
  order: propTypes.oneOf(['name', 'shirt_number', 'goals', 'matches']).isRequired,
  direction: propTypes.oneOf(['asc', 'desc']).isRequired,
};

export default Table;
