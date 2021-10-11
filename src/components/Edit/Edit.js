import { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import useEditPlayer from '../../hooks/useEditPlayer';
import useRedirect from '../../hooks/useRedirect';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Label from '../Label/Label';

import './Edit.scss';
import '../Button/Button.scss';

function Edit() {
  const redirect = useRedirect('/players');
  const { player, clear, save, mutation } = useEditPlayer({ onSave: redirect });
  const [matches, setGames] = useState(player?.matches);
  const [goals, setGoals] = useState(player?.goals);
  const [shirt, setShirt] = useState(player?.shirt);

  if (!player) return <Redirect to="/players" />;

  return (
    <section className="player-edit">
      <h3>Jogador: {player.name}</h3>

      <form onSubmit={save}>
        <Label label="Número da camisa">
          <Input
            type="number"
            placeholder="Digite o número da camisa"
            id="shirt_number"
            name="shirt_number"
            value={shirt}
            onChange={(e) => setShirt(e.target.value)}
            isRequired
          />
        </Label>
        <Label label="Gols">
          <Input
            type="number"
            placeholder="Digite o número de gols"
            id="goals"
            name="goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            isRequired
          />
        </Label>
        <Label label="Partidas">
          <Input
            type="number"
            placeholder="Digite o número de partidas"
            id="matches"
            name="matches"
            value={matches}
            onChange={(e) => setGames(e.target.value)}
            isRequired
          />
        </Label>
        {mutation.isError && <p>Jogadores devem ter camisetas únicas</p>}
        <div className="actions">
          <Link className="btn btn--secondary" onClick={clear} to="/players/">
            Cancelar
          </Link>
          <Button type="submit" onClick={() => null} isPrimary>
            {mutation.isLoading ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Edit;
