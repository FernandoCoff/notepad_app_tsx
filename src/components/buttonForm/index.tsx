import * as S from './styled'

type buttonProps = {
  isLoading: boolean
  text: string
}

const ButtonForm = ({ isLoading, text }: buttonProps) => (
  <S.Button disabled={isLoading} type="submit">
    {isLoading && <S.Spinner />}
    {text}
  </S.Button>
)
export default ButtonForm
