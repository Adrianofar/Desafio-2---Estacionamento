import React, {useState} from 'react';
import './CadastroVagas.css';

function Cadastro() {
    const [vaga, setVaga] = useState({
        nome: '',
        num_apto: '',
        num_bloco: '',
        num_vaga: '',
        model_veic: '',
        cor_car: '',
        placa_car: ''
    });

    const handleInputChange = (v) => {
        const { name, value } = v.target;
        setVaga({ ...vaga, [name]: value });
    };

    const handleSubmit = (v) => {
        v.preventDefault();
        if(!vaga.nome || !vaga.num_apto || !vaga.num_bloco || !vaga.num_vaga || !vaga.model_veic || !vaga.cor_car || !vaga.placa_car) {
            alert('Preencha todos os campos!');
            return;
        }

        const vagasCadastradas = JSON.parse(localStorage.getItem('vagas')) || [];
        vagasCadastradas.push(vaga);

        localStorage.setItem('vagas', JSON.stringify(vagasCadastradas));

        setVaga({
            nome: '',
            num_apto: '',
            num_bloco: '',
            num_vaga: '',
            model_veic: '',
            cor_car: '',
            placa_car: ''
        });

        alert('Vaga cadastrada com sucesso!');
    };

    return (
        <div>
            <h1>Cadastro de Reserva</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" name="nome" value={vaga.nome} onChange={handleInputChange} />

                <label>Número do Apartamento:</label>
                <input type="number" name="num_apto" value={vaga.num_apto} onChange={handleInputChange} />
                
                <label>Número do Bloco:</label>
                <input type="number" name="num_bloco" value={vaga.num_bloco} onChange={handleInputChange} />

                <label>Número da Vaga:</label>
                <input type="number" name="num_vaga" value={vaga.num_vaga} onChange={handleInputChange} />

                <label>Modelo do Veículo:</label>
                <input type="text" name="model_veic" value={vaga.model_veic} onChange={handleInputChange} />

                <label>Cor do Veículo:</label>
                <input type="text" name="cor_car" value={vaga.cor_car} onChange={handleInputChange} />

                <label>Placa do Veículo:</label>
                <input type="text" name="placa_car" value={vaga.placa_car} onChange={handleInputChange} />

                <button onSubmit={handleSubmit}>Cadastrar</button>
            </form>
        </div>
    );
}

export default Cadastro;