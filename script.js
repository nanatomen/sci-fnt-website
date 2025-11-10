const departments = [
  {
    name: "Ressources Humaines",
    description: "Nous recrutons, formons et accompagnons les talents qui font avancer nos projets immobiliers.",
    contactEmail: "rh@sci-fnt.com"
  },
  {
    name: "Finances",
    description: "Nous assurons une gestion rigoureuse des budgets, des investissements et des flux financiers.",
    contactEmail: "finances@sci-fnt.com"
  },
  {
    name: "Gestion de Projets",
    description: "Nous pilotons les projets immobiliers de la conception à la livraison, avec efficacité et vision.",
    contactEmail: "projets@sci-fnt.com"
  }
];

function displayDepartments(departments) {
  const container = document.getElementById("departments");
  departments.forEach(dept => {
    const div = document.createElement("div");
    div.className = "department";
    div.innerHTML = `
      <h3>${dept.name}</h3>
      <p>${dept.description}</p>
      <p><strong>Contact :</strong> <a href="mailto:${dept.contactEmail}">${dept.contactEmail}</a></p>
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayDepartments(departments);
});
