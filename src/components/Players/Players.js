import { useState } from 'react';
import usePlayers from '../../hooks/usePlayers';
import useOrderBy from '../../hooks/useOrderBy';

import Input from '../Input/Input';
import Table from './Table/Table';
import TableItem from './TableItem/TableItem';

function Players() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const { orderBy, setOrderBy, toggleDirection, direction } =
    useOrderBy('shirt_number');
  const { isLoading, error, data } = usePlayers(search, {
    direction,
    prop: orderBy,
  });

  const onInputChange = (e) => setInputValue(e.target.value);
  const onInputBlur = (e) => setSearch(e.target.value);
  const onChangeOrder = (order) =>
    order === orderBy ? toggleDirection() : setOrderBy(order);

  if (error)
    return (
      <p>Houve um erro ao carregar a lista de jogadores, tente novamente.</p>
    );

  return (
    <section className="players-list">
      <Input
        id="search"
        name="name"
        value={inputValue}
        placeholder="Busca"
        onChange={onInputChange}
        onBlur={onInputBlur}
      />
      {isLoading ? (
        <p>Atualizando lista de jogadores...</p>
      ) : (
        <Table
          order={orderBy}
          direction={direction}
          onChangeOrder={onChangeOrder}
        >
          {data.players.map((player) => {
            const { shirt_number, id, name, matches, goals } = player;
            return (
              <TableItem
                key={player.id}
                id={id}
                shirt={shirt_number}
                name={name}
                matches={matches}
                goals={goals}
              />
            );
          })}
        </Table>
      )}
    </section>
  );
}

export default Players;
