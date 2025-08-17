EZURA - SITE INSTITUCIONAL
========================

ESTRUTURA DO PROJETO:
- index.html - Página principal
- styles.css - Estilos e design
- script.js - Funcionalidades JavaScript
- assets/ - Pasta para imagens

COMO EDITAR O SITE:

1. ALTERANDO TEXTOS:
   - Abra o arquivo index.html
   - Procure pelas seções desejadas (hero, services, about, etc.)
   - Edite diretamente o conteúdo HTML

2. ALTERANDO CORES:
   - Abra o arquivo styles.css
   - No início do arquivo, encontre as CSS Variables:
     --brand-900: #0B1F2A (azul escuro)
     --brand-700: #123B4A (azul médio)
     --brand-500: #16B1C4 (azul principal)
     --brand-300: #7ADCE8 (azul claro)
     --accent-500: #F5C147 (amarelo)
   - Altere os valores hexadecimais conforme desejado

3. ALTERANDO IMAGENS:
   - Substitua os arquivos na pasta assets/
   - Mantenha os mesmos nomes ou atualize as referências no HTML
   - Imagens necessárias:
     * case1.jpg - Case de CFTV
     * case2.jpg - Case de Redes
     * case3.jpg - Case de Suporte
     * mapa.jpg - Mapa da localização

4. EDITANDO A EQUIPE:
   - Abra o arquivo script.js
   - Encontre o array "teamMembers" no início do arquivo
   - Adicione, remova ou edite os membros seguindo o formato:
     { name: 'Nome', role: 'Cargo', avatar: 'Iniciais' }

5. ALTERANDO INFORMAÇÕES DE CONTATO:
   - No index.html, procure pela seção "contact"
   - Atualize endereço, e-mail e links do Instagram
   - Para alterar o link do Instagram, procure por "grupo_ezura" e substitua

6. ADICIONANDO NOVOS SERVIÇOS:
   - No index.html, copie um "service-card" existente
   - No script.js, adicione o conteúdo do modal em "modalContent"
   - Crie um novo ID único para o modal

FUNCIONALIDADES INCLUÍDAS:
- Tema escuro/claro com persistência
- Navegação suave por âncoras
- Modais para serviços e cases
- Overlay da equipe com busca e filtros
- Animações de scroll reveal
- Design responsivo
- Acessibilidade completa

TECNOLOGIAS UTILIZADAS:
- HTML5 semântico
- CSS3 com variáveis e grid/flexbox
- JavaScript vanilla (sem frameworks)
- Armazenamento local para preferências

COMPATIBILIDADE:
- Todos os navegadores modernos
- Dispositivos móveis e desktop
- Leitores de tela
- Navegação por teclado

Para dúvidas técnicas, consulte os comentários no código.