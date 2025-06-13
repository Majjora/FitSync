# FitSync

> Plataforma web de gestão fitness com login, recuperação de senha e perfil interativo — desenvolvida como projeto pessoal.

## 📋 Funcionalidades

- Tela de **login** com escolha de perfil (usuário ou funcionário)
- Fluxo de **recuperação de senha**, simulando envio de link via e-mail
- Estrutura de páginas responsivas com HTML, CSS e JavaScript puro
- Exemplo de **redirecionamento após login**
- Organização de arquivos com hierarquia clara (`styles/`, `js/`, `pages/`)

## 🗂️ Estrutura do Projeto

```
/
├── index.html           # Home page após login
├── login.html           # Tela de login
├── recuperar.html       # Tela de recuperação senha
├── styles/
│   ├── login.css
│   └── recuperar.css
├── js/
│   ├── login.js
│   └── recuperar.js
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** para marcação semântica
- **CSS3** com design leve e moderno
- **JavaScript** para interatividade (form validation, redirecionamentos)
- Sem frameworks, tudo puro para fins de estudo e clareza

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Majjora/FitSync.git
   ```

2. Acesse a pasta:
   ```bash
   cd FitSync
   ```

3. Abra o arquivo `login.html` em seu navegador (ou use extensões como **Live Server** no VSCode para facilitar o desenvolvimento).

## 🎯 Próximos Passos (Futuras melhorias)

- Integração com back-end real para autenticação e recuperação de senha
- Dashboard com perfil de usuário e dados reais
- Transição para framework front-end (ex: React, Vue)
- Acessibilidade avançada com ARIA e validações aprimoradas
- Responsividade total para tablets e celulares
