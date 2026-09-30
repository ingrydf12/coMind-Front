import React from 'react';
import "./FormIndicacoes.css";

const FormIndicacoes = () => {
  return (
    <div className="form-container">
      <h1 className="style-title">Deseja Indicar um Grupo de Apoio?</h1>
      <form className="form-indicacoes">
        <div className="email-container">
          <label className="title-indicacoes" htmlFor="email">Seu Email</label>
          <input 
            className="label-style form-control" 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Ex: comindexample@gmail.com" 
            required 
          />
        </div>

        <div className="password-container">
          <label className="title-indicacoes" htmlFor="password">Senha</label>
          <input 
            className="label-style form-control" 
            type="password" 
            id="password" 
            name="password" 
            required 
          />
        </div>

        <div className="select-container">
          <label className="title-indicacoes" htmlFor="group">Escolha qual deseja indicar</label>
          <select 
            className="select-style form-select" 
            id="group" 
            name="group" 
            defaultValue="" 
            required
          >
            <option value="" disabled hidden>Grupo de Apoio</option>
            <option value="group-1">Apoio Online</option>
            <option value="group-2">Abraço Coletivo</option>
            <option value="group-3">Conexão Virtual</option>
          </select>
        </div>

        <div>
          <button type="submit" className="btn btn-primary classBtn-prim indicar-style">
            Indicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormIndicacoes;