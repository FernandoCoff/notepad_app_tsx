import * as S from './style'

interface NoteProps {
  id: string
  title: string
  content: string
  onEdit: () => void
  onDelete: () => void
}

const Note = ({ title, content, onEdit, onDelete }: NoteProps) => {
  return (
    <S.Note>
      <h3>{title}</h3>
      <p>{content}</p>
      <S.ButtonsContainer>
        <S.Button $variant="edit" onClick={onEdit}>
          Editar
        </S.Button>
        <S.Button $variant="delete" onClick={onDelete}>
          Deletar
        </S.Button>
      </S.ButtonsContainer>
    </S.Note>
  )
}

export default Note
