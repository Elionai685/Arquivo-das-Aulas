import {useState} from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'

function App() {
  const [usuario, setUsuario] = useState("Juca")
  // const [nome, setNome] = useState("Ulib")
  const [senha, setSenha] = useState()

  let nome = "Ulib"
  function lerNome(){
    nome = prompt("Digite o nome (vou ignorar):")
}
function lerUsuario(){
  let resposta = prompt("Digite o novo usuário:")
  setUsuario(resposta)

  let pw = prompt("Digite a nova senha: ")
  let pw2 = prompt("Confirme a senha: ")
  if(pw == pw2){
    setSenha(pw)
  }else{
    alert("As senhas são diferentes")
  }
}
  return (
  <>
    <Conversao2 />
     <Conversao />

      <h1>ESTADOS</h1>
      Nome: {nome}
      <div>
        Usuário: {usuario}
        Senha: {senha}
        <button onClick={trocarUsuario}>Trocar Usuário</button>
        <button onClick={trocarNome}>Trocar Nome</button>
      </div>
      </>
 )  
}
  

export default App;