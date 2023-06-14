import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { Repository } from '../../../Repository'
import api from '../../../../services/api'

interface RepositoryItemProps {
  item: string
}

export const RepositoryLikedItem = ({ item }: RepositoryItemProps) => {
  const [repository, setRepository] = useState<Repository>()

  useEffect(() => {
    api.get(`/repos/${item}`).then((resp) => {
      setRepository(resp.data)
    })
  }, [item])

  return (
    <Link key={repository?.full_name} to={`/repository/${repository?.full_name}`}>
      <img src={repository?.owner.avatar_url} alt={repository?.owner.login} />
      <div>
        <strong>{repository?.full_name}</strong>
        <p>{repository?.description}</p>
      </div>
      <FiChevronRight size={30} />
    </Link>
  )
}
