document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <hr>
    <footer class="noprint">
      <center>
        <p>Copyright © Andres Trujillo 2026 | Page last updated on ${document.lastModified}</p>
      </center>
      <center>
        <a href="mailto:&#65;&#110;&#100;&#114;&#101;&#115;&#83;&#112;&#104;&#101;&#114;&#101;&#50;&#48;&#48;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
          <img class="imgpix" src="resources/email-icon.gif" border="0">
        </a>
        <img class="imgpix" src="resources/built_with_microsoft_notepad.gif" border="0">
        <img class="imgpix" src="resources/got_html.gif">
      </center>
    </footer>
  `;
  
  document.getElementById("footer-placeholder").innerHTML = footerHTML;
});
