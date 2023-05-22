interface ReposType {
    name: string;
    language: string;
    description: string;
    html_url: string;
    homepage: string | null;
    technologies: string;
}

export const projectsData: ReposType[] = [
    {
        name: "Biblioteka Back-End",
        language: "Python",
        description: `Projeto feito em grupo para resolver o problema das bibliotecas ao emprestar livros, elas terão controle dos empréstimos dos usuários,
        uma data fixa de 7 dias para devolver o livro, caso não devolva será bloqueado de pegar novos empréstimos até devolver todos. Feito com Django.`,
        technologies: "Django e PostgreSql",
        html_url: "https://github.com/Lelouching/biblioteka-backend",
        homepage: null
    },
    {
        name: "Hamburgueria v2 Front-End",
        language: "TypeScript",
        description: `Um projeto que consiste em uma loja com produtos e podendo adicionar eles ao carrinho, além de poder criar uma conta, 
        fazer login e deslogar. Feito com React.`,
        technologies: "React, Styled-Components, React-Router-Dom, Axios, React-Toastfy e Yup",
        html_url: "https://github.com/Lelouching/react-entrega-hamburgueria-v2-Lelouching",
        homepage: "https://kenzieburguerv2.vercel.app"
    },
    {
        name: "KiMóveis Back-End",
        language: "TypeScript",
        description: `Nesse projeto você pode criar, atualizar e deletar um usuário, colocar imóveis à venda, listar eles e agendar uma 
        visita para algum imóvel. Feito com Node e Express.`,
        technologies: "Node, Express, TypeORM, Zod e PostgreSql",
        html_url: "https://github.com/Kenzie-Academy-Brasil-Developers/m4-t14-kimoveis-Lelouching",
        homepage: null
    },
    {
        name: "Kenzie Burster Back-End",
        language: "Python",
        description: `O Kenzie Burster é uma api onde permite criar, obter e atualizar usuário, além de poder criar filmes e comprar um 
        ticket para poder assisti-lo. Feito com Django.`,
        technologies: "Django e SQLite 3",
        html_url: "https://github.com/Lelouching/m5-kenzie-buster-Lelouching",
        homepage: null
    },
    {
        name: "BandKamp Back-End",
        language: "Python",
        description: `No BandKamp você pode cadastrar, obter, atualizar e deletar um usuário, também poderá criar e listar albums e adicionar músicas à eles.`,
        technologies: "Django, GenericViews e PostgreSql",
        html_url: "https://github.com/Lelouching/m5-bandkamp-generic-view-Lelouching",
        homepage: null
    }
]