import React from 'react'
import "./FormIndicacoes.css";
import Button from 'react-bootstrap/Button';

const FormIndicacoes = () => {
  return (
    <div className="form-container">
      <h1 className='style-title'>Deseja Indicar um Grupo de Apoio?</h1>
      <form className="form-indicacoes">
        <div className='email-container'>
          <label className="title-indicacoes" for="name">Seu Email</label>
          <input className="label-style" type="email" id="email" name="email" placeholder="Ex:comindexample@gmail.com" required />
        </div>

        <div className='password-container'>
          <label className="title-indicacoes" for="password">Senha</label>
          <input className="label-style" type="password" id="password" name="password" required />
        </div>

        <div className='select-container'>
          <h2 className='title-indicacoes'>Escolha qual deseja indicar</h2>
          <select className="select-style" id="group" name="group" required>
            <option value="" selected disabled hidden>Grupo de Apoio</option>
            <option value="group-1">Apoio Online</option>
            <option value="group-2">Abraço Coletivo</option>
            <option value="group-3">Conexão Virtual</option>
          </select>
        </div>

        <div>
          <Button type="submit" className="classBtn-prim indicar-style">Indicar</Button>
        </div>
      </form>
    </div>
  )
}

export default FormIndicacoes;