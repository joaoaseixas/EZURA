// Team data
const teamMembers = [
  { name: 'Luan', role: 'Líder da Equipe', avatar: 'L' },
  { name: 'Giovanni', role: 'Gerente de Projeto', avatar: 'G' },
  { name: 'Juliana', role: 'Gerente de comunicação', avatar: 'J' },
  { name: 'João Pedro', role: 'Gerente de TI', avatar: 'JP' },
  { name: 'Matheus Freire', role: 'Gerente administrativo', avatar: 'MF' },
  { name: 'Enzo', role: 'Gerente de IA', avatar: 'E' },
  { name: 'Sofia', role: 'Gerente de IA', avatar: 'S' },
  { name: 'Kayque', role: 'Gerente de materiais', avatar: 'K' },
  { name: 'Matheus Bach', role: 'Colaborar', avatar: 'MB' }
];

// Modal content data
const modalData = {
  'cftv-modal': {
    title: 'CFTV & Monitoramento',
    content: `
      <p>Oferecemos soluções completas em circuito fechado de televisão com tecnologia de ponta para garantir a segurança do seu negócio.</p>
      
      <h4>Nossos Serviços:</h4>
      <ul>
        <li>Instalação de câmeras IP e analógicas de alta definição</li>
        <li>Sistemas de gravação em nuvem e local</li>
        <li>Monitoramento 24h com central de alarmes</li>
        <li>Acesso remoto via aplicativo móvel</li>
        <li>Análise inteligente de vídeo com detecção de movimento</li>
        <li>Integração com sistemas de alarme</li>
      </ul>
      
      <h4>FAQ:</h4>
      <p><strong>Qual a diferença entre câmeras IP e analógicas?</strong><br>
      Câmeras IP oferecem maior qualidade de imagem e recursos avançados, enquanto analógicas são mais econômicas para projetos básicos.</p>
      
      <p><strong>É possível acessar as câmeras remotamente?</strong><br>
      Sim, fornecemos aplicativo para visualização remota em smartphones e computadores.</p>
      
      <p><strong>Quanto tempo ficam armazenadas as gravações?</strong><br>
      Depende da capacidade de armazenamento contratada, podendo variar de 15 dias a 6 meses.</p>
    `
  },
  'redes-modal': {
    title: 'Redes & Infraestrutura',
    content: `
      <p>Projetamos e implementamos infraestruturas de rede robustas e seguras para empresas de todos os portes.</p>
      
      <h4>Nossos Serviços:</h4>
      <ul>
        <li>Cabeamento estruturado categoria 6 e 6A</li>
        <li>Redes Wi-Fi empresariais de alta performance</li>
        <li>Configuração de servidores e storage</li>
        <li>Implementação de firewall e segurança de rede</li>
        <li>Redes VPN para acesso remoto</li>
        <li>Monitoramento de rede 24/7</li>
      </ul>
      
      <h4>FAQ:</h4>
      <p><strong>Qual a velocidade máxima suportada?</strong><br>
      Nossos cabeamentos suportam até 10 Gbps, adequados para as demandas atuais e futuras.</p>
      
      <p><strong>Fazem manutenção preventiva?</strong><br>
      Sim, oferecemos contratos de manutenção com visitas periódicas e monitoramento remoto.</p>
      
      <p><strong>É possível expandir a rede futuramente?</strong><br>
      Todos os projetos são desenvolvidos pensando na escalabilidade e facilidade de expansão.</p>
    `
  },
  'manutencao-modal': {
    title: 'Manutenção de Computadores',
    content: `
      <p>Serviços especializados de manutenção preventiva e corretiva para manter seus equipamentos sempre funcionando perfeitamente.</p>
      
      <h4>Nossos Serviços:</h4>
      <ul>
        <li>Manutenção preventiva com limpeza e verificação</li>
        <li>Formatação e reinstalação de sistemas operacionais</li>
        <li>Upgrade de hardware (memória, HD, SSD)</li>
        <li>Remoção de vírus e malware</li>
        <li>Suporte remoto para resolução rápida</li>
        <li>Backup e recuperação de dados</li>
      </ul>
      
      <h4>FAQ:</h4>
      <p><strong>Com que frequência devo fazer manutenção?</strong><br>
      Recomendamos manutenção preventiva a cada 6 meses para uso corporativo.</p>
      
      <p><strong>Oferecem garantia nos serviços?</strong><br>
      Sim, todos os serviços têm garantia de 90 dias para defeitos relacionados ao trabalho executado.</p>
      
      <p><strong>Fazem atendimento no local?</strong><br>
      Sim, atendemos in loco para empresas e também temos suporte remoto para questões simples.</p>
    `
  },
  'case1-modal': {
    title: 'Sistema CFTV Empresarial',
    content: `
      <h4>Desafio:</h4>
      <p>Empresa de médio porte precisava de um sistema de monitoramento completo para 3 andares, com 24 pontos de câmeras e acesso remoto para os gestores.</p>
      
      <h4>Solução:</h4>
      <p>Implementamos um sistema híbrido com câmeras IP 4K nos pontos críticos e câmeras Full HD nos demais locais. Instalamos servidor de gravação local com backup em nuvem e aplicativo móvel personalizado.</p>
      
      <h4>Resultado:</h4>
      <p>Redução de 85% nos incidentes de segurança, economia de 40% nos custos com segurança patrimonial e ROI alcançado em 8 meses. Cliente relatou maior tranquilidade e controle operacional.</p>
      
      <p><strong>Tecnologias utilizadas:</strong> Câmeras Hikvision 4K, NVR 32 canais, Storage 8TB, App móvel iOS/Android</p>
    `
  },
  'case2-modal': {
    title: 'Rede Corporativa',
    content: `
      <h4>Desafio:</h4>
      <p>Escritório com 50 colaboradores enfrentava lentidão na rede, quedas constantes de conexão e dificuldades para videoconferências.</p>
      
      <h4>Solução:</h4>
      <p>Reestruturação completa da rede com cabeamento Cat6A, switches gerenciáveis, access points Wi-Fi 6 e implementação de QoS para priorizar tráfego crítico.</p>
      
      <h4>Resultado:</h4>
      <p>Aumento de 300% na velocidade da rede, eliminação de 99% das quedas de conexão e melhoria significativa na qualidade das videoconferências. Produtividade da equipe aumentou 25%.</p>
      
      <p><strong>Tecnologias utilizadas:</strong> Switches Cisco, Access Points Ubiquiti Wi-Fi 6, Cabeamento Cat6A, Firewall pfSense</p>
    `
  },
  'case3-modal': {
    title: 'Suporte Técnico',
    content: `
      <h4>Desafio:</h4>
      <p>Clínica médica com 15 computadores apresentava falhas frequentes, lentidão e perda de dados importantes, impactando o atendimento aos pacientes.</p>
      
      <h4>Solução:</h4>
      <p>Implementamos programa de manutenção preventiva mensal, upgrade de hardware nos equipamentos críticos, sistema de backup automatizado e suporte remoto 24/7.</p>
      
      <h4>Resultado:</h4>
      <p>Redução de 90% no downtime, eliminação total de perda de dados e aumento de 40% na velocidade dos sistemas. Satisfação dos pacientes melhorou devido ao atendimento mais ágil.</p>
      
      <p><strong>Serviços implementados:</strong> Manutenção preventiva, Upgrade SSD, Backup automático, Suporte remoto, Antivírus corporativo</p>
    `
  }
};

