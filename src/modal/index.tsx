import * as S from './style'
import FormNote from '../components/formNote'

interface ModalProps {
  title?: string
  onClose?: () => void
  action: 'edit' | 'delete' | 'create'
}

const Modal = ({ title, onClose, action }: ModalProps) => {
  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.CloseButton onClick={onClose}>Cancelar</S.CloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          <FormNote action={action} />
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalBackdrop>
  )
}

export default Modal
