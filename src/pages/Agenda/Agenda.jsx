import React from "react";

const Agenda = () => {
    return(
        <>
        <div>
            <label htmlFor="especialidade">Especialidade</label>
            <select name="" id="especialidade">
                <option>Depressão</option>
                <option>Ansiedade</option>
                <option>Transtorno de estresse pós-traumático</option>
                <option>Esquizofrenia</option>
                <option>Transtorno bipolar</option>
                <option>Transtornos de personalidade</option>
                <option>Transtornos alimentares</option>
                <option>Transtorno do pânico</option>
                <option>Transtorno de déficit de atenção com hiperatividade (TDAH)</option>
                <option>Transtornos de estresse</option>
            </select>
            <label for="localização">Localização</label> 
            <input type="text" name="localização" id="" />
            <label for="convenio">Convênio</label>
            <select name="" id="convenio">
                <option value="">Bradesco</option>
                <option value="">Caixa</option>
                <option value="">Correios</option>
                <option value="">Hapvida</option>
                <option value="">Itaú</option>
                <option value="">Petrobrás</option>
                <option value="">Unimed</option>
            </select>
            <input type="radio" name="type" id="p" />
            <label for="p">Presencial</label>
            <input type="radio" name="type" id="r" />
            <label for="r">Remoto</label>
        </div>
        <div>

        </div>
        </>
    );
}