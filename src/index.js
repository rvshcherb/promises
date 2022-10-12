import './styles/scss/main.scss';

import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => JSON.parse(saving))
  .catch((error) => new Error(error));
