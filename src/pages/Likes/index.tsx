import React, { useState } from 'react'

import Header from '../../components/Header'
import { Repositories, Title } from '../Dashborard/styles'
import { RepositoryLikedItem } from './components/RepositoryLikedItem'

const Likes: React.FC = () => {
  const storedItems = localStorage.getItem('items')
  const [itemsLiked] = useState<string[]>(storedItems ? JSON.parse(storedItems) : [])

  return (
    <>
      <Header withGoBack />
      <Title>
        {itemsLiked.length ? 'Repositórios que eu curto' : 'Ainda não curti nenhum repositório'}
      </Title>

      <Repositories>
        {itemsLiked?.map((repository) => (
          <RepositoryLikedItem item={repository} key={repository} />
        ))}
      </Repositories>
    </>
  )
}

export default Likes
