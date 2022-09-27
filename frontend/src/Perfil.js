import { useEffect } from "react";

export default function Perfil() {

    return (
        <div>
            <div><h2>Perfil do Candidato</h2> <h2>Status: Placeholder</h2></div>
            <p>Dados</p>
            <div>
                <p>Nome: Placeholder</p>
                <p>Data de Nascimento: 27:09:2022 </p>
                <p>Email: Placeholder</p>
                <p>Telefone Placeholder</p>
            </div>
            <p>Notas</p>
            <div>
                <textarea placeholder="Este candidado não tem notas"></textarea>
            </div>
            <p>Entrevista: Placeholder</p>
            <button>Voltar</button>
            <button>Promover</button>
            <button>Nova entrevista</button>
            <button>Editar</button>
        </div>
    )
}