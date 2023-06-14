import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Container } from './styles'
import logo from '../../assets/logo.svg'
import { AiFillHeart } from 'react-icons/ai'

interface HeaderProps {
  withGoBack?: boolean
  withLikes?: boolean
}

const Header = ({ withGoBack, withLikes }: HeaderProps) => {
  return (
    <Container withLikes={withLikes}>
      <img src={logo} alt='Github explorer' />
      {withGoBack && (
        <Link to='/'>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      )}
      {withLikes && (
        <Link to='/likes'>
          <AiFillHeart size={20} />
          Minhas curtidas
        </Link>
      )}
    </Container>
  )
}

export default Header