// Global functions
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  
  const icon = themeToggle.querySelector('svg');
  if (!icon) return;
  
  if (theme === 'light') {
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  } else {
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;
  }
}

function openModal(modalId) {
  const content = modalData[modalId];
  if (!content) return;
  
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContentEl = document.getElementById('modalContent');
  
  if (modalOverlay && modalContentEl) {
    modalContentEl.innerHTML = `
      <h3>${content.title}</h3>
      ${content.content}
    `;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openTeamOverlay() {
  const teamOverlay = document.getElementById('teamOverlay');
  if (teamOverlay) {
    teamOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderTeamFull();
  }
}

function closeTeamOverlay() {
  const teamOverlay = document.getElementById('teamOverlay');
  if (teamOverlay) {
    teamOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderTeamPreview() {
  const teamPreview = document.getElementById('teamPreview');
  if (!teamPreview) return;
  
  const previewMembers = teamMembers.slice(0, 6);
  teamPreview.innerHTML = previewMembers.map(member => `
    <div class="team-card">
      <div class="team-avatar">${member.avatar}</div>
      <h4 class="team-name">${member.name}</h4>
      <p class="team-role">${member.role}</p>
    </div>
  `).join('');
}

function renderTeamFull(members = teamMembers) {
  const teamFullGrid = document.getElementById('teamFullGrid');
  if (!teamFullGrid) return;
  
  teamFullGrid.innerHTML = members.map(member => `
    <div class="team-card">
      <div class="team-avatar">${member.avatar}</div>
      <h4 class="team-name">${member.name}</h4>
      <p class="team-role">${member.role}</p>
    </div>
  `).join('');
}

function populateTeamFilter() {
  const teamFilter = document.getElementById('teamFilter');
  if (!teamFilter) return;
  
  const roles = [...new Set(teamMembers.map(member => member.role))];
  teamFilter.innerHTML = '<option value="">Todos os cargos</option>' +
    roles.map(role => `<option value="${role}">${role}</option>`).join('');
}

function filterTeam() {
  const teamSearch = document.getElementById('teamSearch');
  const teamFilter = document.getElementById('teamFilter');
  
  if (!teamSearch || !teamFilter) return;
  
  const searchTerm = teamSearch.value.toLowerCase();
  const selectedRole = teamFilter.value;
  
  const filtered = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm);
    const matchesRole = !selectedRole || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });
  
  renderTeamFull(filtered);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const header = document.getElementById('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
}

function handleScroll() {
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

function initEventListeners() {
  // Modal events
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  
  // Team overlay events
  const teamOverlay = document.getElementById('teamOverlay');
  if (teamOverlay) {
    teamOverlay.addEventListener('click', (e) => {
      if (e.target === teamOverlay) {
        closeTeamOverlay();
      }
    });
  }
  
  // Team search and filter
  const teamSearch = document.getElementById('teamSearch');
  const teamFilter = document.getElementById('teamFilter');
  
  if (teamSearch) {
    teamSearch.addEventListener('input', filterTeam);
  }
  
  if (teamFilter) {
    teamFilter.addEventListener('change', filterTeam);
  }
  
  // Scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Keyboard events
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modalOverlay = document.getElementById('modalOverlay');
      const teamOverlay = document.getElementById('teamOverlay');
      
      if (modalOverlay && modalOverlay.classList.contains('active')) {
        closeModal();
      }
      if (teamOverlay && teamOverlay.classList.contains('active')) {
        closeTeamOverlay();
      }
    }
  });
}

