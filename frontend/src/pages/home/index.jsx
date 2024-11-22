import './styles.css'
import Delete from '../../assets/lixeira.svg'

function Home() {

  const userTestes = [
    {
      id: '123',
      nome: 'Diego',
      email: 'nunes@mail.com',
      login: 'nunesnd',
      cpf: '12323434566',
      senha: '123123123'
    },
    {
      id: '234',
      nome: 'Jaques',
      email: 'jnunes@mail.com',
      login: 'jaquesnj',
      cpf: '23434545677',
      senha: '234234234234'
    },
    {
      id: '345',
      nome: 'sara',
      email: 'sara@mail.com',
      login: 'sssaaa',
      cpf: '34534534566',
      senha: '456456456'
    }
  ]

  return (
    <>
      <div className='container'>
        <form className='formulario' action="post">
          <h1>Cadastro de usuários</h1>
          <input type="text" name='nome' placeholder='nome' />
          <input type="date" name="nascimento" placeholder='nascimento' />
          <input type="email" name='email' placeholder='e-mail' />
          <input type="text" name='login' placeholder='login' />
          <input type="password" name='senha' placeholder='senha' />
          <input type="text" name='cpf' placeholder='CPF' />
          <button type="button">Cadastrar</button>
        </form>

      {userTestes.map((usuario) => (
        <div className="usuarios">
          <div>
            <p>Nome: <span>{usuario.nome}</span></p>
            <p>CPF: <span>{usuario.cpf}</span></p>
            <p>Email: <span>{usuario.email}</span></p>
            <p>Login: <span>{usuario.login}</span></p>
          </div>
          <button><img src={Delete} alt="delete" /></button>
        </div>
      ))}
      
      </div>

    </>
  )
}

export default Home
