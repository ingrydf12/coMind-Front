import React, { useState, useEffect } from "react";
import './Depoimentos.css';
/*import depoimentosService from '../../api/depoimentosService';*/
import depoimentosData from './depoimentosData.json';

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState([]);

  /*
  useEffect(() => {
    const loadDepoimentos = async () => {
      try {
        const depoimentoData = await depoimentosService.listarDepoimentos();
        setDepoimentos(depoimentoData);
      } catch (err) {
        setError(err.message || "Erro ao carregar depoimentos");
      } finally {
        setLoading(false);
      }
    };

    loadDepoimentos();
  }, []);
  */
  
  useEffect(() => {
    setDepoimentos(depoimentosData);
  }, []);

  return (
    <div className="depoimento">
      <h1>DEPOIMENTOS</h1>
      <div className="depoimento-container">
        {depoimentos.length > 0 ? (
          depoimentos.map((depoimentos) => (
            <div className="depoimento-container">
              <div key={depoimentos.id} className="depoimento-card">
                <div className="depoimento-text">
                  <h2>{depoimentos.nome}</h2>
                  <h3>{depoimentos.local}</h3>
                  <p>{depoimentos.texto}</p>
                </div>
              </div>
            </div>
          ))
          ) : (
            <p>Nenhum depoimento encontrado...</p>
          )
        }
      </div>
    </div>
  );
};

export default Depoimentos;