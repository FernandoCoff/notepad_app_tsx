import { useState, useEffect, FormEvent } from 'react'
import ButtonForm from '../buttonForm'
import { createNote, updateNote, deleteNote, Note } from '../../services/api'
import * as S from './style'

interface FormNoteProps {
  action: 'edit' | 'delete' | 'create'
  onSuccess: () => void
  initialData?: Note
}

const FormNote = ({ action, onSuccess, initialData }: FormNoteProps) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (action === 'edit' && initialData) {
      setTitle(initialData.title)
      setContent(initialData.content)
    }
  }, [action, initialData])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError(null)

    try {
      switch (action) {
        case 'create':
          await createNote({ title, content }, setIsLoading)
          break
        case 'edit':
          if (!initialData?.id)
            throw new Error('ID da nota não encontrado para edição.')
          await updateNote(initialData.id, { title, content }, setIsLoading)
          break
        case 'delete':
          if (!initialData?.id)
            throw new Error('ID da nota não encontrado para deleção.')
          await deleteNote(initialData.id, setIsLoading)
          break
        default:
          throw new Error('Ação inválida.')
      }
      onSuccess()
    } catch (err) {
      setError('Ocorreu um erro. Tente novamente.')
      console.error(err)
    }
  }

  return (
    <S.FormNote onSubmit={handleSubmit}>
      {action !== 'delete' && (
        <>
          <S.FormGroup>
            <S.Label htmlFor="title">Titulo</S.Label>
            <S.Input
              type="text"
              id="title"
              placeholder="Titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="text">Texto</S.Label>
            <S.Textarea
              id="text"
              placeholder="Texto"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </S.FormGroup>
        </>
      )}

      {action === 'delete' && (
        <S.InfoMessageRed>
          {`Tem certeza que quer excluir a nota "${initialData?.title}"?`}
        </S.InfoMessageRed>
      )}

      {error && <S.InfoMessageRed>{error}</S.InfoMessageRed>}

      <ButtonForm isLoading={isLoading} text="Confirmar" />
    </S.FormNote>
  )
}

export default FormNote
