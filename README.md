# Solaris Energia

Landing page estática em HTML, CSS e JavaScript, sem framework ou etapa de compilação.

## Arquivos

- `dist/index.html` — estrutura e conteúdo da página
- `dist/styles.css` — aparência e responsividade
- `dist/script.js` — menu mobile e animações de entrada
- `dist/assets/` — imagens usadas no site
- `dist/solaris-logo.png` — logo e favicon

## Executar localmente

Abra `dist/index.html` diretamente no navegador. Para simular o ambiente de hospedagem, rode um servidor estático na raiz do projeto:

```sh
python -m http.server 8000 --directory dist
```

Depois acesse `http://localhost:8000`.

## Publicar

Publique o conteúdo da pasta `dist` em qualquer hospedagem de arquivos estáticos. Mantenha a estrutura de pastas; os caminhos dos recursos são relativos e funcionam também em subdiretórios. Este projeto já possui configuração de publicação do Sites em `.openai/hosting.json`.

As fotos estão incluídas no projeto. A fonte do Google é opcional: se não carregar, o navegador usa a fonte sans-serif do sistema.
