import { useState } from 'react'
import * as S from './style'
import Modal from '../../modal'

interface NoteProps {
  id: string
  title: string
  content: string
}

const Note = ({ title, content, id }: NoteProps) => {
  const [openModal, setOpenModal] = useState<string | null>(null)

  return (
    <S.Note>
      <h3>{title}</h3>
      <p>{content}</p>
      <S.ButtonsContainer>
        <S.Button $variant="edit" onClick={() => setOpenModal('editNote')}>
          Editar
        </S.Button>
        {openModal === 'editNote' && (
          <Modal
            action="edit"
            title="Editar Nota"
            onClose={() => setOpenModal(null)}
          />
        )}
        <S.Button $variant="delete" onClick={() => setOpenModal('deleteNote')}>
          Deletar
        </S.Button>
        {openModal === 'deleteNote' && (
          <Modal
            action="delete"
            title="Deletar Nota"
            onClose={() => setOpenModal(null)}
          />
        )}
      </S.ButtonsContainer>
    </S.Note>
  )
}

export default Note
