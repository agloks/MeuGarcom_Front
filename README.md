[![Netlify Status](https://api.netlify.com/api/v1/badges/68ef5b57-6697-4a4e-94d3-982de6261016/deploy-status)](https://app.netlify.com/sites/confident-curie-4c38be/deploys)
<h1 align="center">
	MeuGarçom - Front Repo 
</h1>
<h3 align="center" font-style="italic">
	Sobre o Projeto
</h3>
<p>
A solução “Meu Garçom” é uma inovação incremental que oferece diversas funcionalidades para atrair o consumidor, aumentar o ticket médio da venda, oferecer conveniência, esclarecer menus e ingredientes e fidelizar clientes. Sem contar os demais benefícios de eficiência operacional para a retaguarda e ponto de venda do negócio. Garantindo acima de tudo uma maior segurança em efetuar seu pedido sem necessidade física de um garçom e comodidade ao permitir que o cliente faça seu pedido pelo WhatsApp, sem a necessidade de usar mais um app. Para os empreendedores as vantagens oferecidas são um maior controle e gestão de seus negócios com ganhos em eficiência operacional e diminuição de custos, através de uma solução que fornecerá uma base de dados com maior assertividade sobre os hábitos e costumes de seus clientes. O desafio dos operadores de restaurantes vai além de entender as funcionalidades da tecnologia digital e seus benefícios, mas também de integrar os diferentes canais digitais para que a experiência de seu público seja consistente e complementar entre os diversos pontos de contato digital e físico. O conceito de Omnichannel tem como objetivo integrar os canais digitais para que a proposição de valor da marca seja percebida de forma consistente e complementar pelos clientes. A sinergia dos diversos canais integrados pode criar diferenciação e singularidade para a marca.
</p>
<h3 align="center" font-style="italic">
	Tecnologias Core Do Projeto
</h3>
<p align="center" font-style="cursive">
	<span> React | Gatsby | Material-UI | Nivo | Netlify </span>
</p>

<h3 align="center" font-style="italic">
	Estrutura Do Projeto
</h3>

```
.
├── gatsby-config.js (Configuração do Gatsby)
├── gatsby-node.js (Configuração do Gatsby)
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── components (Componentes da aplicação)
    │   ├── AuthContent
    │   │   └── index.js
    │   ├── BarGraph
    │   │   └── index.js
    │   ├── Cards
    │   │   ├── CardBody.js
    │   │   ├── CardHeader.js
    │   │   └── Card.js
    │   ├── Content
    │   │   ├── ContentGraphic.js
    │   │   ├── custom_content.js
    │   │   └── index.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Header
    │   │   └── index.js
    │   ├── Layout
    │   │   └── index.js
    │   ├── LineGraph
    │   │   └── index.js
    │   ├── Logo
    │   │   ├── index.js
    │   │   └── logo_meugarcom_g_red.svg
    │   ├── Navigator
    │   │   └── index.js
    │   ├── OrdensContent
    │   │   └── index.js
    │   ├── PieGraph
    │   │   └── index.js
    │   ├── RadarGraph
    │   │   └── index.js
    │   ├── StorageContent
    │   │   └── index.js
    │   ├── TabBar
    │   │   └── index.js
    │   └── Table
    │       └── index.js
    ├── data (Pasta para armazenamento dos dados a ser consumidos)
    │   ├── Clientes
    │   │   ├── perfil_alcoolismo.js
    │   │   └── perfil_caracteristica.js
    │   ├── mockup_line.js
    │   ├── mockup_pie.js
    │   ├── Ordens
    │   │   └── ordens.js
    │   └── Vendas
    │       ├── mais_vendidos.js
    │       └── menos_vendidos.js
    ├── pages (Nossas Urls e seus respectios bootstraps)
    │   ├── Clientes.js
    │   ├── Dicas.js
    │   ├── index.js
    │   ├── Ordens.js
    │   ├── Performance.js
    │   ├── Sair.js
    │   ├── Tributos.js
    │   └── Vendas.js
    └── static (Armazenamento para imagens a serem consumidas)
        └── images
            ├── logo_meugarcom_g_red.svg
            └── logo_meugarcom.svg

```

# Features:

- [x] Integração real de dashboards
- [x] Páginas dos serviço prestados
- [x] Responsivo para tablet e desktops
- [x] Tabela altamente dinâmica e interativa para manipulação do estabelicmento
- [x] Informação de ajuda em todas as páginas
- [x] CI/CD com Netlify

# TODO:

- [ ] Puxar os dados da api ja existente da nossa aplicação no back
- [ ] Navegação das ordens
- [ ] Botão de linkagem a pagamentos
