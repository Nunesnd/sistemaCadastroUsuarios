import { useState, useEffect, useRef } from 'react';
import './styles.css';
import Delete from '../../assets/lixeira.svg';
import api from '../../services/api';

function Home() {
  const [usuarios, setUsuarios] = useState([]); // Estado para armazenar os usuários

  const inputNome = useRef();
  const inputCPF = useRef();
  const inputNasc = useRef();
  const inputEmail = useRef();
  const inputLogin = useRef();
  const inputSenha = useRef();

  async function getUsers() {
    try {
      const response = await api.get('/usuarios'); // Chama a API
      setUsuarios(response.data); // Armazena os dados no estado
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  async function cadastraUsuario() {

    const dataFormatada = new Date(inputNasc.current.value).toLocaleDateString('pt-BR');

    await api.post('/cadastrando', {

      nome: inputNome.current.value,
      cpf: inputCPF.current.value,
      dt_nasc: dataFormatada,
      email: inputEmail.current.value,
      login: inputLogin.current.value,
      senha: inputSenha.current.value
    }) 
    console.log('Nome: ', inputNome.current.value)
    console.log('cpf: ', inputCPF.current.value)
    console.log('nasc: ', inputNasc.current.value)
    console.log('email: ', inputEmail.current.value)
    console.log('login: ', inputLogin.current.value)
    console.log('senha: ', inputSenha.current.value)
  }

  useEffect(() => {
    getUsers(); // Busca os dados ao carregar o componente
  }, []);

  return (
    <>
      <div className="container">
        <form className="formulario" action="post">
          <h1>Cadastro de usuários</h1>
          <input type="text" name="nome" placeholder="nome" ref={inputNome} />
          <input type="date" name="nascimento" placeholder="nascimento" ref={inputNasc}/>
          <input type="email" name="email" placeholder="e-mail" ref={inputEmail} />
          <input type="text" name="login" placeholder="login" ref={inputLogin} />
          <input type="password" name="senha" placeholder="senha" ref={inputSenha} />
          <input type="text" name="cpf" placeholder="CPF" ref={inputCPF} />
          <button type="button" onClick={cadastraUsuario}>Cadastrar</button>
        </form>

        {/* Exibe a lista de usuários */}
        {usuarios.map((usuario) => (
          <div key={usuario.id_usuarios} className="usuarios">
            <div>
              <p>Nome: <span>{usuario.nome_usuarios}</span></p>
              <p>CPF: <span>{usuario.cpf_usuarios}</span></p>
              <p>Email: <span>{usuario.email}</span></p>
              <p>Login: <span>{usuario.login_usuarios}</span></p>
            </div>
            <button><img src={Delete} alt="delete" /></button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
