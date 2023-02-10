function generateWord() {
  const words = [
    'Me encantaría ser tu pijama para acostarme contigo.', 
    'Quisiera ser tablero de ajedrez, para tener una reina tan bella como tú.', 
    'Quisiera ser agua para mojar tu jardín....',
     'Te quiero, pero no sé en que posición. ¿Me ayudas a elegir?',
     '¡Uy! Tu de rojo y yo con el antojo.',
     '¿Me haces un favor? Sal de mis sueños y entra a mi realidad.',
     'Si supieras cuanto pienso en ti, me denunciarías por acoso mental.',
     'Cuidado con mi ave rojo preciosa, que le gustan las flores.',
     '¿Estás preparada para subir a la luna? Porque tengo el cohete preparado.',
     'Aquí te mando mi corazón que no quiere estar conmigo, le pregunte que con quién quería estar, y me dijo que contigo.',
     'Ya quisiera semejante bombon derretirse sobre mi colchón.',
     'Hola, ¿eres ecologista? ¿Por qué no vienes y me plantas un beso en mi boca?',
     'Con ese cuerpo, unas fresas y un helado, te enseño yo lo que es el PECADO.',
     'Eres como la chancla de mi madre: te veo venir y se me acelera el corazón.'
     'Apuesto a que te llamas Google. Porque tienes todo lo que busco.',
     'Yo seré pacifista, pero por ti bombardeo el congreso.',
     'POR LA LUNA daría un beso, daría todo por el sol, pero por la luz de tu mirada, doy mi vida y mi CORAZÓN.',
     'Me gusta el café, pero prefiero tener-té.',
     'Estas como para invitarte a dormir o no dormir.',
     'No sabía que ponerme hoy y me puse a pensar en ti.',
     '¿Crees en el amor a primera vista o tengo que darme otra vuelta y volver a pasar?',
     'Eres la canción que haces sonar mi guitarra.',
     'No pretendo decirte algo bonito, lo que te digo es algo muy sincero. El cariño que siento es infinito y mi amor por ti es VERDADERO.',
     'La distancia y el tiempo no saben la falta que le haces a mi corazón.',
     'Ni en clase de matematicas me perdía tanto como me pierdo con tu mirada.',
     'Y Dios dijo: "hágase lo más hermoso del universo," y nació la hermosura que esta leyendo esto.',
     'Si yo fuera un avión y tú mi aeropuerto aterrizaria todos los días en tu exquisito cuerpo.'
    ];
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  document.querySelector('#word').innerHTML = randomWord;
}