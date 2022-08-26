// Styles
import * as C from './styles';
// Types
type Props = { error: string };

export const FormError = ({ error }: Props) => {
  return (
    <C.Container>
      {error}
    </C.Container>
  )
};