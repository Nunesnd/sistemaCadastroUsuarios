import { useState, useEffect } from 'react';
import './styles.css';
import Delete from '../../assets/lixeira.svg';
import api from '../../services/api';

function Home() {
  const [usuarios, setUsuarios] = useState([]); // Estado para armazenar os usuários

  async function getUsers() {
    try {
      const response = await api.get('/usuarios'); // Chama a API
      setUsuarios(response.data); // Armazena os dados no estado
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  useEffect(() => {
    getUsers(); // Busca os dados ao carregar o componente
  }, []);

  return (
    <>
      <div className="container">
        <form className="formulario" action="post">
          <h1>Cadastro de usuários</h1>
          <input type="text" name="nome" placeholder="nome" />
          <input type="date" name="nascimento" placeholder="nascimento" />
          <input type="email" name="email" placeholder="e-mail" />
          <input type="text" name="login" placeholder="login" />
          <input type="password" name="senha" placeholder="senha" />
          <input type="text" name="cpf" placeholder="CPF" />
          <button type="button">Cadastrar</button>
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
