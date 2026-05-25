# WebConvert Landing Page

Landing page profissional para serviço de criação de sites, construída com **Vite + React + TypeScript + Tailwind CSS**.

## 🚀 Tecnologias

| Tecnologia | Versão | Papel |
|---|---|---|
| Vite | 5.x | Bundler ultra-rápido |
| React | 18.x | UI reativa |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 3.x | Utilitários CSS |

## 📁 Estrutura

```
webconvert-landing/
├── index.html                    ← Entry HTML com preconnect Google Fonts
├── vite.config.ts                ← Config Vite com esbuild minify
├── tailwind.config.ts            ← Tokens de design (cores, fontes, keyframes)
├── postcss.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── src/
    ├── main.tsx                  ← Entry point React
    ├── App.tsx                   ← Composição de seções
    ├── index.css                 ← CSS global + Tailwind base + animações
    └── components/
        ├── useReveal.ts          ← Hook IntersectionObserver (scroll reveal)
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── UrgenciaStrip.tsx
        ├── SecaoDor.tsx
        ├── ComoFunciona.tsx
        ├── SecaoBeneficios.tsx
        ├── SecaoNumeros.tsx
        ├── FAQ.tsx
        ├── CTAFinal.tsx
        ├── Footer.tsx
        └── WhatsAppFloat.tsx
```

## ⚡ Como rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (HMR)
npm run dev

# Build de produção (minificado)
npm run build

# Prévia do build
npm run preview
```

## 🎨 Personalização

### Número do WhatsApp
Altere o número nos arquivos `CTAFinal.tsx` e `WhatsAppFloat.tsx`:
```tsx
const WA_LINK = 'https://wa.me/55SEU_NUMERO'
```

### Cores
Edite `tailwind.config.ts` → `theme.extend.colors`.

### Fontes
Altere o link no `index.html` e atualize `tailwind.config.ts` → `theme.extend.fontFamily`.

## 🏗️ Build de produção

O `vite build` gera a pasta `dist/` com:
- HTML minificado
- CSS com Tailwind purgado (apenas classes usadas)
- JS com tree-shaking + code splitting automático
- Assets com hash de cache

Para deploy: envie o conteúdo da pasta `dist/` para qualquer CDN ou hospedagem estática (Netlify, Vercel, Hostinger, cPanel, etc.).
