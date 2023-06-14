import React, { useState, FormEvent, useEffect } from 'react'

import api from '../../services/api'

import { Title, Form, Repositories, Error } from './styles'
import { RepositoryItem } from './components/RepositoryItem'
import { Repository } from '../Repository'
import Header from '../../components/Header'

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('')
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>()

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    if (!newRepo) {
      setInputError('Digite o nome do repositório')
      return
    }
    try {
      const response = await api.get(`search/repositories?q=${newRepo}`)
      if (response.data?.items.length) {
        setRepositories(response.data?.items || [])
        setNewRepo('')
        setInputError('')
      } else {
        setNewRepo('')
        setInputError(`Nenhum repositório encontrado com o nome de ${newRepo}`)
      }
    } catch (err) {
      setInputError('Repositório não encontrado')
    }
  }

  useEffect(() => {
    api.get(`/repositories`).then((resp) => {
      setRepositories(resp.data)
    })
  }, [])

  return (
    <>
      <Header withLikes />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder='Digite o nome do repositório'
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories?.map((repository) => (
          <RepositoryItem repository={repository} key={repository.full_name} />
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
