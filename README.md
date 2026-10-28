# Site IME Jr

Site institucional da IME Jr — Empresa Júnior do IME-USP, desenvolvido com Next.js 14, React, TypeScript e Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço indicado no terminal (normalmente `http://localhost:3000`).

## Páginas e conteúdo

- `/`: apresentação, serviços de Computação e Dados, equipe e contato.
- `/servicos/computacao/` e `/servicos/dados/`: detalhes das duas áreas, acessíveis pelo menu Serviços.
- `/atividades/`: palestras, eventos (aMostra e SymComp) e iniciativas (IMEnsina e YouTube).

A identidade usa preto, branco e amarelo nos destaques, com Inter em peso forte nos títulos. A tipografia secundária usa Inter em caixa alta, peso semibold e espaçamento de 0,2 em entre letras, aplicada a rótulos e destaques. A página de Atividades mantém seções abertas e áreas reservadas para imagens, incluindo palestras e visitas a empresas.

### Atualizar Atividades

Os textos, links e referências de mídia estão em `src/data/initiatives.ts`; `talksMedia` controla a imagem reservada da seção de palestras e visitas. Para substituir uma imagem reservada, coloque o arquivo em `public/` e preencha `media.src` com o caminho público, por exemplo `/atividades/amostra.jpg`. Atualize também `media.alt` e `media.caption`. As áreas sem imagem são identificadas como placeholders; o destaque do YouTube leva ao canal completo, sem simular um vídeo específico.

A introdução e o texto sobre palestras e visitas estão em `src/app/atividades/page.tsx`. Não há programação ou inscrições fictícias.

## Build e publicação na Hostinger

```bash
npm run build
```

O projeto usa `output: "export"`: o build cria `out/`, com HTML, CSS, JS e arquivos públicos. Envie **todo o conteúdo de `out/`** para `public_html`, incluindo o arquivo oculto `.htaccess`. Ao atualizar a versão anterior, remova da hospedagem os caminhos antigos `servicos/educacao/`, `processo-seletivo/` e `processo-seletivo-files/` caso existam, pois substituir arquivos não exclui páginas e materiais antigos.

`npm run dev` serve para visualizar as páginas. O envio de contato depende de PHP e do serviço de e-mail da hospedagem; não é executado pelo servidor Next local. `npm start` não atende a exportação estática.

## Fotos e indexação

As páginas incluem `noimageindex` em suas metatags de robôs. As páginas públicas continuam indexáveis.

`public/.htaccess` configura `X-Robots-Tag: noindex, noimageindex` nas respostas de arquivos de imagem (incluindo as fotos da equipe). Essa regra vale na hospedagem Apache/LiteSpeed com `mod_headers`, não no servidor `npm run dev`. O build copia o arquivo para `out/.htaccess`.

Não bloqueie simultaneamente essas imagens em `robots.txt`: os buscadores precisam acessar os arquivos para ler o cabeçalho `noindex`. [Orientação oficial do Google](https://developers.google.com/search/docs/crawling-indexing/prevent-images-on-your-page).

Após publicar, confira o cabeçalho na hospedagem:

```bash
curl -I https://imejr.com/fotos-lideres/equipe.jpeg
```

A resposta deve incluir `X-Robots-Tag: noindex, noimageindex`. Se a hospedagem não servir `.htaccess` ou usar CDN/proxy, configure o mesmo cabeçalho nesse serviço e limpe o cache das imagens. A política só passa a valer no site público após a publicação. Imagens já indexadas precisam ser rastreadas novamente pelo Google; para remoção mais rápida, o proprietário pode usar a ferramenta Remoções no Search Console. Isso controla a indexação, não o acesso às fotos por visitantes ou cópias hospedadas em terceiros.
