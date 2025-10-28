import { Main } from '../../pages/main/main';
import { ICard } from '../../types/cards';

interface AppProps {
  cards: ICard[];
}

export const App = ({ cards }: AppProps) => {
  return (
    <>
      <Main cards={cards} />
    </>
  );
};
