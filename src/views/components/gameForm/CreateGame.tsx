import React from 'react'
import { State } from '../../State'
import { BasicForm } from './BasicForm'
import { CodeForm } from './CodeForm'
import { CodeCommentForm } from './CodeCommentForm'

type Alias = {
  form: State['games']['form']
}

type OwnProps = {
  form: Alias['form']
}

type Handler = {
  handleSetForm: (
    (form: Alias['form']) => void
  )
  handleCreateGame: (
    (form: Alias['form']) => void
  )
}

type Props = OwnProps & Handler

export const CreateGame: React.FC<Props> = props => {
  const onCreateGameFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.handleCreateGame(props.form)
  }

  const _props = {
    form: props.form,
    handleSetForm: props.handleSetForm
  }

  return (
    <form onSubmit={onCreateGameFunc}>
      <BasicForm { ..._props }/>
      <div style={{display: 'inline-block', width: '100%'}}>
        <CodeForm { ..._props }/>
        <CodeCommentForm { ..._props }/>
      </div>
      <label>
        <input type='submit' value="create"/>
      </label>
    </form>
  )
}
