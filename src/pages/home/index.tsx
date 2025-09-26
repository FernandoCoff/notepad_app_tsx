import { useState } from 'react'
import Modal from '../../modal'
import Note from '../../components/note'
import * as S from './style'

function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  return (
    <S.Body>
      <S.Container>
        <S.Header>
          <h2>Notepad</h2>
          <S.NewNoteButton onClick={() => setOpenModal('newNote')}>
            Adicionar Nota
          </S.NewNoteButton>
          {openModal === 'newNote' && (
            <Modal
              action="create"
              title="Adicionar nota"
              onClose={() => setOpenModal(null)}
            />
          )}
        </S.Header>
        <S.NoteList>
          <li>
            <Note id="1" title="Titulo" content="Conteudo" />
          </li>
        </S.NoteList>
      </S.Container>
    </S.Body>
  )
}

export default Home
