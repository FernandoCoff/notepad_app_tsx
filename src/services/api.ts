import axios from 'axios'

export interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export type NoteData = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333',
})

type SetLoading = (isLoading: boolean) => void

export const getNotes = async (setLoading: SetLoading): Promise<Note[]> => {
  try {
    setLoading(true)
    const response = await api.get('/notes')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar notas:', error)
    throw error
  } finally {
    setLoading(false)
  }
}

export const createNote = async (
  noteData: NoteData,
  setLoading: SetLoading,
): Promise<Note> => {
  try {
    setLoading(true)
    const response = await api.post('/notes', noteData)
    return response.data
  } catch (error) {
    console.error('Erro ao criar nota:', error)
    throw error
  } finally {
    setLoading(false)
  }
}

export const updateNote = async (
  id: string,
  noteData: NoteData,
  setLoading: SetLoading,
): Promise<Note> => {
  try {
    setLoading(true)
    const response = await api.patch(`/notes/${id}`, noteData)
    return response.data
  } catch (error) {
    console.error(`Erro ao atualizar a nota ${id}:`, error)
    throw error
  } finally {
    setLoading(false)
  }
}

export const deleteNote = async (
  id: string,
  setLoading: SetLoading,
): Promise<void> => {
  try {
    setLoading(true)
    await api.delete(`/notes/${id}`)
  } catch (error) {
    console.error(`Erro ao deletar a nota ${id}:`, error)
    throw error
  } finally {
    setLoading(false)
  }
}

export default api
