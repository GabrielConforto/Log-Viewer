document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const processBtn = document.getElementById("processBtn");
    const fileNameSpan = document.getElementById("fileName");

    let fileContent = ""; // Armazena o conteúdo do arquivo
    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const maxSize = 5 * 1024 * 1024; // 5MB em bytes

        if (file) {
            if (file.size > maxSize) {
                // Exibir mensagem de erro
                document.getElementById('errorMessage').style.display = 'block';
                // Limpar o arquivo selecionado
                event.target.value = '';
                fileNameSpan = '';
            } else {
                // Ocultar mensagem de erro se o arquivo for válido
                document.getElementById('errorMessage').style.display = 'none';
            }
        }
        if (file) {
            fileNameSpan.textContent = `File: ${file.name}`;
            processBtn.disabled = false;

            const reader = new FileReader();
            reader.onload = (e) => {
                fileContent = e.target.result; // Lê o conteúdo do arquivo
            };
            reader.readAsText(file);
        }
    });

    processBtn.addEventListener("click", () => {
        if (fileContent) {
            sessionStorage.setItem("fileContent", fileContent); // Salva o conteúdo no SessionStorage
            window.location.href = "display.html"; // Redireciona para a página de exibição
        } else {
            alert("Please upload a file before proceeding.");
        }
    });
});
