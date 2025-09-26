import ButtonForm from '../buttonForm'

import * as S from './style'

interface FormNoteProps {
  action: 'edit' | 'delete' | 'create'
}

const FormNote = ({ action }: FormNoteProps) => {
  return (
    <S.FormNote>
      {action !== 'delete' && (
        <>
          <S.FormGroup>
            <S.Label htmlFor="title">Titulo</S.Label>
            <S.Input type="text" id="title" placeholder="Titulo" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="text">Texto</S.Label>
            <S.Textarea id="text" placeholder="Texto" />
          </S.FormGroup>
          <ButtonForm isLoading={false} text="Confirmar" />
        </>
      )}

      {action === 'delete' && (
        <>
          <S.InfoMessageRed>
            Tem certeza que quer excluir a nota?
          </S.InfoMessageRed>
          <ButtonForm isLoading={false} text="Confirmar" />
        </>
      )}
    </S.FormNote>
  )
}

export default FormNote
