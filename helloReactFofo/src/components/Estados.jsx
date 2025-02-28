import { useState } from "react"

function Estados() {

    const [usuario, setUsuario] = useState("Bilu")
    const [nome, setNome] = useState('Ulib')
    const [senha, setSenha] = useState()
}
    function lerNome(){
        let nome = prompt("Digite o nome (vou ignorar): ")
        setNome(nome)
    }
    function lerUsuario(){
        let resposta = prompt("Digite o novo usuário")
        setUsuario(resposta)

    
    function lerNome(){

    console.log(nome);
          
    }
       function lerUsuario(){
          let resposta = prompt("Digite o novo usuário:")
          setUsuario(resposta)
        }
          let pw = prompt("Digite a nova senha: ")
          let pw2 = prompt("Confirme a senha: ")
          if(pw == pw2){
            setSenha(pw)
          }else{
            alert("As senhas são diferentes")
          }
        }
    

