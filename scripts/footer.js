document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <hr>
    <footer class="noprint">
      <center>
        <p>Copyright © Andres Trujillo 2026 | Page last updated on ${document.lastModified}</p>
      </center>
      <center>
        <a href="contact.html">
          <img class="imgpix" src="resources/email-icon.gif" border="0" alt="Contact Me">
        </a>
        <img class="imgpix" src="resources/built_with_microsoft_notepad.gif" border="0">
        <img class="imgpix" src="resources/got_html.gif">
      </center>
    </footer>
  `;
  
  document.getElementById("footer-placeholder").innerHTML = footerHTML;
});