// Three.js variables
let backgroundScene, backgroundCamera, backgroundRenderer;
let particles = [];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initSmoothScroll();
  initScrollReveal();
  initEventListeners();
  renderTeamPreview();
  populateTeamFilter();
  
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  // GSAP Animations
  initGSAPAnimations();
  
  // Initialize Three.js
  initThreeJS();
});

// GSAP Animations
function initGSAPAnimations() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  // Logo animation
  gsap.from(".logo h1", {
    duration: 2,
    scale: 0,
    rotation: 360,
    ease: "bounce.out"
  });
  
  // Navigation items
  gsap.from(".nav-link", {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5
  });
  
  // Service icons rotation on hover
  document.querySelectorAll('.service-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        duration: 0.5,
        rotation: 360,
        scale: 1.2,
        ease: "power2.out"
      });
    });
    
    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        duration: 0.5,
        rotation: 0,
        scale: 1,
        ease: "power2.out"
      });
    });
  });
  
  // Team avatars animation
  gsap.set(".team-avatar", { scale: 0 });
  
  ScrollTrigger.batch(".team-avatar", {
    onEnter: elements => {
      gsap.to(elements, {
        duration: 1,
        scale: 1,
        rotation: 360,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });
    }
  });
}

// Three.js Background Animation
function initThreeJS() {
  const canvas = document.getElementById('threejs-canvas');
  if (!canvas) return;
  
  // Scene setup
  backgroundScene = new THREE.Scene();
  backgroundCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  backgroundRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  backgroundRenderer.setSize(window.innerWidth, window.innerHeight);
  
  // Create floating particles
  const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
  const particleMaterial = new THREE.MeshBasicMaterial({ 
    color: 0x16B1C4,
    transparent: true,
    opacity: 0.6
  });
  
  for (let i = 0; i < 100; i++) {
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    particle.position.set(
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50
    );
    particles.push(particle);
    backgroundScene.add(particle);
  }
  
  backgroundCamera.position.z = 20;
  
  // Animation loop
  function animateBackground() {
    requestAnimationFrame(animateBackground);
    
    particles.forEach((particle, index) => {
      particle.rotation.x += 0.01;
      particle.rotation.y += 0.01;
      particle.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
    });
    
    backgroundRenderer.render(backgroundScene, backgroundCamera);
  }
  
  animateBackground();
  
  // Handle resize
  window.addEventListener('resize', () => {
    backgroundCamera.aspect = window.innerWidth / window.innerHeight;
    backgroundCamera.updateProjectionMatrix();
    backgroundRenderer.setSize(window.innerWidth, window.innerHeight);
  });
}













// Make functions globally available
window.toggleTheme = toggleTheme;
window.openModal = openModal;
window.closeModal = closeModal;
window.openTeamOverlay = openTeamOverlay;
window.closeTeamOverlay = closeTeamOverlay;
