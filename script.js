// Esta função é chamada quando o usuário clica no card do Espinossauro
function mostrarEspinossauro() {
    // Seleciona o bloco de detalhes
    const detalhe = document.getElementById('espinossauro-detalhe');
    
    // O "toggle" adiciona a classe se ela não existir, ou remove se ela já existir.
    // A classe 'd-none' é uma classe padrão do Bootstrap que esconde elementos (display: none).
    detalhe.classList.toggle('d-none');
}