const receitasLanches = {
        hamburguer: {
            nome: "Hambúrguer Clássico",
            tempoPreparo:"40 minutos",
            porcoes:"4 porções",
            imagem: "https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-scaled.jpg",
            ingredientes:[
                "500g de carne moida",
                "4 pães de hambúrguer",
                "4 fatias de queijo",
                "2 tomate fatiado",
                "8 folhas de alface",
                "1 cebola roxa fatiada",
                "Maionese a gosto",
                "Ketchup a gosto",
                "Sal e pimenta a gosto",
                "1 colher de sopa de óleo",
            ],
            modoPreparo:[
                "Tempere a carne moída com sal e pimenta",
                "Divida a carne em 4 porções e molde os hambúrgueres",
                "Aqueça uma frigideira com óleo em fogo médio-alto",
                "Grelhe os hambúrgueres por 4-5 minutos de cada lado",
                "Adicione o queijo por cima nos últimos minutos",
                "Corte os pães ao meio e torre levemente",
                "Monte o lanche: pão, maionese, alface, hambúrguer, tomate, cebola e molhos",
                "Cubra com a parte superior do pão e sirva"
            ]
        },
        x_salada: {
            nome: "X-salada",
            tempoPreparo: "30 minutos",
            porcoes: "3 porções",
            imagem: "https://s2-receitas.glbimg.com/MBXXThem86JdWaXz95KsIv_swfc=/0x0:1024x576/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/C/9/qcgPqQTNSYuN0M8qR9hg/x-salada-caseiro.jpg",
            ingredientes: [
                "3 pães de hambúrguer",
                "300 g de carne moída",
                "6 fatias de presunto",
                "2 fatias de queijo",
                "1 tomate fatiado",
                "Folhas de alface",
                "Maionese a gosto",
                "Sal e pimenta a gosto",
            ],
            modoPreparo: [
                "Tempere carne moída, faça os hambúrgueres",
                "Grelhe os hambúrgueres até ficarem no ponto desejado",
                "Torre os pães levemente",
                "Passe maionese na parte inferior do pão",
                "Coloque alface, hambúrguer, presunto, queijo e tomate",
                "Finalize com a parte superior do pão",
                "Sirva imediatamente" 
            ]

        },
        sanduiche_natural: {
            nome:"Sanduiche Natural de frango",
            tempoPreparo: "25 minutos",
            porcoes: "3 porções",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SuGokjM38zqhfYachGBjbX7sFnaDyEC3UA&s",
            ingredientes: [
                "6 fatias de pão integral",
                "300g de peito de frango desfiado",
                "2 colheres de sopa de maionese",
                "1 cenoura ralada",
                "folhas de alface",
                "2 tomates fatiados",
                "Sal e pimenta a gosto",
            ],modoPreparo: [
                "Misture o frango desfiado com maionese, sal e pimenta",
                "Passe manteiga nas fatias de pão (opcional)",
                "Distribua o frango temperado sobre 2 fatias",
                "Adicione alface, tomate e cenoura",
                "Cubra com as outras fatias de pão",
                "Corte na diagonal e sirva"
            ]

        }
};
const receitasSalgados = {
    receitaSalgados: {
        coxinha: {
            nome: "Coxinha de frango",
            tempoPreparo: "1 hora e 30 minutos",
            porcoes: "20 unidades",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGB13GJVlJ3mi2V1IbJEgJZo8LUMFJoaAPxQ&s",
            ingredientes: [
                "500g de peito de frango",
                "2 xícaras de farinha de trigo",
                "2 xícaras de caldo de frango",
                "2 colheres de sopa de margarina",
                "1 cebola picada ",
                "2 dentes de alho picados",
                "Sal, pimentas e temperos a gosto",
                "Farinha de rosca para empanar",
                "2 ovos batidos",
                "óleo para fritar",
            ],
            modoPreparo: [
                "Cozinhe o frango e desfie bem miudinho",
                "Refogue a cebola e alho, adicione o frango e temperos",

                "Para a massa: ferva o caldo com margarina e sal",
                "Adicione a farinha de uma vez e mexa até desgrudar da panela",
                "Deixe a massa esfriar até poder manusear",

                "Abra pedaços da massa, recheie com frango",
                "Modele no formato de coxinha",
                "Passe no ovo batido e depois na farinha de rosca",
                "Frite em óleo quente até dourar",
                "Escorra em papel absorvente e sirva quente"
            ]
        },
        pastel: {
            nome: "Pastel frito",
            tempoPreparo: "50 minutos",
            porcoes: "15 unidades",
            imagem: "https://prodcontent.yoki.com.br/wp-content/uploads/2024/09/Pastel-Mineiro-800x450-1.jpg",
            ingredientes: [
                "300g de farinha de trigo",
                "2 ovos",
                "2 colheres de sopa de óleo",
                "1 colher de chá de sal",
                "Água morna (cerca de 150ml)",
                "300g de queijo muçarela ralado",
                "Óleo para fritar"
            ],
            modoPreparo: [
                "Misture farinha, sal, ovo e óleo",
            "Adicione água aos poucos até formar uma massa lisa",
            "Deixe descansar por 20 minutos",
            "Abra a massa bem fina com rolo",
            "Corte retângulos e coloque o queijo no centro",
            "Feche as bordas pressionando com garfo",
            "Frite em óleo bem quente até dourar",
            "Escorra e sirva imediatamente"
            ]
        },
        Empada: {
            nome: "Empada de Palmito",
            tempoPreparo: "1 hora",
            porcoes: "10 unidades",
            imagem: "https://sabores-new.s3.amazonaws.com/public/2024/11/empadinhas-de-palmito.jpg",
            ingredientes: [
                "2 xícaras de farinha de trigo",
                "100g de margarina",
                "1 ovo",
                "1 colher de chá de sal",
                "Água gelada",
                "300g de palmito picado",
                "1 cebola picada",
                "2 ovos cozidos picados",
                "Cheiro-verde a gosto",
                "Sal e pimenta a gosto",
            ],
            modoPreparo: [
                "Para a massa: misture farinha, sal, margarina e ovo",
                "Trabalhe até formar uma massa homogênea",
                "Para o recheio: refogue cebola, palmito e temperos",
                "Adicione os ovos picados e cheiro-verde",
                "Abra a massa e forre forminhas de empada",
                "Adicione o recheio e cubra com mais massa",
                "Pincele com gema de ovo",
                "Asse em forno médio (180°C) por 25-30 minutos" 
            ]
        }
    }
};
const receitasBebidas = {
    bebidasSemAlcool: {
        limonadaSuiça: {
            imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2024/04/29114609/Limonada-suica-1.webp",
            nome: "Limonada Suiça",
            tempoPreparo: "10 minutos",
            porcoes: "4 copos",
            ingredientes: [
                "6 limões",
                "1 lata de leite condensado",
                "2 copos de água gelada",
                "Gelo a gosto"
            ],
            modoPreparo: [
                "Lave bem os limões e corte-os em pedaços, mantendo a casca",
                "No liquidificador, bata os limões com a água gelada por alguns segundos",
                "Coe a mistura em uma peneira fina para retirar os pedaços maiores",
                "Volte o líquido coado para o liquidificador e adicione o leite condensado",
                "Bata novamente por mais 30 segundos",
                "Sirva imediatamente com bastante gelo"
            ]
        },
        smoothieFrutas: {
            nome: "Smoothiende frutas Vermelhas",
             tempoPreparo: "8 minutos",
            porcoes: "2 copos",
            imagem: "https://images.ctfassets.net/qfxflpv0atz9/6fSHImqwq3XnNLSToLvAxe/4ecdedc7d36e7c3ae68fb4ea2c504981/20220126171108-KAD_Blog_smoothie-frutas-vermelhas_1920x1080.png?fm=webp&q=90&w=750&h=500",
            ingredientes: [
               "1 xícara de morangos congelados",
               "1/2 xícara de framboesas",
               "1 banana",
               "1 xícara de iogurte natural",
                "2 colheres de sopa de mel",
                "1/2 xícara de leite",
            ],
            modoPreparo: [
                "Descasque a banana e corte em pedaços",
                "No liquidificador, coloque primeiro o iogurte e o leite",
                "Adicione a banana, os morangos congelados e as framboesas",
                "Acrescente o mel",
                "Bata tudo em velocidade alta por 1-2 minutos até ficar cremoso",
                "Se necessário, adicione mais leite para ajustar a consistência",
                "Sirva imediatamente em copos gelados"
            ]   
        },
        vitamina: {
            nome: "Vitamina de Banana com Aveia",
            tempoPreparo: "5 minutos",
            porcoes: "2 copos",
            imagem: "https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F3ba6f6a4315c9a6fcf8e41ca95957a4767adc47c.png&w=1080&q=70",
            ingredientes: [
                "2 bananas maduras",
                "1 copo de leite gelado",
                "2 colheres de sopa de aveia em flocos",
                "1 colher de sopa de mel",
                "1/2 colher de chá de canela",
                "Gelo a gosto"
            ],
            modoPreparo: [
                "Descasque as bananas e corte em rodelas",
                "No liquidificador, adicione o leite gelado",
                "Coloque as bananas, a aveia em flocos e o mel",
                "Acrescente a canela",
                "Bata tudo por 1-2 minutos até ficar bem homogêneo",
                "Adicione gelo a gosto e bata rapidamente",
                "Sirva imediatamente, polvilhando canela por cima se desejar"
            ]
        },
        milkshake: {
            nome: "Milkshake de Morango",
            tempoPreparo: "7 minutos",
            porcoes: "2 copos",
            imagem: "https://veganoporquesim.com.br/wp-content/uploads/2022/10/Milk-Shake-de-Morango-Vegano.webp",
            ingredientes: [
                "2 bolas de sorvete de baunilha",
                "1 xícara de morangos frescos",
                "1/2 xícaras de leite gelado",
                "2 colheres de sopa de açucar",
                "Chantilly para decorar",
                "Morango para decorar"
            ],
            modoPreparo: [
                "Lave bem os morangos e retire os cabinhos",
                "Reserve alguns morangos para decoração",
                "No liquidificador, coloque o sorvete de baunilha",
                "Adicione os morangos, o leite gelado e o açúcar",
                "Bata em velocidade alta até ficar cremoso e homogêneo",
                "Prove e ajuste o açúcar se necessário",
                "Sirva em copos altos, decore com chantilly e morangos",
                "Sirva imediatamente com canudo"
            ]
        }
    },

    bebidasAlcoolicas:{
        caipirinha:{
           nome: "Caipirinha Clássica",
           tempoPreparo: "5 minutos",
           porcoes: "1 copo",
           imagem: "https://i.panelinha.com.br/i1/bk-8730-blog-caipirinha-de-limao.webp",
           ingredientes: [
            "2 limões",
            "2 colheres de sopa de açucar",
            "60ml de cachaça",
            "Gelo picado"
           ],
           modoPreparo: [
             "Lave bem os limões e corte em 8 pedaços cada um",
            "Em um copo baixo (old fashioned), coloque os pedaços de limão",
            "Adicione o açúcar sobre os limões",
            "Com um socador (muddler), macere bem os limões com o açúcar",
            "Complete o copo com gelo picado",
            "Adicione a cachaça e misture bem com uma colher",
            "Sirva imediatamente"
           ] 
        },
        mojito: {
            nome: "Mojito Cubano",
            tempoPreparo: "8 minutos",
            porcoes: "1 copo",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mojito_made_with_rum%2C_lime%2C_sugar%2C_mint%2C_club_soda%2C_served_in_a_tall_glass_-_Evan_Swigart.jpg",
           ingredientes: [
            "10 folhas de hortelã fresca",
            "1/2 limão cortado em pedaços",
            "2 colheres de chá de açúcar",
            "60ml de rum branco",
            "Água com gás",
            "Gelo"
           ],
           modoPreparo: [
            "Em um copo alto, coloque as folhas de hortelã",
            "Adicione os pedaços de limão e o açúcar",
            "Com um socador, macere suavemente para liberar os óleos da hortelã",
            "Adicione o rum branco e misture",
            "Complete o copo com gelo",
            "Complete com água com gás",
            "Misture delicadamente e decore com um raminho de hortelã",
            "Sirva com canudo"
           ]
        },
        sangria: {
            nome: "Sangria Espanhola",
            tempoPreparo: "15 minutos + 2 horas geladeira",
            porcoes: "6 taças",
            imagem: "https://cdn.craft.cloud/224393fa-1975-4d80-9067-ada3cb5948ca/assets/detail_Red_Sangria_2_2022.jpg",
           ingredientes: [
            "1 garrafa de vinho tinto seco",
            "2 pêssegos cortados",
            "2 maçãs cortadas",
            "1 laranja cortada em rodelas",
            "1/4 xícara de açucar",
            "60ml de brandy",
            "Refrigerante de limão",
            "Canela em pau"
           ],
           modoPreparo: [
            "Em uma jarra grande, coloque todas as frutas cortadas",
            "Adicione o açúcar e o brandy",
            "Despeje o vinho tinto",
            "Adicione a canela em pau",
            "Misture bem e leve à geladeira por pelo menos 2 horas",
            "Na hora de servir, complete com refrigerante de limão",
            "Sirva em taças com bastante fruta e gelo"
           ]
        },
        gimlet: {
            nome: "Gimlet de gin",
            tempoPreparo: "3 minutos",
            porcoes: "1 taça",
            imagem: "https://recipe.awesomedrinks.com/media/thumbnails/cocktails/gin_gimlet.jpg.700x700_q85_crop.jpg",
           ingredientes: [
            "60ml de gin",
            "20ml de suco de limão fresco",
            "20ml de xarope simples",
            "Gelo",
            "Raspa de limão para decorar"
           ],
           modoPreparo: [
            "Em uma coqueteleira, adicione gelo",
            "Despeje o gin, o suco de limão fresco e o xarope simples",
            "Agite vigorosamente por 10-15 segundos",
            "Coe a mistura em uma taça gelada (coupe ou martini)",
            "Decore com raspa de limão",
            "Sirva imediatamente"
           ]
        }
    }
};

