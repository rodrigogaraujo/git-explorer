import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { Repository } from '../../../Repository'

interface RepositoryItemProps {
  repository: Repository
}

export const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  return (
    <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
      <img src={repository.owner.avatar_url} alt={repository.owner.login} />
      <div>
        <strong>{repository.full_name}</strong>
        <p>{repository.description}</p>
      </div>
      <FiChevronRight size={30} />
    </Link>
  )
}
