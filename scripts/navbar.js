document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
    <div class="noprint">
      <hr>
      <center>
        <a href="index.html">HOME</a> • <a href="projects.html">PROJECTS</a> • <a href="about.html">ABOUT ME</a> • <a href="AndresTrujillo_Resume.pdf" target="_blank">RESUME</a>
      </center>
      <hr>
    </div>
  `;
  
  document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
});
