document.addEventListener("DOMContentLoaded", () => {
  const setaCima = document.getElementById('seta-cima');
  const setaBaixo = document.getElementById('seta-baixo');
  
  setaCima.style.display = 'none';
  
  setaBaixo.addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight,                                    //window.innerHeight, página vai rolar uma vez a altura visível da janela do navegador
      behavior: 'smooth'
    });
  });

  setaCima.addEventListener('click', () => {
    const bannerSection = document.querySelector('.banner');
    bannerSection.scrollIntoView({                                //rolará a página para a seção com a classe "banner" usando a função scrollIntoView
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    const desafioprofissionais = document.getElementById('professional-challenges');

    // Verifica se o usuário está na última seção
    if (window.scrollY > desafioprofissionais.offsetTop) {
      setaBaixo.style.display = 'none';
      setaCima.style.display = 'block';
    } else {
      setaBaixo.style.display = 'block';
      setaCima.style.display = 'none';
    }
  });
});


