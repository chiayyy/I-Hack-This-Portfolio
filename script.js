const themeToggle = document.getElementById('themeToggle');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Theme persistence
const preferred = localStorage.getItem('theme');
if (preferred === 'light') {
  document.body.classList.add('light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '🌞' : '🌙';
  });
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '🌞' : '🌙';
}



// Team data
const teamMembers = [
  {
    name: 'Chiang Chia Yang',
    age: 22,
    gender: 'Male',
    photo: 'image/1.jpg',
    skills: ['Frontend Development', 'UI/UX Design', 'JavaScript']
  },
  {
    name: 'Chua Kian Sin', 
    age: 22,
    gender: 'Male',
    photo: 'image/3.jpg',
    skills: ['Backend Development', 'Database Design', 'Python']
  },
  {
    name: 'Jane Ho Jing Ying',
    age: 21,
    gender: 'Female',
    photo: 'image/2.jpg', 
    skills: ['Mobile Development', 'API Integration', 'React Native']
  },
  {
    name: 'Arif Bin Akbar',
    age: 22,
    gender: 'Male',
    photo: 'image/4.jpg',
    skills: ['Data Science', 'Machine Learning', 'Python']
  }
];

const teamGrid = document.getElementById('teamGrid');

function renderTeam() {
  if (!teamGrid) return;
  teamGrid.innerHTML = '';
  teamMembers.forEach((member) => {
    const card = document.createElement('article');
    card.className = 'team-member';
    
    const img = document.createElement('img');
    img.className = 'team-photo';
    img.src = member.photo;
    img.alt = `${member.name} photo`;
    
    const name = document.createElement('h4');
    name.className = 'team-name';
    name.textContent = member.name;
    
    const age = document.createElement('p');
    age.className = 'team-age';
    age.textContent = `${member.age} years old`;
    
    const skills = document.createElement('ul');
    skills.className = 'team-skills';
    member.skills.forEach((skill) => {
      const li = document.createElement('li');
      li.textContent = skill;
      skills.appendChild(li);
    });
    
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(skills);
    
    teamGrid.appendChild(card);
  });
}

// -------- Events & Modal --------
const events = [
  {
    id: 'hackwknd-2025',
    title: 'HackWknd 2025',
    date: 'Jan 2025',
    award: 'First Runner Up',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    article:
      'An event organized by SDEC aimed at creating STEM education tools. We developed a biology learning agriculture tool to help students gain better understanding of biology syllabus.',
    projects: ['Biology learning tool', 'Agriculture education', 'STEM platform']
  },
  {
    id: 'robotics-2023',
    title: 'City Robotics Expo',
    date: 'Nov 2023',
    award: 'Best Community Impact',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    article:
      'Our team showcased a modular robotics kit for schools. Students assembled and programmed robots in under an hour, emphasizing hands-on STEM learning and reusability.',
    projects: ['Modular chassis', 'Blockly programming', 'Sensor pack']
  },
  {
    id: 'design-2022',
    title: 'UX Design Challenge',
    date: 'Aug 2022',
    award: 'Runner-up - Service Design',
    image: 'https://images.unsplash.com/photo-1529336953121-ad3a813cda89?q=80&w=1200&auto=format&fit=crop',
    article:
      'We redesigned a city services portal with a focus on inclusive language, clear task flows, and mobile-first patterns to increase completion rates for key services.',
    projects: ['User research', 'Mobile IA', 'Design system tokens']
  }
];

const eventsGrid = document.getElementById('eventsGrid');
const modal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const modalAward = document.getElementById('modalAward');
const modalArticle = document.getElementById('modalArticle');
const modalProjects = document.getElementById('modalProjects');
const modalImage = document.getElementById('modalImage');

function renderEvents() {
  if (!eventsGrid) return;
  eventsGrid.innerHTML = '';
  events.forEach((ev) => {
    const card = document.createElement('article');
    card.className = 'card event-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${ev.title} - open details`);

    const img = document.createElement('img');
    img.className = 'event-thumb';
    img.src = ev.image;
    img.alt = `${ev.title} photo`;

    const info = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = ev.title;
    h4.style.margin = '0 0 12px 0';
    h4.style.fontSize = '18px';
    h4.style.color = 'var(--text)';
    
    const description = document.createElement('p');
    description.textContent = ev.article;
    description.style.margin = '0 0 16px 0';
    description.style.color = 'var(--muted)';
    description.style.fontSize = '14px';
    description.style.lineHeight = '1.5';
    
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = ev.award;
    badge.style.fontSize = '12px';
    badge.style.fontWeight = '600';

    info.appendChild(h4);
    info.appendChild(description);
    info.appendChild(badge);

    card.appendChild(img);
    card.appendChild(info);

    card.addEventListener('click', () => openModal(ev));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(ev);
      }
    });

    eventsGrid.appendChild(card);
  });
}

function openModal(ev) {
  if (!modal) return;
  modalTitle.textContent = ev.title;
  modalAward.textContent = ev.award;
  modalArticle.textContent = ev.article;
  modalProjects.innerHTML = '';
  ev.projects.forEach((p) => {
    const li = document.createElement('li');
    li.textContent = p;
    modalProjects.appendChild(li);
  });
  modalImage.src = ev.image;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

if (modal) {
  modal.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.hasAttribute('data-close')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });
}

renderEvents();
renderTeam();

// Handle navigation to show/hide sections
function handleNavigation() {
  const hash = window.location.hash;
  const achievementsSection = document.getElementById('achievements');
  
  if (hash === '#achievements') {
    achievementsSection.style.display = 'block';
  } else {
    achievementsSection.style.display = 'none';
  }
}

// Listen for navigation changes
window.addEventListener('hashchange', handleNavigation);
window.addEventListener('load', handleNavigation);

// Add click handlers to navigation links
document.querySelectorAll('nav a[href="#achievements"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(handleNavigation, 100); // Small delay to ensure hash is updated
  });
});
