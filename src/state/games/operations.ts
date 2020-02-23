import { Dispatch } from 'redux'
import axios from 'axios'
import State from './state'
import actions from './actions'

type Alias = {
  games: State['games']
  form: State['form']
  game: State['games'][0]
}

const getGames = () => {
  return (dispatch: Dispatch, _getState: () => State) => {
    axios.get('http://localhost:3001/games')
      .then((res) => {
        dispatch(actions.getGames.done({result: res.data as Alias['games'], params: {}}))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

const createGame = (form: Alias['form']) => {
  return (dispatch: Dispatch, _getState: () => State) => {
    axios.post('http://localhost:3001/games', { ...form })
      .then((res) => {
        dispatch(actions.createGame.done({result: res.data as Alias['game'], params: {}}))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

export default {
  getGames,
  createGame,
}
