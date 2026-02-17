const courses = [
  { name: "B.Com General", logo: "📘" },
  { name: "B.Com Honors", logo: "📗" },
  { name: "B.Com Computer Applications", logo: "💻" },
  { name: "B.Com Business Analytics", logo: "📊" }
];

const container = document.getElementById("courseContainer");

// Load Courses
courses.forEach(course => {
  const card = document.createElement("div");
  card.classList.add("course-card");

  card.innerHTML = `
    <div class="course-logo">${course.logo}</div>
    <h2>${course.name}</h2>
  `;

  container.appendChild(card);
});

// Splash Screen Timer
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 2500);

// Back Button
function goBack() {
  alert("Going Back...");
  window.history.back();
}

// Exit Button
function exitApp() {
  if (confirm("Are you sure you want to exit?")) {
    window.close();
  }
}
