// Read ?id=N from URL and populate the project detail page
(function(){
  function getQueryParam(name){
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  const projects = {
    '1': {
      title: 'Project 1 – Landing Page',
      hero: 'assets/img/work1.jpg',
      longDesc: 'A fully responsive landing page built with semantic HTML and modern CSS. Includes hero, features, and responsive sections.',
      features: [
        'Responsive layout for mobile and desktop',
        'Clean typographic scale and spacing',
        'Accessible navigation and structure'
      ],
      tech: ['HTML5', 'CSS3', 'Responsive Design'],
      demo: '#',
      repo: '#'
    },
    '2': {
      title: 'Project 2 – Dashboard UI',
      hero: 'assets/img/work2.jpg',
      longDesc: 'An interactive admin dashboard prototype demonstrating charts, filters and responsive panels.',
      features: ['Interactive charts', 'Filterable lists', 'Responsive grid'],
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: '#',
      repo: '#'
    },
    '3': {
      title: 'Project 3 – E-commerce',
      hero: 'assets/img/work3.jpg',
      longDesc: 'E-commerce frontend: product listing, product detail, and cart UI (static demo).',
      features: ['Product grid', 'Product details', 'Cart UI mockup'],
      tech: ['HTML', 'CSS', 'Vanilla JS'],
      demo: '#',
      repo: '#'
    },
    '4': {
      title: 'Project 4 – Portfolio',
      hero: 'assets/img/work4.jpg',
      longDesc: 'Personal portfolio with animated sections and a clean layout to showcase work and contact info.',
      features: ['Animated sections', 'Project grid', 'Contact form'],
      tech: ['HTML', 'CSS', 'ScrollReveal'],
      demo: '#',
      repo: '#'
    },
    '5': {
      title: 'Project 5 – Blog',
      hero: 'assets/img/work5.jpg',
      longDesc: 'Blog layout focusing on readability and responsive typography; includes article list and tag filters.',
      features: ['Article list', 'Tags and categories', 'Responsive typography'],
      tech: ['HTML', 'CSS'],
      demo: '#',
      repo: '#'
    },
    '6': {
      title: 'Project 6 – Gallery',
      hero: 'assets/img/work6.jpg',
      longDesc: 'Image gallery showcasing a lightbox and filtering UI for images.',
      features: ['Filtering', 'Lightbox', 'Responsive grid'],
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: '#',
      repo: '#'
    }
  };

  const id = getQueryParam('id') || '1';
  const data = projects[id];

  const titleEl = document.getElementById('project-title');
  const heroEl = document.getElementById('project-hero');
  const descEl = document.getElementById('project-desc');
  const featuresEl = document.getElementById('project-features');
  const techEl = document.getElementById('project-tech');
  const demoEl = document.getElementById('project-demo');
  const repoEl = document.getElementById('project-repo');
  const backBtn = document.getElementById('back-button');

  if(!data){
    titleEl.textContent = 'Project not found';
    descEl.textContent = 'We could not find the project you requested.';
  } else {
    titleEl.textContent = data.title;
    heroEl.src = data.hero;
    heroEl.alt = data.title;
    descEl.textContent = data.longDesc;

    featuresEl.innerHTML = '';
    data.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      featuresEl.appendChild(li);
    });

    techEl.innerHTML = '';
    data.tech.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t;
      techEl.appendChild(li);
    });

    demoEl.href = data.demo || '#';
    repoEl.href = data.repo || '#';
  }

  backBtn.addEventListener('click', function(){
    if(window.history.length > 1) window.history.back();
    else window.location.href = 'index.html';
  });
})();
