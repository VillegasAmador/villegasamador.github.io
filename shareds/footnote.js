const createFootnote = () => {
    const footerHTML = document.createElement("footer");
    const footnote = `
    <div class="container">
            <p>&copy; 2024 Villegas Amador. Todos los derechos reservados.</p> 
            <a href="https://www.linkedin.com/in/villegasapsico">LinkedIn</a> | 
            <a href="https://github.com/villegasamador">GitHub</a> | 
            <a href="mailto:villegasapsico@gmail.com">Email</a>
        </div>
        `;
    footerHTML.innerHTML = footnote;
    const selectedMain = document.querySelector("main");
    if (selectedMain) {
        selectedMain.insertAdjacentElement("afterend", footerHTML);
    }
};

createFootnote();
