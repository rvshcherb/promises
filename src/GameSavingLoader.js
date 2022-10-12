import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    const value = data.then((result) => json(result), (error) => new Error(error));
    return value;
  }
}
