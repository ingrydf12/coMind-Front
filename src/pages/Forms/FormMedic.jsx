import React, { useState } from "react";
import "./Forms.css";
import Button from "../../components/Button/CustomButton";
import { useNavigate, useLocation } from "react-router-dom";
import authService from "../../api/authValidation";

const FormMedic = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state?.nome || !state?.email || !state?.senha) {
    navigate("/register");
    return null;
  }

  const ESPECIALIDADES = [
    "COMPULSOES",
    "BORDERLINE",
    "AUTOCONHECIMENTO",
    "ANSIEDADE",
    "DEPRESSAO",
    "FOBIAS",
    "AUTOESTIMA",
    "BULIMIA",
    "CANCER",
    "TRANSTORNOS",
    "DISLEXIA",
    "DISTURBIOS",
    "DROGAS",
    "ESQUIZOFRENIA",
    "ESTRESSA",
    "HIPERATIVIDADE",
    "HIPOCONDRIA",
    "OBESIDADE",
    "BURNOUT",
    "SEXUALIDADE",
    "SUICIDIO",
  ];

  const FAIXAS_ETARIAS = [
    "CRIANCAS",
    "ADOLESCENTES",
    "ADULTOS",
    "IDOSOS",
    "CASAIS",
  ];
  const DIAS_ATENDIMENTO = [
    "SEGUNDA",
    "TERCA",
    "QUARTA",
    "QUINTA",
    "SEXTA",
    "SABADO",
    "DOMINGO",
  ];

  const [form, setForm] = useState({
    nomeCompleto: "",
    matricula: "",
    genero: "",
    bio: "",
    formacoes: "",
    especialidade: [],
    faixaEtaria: [],
    preco: "",
    regiao: "",
    foto: "",
    diasAtendimento: [],
    quantAtendimentosGratuitos: 0,
  });

  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
  
    try {
      if (!form.matricula) {
        throw new Error("Matrícula profissional é obrigatória");
      }
  
      const payload = {
        nome: state.nome,
        email: state.email,
        senha: state.senha,
        tipo: state.tipo,
        profissional: {
          matricula: form.matricula.trim(),
          nomeCompleto: form.nomeCompleto,
          genero: form.genero,
          bio: form.bio,
          formacoes: form.formacoes,
          especialidade: form.especialidade,
          faixaEtaria: form.faixaEtaria,
          preco: Number(form.preco),
          regiao: form.regiao,
          foto: form.foto || "",
          diasAtendimento: form.diasAtendimento,
          quantAtendimentosGratuitos: Number(form.quantAtendimentosGratuitos)
        }
      };
  
      const response = await authService.register(payload);
      
      if (response && response.success) {
        navigate("/login", { state: { registrationSuccess: true } });
      } else {
        setError(response?.message || "Erro ao completar cadastro");
      }
    } catch (error) {
        console.error("Erro detalhado:", error.response?.data);
        setError(error.response?.data?.error || "Erro ao cadastrar");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="form-style" onSubmit={handleSubmit}>
      <h1>Complete seu cadastro profissional</h1>
      {error && <div className="error-message">{error}</div>}

      <div>
        <div className="personal">
          <div>
            <label className="main-title">Nome completo</label>
            <input
              className="type-large"
              type="text"
              name="nomeCompleto"
              value={form.nomeCompleto}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="main-title">Matrícula profissional</label>
            <input
              className="type-large"
              type="text"
              name="matricula"
              value={form.matricula}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="personal">
          <fieldset className="fieldset-form">
            <legend>Gênero</legend>
            {["MASCULINO", "FEMININO", "NAO_INFORMADO"].map((genero) => (
              <div key={genero}>
                <input
                  type="radio"
                  name="genero"
                  value={genero}
                  checked={form.genero === genero}
                  onChange={handleChange}
                  required
                />
                <label>
                  {genero === "NAO_INFORMADO"
                    ? "Prefiro não informar"
                    : genero.toLowerCase()}
                </label>
              </div>
            ))}
          </fieldset>

          <div>
            <label className="main-title">Sua bio profissional</label>
            <textarea
              className="textarea-form"
              name="bio"
              value={form.bio}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="personal">
          <div>
            <label className="main-title">URL da Foto de Perfil</label>
            <input
              className="type-large"
              type="url"
              name="foto"
              value={form.foto}
              onChange={handleChange}
              placeholder="https://exemplo.com/foto.jpg"
            />
            {form.foto && (
              <div className="foto-preview">
                <img
                  src={form.foto}
                  alt="Pré-visualização"
                  onError={(e) => {
                    e.target.style.display = "none";
                    setError(
                      "Não foi possível carregar a imagem da URL fornecida"
                    );
                  }}
                  style={{
                    maxWidth: "150px",
                    marginTop: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="line-side">
        <hr className="form-line" />
      </div>

      <div>
        <h2 className="main-title">Formação Profissional</h2>

        <div className="personal">
          <div>
            <label className="main-title">Formações e cursos</label>
            <textarea
              className="textarea-form"
              name="formacoes"
              value={form.formacoes}
              onChange={handleChange}
              required
            />
          </div>

          <fieldset className="fieldset-form">
            <legend>Especialidades (selecione pelo menos uma)</legend>
            {ESPECIALIDADES.map((espec) => (
              <div key={espec}>
                <input
                  type="checkbox"
                  name="especialidade"
                  value={espec}
                  checked={form.especialidade.includes(espec)}
                  onChange={handleCheckboxChange}
                />
                <label>{espec.toLowerCase()}</label>
              </div>
            ))}
          </fieldset>
        </div>
      </div>

      <div className="line-side">
        <hr className="form-line" />
      </div>

      <div>
        <h2 className="main-title">Informações de Atendimento</h2>

        <div className="service">
          <fieldset className="fieldset-form">
            <legend>Faixa etária atendida (selecione pelo menos uma)</legend>
            {FAIXAS_ETARIAS.map((faixa) => (
              <div key={faixa}>
                <input
                  type="checkbox"
                  name="faixaEtaria"
                  value={faixa}
                  checked={form.faixaEtaria.includes(faixa)}
                  onChange={handleCheckboxChange}
                />
                <label>{faixa.toLowerCase()}</label>
              </div>
            ))}
          </fieldset>

          <div>
            <label className="sub-title">Valor da consulta (R$)</label>
            <input
              className="type-short"
              type="number"
              name="preco"
              value={form.preco}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />

            <label className="sub-title">Região de atendimento</label>
            <input
              className="type-large"
              type="text"
              name="regiao"
              value={form.regiao}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <fieldset className="fieldset-form">
          <legend>Dias de atendimento (selecione pelo menos um)</legend>
          {DIAS_ATENDIMENTO.map((dia) => (
            <div key={dia}>
              <input
                type="checkbox"
                name="diasAtendimento"
                value={dia}
                checked={form.diasAtendimento.includes(dia)}
                onChange={handleCheckboxChange}
              />
              <label>{dia.toLowerCase()}</label>
            </div>
          ))}
        </fieldset>

        <div>
          <label className="sub-title">Atendimentos gratuitos oferecidos</label>
          <input
            className="type-short"
            type="number"
            name="quantAtendimentosGratuitos"
            value={form.quantAtendimentosGratuitos}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
      </div>

      <div className="button-side">
        <Button
          type="submit"
          className="classBtn-prim"
          buttonText={isSubmitting ? "Enviando..." : "Completar Cadastro"}
          isOutlined={false}
          disabled={
            isSubmitting ||
            !form.especialidade.length ||
            !form.faixaEtaria.length ||
            !form.diasAtendimento.length
          }
        />
      </div>
    </form>
  );
};

export default FormMedic;
