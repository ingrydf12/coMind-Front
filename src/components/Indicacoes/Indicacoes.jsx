import React, { useState, useEffect } from "react";
import './Indicacoes.css';
/*import gruposApoioService from '../../api/gruposApoioService';*/
import indicacoesData from './indicacoesData.json';

const Indicacoes = () => {
    const [indicacoes, setIndicacoes] = useState([]);

    /*
    useEffect(() => {
        const loadIndicacoes = async () => {
        try {
            const indicacoesData = await gruposApoioService.listarGruposApoio();
            setIndicacoes(indicacoesData);
        } catch (err) {
            setError(err.message || "Erro ao carregar indicações");
        } finally {
            setLoading(false);
        }
        };

        loadIndicacoes();
    }, []);
    */

    useEffect(() => {
        setIndicacoes(indicacoesData);
    }, []);

    return (
        <div className="indicacoes">
            <h1>INDICAÇÕES</h1>
            <div className="indicacoes-text">
                {indicacoes.length > 0 ? (
                    indicacoes.map((indicacoes) => (
                        <div className="card1">
                            <h2>{indicacoes.tipo}</h2>
                            <h3>{indicacoes.local}</h3>
                            <p>{indicacoes.descricao}</p>
                        </div>
                    ))
                    ) : (
                        <p>Nenhuma indicação encontrada...</p>
                    )
                }
            </div>
        </div>
    );
}

export default Indicacoes; 