import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
  estaNosFavoritos: boolean
}

const initialState: FavoritosState = {
  itens: [],
  estaNosFavoritos: false
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const index = state.itens.findIndex((p) => p.id === produto.id)

      const novosItens = [...state.itens]

      if (index !== -1) {
        novosItens.splice(index, 1)
      } else {
        novosItens.push(produto)
      }
      return {
        ...state,
        itens: novosItens
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
