
// Add your experience
const experienceList = document.getElementById('experience-list');

const experiences = [
  {
    title: 'Job Title',
    company: 'Company Name',
    date: 'Jan 2020 - Present',
    description: 'Description of your role and responsibilities.',
  },
  // Add more experiences as needed
];

experiences.forEach((exp) => {
  const item = document.createElement('li');
  item.innerHTML = `
    <h3>${exp.title} at ${exp.company}</h3>
    <p>${exp.date}</p>
    <p>${exp.description}</p>
  `;
  experienceList.appendChild(item);
});

// Add your skills
const skillsList = document.getElementById('skills-list');

const skills = [
  'Skill 1',
  'Skill 2',
  'Skill 3',
  // Add more skills as needed
];

skills.forEach((skill) => {
  const item = document.createElement('li');
  item.textContent = skill;
  skillsList.appendChild(item);
});

// Initialization for ES Users
import { Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Collapse });

// Smooth scrolling function
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
const experienceLink = document.getElementById('experienceLink');
const experienceSection = document.getElementById('skills');

experienceLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevents the default behavior of the link (prevents page jump)

  // Scroll to the 'Experience' section smoothly
  experienceSection.scrollIntoView({ behavior: 'smooth' });
});
