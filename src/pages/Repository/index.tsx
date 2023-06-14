import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { RepositoryInfo, Issues, ButtonLikeOrNot } from './styles'
import api from '../../services/api'
import Header from '../../components/Header'

interface RepositoryParams {
  repository: string
}

export interface Repository {
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  url: string
  owner: {
    login: string
    avatar_url: string
  }
}

export interface Issue {
  id: string
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()
  const [repository, setRepository] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  const storedItems = localStorage.getItem('items')
  const [itemsLiked, setItemsLiked] = useState<string[]>(storedItems ? JSON.parse(storedItems) : [])

  const handleAddOrRemoveItem = (item: string) => {
    const itemIndex = itemsLiked.indexOf(item)

    if (itemIndex === -1) {
      // Item não existe na lista, adiciona
      const updatedItems = [...itemsLiked, item]
      setItemsLiked(updatedItems)
      localStorage.setItem('items', JSON.stringify(updatedItems))
    } else {
      // Item já existe na lista, remove
      const updatedItems = itemsLiked.filter((_, index: number) => index !== itemIndex)
      setItemsLiked(updatedItems)
      localStorage.setItem('itemsLiked', JSON.stringify(updatedItems))
    }
  }

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((resp) => {
      setRepository(resp.data)
    })
    api.get(`/repos/${params.repository}/issues`).then((resp) => {
      setIssues(resp.data)
    })
  }, [params.repository])

  return (
    <>
      <Header withGoBack />
      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Star</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
            <li style={{ alignSelf: 'flex-start', marginLeft: 'auto' }}>
              <ButtonLikeOrNot onClick={() => handleAddOrRemoveItem(params.repository)}>
                {itemsLiked?.find((it) => it === params.repository) ? (
                  <AiFillHeart size={30} color='red' />
                ) : (
                  <AiOutlineHeart size={30} />
                )}
              </ButtonLikeOrNot>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} target='_blank' rel='noopener noreferrer' href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={30} />
          </a>
        ))}
      </Issues>
    </>
  )
}

export default Repository
