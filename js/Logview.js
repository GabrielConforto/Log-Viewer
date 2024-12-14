document.addEventListener("DOMContentLoaded", () => {
    const fileContentContainer = document.getElementById("fileContentContainer");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    const fileContent = sessionStorage.getItem("fileContent"); // Recupera o conteúdo armazenado

    if (fileContent) {
        const lines = fileContent.split("\n"); // Divide o conteúdo em linhas
        displayLines(lines); // Mostra as linhas inicialmente

        // Adiciona evento ao botão de pesquisa
        searchBtn.addEventListener("click", () => {
            const query = searchInput.value.toLowerCase(); // Termo de busca em minúsculas
            const filteredLines = lines.filter(line => line.toLowerCase().includes(query)); // Filtra linhas
            displayLines(filteredLines); // Mostra apenas as linhas que correspondem
        });
    } else {
        fileContentContainer.textContent = "No file content found.";
    }

    // Função para exibir linhas
    function displayLines(lines) {
        fileContentContainer.innerHTML = ""; // Limpa o conteúdo anterior
        lines.forEach((line, index) => {
            const lineDiv = document.createElement("div");
            lineDiv.textContent = line.trim();
            fileContentContainer.appendChild(lineDiv);

            if (index < lines.length - 1) {
                const hr = document.createElement("hr");
                fileContentContainer.appendChild(hr);
            }
        });

        if (lines.length === 0) {
            fileContentContainer.textContent = "No matches found.";
        }
    }
});
