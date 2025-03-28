![logoCoMindFooter](https://github.com/user-attachments/assets/d5e34a39-5a41-41e7-803e-83cc5dbdfdab)

# coMind

Este repositório contém a parte de front-end da aplicação web coMind.

### Objetivo

O coMind é uma organização não governamental dedicada a oferecer apoio psicológico a pessoas que não têm acesso a serviços especializados. Conectamos profissionais qualificados a indivíduos que necessitam de ajuda, promovendo o bem-estar mental e emocional de forma acessível e inclusiva.

## Tecnologias
- ReactJS
- Bootstrap
- React-Router
- Axios
- TailwindCSS

## Como rodar o projeto?

- É necessário ter o NodeJS em sua versão mais recente instalada em sua máquina. Você pode ver as instruções de instalação por [aqui](https://nodejs.org/pt/download/current)


1. Clone este repositório na sua máquina utilizando o comando git `git clone https://github.com/ingrydf12/coMind-Front`
2. Abra a pasta coMind-Front utilizando `cd coMind-Front` ou abra a pasta diretamente utilizando uma IDE de sua preferência, como Visual Studio Code.
3. Instale as dependências do projeto via terminal usando `npm install`
4. Você pode ver o projeto utilizando o script `npm run dev`

## Arquitetura e estrutura

```
src -> diretório com a estrutura de pastas do projeto
    api -> serviços de integração com backend / api
    assets -> imagens e componentes de imagens utilizados no projeto.
    components -> componentes reacts utilizados na aplicação.
    contexts -> contextos de estruturas utilizadas por diversos componentes, ex: auth.
    services -> destinada a integrações com backend e validação de dados.
    pages -> interfaces e páginas da aplicação.
    routes -> rotas de navegação do aplicativo, incluindo as que necessitam de autenticação / redirect
    styles -> estilização de componentes e outros.
    utils -> utilidades dentro do projeto, exemplo: dados mockados.
```

## Equipe

|<img src="https://avatars.githubusercontent.com/u/90623907?v=4" width="100">| <img src="https://avatars.githubusercontent.com/u/182433541?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/154270670?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/188931906?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/59874241?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/186109669?v=4" width="100">
|----| -----| -----| ----- | ----- | ----- |
| Ingryd Duarte | João Pedro Alves | Stephany Oliveira | Luanna Galliza | Marx Victor | Kleber Lucas Silva |

<details>
<summary><strong>Atribuições</strong></summary>
    
- João Pedro: Formulários, footer, navegação, design, integrações front-back, perfil de paciente, code review
- Ingryd: Header, navegação, design, autenticação, integrações front-back, depoimentos, arquitetura, code review
- Stephany Oliveira: perfil de médico e integração
- Luanna Galliza: página de agenda, 
- Marx Victor: página de agenda, navegação 
- Kleber: Home (front)

</details>
