import * as S from './style'
import FormNote from '../components/formNote'
import { Note } from '../services/api'

interface ModalProps {
  title?: string
  onClose: () => void
  onSuccess: () => void
  action: 'edit' | 'delete' | 'create'
  noteData?: Note
}

const Modal = ({ title, onClose, onSuccess, action, noteData }: ModalProps) => {
  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.CloseButton onClick={onClose}>Cancelar</S.CloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          <FormNote
            action={action}
            onSuccess={onSuccess}
            initialData={noteData}
          />
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalBackdrop>
  )
}

export default Modal
