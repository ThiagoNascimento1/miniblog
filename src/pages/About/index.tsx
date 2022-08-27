// Styles
import * as C from './styles';

export const About = () => {

  return (
    <C.Container>
      <C.Title>Mini Blog</C.Title>
      <C.Description>
        MIni blog é uma aplicação desenvolvida com finalidade estudantil!
        <br />
        A Aplicação foi desenvolvida com react no front-end e firebase no back-end.
        <br />
        Possui as principais funções presentes em um blog convencional, como:

        <C.Item>
          - Casdastro, login e logout;
        </C.Item>
        <C.Item>
          - Publicação e edição de posts;
        </C.Item>
        <C.Item>
          - Interação em posts já publicados, dentre outras funcionalidades.
        </C.Item>

      </C.Description>
      <C.Credits>
        Desenvolvido por 
        <a href="https://thiagonascimento1.github.io/portfolio/" target="_blank">
          Thiago Nascimento
        </a>
      </C.Credits>
    </C.Container>
  )
};