const receitasSobremesa = {
    receitasSobremesa: {
        tiramisuClassico: {
            nome: "Tiramisu Clássico",
            tempoPreparo: "30 minutos + 4 horas na geladeira",
            rendimento: "8 porções",
            dificuldade: "Médio",
            imagem: "https://s2.glbimg.com/OMuPU_dbudJj2QjMit7rGOBvdm4=/620x413/smart/e.glbimg.com/og/ed/f/original/2021/03/19/receita-de-tiramisu-tradicional.jpg",
            ingredientes: {
                massa: [
                    "300g de biscoito champagne",
                    "1 xícara (240ml) de café expresso forte, frio",
                    "2 colheres de sopa de licor de café (opcional)"
                ],
                creme:[
                    "6 gemas de ovo",
                    "3/4 xícara (150g) de açucar",
                    "500g de mascarpone em temperatura ambiente",
                    "1 1/4 xícara (300ml) de creme de leite fresco",
                    "1 colher de chá de extrato de baunilha"
                ],
                cobertura: [
                    "Cacau em pó para polvilhar",
                    "Chocolate meio amargo ralado (opcional)",
                ]
            },
            modoPreparo: [
                "Bata as gemas com o açúcar até ficar cremoso e esbranquiçado",
                "Adicione o mascarpone e bata até incorporar bem",
                "Em outra tigela, bata o creme de leite até formar picos firmes",
                "Misture delicadamente o creme batido ao mascarpone",
                "Adicione a baunilha e misture",
                "Misture o café com o licor (se usar)",
                "Mergulhe rapidamente cada biscoito no café e disponha numa camada no refratário",
                "Cubra com metade do creme de mascarpone",
                "Repita com outra camada de biscoitos e o restante do creme",
                "Cubra com filme plástico e leve à geladeira por pelo menos 4 horas",
                "Antes de servir, polvilhe com cacau em pó"
            ],
            dicas: [
                "Use café bem forte e frio para não desmanchar os biscoitos",
                "O mascarpone deve estar em temperatura ambiente",
                "Deixe pelo menos 4 horas na geladeira, idealmente overnight"
            ]         
        },
        brownieFudge: {
            nome: "Brownie Fudge Cremoso",
            tempoPreparo: "1 hora",
            rendimento: "16 pedaços",
            dificuldade: "Facíl",
            imagem: "https://s2-receitas.glbimg.com/NpoerfX3SC9_FaGGTycdN8GZrZ0=/0x0:640x427/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/X/S/cJAyyRTrS1LG7iuZze0w/whatsapp-image-2022-07-06-at-15.23.38.jpeg",
            ingredientes: {
                brownie: [
                    "200g de chocolate meio amargo",
                    "150g de manteiga",
                    "1 1/2 xícara (300g) de açucar",
                    "4 ovos grandes",
                    "1 colher de chá de extrato de baunilha",
                    "3/4 xícara (95g) de farinha de trigo",
                    "1/4 xícara de (25g) de cacau em pó",
                    "1 colher de chá de sal",
                    "1 xícara de (120g) de nozes picadas (opcional)"
                ],
                cobertura: [
                    "100g dechocolate meio amargo derretido",
                    "2 colheres de sopa de creme de leite"
                ]
            },
            modoPreparo: [
                "Pré-aqueça o forno a 180°C e unte uma forma de 20x20cm",
                "Derreta o chocolate com a manteiga em banho-maria",
                "Misture o açúcar ao chocolate derretido",
                "Adicione os ovos um por vez, batendo bem",
                "Acrescente a baunilha",
                "Peneire a farinha, cacau e sal sobre a mistura",
                "Misture delicadamente até incorporar",
                "Adicione as nozes se usar",
                "Despeje na forma e asse por 25-30 minutos",
                "Para a cobertura, misture o chocolate derretido com o creme",
                "Espalhe sobre o brownie ainda morno",
                "Deixe esfriar completamente antes de cortar"
            ],
            dicas: [
               "Não asse demais - deve ficar ligeiramente úmido no centro",
                "Use palito para testar - deve sair com algumas migalhas úmidas",
                "Corte apenas quando estiver completamente frio" 
            ]
        },
        mouseMaracuja: {
            nome: "Mousse de maracujá",
            tempoPreparo: "20 minutos + 2 horas na geladeira",
            rendimento: "6 taças",
            dificuldade: "Facíl",
            imagem: "https://s2-receitas.glbimg.com/-dxuaFlPJXftzJGEkVTB-FIqO7I=/1280x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/1/F/t5DLoeQGq03wncdqnYWA/mousse-de-maracuja.jpg",
            ingredientes: {
                mouse: [
                    "1 lata (395g) de leite condensado",
                    "1 lata (300) de creme de leite",
                    "1/2 xícara (120ml) de polpa de maracujá concentrada",
                    "1 envelope (12g) de gelatina sem sabor",
                    "3 colheres de sopa de água"
                ],
                cobertura: [
                    "Polpa de maracujá",
                    "Sementes de maracujá para decorar"
                ]
            },
            modoPreparo: [
                "Hidrate a gelatina na água fria por 5 minutos",
                "Leve ao microondas por 15 segundos para dissolver",
                "No liquidificador, bata o leite condensado, creme de leite e polpa de maracujá",
                "Adicione a gelatina dissolvida e bata por mais 1 minuto",
                "Distribua em taças individuais",
                "Leve à geladeira por pelo menos 2 horas",
                "Decore com polpa fresca antes de servir"
            ],
            dicas: [
                "Use polpa de maracujá natural para melhor sabor",
                "A gelatina deve estar morna, não quente",
                "Pode fazer em uma tigela grande e servir com colher"
            ]
        },
        cheesecakeFrutas: {
            nome: "Cheesecake de frutas vermelhas",
            tempoPreparo: "1 hora + 4 horas na geladeira",
            rendimento: "12 fatias",
            dificuldade: "Médio",
            imagem: "https://bakeandcakegourmet.com.br/uploads/site/receitas/cheesecake-de-frutas-vermelhas-wvd7kw62.jpg",
            ingredientes: {
                base: [
                    "200g de biscoito maisena triturado",
                    "80g de manteiga derretida",
                    "2 colheres de sopa de açúcar"
                ],
                recheio: [
                    "600g de cream cheese em temperatura ambiente",
                    "2/3 xícara (130g) de açúcar",
                    "3 ovos grandes",
                    "1 colher de chá de extrato de baunilha",
                    "2 colheres de sopa de farinha de trigo",
                    "1/4 xícara (60ml) de creme de leite"
                ],
                cobertura: [
                    "300g de frutas vermelhas mistas",
                    "1/4 xícara (50g) de açúcar",
                    "2 colheres de sopa de água",
                    "1 colher de sopa de amido de milho"
                ]              
            },
            modoPreparo: [
                "Pré-aqueça o forno a 160°C",
                "Misture o biscoito triturado, manteiga e açúcar",
                "Pressione no fundo de uma forma de 23cm com fundo removível",
                "Asse por 10 minutos",
                "Para o recheio, bata o cream cheese até cremoso",
                "Adicione açúcar, ovos (um por vez), baunilha, farinha e creme",
                "Despeje sobre a base e asse por 45-50 minutos",
                "Deixe esfriar e leve à geladeira por 4 horas",
                "Para a cobertura, cozinhe as frutas com açúcar e água",
                "Misture o amido com um pouco de água e adicione",
                "Cozinhe até engrossar e espalhe sobre o cheesecake frio"
            ],
            dicas: [
                "O cream cheese deve estar em temperatura ambiente",
                "Não bata demais para evitar rachaduras",
                "Coloque uma assadeira com água no forno para umidade"
            ]
        },
        pudimLeiteCondensado: {
            nome: "Pudim de leite Condensado",
            tempoPreparo: "1 hora + 4 horas na geladeira",
            rendimento: "8 porções",
            dificuldade: "Facíl",
            imagem: "https://static.itdg.com.br/images/360-240/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg",
            ingredientes: {
                caramelo: [
                     "1 xícara (200g) de açúcar",
                    "1/4 xícara (60ml) de água"
                ],
                pudim: [
                    "1 lata (395g) de leite condensado",
                    "1 lata (400ml) de leite (use a lata do leite condensado)",
                    "3 ovos inteiros"
                ]
            },
            modoPreparo: [
                 "Para o caramelo, coloque açúcar e água numa panela",
                "Leve ao fogo médio até dourar (não mexa)",
                "Despeje numa forma de pudim e espalhe bem",
                "Para o pudim, bata todos os ingredientes no liquidificador",
                "Coe a mistura para remover possíveis grumos",
                "Despeje sobre o caramelo na forma",
                "Cubra com papel alumínio",
                "Cozinhe em banho-maria no forno a 180°C por 1 hora",
                "Teste com palito - deve sair limpo",
                "Deixe esfriar e leve à geladeira por 4 horas",
                "Desenforme passando uma faca nas bordas"
            ],
            dicas: [
                "O caramelo deve ficar dourado, não queimado",
                "Coe sempre a mistura do pudim",
                "Deixe esfriar completamente antes de desenformar"
            ]
        }
    }
};

