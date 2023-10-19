import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListarVagas() {
    const navigate = useNavigate();
    const vagas = JSON.parse(localStorage.getItem('vagas')) || [];

    const handleAlteracao = (id) => {
        navigate('/alteracao/' + id);
    };

    const handleExclusao = (id) => {
        const vagasAtualizadas = vagas.filter((vaga, index) => index !== id);

        localStorage.setItem('vagas', JSON.stringify(vagasAtualizadas));

        alert('Vaga excluída com sucesso!');
        window.location.reload();
    }

    return (
        <div>
            <h1>Listagem das Vagas</h1>
            <ul>
                {vagas.map((vaga, index) => (
                    <li key={index}>
                        <strong>Vagas</strong>
                        <p>Nome: {vaga.nome}</p>
                        <p>Número do Apartamento: {vaga.num_apto}</p>
                        <p>Número do Bloco: {vaga.num_bloco}</p>
                        <p>Número da Vaga: {vaga.num_vaga}</p>
                        <p>Modelo do Veículo: {vaga.model_veic}</p>
                        <p>Cor do Veículo: {vaga.cor_car}</p>
                        <p>Placa do Veículo: {vaga.placa_car}</p>
                        <button onClick={() => handleAlteracao(index)}>Alterar</button>
                        <button onClick={() => handleExclusao(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarVagas;