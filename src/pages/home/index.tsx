// src/pages/Home/index.tsx

import { useState, useEffect } from 'react'
import { getNotes, Note as NoteInterface } from '../../services/api'
import Modal from '../../modal'
import Note from '../../components/note'
import * as S from './style'

function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null)
  const [notes, setNotes] = useState<NoteInterface[]>([])
  const [selectedNote, setSelectedNote] = useState<NoteInterface | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadNotes = async () => {
    try {
      setError(null)
      const data = await getNotes(setIsLoading)
      setNotes(data)
    } catch (err) {
      setError(
        'Houve um erro ao carregar as notas. Tente novamente mais tarde.',
      )
      console.error(err)
    }
  }

  useEffect(() => {
    loadNotes()
  }, [])

  const handleFormSuccess = () => {
    setOpenModal(null)
    setSelectedNote(null)
    loadNotes()
  }

  const handleEditClick = (note: NoteInterface) => {
    setSelectedNote(note)
    setOpenModal('editNote')
  }

  const handleDeleteClick = (note: NoteInterface) => {
    setSelectedNote(note)
    setOpenModal('deleteNote')
  }

  const handleCloseModal = () => {
    setOpenModal(null)
    setSelectedNote(null)
  }

  const renderNoteList = () => {
    return notes.map((note) => (
      <li key={note.id}>
        <Note
          id={note.id}
          title={note.title}
          content={note.content}
          onEdit={() => handleEditClick(note)}
          onDelete={() => handleDeleteClick(note)}
        />
      </li>
    ))
  }

  return (
    <S.Body>
      <S.Container>
        <S.Header>
          <h2>Notepad</h2>
          <S.NewNoteButton onClick={() => setOpenModal('newNote')}>
            Adicionar Nota
          </S.NewNoteButton>
        </S.Header>
        <S.NoteList>{renderNoteList()}</S.NoteList>
      </S.Container>
      {openModal === 'newNote' && (
        <Modal
          action="create"
          title="Adicionar nota"
          onSuccess={handleFormSuccess}
          onClose={handleCloseModal}
        />
      )}
      {openModal === 'editNote' && selectedNote && (
        <Modal
          action="edit"
          title="Editar nota"
          onSuccess={handleFormSuccess}
          onClose={handleCloseModal}
          noteData={selectedNote}
        />
      )}
      {openModal === 'deleteNote' && selectedNote && (
        <Modal
          action="delete"
          title="Deletar nota"
          onSuccess={handleFormSuccess}
          onClose={handleCloseModal}
          noteData={selectedNote}
        />
      )}
    </S.Body>
  )
}

export default Home
