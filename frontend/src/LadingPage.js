import { useEffect, useState } from "react"

const candidato = { nome: "Mauro Serrano", idade: "26", dataNascimento: "10/06/1996", email: "mauro.serrano@hotmail.com.br" }

export default function LadingPage() {
    const [candidatos, setCandidatos] = useState(new Array(10).fill(candidato))
    const [pagina, setPagina] = useState(0)

    function adicionarCandidato(candidato) {
        setCandidatos(prev => [...prev, candidato])
    }

    function alterarCandidato(candidatoEdit, index) {
        setCandidatos(prev => prev.filter((candidato, i) => i === index ? candidatoEdit : candidato))
    }

    return (
        <div className="main">
            <div className="menu">
                <p>menu</p>
            </div>
            {pagina === 0 && <div className="plataforma">
                <div className="cabecalho">
                    <h1>Power UP</h1>
                    <h1>Candidatos</h1>
                    <h1>Calendario</h1>
                </div>
                <div className="listagem">
                    <div className="listagemTop">
                        <button>ADICIONAR</button>
                        <button>PESQUISAR</button>
                        <button>CANDIDATOS POR PAGINA</button>
                        <button>FILTROS</button>
                        <button>Selec. All</button>
                        <button>Selec. None</button>
                    </div>
                    <div className="candidatosLP">{candidatos.map((candidato, i) =>
                        <div className={`candidato ${i}`} key={`candidato ${i}`}>
                            <button>Status</button>
                            <span className="nomeLP">{candidato.nome}</span>
                            <span className="idadeLP">{candidato.idade} anos</span>
                            <input type="checkbox"></input>
                        </div>)}
                    </div>
                    <div className="listagemBotton">
                        <button>Enviar</button>
                    </div>
                </div>
            </div>}
            {pagina === 1 && <div className="cadastro">
            </div>}
        </div>
    )
}