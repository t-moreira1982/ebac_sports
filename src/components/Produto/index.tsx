import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favoritos'
import { useState } from 'react'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const [estaNosFavoritos, setEstaNosFavoritos] = useState(true)

  const handleFavoritar = () => {
    if (estaNosFavoritos) {
      dispatch(favoritar(produto))
      setEstaNosFavoritos(false)
    } else {
      dispatch(favoritar(produto))
      setEstaNosFavoritos(true)
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '+ Adicionar aos Favoritos'
          : '- Remover dos Favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
