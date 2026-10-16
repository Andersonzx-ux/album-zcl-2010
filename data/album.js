window.album = {
    title: "Double Face",
    artist: "Zezé Di Camargo & Luciano",
    releaseDate: "26 de julho de 2010",
    recordingDate: "2010",
    genre: "Sertanejo",
    labels: ["Sony Music"],
    cover: "assets/cover.jpg",
    description: "",
    totalDuration: "1:34:02",
    // Suporte a álbum duplo (Disco 1 / Disco 2): cada item de "discs" define
    // a faixa inicial/final daquele disco (por número da faixa, não índice),
    // sua própria capa e sua própria paleta de 8 cores. A UI detecta sozinha
    // em qual disco a faixa atual está e troca capa + cores com um fade —
    // não precisa marcar nada faixa por faixa.
    // Álbum de 26 faixas: Disco 1 = faixas 1–14, Disco 2 = faixas 15–26.
    // (Álbum de disco único? Deixe só 1 item aqui cobrindo todas as faixas.)
    // ATENÇÃO: enquanto "tracks" tiver menos de 26 faixas, o Disco 2 mostra só
    // as que já existem (hoje 15–18). Ao colocar as 26 reais, nada muda aqui.
    discs: [
        {
            number: 1,
            title: "Disco 1",
            cover: "assets/cover-disco1.jpg",
            trackStart: 1,
            trackEnd: 14,
            // Paleta medida na capa vermelha (frente do "Double Face"):
            // preto da blusa, degradê do fundo vinho→vermelho, poltrona,
            // pele (único tom quente claro), camisa branca e título.
            palette: {
                blackMain: "#050C0E",   // blusa preta
                blackBrown: "#2B1916",  // fundo, sombra (topo)
                brownDark: "#60261C",   // fundo, vinho médio
                sepiaDark: "#862318",   // fundo/poltrona, vermelho vivo
                sepiaMedium: "#B54C42", // poltrona em luz
                goldMain: "#D5A27C",    // pele (acento quente)
                cream: "#DCD6DD",       // camisa branca
                light: "#FBFBFB"        // título / camisa em luz
            }
        },
        {
            number: 2,
            title: "Disco 2",
            cover: "assets/cover-disco2.jpg",
            trackStart: 15,
            trackEnd: 26,
            // Paleta medida na capa marrom (verso do "Double Face"): papel de
            // parede damasco, couro preto, camisa listrada, título dourado e
            // chapéu bege. O código de barras e o texto legal foram ignorados.
            palette: {
                blackMain: "#0A0D0E",   // couro/sombras
                blackBrown: "#291E1A",  // papel de parede, fundo
                brownDark: "#50372F",   // papel de parede, padrão em luz
                sepiaDark: "#624940",   // camisa listrada marrom
                sepiaMedium: "#9F9086", // tom dominante neutro-quente
                goldMain: "#B19C6F",    // título dourado
                cream: "#C6AF9B",       // chapéu bege
                light: "#ECD4C6"        // tons mais claros da foto
            }
        }
    ],
    awards: [
        { award: "Latin Grammy Awards", result: "Vencedor", year: "2010", category: "Melhor Álbum de Música Sertaneja", description: "Reconhecimento pela consistência do álbum." },
        { award: "Disco de Ouro", result: "Certificado", year: "2010", category: "Vendas", description: "Mais de 100 mil cópias vendidas." },

    ],
    technicalCredits: {
        production: ["César Augusto"],
        direction: ["César Augusto"],
        arrangements: ["Grimaldi D. Gomes"],
        recording: ["Mosh Studios (SP)"],
        mixing: ["Guilherme Canaes César Augusto"],
        mastering: ["Walter Lima"],
        studios: ["Mosh Studios (SP)"],
        photography: "Marcelo Faustini",
        artwork: "Luísa Corsini / Joana Moreira"
    },
    tracks: [
        {
            number: 1,
            title: "Tapa na Cara",
            duration: "3:26",
            composers: ["Carlos Randall / Villa / Zel Moreira"],
            audio: "audio/01.flac",
            lyrics: `[00:14.04] Seus olhos são laços que prendem meus passos
[00:16.99] Nessa pressa de chegar
[00:20.32] Caminho sozinho, entre pedras e espinhos
[00:23.25] Procurando te encontrar
[00:27.08] Vejo uma porta entreaberta
[00:28.86] Me flerta o brilho do seu olhar
[00:32.94] Imagino ver você
[00:35.94] Onde quer que eu vá
[00:39.38] Toda vez que procuro o seu beijo
[00:41.76] Me perco, me afogo em solidão
[00:45.76] Acordar de manhã e provar outros lábios
[00:49.27] Com vazio no coração
[00:52.12] E você não pensou um segundo
[00:54.82] Bateu a porta e me disse: Não!
[00:57.42] Tapa na cara, eu sei que vai doer
[01:00.74] Mas não dói mais do que perder você
[01:04.16] É uma ilusão pensar que um dia
[01:07.33] Eu possa te esquecer
[01:10.33] Tapa na cara, eu sei que vai doer
[01:13.54] Mas não dói mais do que perder você
[01:17.01] É uma ilusão pensar que um dia
[01:20.28] Eu possa te esquecer
[01:23.92] Se eu tiver que ser feliz é com você
[01:40.33] Seus olhos são laços que prendem meus passos
[01:43.43] Nessa pressa de chegar
[01:46.79] Caminho sozinho, entre pedras e espinhos
[01:49.56] Procurando te encontrar
[01:53.60] Vejo uma porta entreaberta
[01:55.45] Me flerta o brilho do seu olhar
[01:59.40] Imagino ver você
[02:02.67] Onde quer que eu vá
[02:05.69] Toda vez que procuro o seu beijo
[02:08.29] Me perco, me afogo em solidão
[02:12.20] Acordar de manhã e provar outros lábios
[02:15.43] Com vazio no coração
[02:18.68] E você não pensou um segundo
[02:21.06] Bateu a porta e me disse: Não!
[02:24.06] Tapa na cara, eu sei que vai doer
[02:27.11] Mas não dói mais do que perder você
[02:30.44] É uma ilusão pensar que um dia
[02:33.83] Eu possa te esquecer
[02:36.87] Tapa na cara, eu sei que vai doer
[02:40.01] Mas não dói mais do que perder você
[02:43.16] É uma ilusão pensar que um dia
[02:46.69] Eu possa...
[02:49.54] Tapa na cara, eu sei que vai doer
[02:52.79] Mas não dói mais do que perder você
[02:56.26] É uma ilusão pensar que um dia
[02:59.46] Eu possa te esquecer
[03:03.12] Se eu tiver que ser feliz é com você
[03:09.58] Se eu tiver que ser feliz é com você
[03:18.57] `
        },
        {
            number: 2,
            title: "Apaixonite Aguda",
            duration: "3:09",
            composers: ["Helio Gomes / Ed Reis / Stival / Vinícius"],
            audio: "audio/02.flac",
            lyrics: `[00:12.88] Tá na cara que a paixão me pegou
[00:19.84] Coração está bombando de amor
[00:22.56] 
[00:25.08] Arrebentando meu peito
[00:25.22] Um homem quando se apaixona
[00:26.25] Deixa a emoção vir à tona
[00:30.66] E não assume seus defeitos
[00:33.01] A paixão está pulsando nas veias
[00:39.05] Eu caí sem forças na sua teia
[00:43.35] Sem medo de me entregar
[00:46.67] 
[00:50.43] Mas eu não me arrependo
[00:53.78] Eu me entrego, eu me rendo
[00:55.74] Dá pra ver no meu olhar
[00:59.79] Sou assim, sentimental
[01:01.52] Sou pacional, ninguém me muda
[01:03.94] Tô curtindo essa apaixonite aguda
[01:06.78] E me entrego aos prazeres desse vício
[01:08.75] Esse vírus da paixão não me faz mal, mas me domina
[01:15.63] E não tem imunidade e nem vacina
[01:18.83] Já que não sou imortal que eu morra disso
[01:20.98] A paixão está pulsando nas veias
[01:49.55] Eu caí sem forças na sua teia
[01:53.75] Sem medo de me entregar
[01:57.34] 
[01:59.87] Mas eu não me arrependo
[02:01.22] Eu me entrego. eu me rendo
[02:07.41] Dá pra ver no meu olhar
[02:10.71] Sou assim, sentimental
[02:12.04] Sou pacional, ninguém me muda
[02:14.46] Tô curtindo essa apaixonite aguda
[02:17.22] E me entrego aos prazeres desse vício
[02:20.03] 
[02:22.32] Esse vírus da paixão não me faz mal, mas me domina
[02:26.23] E não tem imunidade e nem vacina
[02:28.61] Já que não sou imortal que eu morra disso
[02:32.17] Sou assim, sentimental
[02:36.02] Sou pacional, ninguém me muda
[02:38.43] Tô curtindo essa apaixonite aguda
[02:41.23] E me entrego aos prazeres desse vício
[02:43.18] Esse vírus da paixão não me faz mal mas me domina
[02:51.25] E não tem imunidade e nem vacina
[02:52.69] Já que não sou imortal que eu morra disso
[02:55.34] `
        },
        {
            number: 3,
            title: "Derrama Esse Amor em Mim",
            duration: "2:57",
            composers: ["Carlos Randall / Tivas"],
            audio: "audio/03.flac",
            lyrics: `[00:16.59] Você vive grudada feito tatuagem nesse cara
[00:22.45] Ele não te ama, não te merece, não te namora
[00:26.73] E eu aqui querendo que ele se dane, que vá embora
[00:39.03] Se você quiser o meu coração, vai ser seu agora
[00:43.18] Se você quiser vou te dar amor 24 horas
[00:54.55] Derrama esse amor em mim
[00:57.35] Derrama, derrama
[00:57.37] Derrama esse amor em mim
[00:58.42] Que eu vou te mostrar
[00:59.71] Como é que se ama
[01:04.21] Derrama esse amor em mim
[01:08.14] Derrama, derrama
[01:08.47] Derrama esse amor em mim
[01:11.43] Que eu vou te mostrar
[01:13.73] Como é que se ama
[01:16.83] Você vive grudada feito tatuagem nesse cara
[01:38.91] Ele não te ama, não te merece, não te namora
[01:43.37] E eu aqui querendo que ele se dane, que vá embora
[01:52.52] Se você quiser o meu coração, vai ser seu agora
[01:59.63] Se você quiser vou te dar amor 24 horas
[02:05.73] Derrama esse amor em mim
[02:11.28] Derrama, derrama
[02:11.28] Derrama esse amor em mim
[02:15.09] Que eu vou te mostrar
[02:16.34] Como é que se ama
[02:20.79] Derrama esse amor em mim
[02:24.67] Derrama, derrama
[02:24.98] Derrama esse amor em mim
[02:29.86] 
[02:32.08] Que eu vou te mostrar
[02:34.11] Como é que se ama
[02:35.63] Derrama esse amor em mim
[02:38.68] Derrama, derrama
[02:39.16] Derrama esse amor em mim
[02:42.36] Que eu vou te mostrar
[02:44.11] Como é que se ama
[02:47.29] `
        },
        {
            number: 4,
            title: "Um Amor Pra Vida Inteira",
            duration: "3:05",
            composers: ["Edson / Felipe / Flavinho"],
            audio: "audio/04.flac",
            lyrics: `[00:12.67] É tão lindo quando a gente ama
[00:19.83] Tudo rola, tudo acontece
[00:21.95] 
[00:24.30] Basta um abraço ou algum beijo
[00:25.77] Um olhar que fala com desejo
[00:30.45] Que do mundo logo a gente esquece
[00:36.42] Por que a gente sofre quando ama?
[00:42.50] Por uma briga à toa acaba o mundo
[00:48.65] Um sempre fala que não volta mais
[00:51.81] O outro que não vai correr atrás
[00:54.17] E esquece um sentimento tão profundo
[01:00.11] E quando cai a ficha e a saudade vai batendo
[01:06.16] Torpedos de amor um vai mandando e o outro lendo
[01:11.38] O orgulho nessa hora vira tudo brincadeira
[01:19.89] Um convite pra jantar
[01:21.37] Uma lágrima no olhar
[01:22.80] E um amor pra vida inteira
[01:29.93] Por que a gente sofre quando ama? (Ama)
[01:36.01] Por uma briga à toa acaba o mundo
[01:42.21] Um sempre fala que não volta mais
[01:44.48] O outro que não vai correr atrás
[01:47.70] E esquece um sentimento tão profundo
[01:53.65] E quando cai a ficha e a saudade vai batendo
[02:00.35] Torpedos de amor um vai mandando e o outro lendo
[02:05.65] O orgulho nessa hora vira tudo brincadeira
[02:11.05] Um convite pra jantar
[02:15.78] Uma lágrima no olhar
[02:16.22] E um amor pra vida inteira
[02:22.72] E quando cai a ficha e a saudade vai batendo
[02:29.33] Torpedos de amor um vai mandando e o outro lendo
[02:34.78] O orgulho nessa hora vira tudo brincadeira
[02:42.13] Um convite pra jantar
[02:44.70] Uma lágrima no olhar
[02:46.72] E um amor pra vida inteira
[02:50.83] `
        },
        {
            number: 5,
            title: "Esse Amor Não Valeu",
            duration: "3:15",
            composers: ["Rick / Alexandre / Zezé Di Camargo"],
            audio: "audio/05.flac",
            lyrics: `[00:14.21] Tento fugir desse amor
[00:16.37] Do quem vem de você
[00:17.42] Ficar me iludindo, querendo
[00:21.72] Sonhando pra quê?
[00:27.04] Se o medo é maior que a emoção?
[00:29.56] Esse amor não valeu
[00:33.87] Não rolou, não vingou
[00:33.99] Quer saber: não deu!
[00:36.38] Não dá pra colar, remendar
[00:41.32] Consertar uma história assim
[00:41.62] Que nem bem começou
[00:45.38] E já tirou você de mim
[00:50.56] 
[00:55.38] Ah, isso não pode ser paixão
[01:02.90] Ah, tá pintando uma solidão
[01:10.40] Ah, essas coisas que o amor me faz
[01:17.96] Ah, cada dia machuca mais
[01:23.13] Cada dia machuca mais
[01:26.46] Cada dia um pouco mais
[01:30.22] Cada dia um pouco mais
[01:33.85] Cada dia machuca mais
[01:53.75] Não dá pra colar, remendar
[01:54.28] Consertar uma história assim
[01:54.77] Que nem bem começou
[01:58.46] E já tirou você de mim
[02:01.67] Ah, isso não pode ser paixão
[02:03.06] Ah, tá pintando uma solidão
[02:08.42] Ah, essas coisas que o amor me faz
[02:31.01] Ah, cada dia machuca mais
[02:36.25] Cada dia machuca mais
[02:39.54] Cada dia um pouco mais
[02:43.28] Cada dia um pouco mais
[02:47.05] Cada dia machuca mais
[02:50.79] Cada dia machuca mais
[02:54.52] Cada dia um pouco mais
[02:58.28] Cada dia um pouco mais
[03:02.03] Cada dia machuca mais
[03:04.01] `
        },
        {
            number: 6,
            title: "Mentes Tão Bem (Mientes Tan Bien)",
            duration: "3:49",
            composers: ["Leonel García Nuñez / Nahuel Rodríguez Scharjs (versão: Luiz Cláudio)"],
            audio: "audio/06.flac",
            lyrics: `[00:14.64] Me promete amor sincero uma vida inteira
[00:21.42] Que com você o meu inverno vira primavera
[00:28.77] Vive me jurando estar apaixonada
[00:32.41] Prometeu o mundo e nunca me deu nada
[00:37.53] Você não cumpre nada
[00:42.62] Que se eu seguir o seu caminho chegarei ao céu
[00:49.83] Eu vou provando o gosto amargo do seu doce mel
[00:56.91] Na mentira das palavras, entro no seu jogo
[01:00.54] Procurando água, só encontro fogo
[01:05.68] E queimo nesse fogo
[01:09.40] Quando você fala, tão apaixonada
[01:12.99] Meu amor, eu sempre estarei contigo
[01:16.48] Olho nos seus olhos, me emociono e choro
[01:19.85] Sei que é mentira, mas me sinto vivo
[01:23.54] Mesmo sendo falso o ar, sinto que respiro
[01:31.99] Mentes tão bem
[01:37.54] Que parece verdade
[01:41.12] O que você me fala
[01:43.79] Vou acreditando
[01:45.55] Mentes tão bem
[01:50.72] Que até chego a imaginar
[01:54.42] Que não quer me enganar
[01:58.14] Que me ama de verdade
[02:02.35] 
[02:05.18] Mentes tão bem
[02:08.94] 
[02:12.74] Quando você fala, tão apaixonada
[02:16.38] Meu amor, eu sempre estarei contigo
[02:19.94] Olho nos seus olhos, me emociono e choro
[02:23.44] Sei que é mentira, mas me sinto vivo
[02:27.19] Mesmo sendo falso o ar, sinto que respiro
[02:35.39] Mentes tão bem
[02:40.95] Que parece verdade
[02:44.44] O que você me fala
[02:47.31] Vou acreditando
[02:49.03] Mentes tão bem
[02:54.46] Que até chego a imaginar
[02:57.86] Que não quer me enganar
[03:01.35] Que me ama de verdade
[03:06.12] 
[03:08.90] Mentes tão bem
[03:13.65] 
[03:15.66] Não me ama de verdade
[03:22.50] Você mente tão bem
[03:27.43] `
        },
        {
            number: 7,
            title: "Louco de Amor Por Você",
            duration: "4:27",
            composers: ["Alvaro Socci"],
            audio: "audio/07.flac",
            lyrics: `[00:11.75] Eu fui querendo meio sem querer
[00:16.59] Cada dia mais e mais você.
[00:22.42] Não conseguia mais me controlar
[00:28.26] Passei a meditar pra não me enlouquecer.
[00:32.07] Me tornei assim um metafísico
[00:37.15] Me dediquei ao mundo espiritual
[00:43.26] Me harmonizei com a natureza
[00:48.00] Comprei velas, incenso, pedras
[00:50.97] Fiz meu mapa astral
[00:54.33] Neurótico, paranóico, degenerado.
[00:58.50] E como costumo dizer, completamente tarado Mas louco de amor...
[01:03.27] Neurótico, paranóico, degenerado.
[01:08.45] E como costumo dizer, completamente tarado Mas louco de amor...
[01:18.22] Louco de amor...
[01:20.80] Por você!
[01:23.45] Louco de amorPor você!
[01:35.11] Mas nada disso conseguiu fazer
[01:40.07] Eu gostar um pouco menos de você.
[01:45.51] Fui sair com outras, fiz análise
[01:50.16] No desespero de tentar resolver
[01:55.98] Fiz sessões diárias de hipnose
[02:00.19] Regressão, coma induzido pra te esquecer.
[02:05.67] Neurótico, paranóico, degenerado
[02:11.50] E como costumo dizer, completamente tarado. Mas louco de amor...
[02:16.33] Neurótico, paranóico, degenerado.
[02:21.51] E como costumo dizer, completamente tarado Mas louco de amor...
[02:36.42] Louco de amor...
[02:41.98] Por você!
[02:44.10] Louco de amorPor você!
[02:46.38] 
[03:14.85] Neurótico, paranóico, degenerado
[03:19.45] E como costumo dizer, completamente tarado. Mas louco de amor...
[03:39.75] Louco de amor...
[03:42.65] Por você!
[03:45.18] Louco de amorPor você!
[03:55.32] Louco, louco, louco, louco, louco...
[04:14.62] Por você
[04:16.63] Louco de amor.
[04:27.03] `
        },
        {
            number: 8,
            title: "Um Novo Cara",
            duration: "3:15",
            composers: ["Darci Rossi / Alexandre"],
            audio: "audio/08.flac",
            lyrics: `[00:18.56] Você não acredita
[00:20.27] Não bota fé, duvida
[00:24.65] Mas eu te dou razão
[00:28.76] Enquanto me amava
[00:30.60] Eu sempre abusava
[00:34.17] Do seu coração
[00:37.53] Mas hoje é diferente
[00:38.70] Mudei completamente
[00:42.57] Me reconstruí
[00:46.05] Não sou o mesmo cara
[00:47.82] Talvez igual por fora
[00:50.50] Por dentro é outra história
[00:52.15] Eu estou aqui
[00:56.31] Eu sou um novo cara
[00:58.87] E nada se compara
[01:00.11] Com o cara que eu já fui
[01:03.06] Mudei a minha vida
[01:04.98] Mudei tudo por te amar
[01:08.79] Voltei pra te falar
[01:09.98] Que nada te substitui
[01:12.80] Eu sou um novo cara
[01:15.23] Bastante transformado
[01:15.81] Que apanhou, mas aprendeu
[01:18.71] De coração mais quente
[01:21.88] E a cabeça bem mais fria
[01:24.10] Tudo que você queria
[01:27.05] É o cara que sou eu
[01:31.93] 
[01:48.15] Mas hoje é diferente
[01:49.35] Mudei completamente
[01:53.35] Me reconstruí
[01:55.88] Não sou o mesmo cara
[01:58.62] Talvez igual por fora
[02:01.22] Por dentro é outra história
[02:02.73] Eu estou aqui
[02:06.88] Eu sou um novo cara
[02:09.44] E nada se compara
[02:10.20] Com o cara que eu já fui
[02:13.62] Mudei a minha vida
[02:15.33] Mudei tudo por te amar
[02:18.18] Voltei pra te falar
[02:20.57] Que nada te substitui
[02:23.05] Eu sou um novo cara
[02:25.89] Bastante transformado
[02:27.73] Que apanhou, mas aprendeu
[02:29.27] De coração mais quente
[02:32.46] E a cabeça bem mais fria
[02:35.45] Tudo que você queria
[02:37.63] É o cara que sou eu
[02:39.85] Eu sou um novo cara
[02:42.24] Bastante transformado
[02:44.20] Que apanhou, mas aprendeu
[02:45.86] De coração mais quente
[02:48.97] E a cabeça bem mais fria
[02:51.91] Tudo que você queria
[02:54.08] É o cara que sou eu
[02:58.78] 
[03:01.15] É o cara que sou eu
[03:04.30] `
        },
        {
            number: 9,
            title: "Ninguém Vai Bagunçar a Minha Vida",
            duration: "3:09",
            composers: ["Cecílio Nena / Zel Moreira / Nivardo Paes"],
            audio: "audio/09.flac",
            lyrics: `[00:11.18] O meu pensamento só me leva a crer
[00:13.05] Que você está aqui comigo
[00:14.44] Mas o meu coração me pede para esquecer
[00:23.39] E mesmo assim eu não consigo
[00:27.34] Diz que eu devo cair fora
[00:31.21] E não alimentar um sonho proibido
[00:35.49] Sei que agora estou em outra
[00:37.75] Mas ainda ando meio perdido
[00:44.02] Eu já sofri demais
[00:47.82] Quero encontrar minha paz
[00:54.34] Foram tanta loucuras, lembranças
[00:55.28] Que eu quero esquecer
[01:01.34] Vou libertar meu coração dessa prisão
[01:02.48] Não vou ficar mum beco sem saída
[01:08.45] Se o destino quis assim, vou fazer por mim
[01:13.44] Ninguém vai bagunçar a minha vida
[01:17.79] Vou libertar meu coração dessa prisão
[01:18.30] Não vou ficar mum beco sem saída
[01:24.25] E se o destino quis assim, vou fazer por mim
[01:46.74] Ninguém vai bagunçar a minha vida
[01:49.61] Eu já sofri demais
[01:50.93] Quero encontrar minha paz
[01:54.96] Foram tanta loucuras, lembranças
[01:58.05] Que eu quero esquecer
[02:04.25] Vou libertar meu coração dessa prisão
[02:05.30] Não vou ficar mum beco sem saída
[02:12.06] E se o destino quis assim, vou fazer por mim
[02:18.70] Ninguém vai bagunçar a minha vida
[02:20.70] Vou libertar meu coração dessa prisão
[02:21.36] Não vou ficar mum beco sem saída
[02:24.98] 
[02:28.19] Se o destino quis assim, vou fazer por mim
[02:35.47] Ninguém vai bagunçar a minha vida
[02:38.52] Ah ah, ah ah ah ah!
[02:42.22] Não vou ficar mum beco sem saída
[02:45.37] Ah ah, ah ah ah!
[02:51.56] Eu vou tirar você da minha vida
[02:56.63] `
        },
        {
            number: 10,
            title: "Comendo em Sua Mão",
            duration: "3:14",
            composers: ["César Augusto / Danimar"],
            audio: "audio/10.flac",
            lyrics: `[00:15.33] Tô apaixonado por você
[00:17.43] Nem sei como foi acontecer
[00:20.87] Eu era o dono do meu coração
[00:24.39] Agora tô comendo em sua mão
[00:28.30] Tô apaixonado por você
[00:31.61] Tô contando as horas pra te ver
[00:35.32] Por telefone é longe até demais
[00:36.62] Agora todo dia eu quero mais
[00:42.80] Fui me entregando, te amando
[00:44.49] Me enganando que era um caso a mais (A mais)
[00:50.36] Amanhã esqueço, viro tudo pelo avesso
[00:52.86] E depois bye bye (Bye bye)
[00:55.64] Vai ser uma transa, um programa
[01:00.01] Depois cansa, logo chega ao fim, enfim
[01:02.57] Fui pegar seu nome
[01:04.81] E anotar o telefone e acabou tudo assim
[01:10.12] Tô apaixonado por você
[01:13.04] Nem sei como foi acontecer
[01:16.54] Eu era o dono do meu coração
[01:20.41] Agora tô comendo em sua mão
[01:23.85] 
[01:38.35] Fui me entregando, te amando
[01:40.18] Me enganando que era um caso a mais (A mais)
[01:46.53] Amanhã esqueço, viro tudo pelo avesso
[01:48.46] E depois bye bye (Bye bye)
[01:52.25] Vai ser uma transa, um programa
[01:54.69] Depois cansa, logo chega ao fim, enfim
[01:59.22] Fui pegar seu nome
[02:00.46] E anotar o telefone e acabou tudo assim
[02:02.47] Tô apaixonado por você
[02:08.85] Nem sei como foi acontecer
[02:12.16] Eu era o dono do meu coração
[02:15.60] Agora tô comendo em sua mão
[02:19.67] Tô apaixonado por você
[02:21.03] Tô contando as horas pra te ver
[02:26.61] Por telefone é longe até demais
[02:27.97] Agora todo dia eu quero mais
[02:34.45] Tô apaixonado por você
[02:36.62] Nem sei como foi acontecer
[02:39.90] Eu era o dono do meu coração
[02:43.55] Agora tô comendo em sua mão
[02:48.31] Tô apaixonado por você
[02:51.37] Tô contando as horas pra te ver
[02:54.41] Por telefone é longe até demais
[02:57.46] Agora todo dia
[02:59.18] Agora todo dia
[03:01.29] Agora todo dia eu quero mais
[03:05.27] `
        },
        {
            number: 11,
            title: "Eres Todos Los Extremos",
            duration: "3:30",
            composers: ["Lucas Robles / Augusto Cabrera"],
            audio: "audio/11.flac",
            lyrics: `[00:21.82] Sé que no estoy muy bien
[00:22.82] Parado en tu camino
[00:31.63] Estoy en la contramano, amor
[00:33.19] Del sueño que no acabó
[00:38.13] 
[00:41.63] Me siento cada vez peor sin ti
[00:47.30] El sol se apagó
[00:51.72] Me falta el aire, te necesito
[00:56.83] Sin ti no sé vivir
[01:00.18] Ven, mi amor
[01:01.57] Vuelve a mí
[01:07.65] Te necesito
[01:08.39] Cada día más
[01:10.63] Eres mi ángel
[01:13.07] Eres mi sangre
[01:15.76] Corriendo fuerte
[01:17.25] En mi corazón, oh
[01:24.83] 
[01:42.53] No sé lo que me ha pasado, amor
[01:47.25] He perdido mis controles
[01:52.24] Cuando quiero hacerlo todo bien
[01:57.40] Las cosas me salen mal
[02:02.56] Haz dominado mi pasión
[02:06.07] Tu amor me contaminó
[02:13.21] Mi sentimiento
[02:15.18] Mi cuerpo y alma
[02:17.95] Y mi religión
[02:21.01] Ven, mi amor
[02:22.33] Vuelve a mí
[02:28.41] Te necesito
[02:28.88] Cada día más
[02:31.39] Eres mi ángel
[02:33.99] Eres mi sangre
[02:36.50] Corriendo fuerte
[02:38.12] En mi corazón
[02:38.33] Eres todos los extremos
[02:44.18] Eres cielo, eres infierno
[02:47.35] Eres sol y eres la luna
[02:49.84] Eres todo lo que quiero
[02:52.40] Eres todos los extremos
[02:54.99] El verano y el invierno
[02:56.22] El espacio en esta Tierra
[02:59.98] Eres todo lo que quiero
[03:10.05] Eres todo lo que quiero
[03:17.02] Eres todo
[03:18.31] Eres todo lo que quiero
[03:27.62] `
        },
        {
            number: 12,
            title: "Estrada",
            duration: "3:07",
            composers: ["Zezé Di Camargo / Luciano"],
            audio: "audio/12.flac",
            lyrics: `[00:09.69] Essa estrada eu já conheço, eu já passei
[00:14.58] Nessa estrada quantas bocas eu beijei
[00:19.52] Nessa estrada por kilometros andei
[00:24.52] Nessa estrada seu sorriso encontrei
[00:29.58] Nessa estrada o seu olhar foi meu farol
[00:34.58] Nessa estrada o seu corpo, meu lençol
[00:39.50] Nessa estrada, nessa estrada
[00:44.40] Nessa estrada eu encontrei você
[00:47.16] Por isso, toda vez que rasgo esse chão
[00:52.23] Eu sinto o vento acelerando o coração
[01:02.36] E as vezes vejo pelo meu retrovisor
[01:03.02] A sua linda boca me pedindo amor
[01:09.45] Nessa estrada, nessa estrada
[01:14.46] Nessa estrada eu encontrei você
[01:19.58] Nessa estrada, nessa estrada
[01:24.57] Nessa estrada eu amei você
[01:28.91] 
[01:39.46] Nessa estrada o seu olhar foi meu farol
[01:44.47] Nessa estrada o seu corpo, meu lençol
[01:49.46] Nessa estrada, nessa estrada
[01:54.42] Nessa estrada eu conheci você
[01:57.11] Por isso, toda vez que rasgo esse chão
[02:02.35] Eu sinto o vento acelerando o coração
[02:09.12] 
[02:11.14] E as vezes vejo pelo meu retrovisor
[02:12.98] A sua linda boca me pedindo amor
[02:19.55] Nessa estrada, nessa estrada
[02:24.50] Nessa estrada eu encontrei você
[02:29.42] Nessa estrada, nessa estrada
[02:34.58] Nessa estrada eu amei você
[02:39.44] Nessa estrada, nessa estrada
[02:44.58] Nessa estrada eu conheci você
[02:49.55] Nessa estrada, nessa estrada
[02:54.43] Nessa estrada eu amei você
[02:56.71] `
        },
        {
            number: 13,
            title: "Bem Aos Olhos da Lua",
            duration: "4:03",
            composers: ["Marco Camargo"],
            audio: "audio/13.flac",
            lyrics: `[00:14.82] Bem aos olhos da Lua
[00:17.72] Resolvi te amar
[00:22.83] Uma estrela sorriu à toa
[00:26.71] Ao me ver te beijar
[00:30.37] Percebi que o silêncio
[00:34.62] Fala pela emoção
[00:38.94] Uma estrada só é deserta
[00:43.13] Aonde não há paixão
[00:46.88] Abrace meu corpo inteiro
[00:51.05] Deixa a brisa passar
[00:54.89] Nós não vamos pedir carona
[00:59.14] Enquanto o sol não chegar
[01:02.89] Nessa estrada nenhum caminho
[01:06.67] Vai poder nos levar
[01:10.68] Passarinho só constroi um ninho
[01:15.08] Aonde puder amar
[01:17.60] Oh oh oh
[01:21.03] Quem nunca parou numa estrada
[01:28.07] Pra fazer amor de madrugada
[01:36.06] Nunca ouviu o Sol dizer pra Lua
[01:42.66] Que ela brilha tanto
[01:46.61] Oh, oh porque é apaixonada
[01:52.64] 
[02:01.94] Abrace meu corpo inteiro
[02:04.32] Deixa a brisa passar
[02:09.27] Nós não vamos pedir carona
[02:12.21] Enquanto o sol não chegar
[02:16.85] Nessa estrada nenhum caminho
[02:20.48] Vai poder nos levar
[02:24.33] Passarinho só constroi um ninho
[02:29.29] Aonde puder amar
[02:31.75] Oh oh oh
[02:34.17] Quem nunca parou numa estrada
[02:42.01] Pra fazer amor de madrugada
[02:50.18] Nunca ouviu o Sol dizer pra Lua
[02:56.57] Que ela brilha tanto
[02:59.99] Oh, oh porque é apaixonada
[03:05.91] Quem nunca parou numa estrada
[03:14.00] Pra fazer amor de madrugada
[03:19.57] 
[03:21.72] Nunca ouviu o Sol dizer pra Lua
[03:28.69] Que ela brilha tanto
[03:32.36] Oh, oh porque é apaixonada
[03:38.32] Quem nunca parou numa estrada
[03:46.03] Pra fazer amor de madrugada
[03:51.60] 
[03:53.95] Nunca ouviu o Sol dizer pra Lua
[04:03.30] `
        },
        {
            number: 14,
            title: "Do Seu Lado/Tão Linda e Tão Louca",
            duration: "8:59",
            composers: ["Nando Reis / Elias Muniz / Lucas Robles"],
            audio: "audio/14.flac",
            lyrics: `[00:20.37] Lá, lalá, lalá
[00:26.63] Lalá, lalá
[00:29.30] Lalalalalá
[00:31.87] Quero ouvir vocês!
[00:33.75] Lá, lalá, lalá
[00:40.03] Lalá, lalá
[00:42.50] Lalalalalá
[00:47.05] Faz muito tempo mas eu me lembro
[00:49.11] Você implicava comigo
[00:53.67] Mas hoje eu vejo que tanto tempo
[00:55.91] Me deixou muito mais calmo
[01:00.36] O meu comportamento egoísta
[01:03.08] O seu temperamento difícil
[01:06.99] Você me achava meio esquisito
[01:09.07] E eu te achava tão chata
[01:13.00] E agora, vamos lá!
[01:14.23] Mas tudo que acontece na vida
[01:16.81] Tem um momento e um destino
[01:19.41] Vocês!
[01:20.58] Viver é uma arte, é um ofício
[01:23.30] Só que precisa cuidado
[01:27.75] Pra perceber que olhar só prá dentro
[01:29.85] É o maior desperdício
[01:33.45] O seu amor
[01:36.95] Pode estar
[01:40.28] Do seu lado
[01:43.62] O amor
[01:47.82] É o calor
[01:51.23] Que aquece
[01:53.98] A alma
[01:57.33] O amor
[02:01.50] Tem sabor
[02:04.72] Pra quem bebe a sua água
[02:10.50] 
[02:15.93] Agora as mãos pra cima, assim, quero ver vocês, vai
[02:18.58] E hoje mesmo quase não lembro
[02:21.07] Que já estive sozinho
[02:25.25] Que um dia seria seu marido
[02:27.89] Seu príncipe encantado
[02:31.43] Ter filhos, nosso apartamento
[02:34.07] Fim de semana no sítio
[02:38.26] Ir ao cinema todo domingo
[02:40.35] Só com você do meu lado
[02:43.83] E agora vem
[02:45.55] Mas tudo que acontece na vida
[02:48.04] Tem um momento e um destino
[02:51.60] Viver é uma arte, é um ofício
[02:54.56] Só que precisa cuidado
[02:59.07] Pra perceber
[03:00.21] Que olhar só prá dentro
[03:01.18] É o maior desperdício
[03:04.75] O seu amor
[03:08.11] Pode estar
[03:11.33] Do seu lado
[03:14.61] O quê?
[03:15.77] O amor
[03:18.69] É o calor
[03:22.59] Que aquece
[03:25.89] A alma
[03:28.42] O amor
[03:32.73] Tem sabor
[03:35.98] Pra quem bebe a sua água
[03:40.08] 
[03:42.85] Lá, lalá, lalá
[03:49.34] Lalá, lalá
[03:51.70] Lalalalalá
[03:56.29] Lá, lalá, lalá
[04:02.72] Lalá, lalá
[04:05.18] Lalalalalá
[04:08.45] Só vocês
[04:09.22] O amor
[04:12.51] É o calor
[04:13.52] Agora só a galera, só a galera, quero ouvir, vai
[04:16.59] Que aquece
[04:19.07] A alma, alma
[04:22.75] O amor
[04:25.84] Tem sabor
[04:29.32] Pra quem bebe a sua água
[04:36.15] O amor
[04:39.30] É o calor
[04:43.59] Que aquece
[04:46.56] A alma, alma
[04:49.88] O amor
[04:52.74] Tem sabor
[04:56.28] Pra quem bebe a sua água
[05:17.82] É o sol, é mar, é o verde infinito em teus olhos
[05:23.66] Cabelos soltos ao vento
[05:25.76] Deixando marcas na areia
[05:31.61] Esse corpo bronzeado, malhado que me deixa louco
[05:36.35] Livre, leve e solto
[05:41.05] Me faz queimar de paixão
[05:44.93] Feito calor de verão
[05:48.28] Foi numa onda no mar
[05:51.74] Que o seu amor me levou
[05:54.69] Num sobe e desce
[05:56.42] Solta, pega, gruda e mexe
[05:58.74] De repente rolou
[06:02.18] Foi numa onda no mar
[06:05.65] Que o seu amor me levou
[06:08.43] Num sobe e desce
[06:11.23] Solta, pega, gruda e mexe
[06:12.68] De repente rolou
[06:15.46] 
[06:26.95] É o sol, é mar, é o verde infinito em seus olhos
[06:32.45] Cabelos soltos ao vento
[06:36.17] Deixando marcas na areia
[06:40.42] Esse corpo bronzeado, malhado que me deixa louco
[06:46.41] Livre, leve e solto
[06:50.61] Me faz queimar de paixão
[06:53.44] Feito calor de verão
[06:57.86] Foi numa onda no mar
[07:01.22] Que o seu amor me levou
[07:04.02] Num sobe e desce
[07:05.83] Solta, pega, gruda e mexe
[07:07.51] De repente rolou
[07:11.77] Foi numa onda no mar
[07:15.22] Que o seu amor me levou
[07:17.93] Num sobe e desce
[07:19.83] Solta, pega, gruda e mexe
[07:22.58] De repente rolou
[07:25.05] Quem é que não se apaixona
[07:28.89] Por esses olhos?
[07:31.44] Por essa boca?
[07:34.69] Quem não comete loucuras
[07:36.17] Se ela é tão linda
[07:38.28] Se ela é tão louca
[07:41.38] Foi numa onda no mar
[07:44.70] Que o seu amor me levou
[07:47.83] Num sobe e desce
[07:49.37] Solta, pega, gruda e mexe
[07:52.06] De repente rolou
[07:55.26] Foi numa onda no mar
[07:58.71] Que o seu amor me levou
[08:01.44] Num sobe e desce
[08:04.22] Solta, pega, gruda e mexe
[08:05.17] De repente rolou
[08:09.11] Foi numa onda no mar
[08:12.65] Que o seu amor me levou
[08:15.38] Num sobe e desce
[08:17.13] Solta, pega, gruda e mexe
[08:19.89] De repente rolou
[08:23.05] Foi numa onda no mar
[08:26.46] Que o seu amor me levou
[08:29.21] Num sobe e desce
[08:31.28] Solta, pega, gruda e mexe
[08:33.57] De repente rolou
[08:34.38] `
        },
        {
            number: 15,
            title: "Cada Qual Tem Seu Valor",
            duration: "3:16",
            composers: ["Juliano / Compadre Lima"],
            audio: "audio/15.flac",
            lyrics: `[00:18.96] O silêncio é meu amigo
[00:22.61] A saudade é minha amada
[00:32.86] Minha casa é o mundo
[00:37.05] Minha vida é nas estradas
[00:45.23] Minha cama sem colchão
[00:48.88] Minhas noites mal sonhadas
[00:59.64] Também sou filho de deus
[01:03.29] Mas o mundo me escolheu
[01:07.72] Pra fazer parte do nada
[01:17.75] Quem ganhou tudo o que dei
[01:21.38] Mora em um reinado em flor
[01:32.15] Tem carinho e afeto
[01:36.23] E um verdadeiro amor
[01:44.73] Dorme em colchão de mola
[01:48.58] Como um anjo encantador
[01:59.45] Mas como diz o ditado
[02:03.05] Seja certo ou errado
[02:06.87] Cada qual tem seu valor
[02:17.02] Cada qual vale o que tem
[02:21.01] Quem não tem, não vale nada
[02:31.91] Não sei se eu estou certo
[02:35.54] Ou se a vida é errada
[02:43.96] Quem planta mudas de rosas
[02:48.12] Colhe rosas perfumadas
[02:58.02] Plantei flores em meu caminho
[03:01.93] Hoje colho os espinhos
[03:06.41] Pra ferir minha jornada
[03:14.37] `
        },
        {
            number: 16,
            title: "Solidão no Seu Lugar",
            duration: "3:21",
            composers: ["Carlos Randall / Danimar"],
            audio: "audio/16.flac",
            lyrics: `[00:12.33] Senta de frente ao espelho, se olhando
[00:18.48] Brinca com a solidão pensando em mim
[00:24.35] Pergunta ao coração se está sonhando
[00:30.35] Que o nosso amor não vai morrer assim
[00:36.37] Eu toco a minha vida, vou levando
[00:42.22] Sem ter motivos pra comemorar
[00:48.41] O meu sorriso é parte do passado
[00:54.91] Você nunca saiu do meu olhar
[00:58.84] Na minha pele seu suor
[01:01.76] Ainda corre sem parar
[01:05.42] E entre meus dedos sinto os nós
[01:08.42] Dos seus cabelos sem pentear
[01:11.73] Mordi seus lábios por querer
[01:14.01] Marquei seu corpo sem pensar
[01:17.47] Que a solidão hoje estaria em seu lugar
[01:21.76] 
[01:24.99] 
[01:48.32] Eu toco a minha vida, vou levando
[01:54.33] Sem ter motivos pra comemorar
[02:00.43] O meu sorriso é parte do passado
[02:06.98] Você nunca saiu do meu olhar
[02:10.85] Na minha pele seu suor
[02:14.09] Ainda corre sem parar
[02:16.34] E entre meus dedos sinto os nós
[02:19.79] Dos seus cabelos sem pentear
[02:22.57] Mordi seus lábios por querer
[02:26.08] Marquei seu corpo sem pensar
[02:28.48] Que a solidão hoje estaria em seu lugar
[02:34.70] Na minha pele seu suor
[02:37.73] Ainda corre sem parar
[02:40.37] E entre meus dedos sinto os nós
[02:44.46] Dos seus cabelos sem pentear
[02:46.56] Mordi seus lábios por querer
[02:50.01] Marquei seu corpo sem pensar
[02:52.44] Que a solidão hoje estaria em seu lugar
[02:59.72] Mordi seus lábios por querer
[03:02.07] Marquei seu corpo sem pensar
[03:06.01] Que solidão hoje estaria em seu lugar
[03:12.75] `
        },
        {
            number: 17,
            title: "Metade de Alguém",
            duration: "3:04",
            composers: ["Darci Rossi / Marciano"],
            audio: "audio/17.flac",
            lyrics: `[00:22.15] Eu sei que sou apenas a metade de alguém
[00:27.55] Eu só me sinto inteiro abraçado com você
[00:32.98] Amor você me parte toda vez que está distante
[00:38.54] Fico só metade até você aparecer
[00:43.92] Você que me completa e me dá a perfeição
[00:49.58] Em mim você se encaixa de uma forma natural
[00:54.92] Eu sou a parte esquerda, eu sou o lado fraco
[01:00.32] Você além de tudo é a metade principal
[01:07.35] Antes de te ver eu me julgava ser alguém
[01:12.77] Depois te conheci e compreendi, não sou ninguém
[01:18.08] Não sei por que nasceu, se foi pra me querer
[01:23.59] Só sei que eu nasci somente para amar você
[01:29.70] 
[01:50.78] Eu sei que sou apenas a metade, nada mais
[01:56.32] Amor você completa até a minha respiração
[02:01.72] Enxergo muito pouco, sem você não vejo cores
[02:07.48] Falta até compasso quando bate o coração
[02:12.49] Agora realmente eu aprendi o que é viver
[02:17.81] Só sei que eu nasci quando você apareceu
[02:23.41] Encontram-se as metades, completam-se as vidas
[02:29.06] Então eu sou alguém só se existir você e eu
[02:35.94] Antes de te ver eu me julgava ser alguém
[02:41.17] Depois te conheci e compreendi, não sou ninguém
[02:46.62] Não sei por que nasceu, se foi pra me querer
[02:52.06] Só sei que eu nasci somente para amar você
[02:59.46] `
        },
        {
            number: 18,
            title: "Noite de Tortura",
            duration: "2:55",
            composers: ["Chrystian / Ralf"],
            audio: "audio/18.flac",
            lyrics: `[00:18.92] Esta noite é mais uma noite de tortura
[00:25.43] Pois você mora no apartamento ao lado
[00:32.34] Ouço seus passos e fico imaginando
[00:37.28] Que você pode estar também sozinha
[00:40.75] Feito eu perdido num canto
[00:46.49] Você não sabe, mas conheço sua vida
[00:53.05] Eu sei de tudo que acontece em sua casa
[00:59.59] Eu sei a hora que você abre o chuveiro
[01:04.77] Até parace que sinto seu cheiro
[01:08.29] E o desejo se apossa de mim
[01:14.58] Ai, ai, ai
[01:20.40] Coração que sofre, dilacera e quase sai do peito
[01:25.53] Um dia eu pego essa mulher de jeito
[01:29.08] E dou pra ela todo meu amor
[01:34.76] Ai, ai, ai
[01:40.76] Sofro e choro mas não me arrependo do que faço agora
[01:46.51] Pois sei que um dia vai chegar a hora
[01:49.85] Que nos meus braços você vai dormir
[02:08.52] Ai, ai, ai
[02:15.68] Coração que sofre, dilacera e quase sai do peito
[02:20.81] Um dia eu pego essa mulher de jeito
[02:24.66] E dou pra ela todo meu amor
[02:30.49] Ai, ai, ai
[02:36.24] Sofro e choro mas não me arrependo do que faço agora
[02:41.49] Pois sei que um dia vai chegar a hora
[02:45.16] Que nos meus braços você vai dormir
[02:50.36] `
        },
        {
            number: 19,
            title: "Roupa de Lua de Mel",
            duration: "3:58",
            composers: ["Carlos Randall / Dimarco"],
            audio: "audio/19.flac",
            lyrics: `[00:19.25] Voltei era de madrugada e me assustei
[00:25.15] 
[00:27.33] As luzes estavam acesas, não fui eu que deixei
[00:31.72] Entrei e vi suas coisas jogadas no chão
[00:43.64] Se misturando aos pedaços do meu coração
[00:46.00] Fiquei parado na sala escutando o chuveiro
[00:48.30] Perdi a fala, veio o desespero
[01:01.21] Era te aceitar ou te mandar embora
[01:04.02] Andei, fui até nosso quarto e vi tudo arrumado
[01:15.03] Fiquei revivendo nosso passado
[01:17.29] Enquanto a chuva caía lá fora
[01:24.58] E ali na penumbra do quarto, chorei de emoção
[01:28.37] Ouvindo o barulho da água caindo no chão
[01:41.75] Ouvi o spray do perfume, o secar dos cabelos
[01:49.40] E vi minha felicidade me olhando no espelho
[01:59.03] Você veio usando uma roupa de lua de mel
[02:03.24] Trazendo no rosto o olhar mais fiel
[02:06.76] E ali no tapete te amei sem pensar
[02:13.79] Quando amanheceu encontrei um bilhete de adeus, dizendo
[02:19.68] Fui embora, acredite por Deus
[02:23.20] Só vim te rever, não prometo voltar
[02:26.10] 
[02:46.29] E ali na penumbra do quarto, chorei de emoção
[02:51.26] Ouvindo o barulho da água caindo no chão
[02:56.44] Ouvi o spray do perfume, o secar dos cabelos
[03:10.89] E vi minha felicidade me olhando no espelho
[03:20.79] Você veio usando uma roupa de lua de mel
[03:25.13] Trazendo no rosto o olhar mais fiel
[03:28.50] E ali no tapete te amei sem pensar
[03:35.66] Quando amanheceu encontrei um bilhete de adeus, dizendo
[03:42.09] Fui embora, acredite por Deus
[03:45.17] Só vim te rever, não prometo voltar
[03:51.59] `
        },
        {
            number: 20,
            title: "Aguenta Coração",
            duration: "2:37",
            composers: ["Carlos Cesar / José Homero"],
            audio: "audio/20.flac",
            lyrics: ``
        },
        {
            number: 21,
            title: "Do Outro Lado da Cidade",
            duration: "3:04",
            composers: ["Carlos Randall / Danimar"],
            audio: "audio/21.flac",
            lyrics: `[00:17.72] Hoje vou voltar de madrugada
[00:22.64] Sei que ela vai brigar comigo
[00:26.99] Hoje meu astral não 'tá com nada
[00:31.17] Vou beber cerveja com os amigos
[00:36.05] Ela não tem culpa dos meus erros
[00:39.06] Ela não conhece meu passado
[00:44.06] Quando ela me abraça e me beija
[00:46.90] Meu coração está do outro lado
[00:52.99] Do outro lado da cidade tem
[00:57.18] Alguém que me deixa dividido
[01:02.08] Uma diz que sou um bom amante
[01:05.82] A outra diz que sou um bom marido
[01:10.94] Se eu pudesse ficar com as duas
[01:15.81] Não estaria nesse embaraço
[01:20.21] Vou ter que fazer só uma feliz
[01:24.30] Porque não cabem duas nos meus braços
[01:48.72] Hoje vou voltar de madrugada
[01:53.34] Sei que ela vai brigar comigo
[01:57.45] Hoje meu astral não 'tá com nada
[02:00.63] Vou beber cerveja com os amigos
[02:05.95] Ela não tem culpa dos meus erros
[02:09.18] Ela não conhece meu passado
[02:13.36] Quando ela me abraça e me beija
[02:16.91] Meu coração está do outro lado
[02:24.53] Do outro lado da cidade tem
[02:27.03] Alguém que me deixa dividido
[02:31.55] Uma diz que sou um bom amante
[02:35.57] A outra diz que sou um bom marido
[02:40.77] Se eu pudesse ficar com as duas
[02:45.76] Não estaria nesse embaraço
[02:50.53] Vou ter que fazer só uma feliz
[02:54.64] Porque não cabem duas nos meus braços`
        },
        {
            number: 22,
            title: "Voando Baixo",
            duration: "2:48",
            composers: ["Edson / Felipe"],
            audio: "audio/22.flac",
            lyrics: `[00:18.37] Vou cortando estrada
[00:19.71] De madrugada, não sinto sono
[00:22.38] Louco de saudade
[00:24.61] Numa vontade de te encontrar
[00:25.49] 'Tá me esperando
[00:28.14] Eu sei, só sei o que passei
[00:29.85] Já 'tá consumado que do seu lado
[00:31.73] A paz eu encontrei
[00:35.53] Faz uma semana
[00:36.44] Que esse drama me desespera
[00:38.25] Mas eu não aceito
[00:40.17] Arrumei um jeito
[00:41.13] Eu já 'to chegando
[00:43.90] Sei que é proibido te amar
[00:45.67] Mas já está escrito no olhar
[00:47.78] Que a paixão da gente é tão evidente
[00:50.11] Não dá pra segurar
[00:53.02] Ah, 'to voando baixo
[00:56.37] 'To acelerado, 'to rasgando chão
[01:01.94] Ah, daqui meia hora 'to de corpo e alma
[01:06.54] Batendo palma no seu portão
[01:14.00] Ê, meu Deus do céu
[01:16.31] Se meu coração pudesse falar o que eu 'to sentindo
[01:25.28] Vou cortando estrada
[01:29.08] De madrugada, não sinto sono
[01:31.46] Louco de saudade
[01:32.86] Numa vontade de te encontrar
[01:35.99] 'Tá me esperando
[01:37.41] Eu sei, só sei o que passei
[01:39.88] Já 'tá consumado que do seu lado
[01:42.49] A paz eu encontrei
[01:43.23] Faz uma semana
[01:45.93] Que esse drama me desespera
[01:48.36] Mas eu não aceito
[01:49.91] Arrumei um jeito
[01:51.50] Eu já 'to chegando
[01:53.36] Sei que é proibido te amar
[01:55.33] Mas já está escrito no olhar
[01:57.16] Que a paixão da gente é tão evidente
[01:59.23] Não dá pra segurar
[02:02.73] Ah, 'to voando baixo
[02:05.21] 'To acelerado, 'to rasgando chão
[02:10.62] Ah, daqui meia hora 'to de corpo e alma
[02:16.14] Batendo palma no seu portão
[02:19.43] Ah, 'to voando baixo
[02:23.49] 'To acelerado, 'to rasgando chão
[02:28.09] Ah, daqui meia hora 'to de corpo e alma
[02:33.54] Batendo palma no seu portão`
        },
        {
            number: 23,
            title: "Telefone Mudo / Ainda Ontem Chorei de Saudade",
            duration: "5:43",
            composers: ["Franco / Peão Carreiro / Moacyr Franco"],
            audio: "audio/23.flac",
            lyrics: `[00:27.34] Eu quero que risque o meu nome da sua agenda
[00:33.83] Esqueça o meu telefone, não me ligue mais
[00:40.04] Porque já estou cansado de ser o remédio
[00:45.51] Pra curar o seu tédio
[00:47.61] Quando seus amores não lhe satisfaz
[00:52.92] Cansei de ser o seu palhaço, fazer o que sempre quis
[00:59.42] Cansei de curar sua fossa quando você não se sentia feliz
[01:07.43] Por isso é que decidi o meu telefone cortar
[01:13.10] Você vai discar várias vezes
[01:16.79] Telefone mudo não pode chamar
[01:20.95] 
[01:47.77] Eu quero que risque o meu nome da sua agenda
[01:54.06] Esqueça o meu telefone, não me ligue mais
[02:00.50] Porque já estou cansado de ser o remédio
[02:05.83] Pra curar o seu tédio
[02:08.04] Quando os seus amores não lhe satisfaz
[02:13.36] Cansei de ser o seu palhaço, fazer o que sempre quis
[02:19.90] Cansei de curar sua fossa quando você não se sentia feliz
[02:27.89] Por isso é que decidi o meu telefone cortar
[02:34.11] Você vai discar várias vezes
[02:36.99] Telefone mudo não pode chamar
[02:42.20] 
[02:51.46] Aqui não, meu bem!
[02:53.64] Aqui é os dois filhos do Seu Francisco!
[02:56.32] 
[03:13.09] Você me pede na carta que eu desapareça
[03:19.40] Que eu nunca mais te procure, pra sempre te esqueça
[03:25.93] Posso fazer sua vontade, atender seu pedido
[03:32.11] Mas esquecer é bobagem, é tempo perdido
[03:38.87] Ainda ontem chorei de saudade
[03:46.90] Relendo a carta, sentindo o perfume
[03:54.87] Mas que fazer com essa dor que me invade?
[04:02.89] Mato esse amor ou me mata o ciúme
[04:10.09] 
[04:36.75] O dia inteiro te odeio, te busco, te caço
[04:42.91] Mas nos meu sonhos, de noite te beijo, te abraço
[04:49.61] Porque os sonhos são meus, ninguém rouba e nem tira
[04:55.90] Melhor sonhar a verdade que amar na mentira
[05:02.31] Ainda ontem chorei de saudade
[05:10.23] Relendo a carta, sentindo o perfume
[05:18.40] Mas que fazer com essa dor que me invade?
[05:26.34] Mato esse amor ou me mata o ciúme
[05:34.25] `
        },
        {
            number: 24,
            title: "Copo Duplo de Solidão",
            duration: "3:33",
            composers: ["Maracaí"],
            audio: "audio/24.flac",
            lyrics: `[00:24.22] Garçom eu passei da conta
[00:26.81] Ontem fiquei de cabeça tonta
[00:29.61] E fui embora sem pagar
[00:34.75] Não que eu tivesse duro
[00:36.76] Tomei um litro de whisky puro
[00:39.62] Nem sei como eu sair desse bar
[00:44.52] Acrescenta na despesa
[00:47.63] Seus dez por cento da mesa
[00:50.51] E queira me desculpar
[00:54.67] Vê só quanto eu devo, que hoje eu não bebo nada
[00:58.22] Por que a minha mulher amada
[01:01.13] Ligou dizendo que vai voltar
[01:06.23] Não sou do tipo que se entrega na bebida
[01:09.88] Mas eu não tive outra saída
[01:12.75] Pra sufocar essa minha dor
[01:18.09] Quando a saudade dela chega e detona
[01:21.55] Joga o meu coração na lona
[01:24.29] Nocauteado por amor
[01:29.97] Hoje é o dia "D"
[01:31.98] Garçom eu não vou beber
[01:34.78] Mesmo assim eu lhe agradeço pela atenção
[01:40.80] Mas se ela não cumprir
[01:43.63] Amanhã eu tô aqui
[01:45.97] Enchendo a cara num copo duplo de solidão
[01:51.96] 
[02:15.46] Não sou do tipo que se entrega na bebida
[02:18.96] Mas eu não tive outra saída
[02:21.81] Pra sufocar essa minha dor
[02:26.84] Quando a saudade dela chega e detona
[02:31.72] Joga o meu coração na lona
[02:33.47] Nocauteado por amor
[02:38.62] Hoje é o dia "D"
[02:41.35] Garçom eu não vou beber
[02:45.08] Mesmo assim eu lhe agradeço pela atenção
[02:49.93] Mas se ela não cumprir
[02:52.49] Amanhã eu tô aqui
[02:55.05] Enchendo a cara num copo duplo de solidão
[03:02.16] Hoje é o dia "D"
[03:04.51] Garçom eu não vou beber
[03:06.88] Mesmo assim eu lhe agradeço pela atenção
[03:13.07] Mas se ela não cumprir
[03:14.79] Amanhã eu tô aqui
[03:18.01] Enchendo a cara num copo duplo de solidão
[03:23.68] `
        },
        {
            number: 25,
            title: "Não Quero Piedade",
            duration: "2:58",
            composers: ["Ronaldo Adriano / Barrerito / Zé da Praia"],
            audio: "audio/25.flac",
            lyrics: `[00:16.13] Por favor não venha com mentiras, pelo amor de Deus
[00:22.98] As mentira e falsas promessas me fazem chorar
[00:28.58] 
[00:34.16] Se você não me quer eu aceito, a realidade
[00:35.12] Prefiro ouvir uma triste verdade
[00:38.37] Do que mil mentira para me agradar
[00:44.42] Você nunca fez um sacrifício pelo nosso amor
[00:50.66] Não reclamo mais me deixa triste o seu modo de agir
[00:57.10] Só espero que os seus carinhos não sejam forçados
[01:01.67] Se for necessário eu morro apaixonado
[01:06.03] Mas o nosso caso para por aqui
[01:11.76] Não... Não quero piedade
[01:17.56] Amor pela metade... É pouco pra nós dois
[01:25.51] Não, não repare no jeito, desculpe querida, mais eu não aceito
[01:33.69] Ser feliz agora e sofrer depois
[01:52.43] Você nunca fez um sacrifício pelo nosso amor
[01:59.72] Não reclamo mais me deixa triste o seu modo de agir
[02:05.67] Só espero que os seus carinhos não sejam forçados
[02:10.83] Se for necessário eu morro apaixonado
[02:14.84] Mas o nosso caso para por aqui
[02:21.34] Não... Não quero piedade
[02:26.63] Amor pela metade... É pouco pra nós dois
[02:34.79] Não, não repare no jeito, desculpe querida, mais eu não aceito
[02:42.89] Ser feliz agora e sofrer depois
[02:45.99] `
        },
        {
            number: 26,
            title: "Distante Dela",
            duration: "2:36",
            composers: ["Miltinho Rodrigues / Mangabinha"],
            audio: "audio/26.flac",
            lyrics: `[00:23.91] Não há tristeza maior
[00:25.53] Do que viver longe da pessoa amada
[00:32.27] Não há tristeza maior
[00:33.75] Do que estar ausente dos carinhos dela
[00:39.92] Eu vivo aqui amargurado
[00:41.02] Não sei o que faço nesta minha vida
[00:48.08] Tenho vontade de deixar de tudo
[00:50.39] E sair correndo pra encontrar com ela
[00:54.90] Eu vou amanhã bem cedo
[01:00.53] Já estou decidido, não fico mais aqui
[01:06.06] Eu vou deixar a cidade
[01:09.76] Vou buscar meu bem que está longe de mim
[01:14.05] 
[01:37.39] Não há tristeza maior
[01:38.82] Do que viver longe da pessoa amada
[01:45.68] Não há tristeza maior
[01:47.18] Do que viver longe dos carinhos dela
[01:53.36] Eu vivo aqui amargurado
[01:55.53] Não sei o que faço nesta minha vida
[02:01.63] Tenho vontade de deixar de tudo
[02:03.84] E sair correndo pra encontrar com ela
[02:08.77] Eu vou amanhã bem cedo
[02:13.35] Já estou decidido, não fico mais aqui
[02:19.39] Eu vou deixar a cidade
[02:22.88] Vou buscar meu bem que está longe de mim
[02:28.33] `
        }
    ]
};
