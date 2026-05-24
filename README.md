# Site IME Jr

Site institucional da **IME Jr — Empresa Júnior do IME-USP**, desenvolvido com Next.js 14 e Tailwind CSS.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**
- **lucide-react** — ícones

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       # Metadata, favicon, fontes
│   └── page.tsx         # Página principal (composição das seções)
├── components/
│   ├── Navbar.tsx        # Navegação fixa com scroll-aware
│   ├── Hero.tsx          # Seção inicial com animação de entrada
│   ├── Sobre.tsx         # Quem somos + contadores animados
│   ├── Servicos.tsx      # Computação, Dados e Educação
│   ├── Atividades.tsx    # Feed de atividades recentes
│   ├── Equipe.tsx        # Lideranças + grid de membros com filtro por área
│   ├── Contato.tsx       # Formulário de contato
│   ├── Footer.tsx        # Rodapé com redes sociais
│   ├── Reveal.tsx        # Wrapper de scroll-reveal (fade + slide-up)
│   └── CountUp.tsx       # Contador animado acionado por IntersectionObserver
├── data/
│   └── members.ts        # Lista de membros com áreas e cargos
└── hooks/
    └── useInView.ts      # Hook IntersectionObserver com suporte a once/threshold
public/
└── logo.png              # Logo branca (fundo transparente)
```

## Paleta de cores

| Token       | Hex       | Uso                          |
|-------------|-----------|------------------------------|
| Background  | `#000000` | Hero                         |
| Surface     | `#101010` | Demais seções                |
| Surface alt | `#1A1A1A` | Cards                        |
| Border      | `#2E2E2E` | Divisores e bordas           |
| Gray        | `#5E5E5E` | Texto secundário             |
| Yellow      | `#FFDA33` | Acento principal / Dados     |
| Blue        | `#357DED` | Computação                   |
| Red         | `#D62839` | Educação                     |

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deploy — Hostinger

O projeto exporta como **site estático** (`output: "export"` no `next.config.mjs`).

### 1. Gerar os arquivos estáticos

```bash
npm run build
```

Isso cria a pasta **`out/`** com todo o HTML/CSS/JS pronto.

### 2. Subir na Hostinger

**Via painel (File Manager):**
1. Acesse o painel da Hostinger → **Gerenciador de Arquivos**
2. Entre na pasta `public_html`
3. Faça upload do **conteúdo** da pasta `out/` (não a pasta em si)

**Via FTP (FileZilla ou similar):**
1. Pegue as credenciais em Hostinger → **FTP Accounts**
2. Conecte e navegue até `public_html/`
3. Envie o conteúdo de `out/`

### 3. Atualizar o site

Toda vez que houver mudanças:
```bash
npm run build   # gera novo /out
```
Depois substitua os arquivos no `public_html` da Hostinger.

---

[IME Jr](https://imejr.com.br) · [Instagram](https://www.instagram.com/imejr.usp/) · [LinkedIn](https://br.linkedin.com/company/imejr)
