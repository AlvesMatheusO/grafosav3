export const paises = [
    { pais: "Brasil", colonizador: "Portugal", metodo: "Colonização por Assentamento" },
    { pais: "Argentina", colonizador: "Espanha", metodo: "Colonização por Assentamento" },
    { pais: "Estados Unidos", colonizador: "Reino Unido", metodo: "Colonização por Exploração" },
    { pais: "África do Sul", colonizador: "Reino Unido", metodo: "Colonização por Assentamento" },
    { pais: "Índia", colonizador: "Reino Unido", metodo: "Colonização por Exploração" },
    { pais: "Congo", colonizador: "Bélgica", metodo: "Colonização por Exploração" },
    { pais: "México", colonizador: "Espanha", metodo: "Colonização por Assentamento" },
    { pais: "Chile", colonizador: "Espanha", metodo: "Colonização por Assentamento" },
    { pais: "Canadá", colonizador: "Reino Unido", metodo: "Colonização por Exploração" },
    { pais: "Austrália", colonizador: "Reino Unido", metodo: "Colonização por Assentamento" },
    { pais: "Cingapura", colonizador: "Reino Unido", metodo: "Colonização por Exploração" },
    { pais: "Filipinas", colonizador: "Espanha", metodo: "Colonização por Assentamento" },
    { pais: "Indonésia", colonizador: "Países Baixos", metodo: "Colonização por Exploração" },
    { pais: "Angola", colonizador: "Portugal", metodo: "Colonização por Exploração" },
    { pais: "Moçambique", colonizador: "Portugal", metodo: "Colonização por Exploração" },
    { pais: "Vietnam", colonizador: "França", metodo: "Colonização por Exploração" },
    { pais: "Laos", colonizador: "França", metodo: "Colonização por Exploração" },
    { pais: "Camboja", colonizador: "França", metodo: "Colonização por Exploração" },
    { pais: "Nigéria", colonizador: "Reino Unido", metodo: "Colonização por Exploração" },
    { pais: "Quênia", colonizador: "Reino Unido", metodo: "Colonização por Assentamento" },
    { pais: "Irlanda", colonizador: "Reino Unido", metodo: "Colonização por Assentamento" },
    { pais: "Nova Zelândia", colonizador: "Reino Unido", metodo: "Colonização por Assentamento" },
    { pais: "Egito", colonizador: "Reino Unido", metodo: "Colonização por Exploração" },
    { pais: "Bélgica", colonizador: "Países Baixos", metodo: "Colonização por Exploração" },
    { pais: "Haiti", colonizador: "França", metodo: "Colonização por Assentamento" }
  ];


export function construirGrafo(paises) {
    const grafo = {};
  
    paises.forEach((pais1) => {
      grafo[pais1.pais] = {};
  
      paises.forEach((pais2) => {
        if (pais1.pais !== pais2.pais) {
          // Define o peso baseado em similaridade (mesmo colonizador ou método)
          const peso = 
            (pais1.colonizador === pais2.colonizador ? 1 : 2) +
            (pais1.metodo === pais2.metodo ? 1 : 2);
  
          grafo[pais1.pais][pais2.pais] = peso;
        }
      });
    });
  
    return grafo;
  }