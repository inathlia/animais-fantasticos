export default function initAnimacaoScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const window60 = window.innerHeight * 0.6; // innerHeight pega o tamanho da tela do usuario

    if(sections.length){
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top; //altura da section na janela do usuário
                const isSectionVisible = sectionTop - window60 < 0;
                if(isSectionVisible){
                    section.classList.add('ativo');
                }
            });
        };
        animaScroll(); //para que o primeiro elemento já apareça no site, chama a função antes de dar o scroll
        
        window.addEventListener('scroll', animaScroll);
    }
}