const items = [
    {
        name: "master-ball",
        url: "https://pokeapi.co/api/v2/item/1/",
    },
    {
        name: "ultra-ball",
        url: "https://pokeapi.co/api/v2/item/2/",
    },
    {
        name: "great-ball",
        url: "https://pokeapi.co/api/v2/item/3/",
    },
    {
        name: "poke-ball",
        url: "https://pokeapi.co/api/v2/item/4/",
    },
    {
        name: "safari-ball",
        url: "https://pokeapi.co/api/v2/item/5/",
    },
    {
        name: "net-ball",
        url: "https://pokeapi.co/api/v2/item/6/",
    },
    {
        name: "dive-ball",
        url: "https://pokeapi.co/api/v2/item/7/",
    },
    {
        name: "nest-ball",
        url: "https://pokeapi.co/api/v2/item/8/",
    },
    {
        name: "repeat-ball",
        url: "https://pokeapi.co/api/v2/item/9/",
    },
    {
        name: "timer-ball",
        url: "https://pokeapi.co/api/v2/item/10/",
    },
    {
        name: "luxury-ball",
        url: "https://pokeapi.co/api/v2/item/11/",
    },
    {
        name: "premier-ball",
        url: "https://pokeapi.co/api/v2/item/12/",
    },
    {
        name: "dusk-ball",
        url: "https://pokeapi.co/api/v2/item/13/",
    },
    {
        name: "heal-ball",
        url: "https://pokeapi.co/api/v2/item/14/",
    },
    {
        name: "quick-ball",
        url: "https://pokeapi.co/api/v2/item/15/",
    },
    {
        name: "cherish-ball",
        url: "https://pokeapi.co/api/v2/item/16/",
    },
    {
        name: "potion",
        url: "https://pokeapi.co/api/v2/item/17/",
    },
    {
        name: "antidote",
        url: "https://pokeapi.co/api/v2/item/18/",
    },
    {
        name: "burn-heal",
        url: "https://pokeapi.co/api/v2/item/19/",
    },
    {
        name: "ice-heal",
        url: "https://pokeapi.co/api/v2/item/20/",
    },
    {
        name: "awakening",
        url: "https://pokeapi.co/api/v2/item/21/",
    },
    {
        name: "paralyze-heal",
        url: "https://pokeapi.co/api/v2/item/22/",
    },
    {
        name: "full-restore",
        url: "https://pokeapi.co/api/v2/item/23/",
    },
    {
        name: "max-potion",
        url: "https://pokeapi.co/api/v2/item/24/",
    },
    {
        name: "hyper-potion",
        url: "https://pokeapi.co/api/v2/item/25/",
    },
    {
        name: "super-potion",
        url: "https://pokeapi.co/api/v2/item/26/",
    },
    {
        name: "full-heal",
        url: "https://pokeapi.co/api/v2/item/27/",
    },
    {
        name: "revive",
        url: "https://pokeapi.co/api/v2/item/28/",
    },
    {
        name: "max-revive",
        url: "https://pokeapi.co/api/v2/item/29/",
    },
    {
        name: "fresh-water",
        url: "https://pokeapi.co/api/v2/item/30/",
    },
    {
        name: "soda-pop",
        url: "https://pokeapi.co/api/v2/item/31/",
    },
    {
        name: "lemonade",
        url: "https://pokeapi.co/api/v2/item/32/",
    },
    {
        name: "moomoo-milk",
        url: "https://pokeapi.co/api/v2/item/33/",
    },
    {
        name: "energy-powder",
        url: "https://pokeapi.co/api/v2/item/34/",
    },
    {
        name: "energy-root",
        url: "https://pokeapi.co/api/v2/item/35/",
    },
    {
        name: "heal-powder",
        url: "https://pokeapi.co/api/v2/item/36/",
    },
    {
        name: "revival-herb",
        url: "https://pokeapi.co/api/v2/item/37/",
    },
    {
        name: "ether",
        url: "https://pokeapi.co/api/v2/item/38/",
    },
    {
        name: "max-ether",
        url: "https://pokeapi.co/api/v2/item/39/",
    },
    {
        name: "elixir",
        url: "https://pokeapi.co/api/v2/item/40/",
    },
    {
        name: "max-elixir",
        url: "https://pokeapi.co/api/v2/item/41/",
    },
    {
        name: "lava-cookie",
        url: "https://pokeapi.co/api/v2/item/42/",
    },
    {
        name: "berry-juice",
        url: "https://pokeapi.co/api/v2/item/43/",
    },
    {
        name: "sacred-ash",
        url: "https://pokeapi.co/api/v2/item/44/",
    },
    {
        name: "hp-up",
        url: "https://pokeapi.co/api/v2/item/45/",
    },
    {
        name: "protein",
        url: "https://pokeapi.co/api/v2/item/46/",
    },
    {
        name: "iron",
        url: "https://pokeapi.co/api/v2/item/47/",
    },
    {
        name: "carbos",
        url: "https://pokeapi.co/api/v2/item/48/",
    },
    {
        name: "calcium",
        url: "https://pokeapi.co/api/v2/item/49/",
    },
    {
        name: "rare-candy",
        url: "https://pokeapi.co/api/v2/item/50/",
    },
    {
        name: "pp-up",
        url: "https://pokeapi.co/api/v2/item/51/",
    },
    {
        name: "zinc",
        url: "https://pokeapi.co/api/v2/item/52/",
    },
    {
        name: "pp-max",
        url: "https://pokeapi.co/api/v2/item/53/",
    },
    {
        name: "old-gateau",
        url: "https://pokeapi.co/api/v2/item/54/",
    },
    {
        name: "guard-spec",
        url: "https://pokeapi.co/api/v2/item/55/",
    },
    {
        name: "dire-hit",
        url: "https://pokeapi.co/api/v2/item/56/",
    },
    {
        name: "x-attack",
        url: "https://pokeapi.co/api/v2/item/57/",
    },
    {
        name: "x-defense",
        url: "https://pokeapi.co/api/v2/item/58/",
    },
    {
        name: "x-speed",
        url: "https://pokeapi.co/api/v2/item/59/",
    },
    {
        name: "x-accuracy",
        url: "https://pokeapi.co/api/v2/item/60/",
    },
    {
        name: "x-sp-atk",
        url: "https://pokeapi.co/api/v2/item/61/",
    },
    {
        name: "x-sp-def",
        url: "https://pokeapi.co/api/v2/item/62/",
    },
    {
        name: "poke-doll",
        url: "https://pokeapi.co/api/v2/item/63/",
    },
    {
        name: "fluffy-tail",
        url: "https://pokeapi.co/api/v2/item/64/",
    },
    {
        name: "blue-flute",
        url: "https://pokeapi.co/api/v2/item/65/",
    },
    {
        name: "yellow-flute",
        url: "https://pokeapi.co/api/v2/item/66/",
    },
    {
        name: "red-flute",
        url: "https://pokeapi.co/api/v2/item/67/",
    },
    {
        name: "black-flute",
        url: "https://pokeapi.co/api/v2/item/68/",
    },
    {
        name: "white-flute",
        url: "https://pokeapi.co/api/v2/item/69/",
    },
    {
        name: "shoal-salt",
        url: "https://pokeapi.co/api/v2/item/70/",
    },
    {
        name: "shoal-shell",
        url: "https://pokeapi.co/api/v2/item/71/",
    },
    {
        name: "red-shard",
        url: "https://pokeapi.co/api/v2/item/72/",
    },
    {
        name: "blue-shard",
        url: "https://pokeapi.co/api/v2/item/73/",
    },
    {
        name: "yellow-shard",
        url: "https://pokeapi.co/api/v2/item/74/",
    },
    {
        name: "green-shard",
        url: "https://pokeapi.co/api/v2/item/75/",
    },
    {
        name: "super-repel",
        url: "https://pokeapi.co/api/v2/item/76/",
    },
    {
        name: "max-repel",
        url: "https://pokeapi.co/api/v2/item/77/",
    },
    {
        name: "escape-rope",
        url: "https://pokeapi.co/api/v2/item/78/",
    },
    {
        name: "repel",
        url: "https://pokeapi.co/api/v2/item/79/",
    },
    {
        name: "sun-stone",
        url: "https://pokeapi.co/api/v2/item/80/",
    },
    {
        name: "moon-stone",
        url: "https://pokeapi.co/api/v2/item/81/",
    },
    {
        name: "fire-stone",
        url: "https://pokeapi.co/api/v2/item/82/",
    },
    {
        name: "thunder-stone",
        url: "https://pokeapi.co/api/v2/item/83/",
    },
    {
        name: "water-stone",
        url: "https://pokeapi.co/api/v2/item/84/",
    },
    {
        name: "leaf-stone",
        url: "https://pokeapi.co/api/v2/item/85/",
    },
    {
        name: "tiny-mushroom",
        url: "https://pokeapi.co/api/v2/item/86/",
    },
    {
        name: "big-mushroom",
        url: "https://pokeapi.co/api/v2/item/87/",
    },
    {
        name: "pearl",
        url: "https://pokeapi.co/api/v2/item/88/",
    },
    {
        name: "big-pearl",
        url: "https://pokeapi.co/api/v2/item/89/",
    },
    {
        name: "stardust",
        url: "https://pokeapi.co/api/v2/item/90/",
    },
    {
        name: "star-piece",
        url: "https://pokeapi.co/api/v2/item/91/",
    },
    {
        name: "nugget",
        url: "https://pokeapi.co/api/v2/item/92/",
    },
    {
        name: "heart-scale",
        url: "https://pokeapi.co/api/v2/item/93/",
    },
    {
        name: "honey",
        url: "https://pokeapi.co/api/v2/item/94/",
    },
    {
        name: "growth-mulch",
        url: "https://pokeapi.co/api/v2/item/95/",
    },
    {
        name: "damp-mulch",
        url: "https://pokeapi.co/api/v2/item/96/",
    },
    {
        name: "stable-mulch",
        url: "https://pokeapi.co/api/v2/item/97/",
    },
    {
        name: "gooey-mulch",
        url: "https://pokeapi.co/api/v2/item/98/",
    },
    {
        name: "root-fossil",
        url: "https://pokeapi.co/api/v2/item/99/",
    },
    {
        name: "claw-fossil",
        url: "https://pokeapi.co/api/v2/item/100/",
    },
    {
        name: "helix-fossil",
        url: "https://pokeapi.co/api/v2/item/101/",
    },
    {
        name: "dome-fossil",
        url: "https://pokeapi.co/api/v2/item/102/",
    },
    {
        name: "old-amber",
        url: "https://pokeapi.co/api/v2/item/103/",
    },
    {
        name: "armor-fossil",
        url: "https://pokeapi.co/api/v2/item/104/",
    },
    {
        name: "skull-fossil",
        url: "https://pokeapi.co/api/v2/item/105/",
    },
    {
        name: "rare-bone",
        url: "https://pokeapi.co/api/v2/item/106/",
    },
    {
        name: "shiny-stone",
        url: "https://pokeapi.co/api/v2/item/107/",
    },
    {
        name: "dusk-stone",
        url: "https://pokeapi.co/api/v2/item/108/",
    },
    {
        name: "dawn-stone",
        url: "https://pokeapi.co/api/v2/item/109/",
    },
    {
        name: "oval-stone",
        url: "https://pokeapi.co/api/v2/item/110/",
    },
    {
        name: "odd-keystone",
        url: "https://pokeapi.co/api/v2/item/111/",
    },
    {
        name: "adamant-orb",
        url: "https://pokeapi.co/api/v2/item/112/",
    },
    {
        name: "lustrous-orb",
        url: "https://pokeapi.co/api/v2/item/113/",
    },
    {
        name: "grass-mail",
        url: "https://pokeapi.co/api/v2/item/114/",
    },
    {
        name: "flame-mail",
        url: "https://pokeapi.co/api/v2/item/115/",
    },
    {
        name: "bubble-mail",
        url: "https://pokeapi.co/api/v2/item/116/",
    },
    {
        name: "bloom-mail",
        url: "https://pokeapi.co/api/v2/item/117/",
    },
    {
        name: "tunnel-mail",
        url: "https://pokeapi.co/api/v2/item/118/",
    },
    {
        name: "steel-mail",
        url: "https://pokeapi.co/api/v2/item/119/",
    },
    {
        name: "heart-mail",
        url: "https://pokeapi.co/api/v2/item/120/",
    },
    {
        name: "snow-mail",
        url: "https://pokeapi.co/api/v2/item/121/",
    },
    {
        name: "space-mail",
        url: "https://pokeapi.co/api/v2/item/122/",
    },
    {
        name: "air-mail",
        url: "https://pokeapi.co/api/v2/item/123/",
    },
    {
        name: "mosaic-mail",
        url: "https://pokeapi.co/api/v2/item/124/",
    },
    {
        name: "brick-mail",
        url: "https://pokeapi.co/api/v2/item/125/",
    },
    {
        name: "cheri-berry",
        url: "https://pokeapi.co/api/v2/item/126/",
    },
    {
        name: "chesto-berry",
        url: "https://pokeapi.co/api/v2/item/127/",
    },
    {
        name: "pecha-berry",
        url: "https://pokeapi.co/api/v2/item/128/",
    },
    {
        name: "rawst-berry",
        url: "https://pokeapi.co/api/v2/item/129/",
    },
    {
        name: "aspear-berry",
        url: "https://pokeapi.co/api/v2/item/130/",
    },
    {
        name: "leppa-berry",
        url: "https://pokeapi.co/api/v2/item/131/",
    },
    {
        name: "oran-berry",
        url: "https://pokeapi.co/api/v2/item/132/",
    },
    {
        name: "persim-berry",
        url: "https://pokeapi.co/api/v2/item/133/",
    },
    {
        name: "lum-berry",
        url: "https://pokeapi.co/api/v2/item/134/",
    },
    {
        name: "sitrus-berry",
        url: "https://pokeapi.co/api/v2/item/135/",
    },
    {
        name: "figy-berry",
        url: "https://pokeapi.co/api/v2/item/136/",
    },
    {
        name: "wiki-berry",
        url: "https://pokeapi.co/api/v2/item/137/",
    },
    {
        name: "mago-berry",
        url: "https://pokeapi.co/api/v2/item/138/",
    },
    {
        name: "aguav-berry",
        url: "https://pokeapi.co/api/v2/item/139/",
    },
    {
        name: "iapapa-berry",
        url: "https://pokeapi.co/api/v2/item/140/",
    },
    {
        name: "razz-berry",
        url: "https://pokeapi.co/api/v2/item/141/",
    },
    {
        name: "bluk-berry",
        url: "https://pokeapi.co/api/v2/item/142/",
    },
    {
        name: "nanab-berry",
        url: "https://pokeapi.co/api/v2/item/143/",
    },
    {
        name: "wepear-berry",
        url: "https://pokeapi.co/api/v2/item/144/",
    },
    {
        name: "pinap-berry",
        url: "https://pokeapi.co/api/v2/item/145/",
    },
    {
        name: "pomeg-berry",
        url: "https://pokeapi.co/api/v2/item/146/",
    },
    {
        name: "kelpsy-berry",
        url: "https://pokeapi.co/api/v2/item/147/",
    },
    {
        name: "qualot-berry",
        url: "https://pokeapi.co/api/v2/item/148/",
    },
    {
        name: "hondew-berry",
        url: "https://pokeapi.co/api/v2/item/149/",
    },
    {
        name: "grepa-berry",
        url: "https://pokeapi.co/api/v2/item/150/",
    },
    {
        name: "tamato-berry",
        url: "https://pokeapi.co/api/v2/item/151/",
    },
    {
        name: "cornn-berry",
        url: "https://pokeapi.co/api/v2/item/152/",
    },
    {
        name: "magost-berry",
        url: "https://pokeapi.co/api/v2/item/153/",
    },
    {
        name: "rabuta-berry",
        url: "https://pokeapi.co/api/v2/item/154/",
    },
    {
        name: "nomel-berry",
        url: "https://pokeapi.co/api/v2/item/155/",
    },
    {
        name: "spelon-berry",
        url: "https://pokeapi.co/api/v2/item/156/",
    },
    {
        name: "pamtre-berry",
        url: "https://pokeapi.co/api/v2/item/157/",
    },
    {
        name: "watmel-berry",
        url: "https://pokeapi.co/api/v2/item/158/",
    },
    {
        name: "durin-berry",
        url: "https://pokeapi.co/api/v2/item/159/",
    },
    {
        name: "belue-berry",
        url: "https://pokeapi.co/api/v2/item/160/",
    },
    {
        name: "occa-berry",
        url: "https://pokeapi.co/api/v2/item/161/",
    },
    {
        name: "passho-berry",
        url: "https://pokeapi.co/api/v2/item/162/",
    },
    {
        name: "wacan-berry",
        url: "https://pokeapi.co/api/v2/item/163/",
    },
    {
        name: "rindo-berry",
        url: "https://pokeapi.co/api/v2/item/164/",
    },
    {
        name: "yache-berry",
        url: "https://pokeapi.co/api/v2/item/165/",
    },
    {
        name: "chople-berry",
        url: "https://pokeapi.co/api/v2/item/166/",
    },
    {
        name: "kebia-berry",
        url: "https://pokeapi.co/api/v2/item/167/",
    },
    {
        name: "shuca-berry",
        url: "https://pokeapi.co/api/v2/item/168/",
    },
    {
        name: "coba-berry",
        url: "https://pokeapi.co/api/v2/item/169/",
    },
    {
        name: "payapa-berry",
        url: "https://pokeapi.co/api/v2/item/170/",
    },
    {
        name: "tanga-berry",
        url: "https://pokeapi.co/api/v2/item/171/",
    },
    {
        name: "charti-berry",
        url: "https://pokeapi.co/api/v2/item/172/",
    },
    {
        name: "kasib-berry",
        url: "https://pokeapi.co/api/v2/item/173/",
    },
    {
        name: "haban-berry",
        url: "https://pokeapi.co/api/v2/item/174/",
    },
    {
        name: "colbur-berry",
        url: "https://pokeapi.co/api/v2/item/175/",
    },
    {
        name: "babiri-berry",
        url: "https://pokeapi.co/api/v2/item/176/",
    },
    {
        name: "chilan-berry",
        url: "https://pokeapi.co/api/v2/item/177/",
    },
    {
        name: "liechi-berry",
        url: "https://pokeapi.co/api/v2/item/178/",
    },
    {
        name: "ganlon-berry",
        url: "https://pokeapi.co/api/v2/item/179/",
    },
    {
        name: "salac-berry",
        url: "https://pokeapi.co/api/v2/item/180/",
    },
    {
        name: "petaya-berry",
        url: "https://pokeapi.co/api/v2/item/181/",
    },
    {
        name: "apicot-berry",
        url: "https://pokeapi.co/api/v2/item/182/",
    },
    {
        name: "lansat-berry",
        url: "https://pokeapi.co/api/v2/item/183/",
    },
    {
        name: "starf-berry",
        url: "https://pokeapi.co/api/v2/item/184/",
    },
    {
        name: "enigma-berry",
        url: "https://pokeapi.co/api/v2/item/185/",
    },
    {
        name: "micle-berry",
        url: "https://pokeapi.co/api/v2/item/186/",
    },
    {
        name: "custap-berry",
        url: "https://pokeapi.co/api/v2/item/187/",
    },
    {
        name: "jaboca-berry",
        url: "https://pokeapi.co/api/v2/item/188/",
    },
    {
        name: "rowap-berry",
        url: "https://pokeapi.co/api/v2/item/189/",
    },
    {
        name: "bright-powder",
        url: "https://pokeapi.co/api/v2/item/190/",
    },
    {
        name: "white-herb",
        url: "https://pokeapi.co/api/v2/item/191/",
    },
    {
        name: "macho-brace",
        url: "https://pokeapi.co/api/v2/item/192/",
    },
    {
        name: "exp-share",
        url: "https://pokeapi.co/api/v2/item/193/",
    },
    {
        name: "quick-claw",
        url: "https://pokeapi.co/api/v2/item/194/",
    },
    {
        name: "soothe-bell",
        url: "https://pokeapi.co/api/v2/item/195/",
    },
    {
        name: "mental-herb",
        url: "https://pokeapi.co/api/v2/item/196/",
    },
    {
        name: "choice-band",
        url: "https://pokeapi.co/api/v2/item/197/",
    },
    {
        name: "kings-rock",
        url: "https://pokeapi.co/api/v2/item/198/",
    },
    {
        name: "silver-powder",
        url: "https://pokeapi.co/api/v2/item/199/",
    },
    {
        name: "amulet-coin",
        url: "https://pokeapi.co/api/v2/item/200/",
    },
    {
        name: "cleanse-tag",
        url: "https://pokeapi.co/api/v2/item/201/",
    },
    {
        name: "soul-dew",
        url: "https://pokeapi.co/api/v2/item/202/",
    },
    {
        name: "deep-sea-tooth",
        url: "https://pokeapi.co/api/v2/item/203/",
    },
    {
        name: "deep-sea-scale",
        url: "https://pokeapi.co/api/v2/item/204/",
    },
    {
        name: "smoke-ball",
        url: "https://pokeapi.co/api/v2/item/205/",
    },
    {
        name: "everstone",
        url: "https://pokeapi.co/api/v2/item/206/",
    },
    {
        name: "focus-band",
        url: "https://pokeapi.co/api/v2/item/207/",
    },
    {
        name: "lucky-egg",
        url: "https://pokeapi.co/api/v2/item/208/",
    },
    {
        name: "scope-lens",
        url: "https://pokeapi.co/api/v2/item/209/",
    },
    {
        name: "metal-coat",
        url: "https://pokeapi.co/api/v2/item/210/",
    },
    {
        name: "leftovers",
        url: "https://pokeapi.co/api/v2/item/211/",
    },
    {
        name: "dragon-scale",
        url: "https://pokeapi.co/api/v2/item/212/",
    },
    {
        name: "light-ball",
        url: "https://pokeapi.co/api/v2/item/213/",
    },
    {
        name: "soft-sand",
        url: "https://pokeapi.co/api/v2/item/214/",
    },
    {
        name: "hard-stone",
        url: "https://pokeapi.co/api/v2/item/215/",
    },
    {
        name: "miracle-seed",
        url: "https://pokeapi.co/api/v2/item/216/",
    },
    {
        name: "black-glasses",
        url: "https://pokeapi.co/api/v2/item/217/",
    },
    {
        name: "black-belt",
        url: "https://pokeapi.co/api/v2/item/218/",
    },
    {
        name: "magnet",
        url: "https://pokeapi.co/api/v2/item/219/",
    },
    {
        name: "mystic-water",
        url: "https://pokeapi.co/api/v2/item/220/",
    },
    {
        name: "sharp-beak",
        url: "https://pokeapi.co/api/v2/item/221/",
    },
    {
        name: "poison-barb",
        url: "https://pokeapi.co/api/v2/item/222/",
    },
    {
        name: "never-melt-ice",
        url: "https://pokeapi.co/api/v2/item/223/",
    },
    {
        name: "spell-tag",
        url: "https://pokeapi.co/api/v2/item/224/",
    },
    {
        name: "twisted-spoon",
        url: "https://pokeapi.co/api/v2/item/225/",
    },
    {
        name: "charcoal",
        url: "https://pokeapi.co/api/v2/item/226/",
    },
    {
        name: "dragon-fang",
        url: "https://pokeapi.co/api/v2/item/227/",
    },
    {
        name: "silk-scarf",
        url: "https://pokeapi.co/api/v2/item/228/",
    },
    {
        name: "up-grade",
        url: "https://pokeapi.co/api/v2/item/229/",
    },
    {
        name: "shell-bell",
        url: "https://pokeapi.co/api/v2/item/230/",
    },
    {
        name: "sea-incense",
        url: "https://pokeapi.co/api/v2/item/231/",
    },
    {
        name: "lax-incense",
        url: "https://pokeapi.co/api/v2/item/232/",
    },
    {
        name: "lucky-punch",
        url: "https://pokeapi.co/api/v2/item/233/",
    },
    {
        name: "metal-powder",
        url: "https://pokeapi.co/api/v2/item/234/",
    },
    {
        name: "thick-club",
        url: "https://pokeapi.co/api/v2/item/235/",
    },
    {
        name: "stick",
        url: "https://pokeapi.co/api/v2/item/236/",
    },
    {
        name: "red-scarf",
        url: "https://pokeapi.co/api/v2/item/237/",
    },
    {
        name: "blue-scarf",
        url: "https://pokeapi.co/api/v2/item/238/",
    },
    {
        name: "pink-scarf",
        url: "https://pokeapi.co/api/v2/item/239/",
    },
    {
        name: "green-scarf",
        url: "https://pokeapi.co/api/v2/item/240/",
    },
    {
        name: "yellow-scarf",
        url: "https://pokeapi.co/api/v2/item/241/",
    },
    {
        name: "wide-lens",
        url: "https://pokeapi.co/api/v2/item/242/",
    },
    {
        name: "muscle-band",
        url: "https://pokeapi.co/api/v2/item/243/",
    },
    {
        name: "wise-glasses",
        url: "https://pokeapi.co/api/v2/item/244/",
    },
    {
        name: "expert-belt",
        url: "https://pokeapi.co/api/v2/item/245/",
    },
    {
        name: "light-clay",
        url: "https://pokeapi.co/api/v2/item/246/",
    },
    {
        name: "life-orb",
        url: "https://pokeapi.co/api/v2/item/247/",
    },
    {
        name: "power-herb",
        url: "https://pokeapi.co/api/v2/item/248/",
    },
    {
        name: "toxic-orb",
        url: "https://pokeapi.co/api/v2/item/249/",
    },
    {
        name: "flame-orb",
        url: "https://pokeapi.co/api/v2/item/250/",
    },
    {
        name: "quick-powder",
        url: "https://pokeapi.co/api/v2/item/251/",
    },
    {
        name: "focus-sash",
        url: "https://pokeapi.co/api/v2/item/252/",
    },
    {
        name: "zoom-lens",
        url: "https://pokeapi.co/api/v2/item/253/",
    },
    {
        name: "metronome",
        url: "https://pokeapi.co/api/v2/item/254/",
    },
    {
        name: "iron-ball",
        url: "https://pokeapi.co/api/v2/item/255/",
    },
    {
        name: "lagging-tail",
        url: "https://pokeapi.co/api/v2/item/256/",
    },
    {
        name: "destiny-knot",
        url: "https://pokeapi.co/api/v2/item/257/",
    },
    {
        name: "black-sludge",
        url: "https://pokeapi.co/api/v2/item/258/",
    },
    {
        name: "icy-rock",
        url: "https://pokeapi.co/api/v2/item/259/",
    },
    {
        name: "smooth-rock",
        url: "https://pokeapi.co/api/v2/item/260/",
    },
    {
        name: "heat-rock",
        url: "https://pokeapi.co/api/v2/item/261/",
    },
    {
        name: "damp-rock",
        url: "https://pokeapi.co/api/v2/item/262/",
    },
    {
        name: "grip-claw",
        url: "https://pokeapi.co/api/v2/item/263/",
    },
    {
        name: "choice-scarf",
        url: "https://pokeapi.co/api/v2/item/264/",
    },
    {
        name: "sticky-barb",
        url: "https://pokeapi.co/api/v2/item/265/",
    },
    {
        name: "power-bracer",
        url: "https://pokeapi.co/api/v2/item/266/",
    },
    {
        name: "power-belt",
        url: "https://pokeapi.co/api/v2/item/267/",
    },
    {
        name: "power-lens",
        url: "https://pokeapi.co/api/v2/item/268/",
    },
    {
        name: "power-band",
        url: "https://pokeapi.co/api/v2/item/269/",
    },
    {
        name: "power-anklet",
        url: "https://pokeapi.co/api/v2/item/270/",
    },
    {
        name: "power-weight",
        url: "https://pokeapi.co/api/v2/item/271/",
    },
    {
        name: "shed-shell",
        url: "https://pokeapi.co/api/v2/item/272/",
    },
    {
        name: "big-root",
        url: "https://pokeapi.co/api/v2/item/273/",
    },
    {
        name: "choice-specs",
        url: "https://pokeapi.co/api/v2/item/274/",
    },
    {
        name: "flame-plate",
        url: "https://pokeapi.co/api/v2/item/275/",
    },
    {
        name: "splash-plate",
        url: "https://pokeapi.co/api/v2/item/276/",
    },
    {
        name: "zap-plate",
        url: "https://pokeapi.co/api/v2/item/277/",
    },
    {
        name: "meadow-plate",
        url: "https://pokeapi.co/api/v2/item/278/",
    },
    {
        name: "icicle-plate",
        url: "https://pokeapi.co/api/v2/item/279/",
    },
    {
        name: "fist-plate",
        url: "https://pokeapi.co/api/v2/item/280/",
    },
    {
        name: "toxic-plate",
        url: "https://pokeapi.co/api/v2/item/281/",
    },
    {
        name: "earth-plate",
        url: "https://pokeapi.co/api/v2/item/282/",
    },
    {
        name: "sky-plate",
        url: "https://pokeapi.co/api/v2/item/283/",
    },
    {
        name: "mind-plate",
        url: "https://pokeapi.co/api/v2/item/284/",
    },
    {
        name: "insect-plate",
        url: "https://pokeapi.co/api/v2/item/285/",
    },
    {
        name: "stone-plate",
        url: "https://pokeapi.co/api/v2/item/286/",
    },
    {
        name: "spooky-plate",
        url: "https://pokeapi.co/api/v2/item/287/",
    },
    {
        name: "draco-plate",
        url: "https://pokeapi.co/api/v2/item/288/",
    },
    {
        name: "dread-plate",
        url: "https://pokeapi.co/api/v2/item/289/",
    },
    {
        name: "iron-plate",
        url: "https://pokeapi.co/api/v2/item/290/",
    },
    {
        name: "odd-incense",
        url: "https://pokeapi.co/api/v2/item/291/",
    },
    {
        name: "rock-incense",
        url: "https://pokeapi.co/api/v2/item/292/",
    },
    {
        name: "full-incense",
        url: "https://pokeapi.co/api/v2/item/293/",
    },
    {
        name: "wave-incense",
        url: "https://pokeapi.co/api/v2/item/294/",
    },
    {
        name: "rose-incense",
        url: "https://pokeapi.co/api/v2/item/295/",
    },
    {
        name: "luck-incense",
        url: "https://pokeapi.co/api/v2/item/296/",
    },
    {
        name: "pure-incense",
        url: "https://pokeapi.co/api/v2/item/297/",
    },
    {
        name: "protector",
        url: "https://pokeapi.co/api/v2/item/298/",
    },
    {
        name: "electirizer",
        url: "https://pokeapi.co/api/v2/item/299/",
    },
    {
        name: "magmarizer",
        url: "https://pokeapi.co/api/v2/item/300/",
    },
    {
        name: "dubious-disc",
        url: "https://pokeapi.co/api/v2/item/301/",
    },
    {
        name: "reaper-cloth",
        url: "https://pokeapi.co/api/v2/item/302/",
    },
    {
        name: "razor-claw",
        url: "https://pokeapi.co/api/v2/item/303/",
    },
    {
        name: "razor-fang",
        url: "https://pokeapi.co/api/v2/item/304/",
    },
    {
        name: "tm01",
        url: "https://pokeapi.co/api/v2/item/305/",
    },
    {
        name: "tm02",
        url: "https://pokeapi.co/api/v2/item/306/",
    },
    {
        name: "tm03",
        url: "https://pokeapi.co/api/v2/item/307/",
    },
    {
        name: "tm04",
        url: "https://pokeapi.co/api/v2/item/308/",
    },
    {
        name: "tm05",
        url: "https://pokeapi.co/api/v2/item/309/",
    },
    {
        name: "tm06",
        url: "https://pokeapi.co/api/v2/item/310/",
    },
    {
        name: "tm07",
        url: "https://pokeapi.co/api/v2/item/311/",
    },
    {
        name: "tm08",
        url: "https://pokeapi.co/api/v2/item/312/",
    },
    {
        name: "tm09",
        url: "https://pokeapi.co/api/v2/item/313/",
    },
    {
        name: "tm10",
        url: "https://pokeapi.co/api/v2/item/314/",
    },
    {
        name: "tm11",
        url: "https://pokeapi.co/api/v2/item/315/",
    },
    {
        name: "tm12",
        url: "https://pokeapi.co/api/v2/item/316/",
    },
    {
        name: "tm13",
        url: "https://pokeapi.co/api/v2/item/317/",
    },
    {
        name: "tm14",
        url: "https://pokeapi.co/api/v2/item/318/",
    },
    {
        name: "tm15",
        url: "https://pokeapi.co/api/v2/item/319/",
    },
    {
        name: "tm16",
        url: "https://pokeapi.co/api/v2/item/320/",
    },
    {
        name: "tm17",
        url: "https://pokeapi.co/api/v2/item/321/",
    },
    {
        name: "tm18",
        url: "https://pokeapi.co/api/v2/item/322/",
    },
    {
        name: "tm19",
        url: "https://pokeapi.co/api/v2/item/323/",
    },
    {
        name: "tm20",
        url: "https://pokeapi.co/api/v2/item/324/",
    },
    {
        name: "tm21",
        url: "https://pokeapi.co/api/v2/item/325/",
    },
    {
        name: "tm22",
        url: "https://pokeapi.co/api/v2/item/326/",
    },
    {
        name: "tm23",
        url: "https://pokeapi.co/api/v2/item/327/",
    },
    {
        name: "tm24",
        url: "https://pokeapi.co/api/v2/item/328/",
    },
    {
        name: "tm25",
        url: "https://pokeapi.co/api/v2/item/329/",
    },
    {
        name: "tm26",
        url: "https://pokeapi.co/api/v2/item/330/",
    },
    {
        name: "tm27",
        url: "https://pokeapi.co/api/v2/item/331/",
    },
    {
        name: "tm28",
        url: "https://pokeapi.co/api/v2/item/332/",
    },
    {
        name: "tm29",
        url: "https://pokeapi.co/api/v2/item/333/",
    },
    {
        name: "tm30",
        url: "https://pokeapi.co/api/v2/item/334/",
    },
    {
        name: "tm31",
        url: "https://pokeapi.co/api/v2/item/335/",
    },
    {
        name: "tm32",
        url: "https://pokeapi.co/api/v2/item/336/",
    },
    {
        name: "tm33",
        url: "https://pokeapi.co/api/v2/item/337/",
    },
    {
        name: "tm34",
        url: "https://pokeapi.co/api/v2/item/338/",
    },
    {
        name: "tm35",
        url: "https://pokeapi.co/api/v2/item/339/",
    },
    {
        name: "tm36",
        url: "https://pokeapi.co/api/v2/item/340/",
    },
    {
        name: "tm37",
        url: "https://pokeapi.co/api/v2/item/341/",
    },
    {
        name: "tm38",
        url: "https://pokeapi.co/api/v2/item/342/",
    },
    {
        name: "tm39",
        url: "https://pokeapi.co/api/v2/item/343/",
    },
    {
        name: "tm40",
        url: "https://pokeapi.co/api/v2/item/344/",
    },
    {
        name: "tm41",
        url: "https://pokeapi.co/api/v2/item/345/",
    },
    {
        name: "tm42",
        url: "https://pokeapi.co/api/v2/item/346/",
    },
    {
        name: "tm43",
        url: "https://pokeapi.co/api/v2/item/347/",
    },
    {
        name: "tm44",
        url: "https://pokeapi.co/api/v2/item/348/",
    },
    {
        name: "tm45",
        url: "https://pokeapi.co/api/v2/item/349/",
    },
    {
        name: "tm46",
        url: "https://pokeapi.co/api/v2/item/350/",
    },
    {
        name: "tm47",
        url: "https://pokeapi.co/api/v2/item/351/",
    },
    {
        name: "tm48",
        url: "https://pokeapi.co/api/v2/item/352/",
    },
    {
        name: "tm49",
        url: "https://pokeapi.co/api/v2/item/353/",
    },
    {
        name: "tm50",
        url: "https://pokeapi.co/api/v2/item/354/",
    },
    {
        name: "tm51",
        url: "https://pokeapi.co/api/v2/item/355/",
    },
    {
        name: "tm52",
        url: "https://pokeapi.co/api/v2/item/356/",
    },
    {
        name: "tm53",
        url: "https://pokeapi.co/api/v2/item/357/",
    },
    {
        name: "tm54",
        url: "https://pokeapi.co/api/v2/item/358/",
    },
    {
        name: "tm55",
        url: "https://pokeapi.co/api/v2/item/359/",
    },
    {
        name: "tm56",
        url: "https://pokeapi.co/api/v2/item/360/",
    },
    {
        name: "tm57",
        url: "https://pokeapi.co/api/v2/item/361/",
    },
    {
        name: "tm58",
        url: "https://pokeapi.co/api/v2/item/362/",
    },
    {
        name: "tm59",
        url: "https://pokeapi.co/api/v2/item/363/",
    },
    {
        name: "tm60",
        url: "https://pokeapi.co/api/v2/item/364/",
    },
    {
        name: "tm61",
        url: "https://pokeapi.co/api/v2/item/365/",
    },
    {
        name: "tm62",
        url: "https://pokeapi.co/api/v2/item/366/",
    },
    {
        name: "tm63",
        url: "https://pokeapi.co/api/v2/item/367/",
    },
    {
        name: "tm64",
        url: "https://pokeapi.co/api/v2/item/368/",
    },
    {
        name: "tm65",
        url: "https://pokeapi.co/api/v2/item/369/",
    },
    {
        name: "tm66",
        url: "https://pokeapi.co/api/v2/item/370/",
    },
    {
        name: "tm67",
        url: "https://pokeapi.co/api/v2/item/371/",
    },
    {
        name: "tm68",
        url: "https://pokeapi.co/api/v2/item/372/",
    },
    {
        name: "tm69",
        url: "https://pokeapi.co/api/v2/item/373/",
    },
    {
        name: "tm70",
        url: "https://pokeapi.co/api/v2/item/374/",
    },
    {
        name: "tm71",
        url: "https://pokeapi.co/api/v2/item/375/",
    },
    {
        name: "tm72",
        url: "https://pokeapi.co/api/v2/item/376/",
    },
    {
        name: "tm73",
        url: "https://pokeapi.co/api/v2/item/377/",
    },
    {
        name: "tm74",
        url: "https://pokeapi.co/api/v2/item/378/",
    },
    {
        name: "tm75",
        url: "https://pokeapi.co/api/v2/item/379/",
    },
    {
        name: "tm76",
        url: "https://pokeapi.co/api/v2/item/380/",
    },
    {
        name: "tm77",
        url: "https://pokeapi.co/api/v2/item/381/",
    },
    {
        name: "tm78",
        url: "https://pokeapi.co/api/v2/item/382/",
    },
    {
        name: "tm79",
        url: "https://pokeapi.co/api/v2/item/383/",
    },
    {
        name: "tm80",
        url: "https://pokeapi.co/api/v2/item/384/",
    },
    {
        name: "tm81",
        url: "https://pokeapi.co/api/v2/item/385/",
    },
    {
        name: "tm82",
        url: "https://pokeapi.co/api/v2/item/386/",
    },
    {
        name: "tm83",
        url: "https://pokeapi.co/api/v2/item/387/",
    },
    {
        name: "tm84",
        url: "https://pokeapi.co/api/v2/item/388/",
    },
    {
        name: "tm85",
        url: "https://pokeapi.co/api/v2/item/389/",
    },
    {
        name: "tm86",
        url: "https://pokeapi.co/api/v2/item/390/",
    },
    {
        name: "tm87",
        url: "https://pokeapi.co/api/v2/item/391/",
    },
    {
        name: "tm88",
        url: "https://pokeapi.co/api/v2/item/392/",
    },
    {
        name: "tm89",
        url: "https://pokeapi.co/api/v2/item/393/",
    },
    {
        name: "tm90",
        url: "https://pokeapi.co/api/v2/item/394/",
    },
    {
        name: "tm91",
        url: "https://pokeapi.co/api/v2/item/395/",
    },
    {
        name: "tm92",
        url: "https://pokeapi.co/api/v2/item/396/",
    },
    {
        name: "hm01",
        url: "https://pokeapi.co/api/v2/item/397/",
    },
    {
        name: "hm02",
        url: "https://pokeapi.co/api/v2/item/398/",
    },
    {
        name: "hm03",
        url: "https://pokeapi.co/api/v2/item/399/",
    },
    {
        name: "hm04",
        url: "https://pokeapi.co/api/v2/item/400/",
    },
    {
        name: "hm05",
        url: "https://pokeapi.co/api/v2/item/401/",
    },
    {
        name: "hm06",
        url: "https://pokeapi.co/api/v2/item/402/",
    },
    {
        name: "hm07",
        url: "https://pokeapi.co/api/v2/item/403/",
    },
    {
        name: "hm08",
        url: "https://pokeapi.co/api/v2/item/404/",
    },
    {
        name: "explorer-kit",
        url: "https://pokeapi.co/api/v2/item/405/",
    },
    {
        name: "loot-sack",
        url: "https://pokeapi.co/api/v2/item/406/",
    },
    {
        name: "rule-book",
        url: "https://pokeapi.co/api/v2/item/407/",
    },
    {
        name: "poke-radar",
        url: "https://pokeapi.co/api/v2/item/408/",
    },
    {
        name: "point-card",
        url: "https://pokeapi.co/api/v2/item/409/",
    },
    {
        name: "journal",
        url: "https://pokeapi.co/api/v2/item/410/",
    },
    {
        name: "seal-case",
        url: "https://pokeapi.co/api/v2/item/411/",
    },
    {
        name: "fashion-case",
        url: "https://pokeapi.co/api/v2/item/412/",
    },
    {
        name: "seal-bag",
        url: "https://pokeapi.co/api/v2/item/413/",
    },
    {
        name: "pal-pad",
        url: "https://pokeapi.co/api/v2/item/414/",
    },
    {
        name: "works-key",
        url: "https://pokeapi.co/api/v2/item/415/",
    },
    {
        name: "old-charm",
        url: "https://pokeapi.co/api/v2/item/416/",
    },
    {
        name: "galactic-key",
        url: "https://pokeapi.co/api/v2/item/417/",
    },
    {
        name: "red-chain",
        url: "https://pokeapi.co/api/v2/item/418/",
    },
    {
        name: "town-map",
        url: "https://pokeapi.co/api/v2/item/419/",
    },
    {
        name: "vs-seeker",
        url: "https://pokeapi.co/api/v2/item/420/",
    },
    {
        name: "coin-case",
        url: "https://pokeapi.co/api/v2/item/421/",
    },
    {
        name: "old-rod",
        url: "https://pokeapi.co/api/v2/item/422/",
    },
    {
        name: "good-rod",
        url: "https://pokeapi.co/api/v2/item/423/",
    },
    {
        name: "super-rod",
        url: "https://pokeapi.co/api/v2/item/424/",
    },
    {
        name: "sprayduck",
        url: "https://pokeapi.co/api/v2/item/425/",
    },
    {
        name: "poffin-case",
        url: "https://pokeapi.co/api/v2/item/426/",
    },
    {
        name: "bicycle",
        url: "https://pokeapi.co/api/v2/item/427/",
    },
    {
        name: "suite-key",
        url: "https://pokeapi.co/api/v2/item/428/",
    },
    {
        name: "oaks-letter",
        url: "https://pokeapi.co/api/v2/item/429/",
    },
    {
        name: "lunar-wing",
        url: "https://pokeapi.co/api/v2/item/430/",
    },
    {
        name: "member-card",
        url: "https://pokeapi.co/api/v2/item/431/",
    },
    {
        name: "azure-flute",
        url: "https://pokeapi.co/api/v2/item/432/",
    },
    {
        name: "ss-ticket",
        url: "https://pokeapi.co/api/v2/item/433/",
    },
    {
        name: "contest-pass",
        url: "https://pokeapi.co/api/v2/item/434/",
    },
    {
        name: "magma-stone",
        url: "https://pokeapi.co/api/v2/item/435/",
    },
    {
        name: "parcel",
        url: "https://pokeapi.co/api/v2/item/436/",
    },
    {
        name: "coupon-1",
        url: "https://pokeapi.co/api/v2/item/437/",
    },
    {
        name: "coupon-2",
        url: "https://pokeapi.co/api/v2/item/438/",
    },
    {
        name: "coupon-3",
        url: "https://pokeapi.co/api/v2/item/439/",
    },
    {
        name: "storage-key",
        url: "https://pokeapi.co/api/v2/item/440/",
    },
    {
        name: "secret-potion",
        url: "https://pokeapi.co/api/v2/item/441/",
    },
    {
        name: "griseous-orb",
        url: "https://pokeapi.co/api/v2/item/442/",
    },
    {
        name: "vs-recorder",
        url: "https://pokeapi.co/api/v2/item/443/",
    },
    {
        name: "gracidea",
        url: "https://pokeapi.co/api/v2/item/444/",
    },
    {
        name: "secret-key",
        url: "https://pokeapi.co/api/v2/item/445/",
    },
    {
        name: "apricorn-box",
        url: "https://pokeapi.co/api/v2/item/446/",
    },
    {
        name: "berry-pots",
        url: "https://pokeapi.co/api/v2/item/447/",
    },
    {
        name: "squirt-bottle",
        url: "https://pokeapi.co/api/v2/item/448/",
    },
    {
        name: "lure-ball",
        url: "https://pokeapi.co/api/v2/item/449/",
    },
    {
        name: "level-ball",
        url: "https://pokeapi.co/api/v2/item/450/",
    },
    {
        name: "moon-ball",
        url: "https://pokeapi.co/api/v2/item/451/",
    },
    {
        name: "heavy-ball",
        url: "https://pokeapi.co/api/v2/item/452/",
    },
    {
        name: "fast-ball",
        url: "https://pokeapi.co/api/v2/item/453/",
    },
    {
        name: "friend-ball",
        url: "https://pokeapi.co/api/v2/item/454/",
    },
    {
        name: "love-ball",
        url: "https://pokeapi.co/api/v2/item/455/",
    },
    {
        name: "park-ball",
        url: "https://pokeapi.co/api/v2/item/456/",
    },
    {
        name: "sport-ball",
        url: "https://pokeapi.co/api/v2/item/457/",
    },
    {
        name: "red-apricorn",
        url: "https://pokeapi.co/api/v2/item/458/",
    },
    {
        name: "blue-apricorn",
        url: "https://pokeapi.co/api/v2/item/459/",
    },
    {
        name: "yellow-apricorn",
        url: "https://pokeapi.co/api/v2/item/460/",
    },
    {
        name: "green-apricorn",
        url: "https://pokeapi.co/api/v2/item/461/",
    },
    {
        name: "pink-apricorn",
        url: "https://pokeapi.co/api/v2/item/462/",
    },
    {
        name: "white-apricorn",
        url: "https://pokeapi.co/api/v2/item/463/",
    },
    {
        name: "black-apricorn",
        url: "https://pokeapi.co/api/v2/item/464/",
    },
    {
        name: "dowsing-machine",
        url: "https://pokeapi.co/api/v2/item/465/",
    },
    {
        name: "rage-candy-bar",
        url: "https://pokeapi.co/api/v2/item/466/",
    },
    {
        name: "red-orb",
        url: "https://pokeapi.co/api/v2/item/467/",
    },
    {
        name: "blue-orb",
        url: "https://pokeapi.co/api/v2/item/468/",
    },
    {
        name: "jade-orb",
        url: "https://pokeapi.co/api/v2/item/469/",
    },
    {
        name: "enigma-stone",
        url: "https://pokeapi.co/api/v2/item/470/",
    },
    {
        name: "unown-report",
        url: "https://pokeapi.co/api/v2/item/471/",
    },
    {
        name: "blue-card",
        url: "https://pokeapi.co/api/v2/item/472/",
    },
    {
        name: "slowpoke-tail",
        url: "https://pokeapi.co/api/v2/item/473/",
    },
    {
        name: "clear-bell",
        url: "https://pokeapi.co/api/v2/item/474/",
    },
    {
        name: "card-key",
        url: "https://pokeapi.co/api/v2/item/475/",
    },
    {
        name: "basement-key",
        url: "https://pokeapi.co/api/v2/item/476/",
    },
    {
        name: "red-scale",
        url: "https://pokeapi.co/api/v2/item/477/",
    },
    {
        name: "lost-item",
        url: "https://pokeapi.co/api/v2/item/478/",
    },
    {
        name: "pass",
        url: "https://pokeapi.co/api/v2/item/479/",
    },
    {
        name: "machine-part",
        url: "https://pokeapi.co/api/v2/item/480/",
    },
    {
        name: "silver-wing",
        url: "https://pokeapi.co/api/v2/item/481/",
    },
    {
        name: "rainbow-wing",
        url: "https://pokeapi.co/api/v2/item/482/",
    },
    {
        name: "mystery-egg",
        url: "https://pokeapi.co/api/v2/item/483/",
    },
    {
        name: "gb-sounds",
        url: "https://pokeapi.co/api/v2/item/484/",
    },
    {
        name: "tidal-bell",
        url: "https://pokeapi.co/api/v2/item/485/",
    },
    {
        name: "data-card-01",
        url: "https://pokeapi.co/api/v2/item/486/",
    },
    {
        name: "data-card-02",
        url: "https://pokeapi.co/api/v2/item/487/",
    },
    {
        name: "data-card-03",
        url: "https://pokeapi.co/api/v2/item/488/",
    },
    {
        name: "data-card-04",
        url: "https://pokeapi.co/api/v2/item/489/",
    },
    {
        name: "data-card-05",
        url: "https://pokeapi.co/api/v2/item/490/",
    },
    {
        name: "data-card-06",
        url: "https://pokeapi.co/api/v2/item/491/",
    },
    {
        name: "data-card-07",
        url: "https://pokeapi.co/api/v2/item/492/",
    },
    {
        name: "data-card-08",
        url: "https://pokeapi.co/api/v2/item/493/",
    },
    {
        name: "data-card-09",
        url: "https://pokeapi.co/api/v2/item/494/",
    },
    {
        name: "data-card-10",
        url: "https://pokeapi.co/api/v2/item/495/",
    },
    {
        name: "data-card-11",
        url: "https://pokeapi.co/api/v2/item/496/",
    },
    {
        name: "data-card-12",
        url: "https://pokeapi.co/api/v2/item/497/",
    },
    {
        name: "data-card-13",
        url: "https://pokeapi.co/api/v2/item/498/",
    },
    {
        name: "data-card-14",
        url: "https://pokeapi.co/api/v2/item/499/",
    },
    {
        name: "data-card-15",
        url: "https://pokeapi.co/api/v2/item/500/",
    },
    {
        name: "data-card-16",
        url: "https://pokeapi.co/api/v2/item/501/",
    },
    {
        name: "data-card-17",
        url: "https://pokeapi.co/api/v2/item/502/",
    },
    {
        name: "data-card-18",
        url: "https://pokeapi.co/api/v2/item/503/",
    },
    {
        name: "data-card-19",
        url: "https://pokeapi.co/api/v2/item/504/",
    },
    {
        name: "data-card-20",
        url: "https://pokeapi.co/api/v2/item/505/",
    },
    {
        name: "data-card-21",
        url: "https://pokeapi.co/api/v2/item/506/",
    },
    {
        name: "data-card-22",
        url: "https://pokeapi.co/api/v2/item/507/",
    },
    {
        name: "data-card-23",
        url: "https://pokeapi.co/api/v2/item/508/",
    },
    {
        name: "data-card-24",
        url: "https://pokeapi.co/api/v2/item/509/",
    },
    {
        name: "data-card-25",
        url: "https://pokeapi.co/api/v2/item/510/",
    },
    {
        name: "data-card-26",
        url: "https://pokeapi.co/api/v2/item/511/",
    },
    {
        name: "data-card-27",
        url: "https://pokeapi.co/api/v2/item/512/",
    },
    {
        name: "lock-capsule",
        url: "https://pokeapi.co/api/v2/item/513/",
    },
    {
        name: "photo-album",
        url: "https://pokeapi.co/api/v2/item/514/",
    },
    {
        name: "orange-mail",
        url: "https://pokeapi.co/api/v2/item/515/",
    },
    {
        name: "harbor-mail",
        url: "https://pokeapi.co/api/v2/item/516/",
    },
    {
        name: "glitter-mail",
        url: "https://pokeapi.co/api/v2/item/517/",
    },
    {
        name: "mech-mail",
        url: "https://pokeapi.co/api/v2/item/518/",
    },
    {
        name: "wood-mail",
        url: "https://pokeapi.co/api/v2/item/519/",
    },
    {
        name: "wave-mail",
        url: "https://pokeapi.co/api/v2/item/520/",
    },
    {
        name: "bead-mail",
        url: "https://pokeapi.co/api/v2/item/521/",
    },
    {
        name: "shadow-mail",
        url: "https://pokeapi.co/api/v2/item/522/",
    },
    {
        name: "tropic-mail",
        url: "https://pokeapi.co/api/v2/item/523/",
    },
    {
        name: "dream-mail",
        url: "https://pokeapi.co/api/v2/item/524/",
    },
    {
        name: "fab-mail",
        url: "https://pokeapi.co/api/v2/item/525/",
    },
    {
        name: "retro-mail",
        url: "https://pokeapi.co/api/v2/item/526/",
    },
    {
        name: "mach-bike",
        url: "https://pokeapi.co/api/v2/item/527/",
    },
    {
        name: "acro-bike",
        url: "https://pokeapi.co/api/v2/item/528/",
    },
    {
        name: "wailmer-pail",
        url: "https://pokeapi.co/api/v2/item/529/",
    },
    {
        name: "devon-goods",
        url: "https://pokeapi.co/api/v2/item/530/",
    },
    {
        name: "soot-sack",
        url: "https://pokeapi.co/api/v2/item/531/",
    },
    {
        name: "pokeblock-case",
        url: "https://pokeapi.co/api/v2/item/532/",
    },
    {
        name: "letter",
        url: "https://pokeapi.co/api/v2/item/533/",
    },
    {
        name: "eon-ticket",
        url: "https://pokeapi.co/api/v2/item/534/",
    },
    {
        name: "scanner",
        url: "https://pokeapi.co/api/v2/item/535/",
    },
    {
        name: "go-goggles",
        url: "https://pokeapi.co/api/v2/item/536/",
    },
    {
        name: "meteorite",
        url: "https://pokeapi.co/api/v2/item/537/",
    },
    {
        name: "rm-1-key",
        url: "https://pokeapi.co/api/v2/item/538/",
    },
    {
        name: "rm-2-key",
        url: "https://pokeapi.co/api/v2/item/539/",
    },
    {
        name: "rm-4-key",
        url: "https://pokeapi.co/api/v2/item/540/",
    },
    {
        name: "rm-6-key",
        url: "https://pokeapi.co/api/v2/item/541/",
    },
    {
        name: "devon-scope",
        url: "https://pokeapi.co/api/v2/item/542/",
    },
    {
        name: "oaks-parcel",
        url: "https://pokeapi.co/api/v2/item/543/",
    },
    {
        name: "poke-flute",
        url: "https://pokeapi.co/api/v2/item/544/",
    },
    {
        name: "bike-voucher",
        url: "https://pokeapi.co/api/v2/item/545/",
    },
    {
        name: "gold-teeth",
        url: "https://pokeapi.co/api/v2/item/546/",
    },
    {
        name: "lift-key",
        url: "https://pokeapi.co/api/v2/item/547/",
    },
    {
        name: "silph-scope",
        url: "https://pokeapi.co/api/v2/item/548/",
    },
    {
        name: "fame-checker",
        url: "https://pokeapi.co/api/v2/item/549/",
    },
    {
        name: "tm-case",
        url: "https://pokeapi.co/api/v2/item/550/",
    },
    {
        name: "berry-pouch",
        url: "https://pokeapi.co/api/v2/item/551/",
    },
    {
        name: "teachy-tv",
        url: "https://pokeapi.co/api/v2/item/552/",
    },
    {
        name: "tri-pass",
        url: "https://pokeapi.co/api/v2/item/553/",
    },
    {
        name: "rainbow-pass",
        url: "https://pokeapi.co/api/v2/item/554/",
    },
    {
        name: "tea",
        url: "https://pokeapi.co/api/v2/item/555/",
    },
    {
        name: "mysticticket",
        url: "https://pokeapi.co/api/v2/item/556/",
    },
    {
        name: "auroraticket",
        url: "https://pokeapi.co/api/v2/item/557/",
    },
    {
        name: "powder-jar",
        url: "https://pokeapi.co/api/v2/item/558/",
    },
    {
        name: "ruby",
        url: "https://pokeapi.co/api/v2/item/559/",
    },
    {
        name: "sapphire",
        url: "https://pokeapi.co/api/v2/item/560/",
    },
    {
        name: "magma-emblem",
        url: "https://pokeapi.co/api/v2/item/561/",
    },
    {
        name: "old-sea-map",
        url: "https://pokeapi.co/api/v2/item/562/",
    },
    {
        name: "douse-drive",
        url: "https://pokeapi.co/api/v2/item/563/",
    },
    {
        name: "shock-drive",
        url: "https://pokeapi.co/api/v2/item/564/",
    },
    {
        name: "burn-drive",
        url: "https://pokeapi.co/api/v2/item/565/",
    },
    {
        name: "chill-drive",
        url: "https://pokeapi.co/api/v2/item/566/",
    },
    {
        name: "sweet-heart",
        url: "https://pokeapi.co/api/v2/item/567/",
    },
    {
        name: "greet-mail",
        url: "https://pokeapi.co/api/v2/item/568/",
    },
    {
        name: "favored-mail",
        url: "https://pokeapi.co/api/v2/item/569/",
    },
    {
        name: "rsvp-mail",
        url: "https://pokeapi.co/api/v2/item/570/",
    },
    {
        name: "thanks-mail",
        url: "https://pokeapi.co/api/v2/item/571/",
    },
    {
        name: "inquiry-mail",
        url: "https://pokeapi.co/api/v2/item/572/",
    },
    {
        name: "like-mail",
        url: "https://pokeapi.co/api/v2/item/573/",
    },
    {
        name: "reply-mail",
        url: "https://pokeapi.co/api/v2/item/574/",
    },
    {
        name: "bridge-mail-s",
        url: "https://pokeapi.co/api/v2/item/575/",
    },
    {
        name: "bridge-mail-d",
        url: "https://pokeapi.co/api/v2/item/576/",
    },
    {
        name: "bridge-mail-t",
        url: "https://pokeapi.co/api/v2/item/577/",
    },
    {
        name: "bridge-mail-v",
        url: "https://pokeapi.co/api/v2/item/578/",
    },
    {
        name: "bridge-mail-m",
        url: "https://pokeapi.co/api/v2/item/579/",
    },
    {
        name: "prism-scale",
        url: "https://pokeapi.co/api/v2/item/580/",
    },
    {
        name: "eviolite",
        url: "https://pokeapi.co/api/v2/item/581/",
    },
    {
        name: "float-stone",
        url: "https://pokeapi.co/api/v2/item/582/",
    },
    {
        name: "rocky-helmet",
        url: "https://pokeapi.co/api/v2/item/583/",
    },
    {
        name: "air-balloon",
        url: "https://pokeapi.co/api/v2/item/584/",
    },
    {
        name: "red-card",
        url: "https://pokeapi.co/api/v2/item/585/",
    },
    {
        name: "ring-target",
        url: "https://pokeapi.co/api/v2/item/586/",
    },
    {
        name: "binding-band",
        url: "https://pokeapi.co/api/v2/item/587/",
    },
    {
        name: "absorb-bulb",
        url: "https://pokeapi.co/api/v2/item/588/",
    },
    {
        name: "cell-battery",
        url: "https://pokeapi.co/api/v2/item/589/",
    },
    {
        name: "eject-button",
        url: "https://pokeapi.co/api/v2/item/590/",
    },
    {
        name: "fire-gem",
        url: "https://pokeapi.co/api/v2/item/591/",
    },
    {
        name: "water-gem",
        url: "https://pokeapi.co/api/v2/item/592/",
    },
    {
        name: "electric-gem",
        url: "https://pokeapi.co/api/v2/item/593/",
    },
    {
        name: "grass-gem",
        url: "https://pokeapi.co/api/v2/item/594/",
    },
    {
        name: "ice-gem",
        url: "https://pokeapi.co/api/v2/item/595/",
    },
    {
        name: "fighting-gem",
        url: "https://pokeapi.co/api/v2/item/596/",
    },
    {
        name: "poison-gem",
        url: "https://pokeapi.co/api/v2/item/597/",
    },
    {
        name: "ground-gem",
        url: "https://pokeapi.co/api/v2/item/598/",
    },
    {
        name: "flying-gem",
        url: "https://pokeapi.co/api/v2/item/599/",
    },
    {
        name: "psychic-gem",
        url: "https://pokeapi.co/api/v2/item/600/",
    },
    {
        name: "bug-gem",
        url: "https://pokeapi.co/api/v2/item/601/",
    },
    {
        name: "rock-gem",
        url: "https://pokeapi.co/api/v2/item/602/",
    },
    {
        name: "ghost-gem",
        url: "https://pokeapi.co/api/v2/item/603/",
    },
    {
        name: "dark-gem",
        url: "https://pokeapi.co/api/v2/item/604/",
    },
    {
        name: "steel-gem",
        url: "https://pokeapi.co/api/v2/item/605/",
    },
    {
        name: "health-wing",
        url: "https://pokeapi.co/api/v2/item/606/",
    },
    {
        name: "muscle-wing",
        url: "https://pokeapi.co/api/v2/item/607/",
    },
    {
        name: "resist-wing",
        url: "https://pokeapi.co/api/v2/item/608/",
    },
    {
        name: "genius-wing",
        url: "https://pokeapi.co/api/v2/item/609/",
    },
    {
        name: "clever-wing",
        url: "https://pokeapi.co/api/v2/item/610/",
    },
    {
        name: "swift-wing",
        url: "https://pokeapi.co/api/v2/item/611/",
    },
    {
        name: "pretty-wing",
        url: "https://pokeapi.co/api/v2/item/612/",
    },
    {
        name: "cover-fossil",
        url: "https://pokeapi.co/api/v2/item/613/",
    },
    {
        name: "plume-fossil",
        url: "https://pokeapi.co/api/v2/item/614/",
    },
    {
        name: "liberty-pass",
        url: "https://pokeapi.co/api/v2/item/615/",
    },
    {
        name: "pass-orb",
        url: "https://pokeapi.co/api/v2/item/616/",
    },
    {
        name: "dream-ball",
        url: "https://pokeapi.co/api/v2/item/617/",
    },
    {
        name: "poke-toy",
        url: "https://pokeapi.co/api/v2/item/618/",
    },
    {
        name: "prop-case",
        url: "https://pokeapi.co/api/v2/item/619/",
    },
    {
        name: "dragon-skull",
        url: "https://pokeapi.co/api/v2/item/620/",
    },
    {
        name: "balm-mushroom",
        url: "https://pokeapi.co/api/v2/item/621/",
    },
    {
        name: "big-nugget",
        url: "https://pokeapi.co/api/v2/item/622/",
    },
    {
        name: "pearl-string",
        url: "https://pokeapi.co/api/v2/item/623/",
    },
    {
        name: "comet-shard",
        url: "https://pokeapi.co/api/v2/item/624/",
    },
    {
        name: "relic-copper",
        url: "https://pokeapi.co/api/v2/item/625/",
    },
    {
        name: "relic-silver",
        url: "https://pokeapi.co/api/v2/item/626/",
    },
    {
        name: "relic-gold",
        url: "https://pokeapi.co/api/v2/item/627/",
    },
    {
        name: "relic-vase",
        url: "https://pokeapi.co/api/v2/item/628/",
    },
    {
        name: "relic-band",
        url: "https://pokeapi.co/api/v2/item/629/",
    },
    {
        name: "relic-statue",
        url: "https://pokeapi.co/api/v2/item/630/",
    },
    {
        name: "relic-crown",
        url: "https://pokeapi.co/api/v2/item/631/",
    },
    {
        name: "casteliacone",
        url: "https://pokeapi.co/api/v2/item/632/",
    },
    {
        name: "dire-hit-2",
        url: "https://pokeapi.co/api/v2/item/633/",
    },
    {
        name: "x-speed-2",
        url: "https://pokeapi.co/api/v2/item/634/",
    },
    {
        name: "x-sp-atk-2",
        url: "https://pokeapi.co/api/v2/item/635/",
    },
    {
        name: "x-sp-def-2",
        url: "https://pokeapi.co/api/v2/item/636/",
    },
    {
        name: "x-defense-2",
        url: "https://pokeapi.co/api/v2/item/637/",
    },
    {
        name: "x-attack-2",
        url: "https://pokeapi.co/api/v2/item/638/",
    },
    {
        name: "x-accuracy-2",
        url: "https://pokeapi.co/api/v2/item/639/",
    },
    {
        name: "x-speed-3",
        url: "https://pokeapi.co/api/v2/item/640/",
    },
    {
        name: "x-sp-atk-3",
        url: "https://pokeapi.co/api/v2/item/641/",
    },
    {
        name: "x-sp-def-3",
        url: "https://pokeapi.co/api/v2/item/642/",
    },
    {
        name: "x-defense-3",
        url: "https://pokeapi.co/api/v2/item/643/",
    },
    {
        name: "x-attack-3",
        url: "https://pokeapi.co/api/v2/item/644/",
    },
    {
        name: "x-accuracy-3",
        url: "https://pokeapi.co/api/v2/item/645/",
    },
    {
        name: "x-speed-6",
        url: "https://pokeapi.co/api/v2/item/646/",
    },
    {
        name: "x-sp-atk-6",
        url: "https://pokeapi.co/api/v2/item/647/",
    },
    {
        name: "x-sp-def-6",
        url: "https://pokeapi.co/api/v2/item/648/",
    },
    {
        name: "x-defense-6",
        url: "https://pokeapi.co/api/v2/item/649/",
    },
    {
        name: "x-attack-6",
        url: "https://pokeapi.co/api/v2/item/650/",
    },
    {
        name: "x-accuracy-6",
        url: "https://pokeapi.co/api/v2/item/651/",
    },
    {
        name: "ability-urge",
        url: "https://pokeapi.co/api/v2/item/652/",
    },
    {
        name: "item-drop",
        url: "https://pokeapi.co/api/v2/item/653/",
    },
    {
        name: "item-urge",
        url: "https://pokeapi.co/api/v2/item/654/",
    },
    {
        name: "reset-urge",
        url: "https://pokeapi.co/api/v2/item/655/",
    },
    {
        name: "dire-hit-3",
        url: "https://pokeapi.co/api/v2/item/656/",
    },
    {
        name: "light-stone",
        url: "https://pokeapi.co/api/v2/item/657/",
    },
    {
        name: "dark-stone",
        url: "https://pokeapi.co/api/v2/item/658/",
    },
    {
        name: "tm93",
        url: "https://pokeapi.co/api/v2/item/659/",
    },
    {
        name: "tm94",
        url: "https://pokeapi.co/api/v2/item/660/",
    },
    {
        name: "tm95",
        url: "https://pokeapi.co/api/v2/item/661/",
    },
    {
        name: "xtransceiver",
        url: "https://pokeapi.co/api/v2/item/662/",
    },
    {
        name: "god-stone",
        url: "https://pokeapi.co/api/v2/item/663/",
    },
    {
        name: "gram-1",
        url: "https://pokeapi.co/api/v2/item/664/",
    },
    {
        name: "gram-2",
        url: "https://pokeapi.co/api/v2/item/665/",
    },
    {
        name: "gram-3",
        url: "https://pokeapi.co/api/v2/item/666/",
    },
    {
        name: "dragon-gem",
        url: "https://pokeapi.co/api/v2/item/668/",
    },
    {
        name: "normal-gem",
        url: "https://pokeapi.co/api/v2/item/669/",
    },
    {
        name: "medal-box",
        url: "https://pokeapi.co/api/v2/item/670/",
    },
    {
        name: "dna-splicers",
        url: "https://pokeapi.co/api/v2/item/671/",
    },
    {
        name: "permit",
        url: "https://pokeapi.co/api/v2/item/673/",
    },
    {
        name: "oval-charm",
        url: "https://pokeapi.co/api/v2/item/674/",
    },
    {
        name: "shiny-charm",
        url: "https://pokeapi.co/api/v2/item/675/",
    },
    {
        name: "plasma-card",
        url: "https://pokeapi.co/api/v2/item/676/",
    },
    {
        name: "grubby-hanky",
        url: "https://pokeapi.co/api/v2/item/677/",
    },
    {
        name: "colress-machine",
        url: "https://pokeapi.co/api/v2/item/678/",
    },
    {
        name: "dropped-item",
        url: "https://pokeapi.co/api/v2/item/679/",
    },
    {
        name: "reveal-glass",
        url: "https://pokeapi.co/api/v2/item/681/",
    },
    {
        name: "weakness-policy",
        url: "https://pokeapi.co/api/v2/item/682/",
    },
    {
        name: "assault-vest",
        url: "https://pokeapi.co/api/v2/item/683/",
    },
    {
        name: "pixie-plate",
        url: "https://pokeapi.co/api/v2/item/684/",
    },
    {
        name: "ability-capsule",
        url: "https://pokeapi.co/api/v2/item/685/",
    },
    {
        name: "whipped-dream",
        url: "https://pokeapi.co/api/v2/item/686/",
    },
    {
        name: "sachet",
        url: "https://pokeapi.co/api/v2/item/687/",
    },
    {
        name: "luminous-moss",
        url: "https://pokeapi.co/api/v2/item/688/",
    },
    {
        name: "snowball",
        url: "https://pokeapi.co/api/v2/item/689/",
    },
    {
        name: "safety-goggles",
        url: "https://pokeapi.co/api/v2/item/690/",
    },
    {
        name: "rich-mulch",
        url: "https://pokeapi.co/api/v2/item/691/",
    },
    {
        name: "surprise-mulch",
        url: "https://pokeapi.co/api/v2/item/692/",
    },
    {
        name: "boost-mulch",
        url: "https://pokeapi.co/api/v2/item/693/",
    },
    {
        name: "amaze-mulch",
        url: "https://pokeapi.co/api/v2/item/694/",
    },
    {
        name: "gengarite",
        url: "https://pokeapi.co/api/v2/item/695/",
    },
    {
        name: "gardevoirite",
        url: "https://pokeapi.co/api/v2/item/696/",
    },
    {
        name: "ampharosite",
        url: "https://pokeapi.co/api/v2/item/697/",
    },
    {
        name: "venusaurite",
        url: "https://pokeapi.co/api/v2/item/698/",
    },
    {
        name: "charizardite-x",
        url: "https://pokeapi.co/api/v2/item/699/",
    },
    {
        name: "blastoisinite",
        url: "https://pokeapi.co/api/v2/item/700/",
    },
    {
        name: "mewtwonite-x",
        url: "https://pokeapi.co/api/v2/item/701/",
    },
    {
        name: "mewtwonite-y",
        url: "https://pokeapi.co/api/v2/item/702/",
    },
    {
        name: "blazikenite",
        url: "https://pokeapi.co/api/v2/item/703/",
    },
    {
        name: "medichamite",
        url: "https://pokeapi.co/api/v2/item/704/",
    },
    {
        name: "houndoominite",
        url: "https://pokeapi.co/api/v2/item/705/",
    },
    {
        name: "aggronite",
        url: "https://pokeapi.co/api/v2/item/706/",
    },
    {
        name: "banettite",
        url: "https://pokeapi.co/api/v2/item/707/",
    },
    {
        name: "tyranitarite",
        url: "https://pokeapi.co/api/v2/item/708/",
    },
    {
        name: "scizorite",
        url: "https://pokeapi.co/api/v2/item/709/",
    },
    {
        name: "pinsirite",
        url: "https://pokeapi.co/api/v2/item/710/",
    },
    {
        name: "aerodactylite",
        url: "https://pokeapi.co/api/v2/item/711/",
    },
    {
        name: "lucarionite",
        url: "https://pokeapi.co/api/v2/item/712/",
    },
    {
        name: "abomasite",
        url: "https://pokeapi.co/api/v2/item/713/",
    },
    {
        name: "kangaskhanite",
        url: "https://pokeapi.co/api/v2/item/714/",
    },
    {
        name: "gyaradosite",
        url: "https://pokeapi.co/api/v2/item/715/",
    },
    {
        name: "absolite",
        url: "https://pokeapi.co/api/v2/item/716/",
    },
    {
        name: "charizardite-y",
        url: "https://pokeapi.co/api/v2/item/717/",
    },
    {
        name: "alakazite",
        url: "https://pokeapi.co/api/v2/item/718/",
    },
    {
        name: "heracronite",
        url: "https://pokeapi.co/api/v2/item/719/",
    },
    {
        name: "mawilite",
        url: "https://pokeapi.co/api/v2/item/720/",
    },
    {
        name: "manectite",
        url: "https://pokeapi.co/api/v2/item/721/",
    },
    {
        name: "garchompite",
        url: "https://pokeapi.co/api/v2/item/722/",
    },
    {
        name: "roseli-berry",
        url: "https://pokeapi.co/api/v2/item/723/",
    },
    {
        name: "kee-berry",
        url: "https://pokeapi.co/api/v2/item/724/",
    },
    {
        name: "maranga-berry",
        url: "https://pokeapi.co/api/v2/item/725/",
    },
    {
        name: "discount-coupon",
        url: "https://pokeapi.co/api/v2/item/726/",
    },
    {
        name: "strange-souvenir",
        url: "https://pokeapi.co/api/v2/item/727/",
    },
    {
        name: "lumiose-galette",
        url: "https://pokeapi.co/api/v2/item/728/",
    },
    {
        name: "jaw-fossil",
        url: "https://pokeapi.co/api/v2/item/729/",
    },
    {
        name: "sail-fossil",
        url: "https://pokeapi.co/api/v2/item/730/",
    },
    {
        name: "fairy-gem",
        url: "https://pokeapi.co/api/v2/item/731/",
    },
    {
        name: "adventure-rules",
        url: "https://pokeapi.co/api/v2/item/732/",
    },
    {
        name: "elevator-key",
        url: "https://pokeapi.co/api/v2/item/733/",
    },
    {
        name: "holo-caster",
        url: "https://pokeapi.co/api/v2/item/734/",
    },
    {
        name: "honor-of-kalos",
        url: "https://pokeapi.co/api/v2/item/735/",
    },
    {
        name: "intriguing-stone",
        url: "https://pokeapi.co/api/v2/item/736/",
    },
    {
        name: "lens-case",
        url: "https://pokeapi.co/api/v2/item/737/",
    },
    {
        name: "looker-ticket",
        url: "https://pokeapi.co/api/v2/item/738/",
    },
    {
        name: "mega-ring",
        url: "https://pokeapi.co/api/v2/item/739/",
    },
    {
        name: "power-plant-pass",
        url: "https://pokeapi.co/api/v2/item/740/",
    },
    {
        name: "profs-letter",
        url: "https://pokeapi.co/api/v2/item/741/",
    },
    {
        name: "roller-skates",
        url: "https://pokeapi.co/api/v2/item/742/",
    },
    {
        name: "sprinklotad",
        url: "https://pokeapi.co/api/v2/item/743/",
    },
    {
        name: "tmv-pass",
        url: "https://pokeapi.co/api/v2/item/744/",
    },
    {
        name: "tm96",
        url: "https://pokeapi.co/api/v2/item/745/",
    },
    {
        name: "tm97",
        url: "https://pokeapi.co/api/v2/item/746/",
    },
    {
        name: "tm98",
        url: "https://pokeapi.co/api/v2/item/747/",
    },
    {
        name: "tm99",
        url: "https://pokeapi.co/api/v2/item/748/",
    },
    {
        name: "tm100",
        url: "https://pokeapi.co/api/v2/item/749/",
    },
    {
        name: "latiasite",
        url: "https://pokeapi.co/api/v2/item/760/",
    },
    {
        name: "latiosite",
        url: "https://pokeapi.co/api/v2/item/761/",
    },
    {
        name: "common-stone",
        url: "https://pokeapi.co/api/v2/item/762/",
    },
    {
        name: "makeup-bag",
        url: "https://pokeapi.co/api/v2/item/763/",
    },
    {
        name: "travel-trunk",
        url: "https://pokeapi.co/api/v2/item/764/",
    },
    {
        name: "shalour-sable",
        url: "https://pokeapi.co/api/v2/item/765/",
    },
    {
        name: "mega-charm",
        url: "https://pokeapi.co/api/v2/item/768/",
    },
    {
        name: "mega-glove",
        url: "https://pokeapi.co/api/v2/item/769/",
    },
    {
        name: "devon-parts",
        url: "https://pokeapi.co/api/v2/item/770/",
    },
    {
        name: "pokeblock-kit",
        url: "https://pokeapi.co/api/v2/item/772/",
    },
    {
        name: "key-to-room-1",
        url: "https://pokeapi.co/api/v2/item/773/",
    },
    {
        name: "key-to-room-2",
        url: "https://pokeapi.co/api/v2/item/774/",
    },
    {
        name: "key-to-room-4",
        url: "https://pokeapi.co/api/v2/item/775/",
    },
    {
        name: "key-to-room-6",
        url: "https://pokeapi.co/api/v2/item/776/",
    },
    {
        name: "devon-scuba-gear",
        url: "https://pokeapi.co/api/v2/item/779/",
    },
    {
        name: "contest-costume--jacket",
        url: "https://pokeapi.co/api/v2/item/780/",
    },
    {
        name: "magma-suit",
        url: "https://pokeapi.co/api/v2/item/782/",
    },
    {
        name: "aqua-suit",
        url: "https://pokeapi.co/api/v2/item/783/",
    },
    {
        name: "pair-of-tickets",
        url: "https://pokeapi.co/api/v2/item/784/",
    },
    {
        name: "mega-bracelet",
        url: "https://pokeapi.co/api/v2/item/785/",
    },
    {
        name: "mega-pendant",
        url: "https://pokeapi.co/api/v2/item/786/",
    },
    {
        name: "mega-glasses",
        url: "https://pokeapi.co/api/v2/item/787/",
    },
    {
        name: "mega-anchor",
        url: "https://pokeapi.co/api/v2/item/788/",
    },
    {
        name: "mega-stickpin",
        url: "https://pokeapi.co/api/v2/item/789/",
    },
    {
        name: "mega-tiara",
        url: "https://pokeapi.co/api/v2/item/790/",
    },
    {
        name: "mega-anklet",
        url: "https://pokeapi.co/api/v2/item/791/",
    },
    {
        name: "swampertite",
        url: "https://pokeapi.co/api/v2/item/793/",
    },
    {
        name: "sceptilite",
        url: "https://pokeapi.co/api/v2/item/794/",
    },
    {
        name: "sablenite",
        url: "https://pokeapi.co/api/v2/item/795/",
    },
    {
        name: "altarianite",
        url: "https://pokeapi.co/api/v2/item/796/",
    },
    {
        name: "galladite",
        url: "https://pokeapi.co/api/v2/item/797/",
    },
    {
        name: "audinite",
        url: "https://pokeapi.co/api/v2/item/798/",
    },
    {
        name: "metagrossite",
        url: "https://pokeapi.co/api/v2/item/799/",
    },
    {
        name: "sharpedonite",
        url: "https://pokeapi.co/api/v2/item/800/",
    },
    {
        name: "slowbronite",
        url: "https://pokeapi.co/api/v2/item/801/",
    },
    {
        name: "steelixite",
        url: "https://pokeapi.co/api/v2/item/802/",
    },
    {
        name: "pidgeotite",
        url: "https://pokeapi.co/api/v2/item/803/",
    },
    {
        name: "glalitite",
        url: "https://pokeapi.co/api/v2/item/804/",
    },
    {
        name: "diancite",
        url: "https://pokeapi.co/api/v2/item/805/",
    },
    {
        name: "prison-bottle",
        url: "https://pokeapi.co/api/v2/item/806/",
    },
    {
        name: "mega-cuff",
        url: "https://pokeapi.co/api/v2/item/807/",
    },
    {
        name: "cameruptite",
        url: "https://pokeapi.co/api/v2/item/808/",
    },
    {
        name: "lopunnite",
        url: "https://pokeapi.co/api/v2/item/809/",
    },
    {
        name: "salamencite",
        url: "https://pokeapi.co/api/v2/item/810/",
    },
    {
        name: "beedrillite",
        url: "https://pokeapi.co/api/v2/item/811/",
    },
    {
        name: "key-stone",
        url: "https://pokeapi.co/api/v2/item/814/",
    },
    {
        name: "meteorite-shard",
        url: "https://pokeapi.co/api/v2/item/815/",
    },
    {
        name: "eon-flute",
        url: "https://pokeapi.co/api/v2/item/816/",
    },
    {
        name: "normalium-z--held",
        url: "https://pokeapi.co/api/v2/item/817/",
    },
    {
        name: "firium-z--held",
        url: "https://pokeapi.co/api/v2/item/818/",
    },
    {
        name: "waterium-z--held",
        url: "https://pokeapi.co/api/v2/item/819/",
    },
    {
        name: "electrium-z--held",
        url: "https://pokeapi.co/api/v2/item/820/",
    },
    {
        name: "grassium-z--held",
        url: "https://pokeapi.co/api/v2/item/821/",
    },
    {
        name: "icium-z--held",
        url: "https://pokeapi.co/api/v2/item/822/",
    },
    {
        name: "fightinium-z--held",
        url: "https://pokeapi.co/api/v2/item/823/",
    },
    {
        name: "poisonium-z--held",
        url: "https://pokeapi.co/api/v2/item/824/",
    },
    {
        name: "groundium-z--held",
        url: "https://pokeapi.co/api/v2/item/825/",
    },
    {
        name: "flyinium-z--held",
        url: "https://pokeapi.co/api/v2/item/826/",
    },
    {
        name: "psychium-z--held",
        url: "https://pokeapi.co/api/v2/item/827/",
    },
    {
        name: "buginium-z--held",
        url: "https://pokeapi.co/api/v2/item/828/",
    },
    {
        name: "rockium-z--held",
        url: "https://pokeapi.co/api/v2/item/829/",
    },
    {
        name: "ghostium-z--held",
        url: "https://pokeapi.co/api/v2/item/830/",
    },
    {
        name: "dragonium-z--held",
        url: "https://pokeapi.co/api/v2/item/831/",
    },
    {
        name: "darkinium-z--held",
        url: "https://pokeapi.co/api/v2/item/832/",
    },
    {
        name: "steelium-z--held",
        url: "https://pokeapi.co/api/v2/item/833/",
    },
    {
        name: "fairium-z--held",
        url: "https://pokeapi.co/api/v2/item/834/",
    },
    {
        name: "pikanium-z--held",
        url: "https://pokeapi.co/api/v2/item/835/",
    },
    {
        name: "bottle-cap",
        url: "https://pokeapi.co/api/v2/item/836/",
    },
    {
        name: "gold-bottle-cap",
        url: "https://pokeapi.co/api/v2/item/837/",
    },
    {
        name: "z-ring",
        url: "https://pokeapi.co/api/v2/item/838/",
    },
    {
        name: "decidium-z--held",
        url: "https://pokeapi.co/api/v2/item/839/",
    },
    {
        name: "incinium-z--held",
        url: "https://pokeapi.co/api/v2/item/840/",
    },
    {
        name: "primarium-z--held",
        url: "https://pokeapi.co/api/v2/item/841/",
    },
    {
        name: "tapunium-z--held",
        url: "https://pokeapi.co/api/v2/item/842/",
    },
    {
        name: "marshadium-z--held",
        url: "https://pokeapi.co/api/v2/item/843/",
    },
    {
        name: "aloraichium-z--held",
        url: "https://pokeapi.co/api/v2/item/844/",
    },
    {
        name: "snorlium-z--held",
        url: "https://pokeapi.co/api/v2/item/845/",
    },
    {
        name: "eevium-z--held",
        url: "https://pokeapi.co/api/v2/item/846/",
    },
    {
        name: "mewnium-z--held",
        url: "https://pokeapi.co/api/v2/item/847/",
    },
    {
        name: "pikashunium-z--held",
        url: "https://pokeapi.co/api/v2/item/877/",
    },
    {
        name: "forage-bag",
        url: "https://pokeapi.co/api/v2/item/878/",
    },
    {
        name: "fishing-rod",
        url: "https://pokeapi.co/api/v2/item/879/",
    },
    {
        name: "professors-mask",
        url: "https://pokeapi.co/api/v2/item/880/",
    },
    {
        name: "festival-ticket",
        url: "https://pokeapi.co/api/v2/item/881/",
    },
    {
        name: "sparkling-stone",
        url: "https://pokeapi.co/api/v2/item/882/",
    },
    {
        name: "adrenaline-orb",
        url: "https://pokeapi.co/api/v2/item/883/",
    },
    {
        name: "zygarde-cube",
        url: "https://pokeapi.co/api/v2/item/884/",
    },
    {
        name: "ice-stone",
        url: "https://pokeapi.co/api/v2/item/885/",
    },
    {
        name: "ride-pager",
        url: "https://pokeapi.co/api/v2/item/886/",
    },
    {
        name: "beast-ball",
        url: "https://pokeapi.co/api/v2/item/887/",
    },
    {
        name: "big-malasada",
        url: "https://pokeapi.co/api/v2/item/888/",
    },
    {
        name: "red-nectar",
        url: "https://pokeapi.co/api/v2/item/889/",
    },
    {
        name: "yellow-nectar",
        url: "https://pokeapi.co/api/v2/item/890/",
    },
    {
        name: "pink-nectar",
        url: "https://pokeapi.co/api/v2/item/891/",
    },
    {
        name: "purple-nectar",
        url: "https://pokeapi.co/api/v2/item/892/",
    },
    {
        name: "sun-flute",
        url: "https://pokeapi.co/api/v2/item/893/",
    },
    {
        name: "moon-flute",
        url: "https://pokeapi.co/api/v2/item/894/",
    },
    {
        name: "enigmatic-card",
        url: "https://pokeapi.co/api/v2/item/895/",
    },
    {
        name: "terrain-extender",
        url: "https://pokeapi.co/api/v2/item/896/",
    },
    {
        name: "protective-pads",
        url: "https://pokeapi.co/api/v2/item/897/",
    },
    {
        name: "electric-seed",
        url: "https://pokeapi.co/api/v2/item/898/",
    },
    {
        name: "psychic-seed",
        url: "https://pokeapi.co/api/v2/item/899/",
    },
    {
        name: "misty-seed",
        url: "https://pokeapi.co/api/v2/item/900/",
    },
    {
        name: "grassy-seed",
        url: "https://pokeapi.co/api/v2/item/901/",
    },
    {
        name: "fighting-memory",
        url: "https://pokeapi.co/api/v2/item/902/",
    },
    {
        name: "flying-memory",
        url: "https://pokeapi.co/api/v2/item/903/",
    },
    {
        name: "poison-memory",
        url: "https://pokeapi.co/api/v2/item/904/",
    },
    {
        name: "ground-memory",
        url: "https://pokeapi.co/api/v2/item/905/",
    },
    {
        name: "rock-memory",
        url: "https://pokeapi.co/api/v2/item/906/",
    },
    {
        name: "bug-memory",
        url: "https://pokeapi.co/api/v2/item/907/",
    },
    {
        name: "ghost-memory",
        url: "https://pokeapi.co/api/v2/item/908/",
    },
    {
        name: "steel-memory",
        url: "https://pokeapi.co/api/v2/item/909/",
    },
    {
        name: "fire-memory",
        url: "https://pokeapi.co/api/v2/item/910/",
    },
    {
        name: "water-memory",
        url: "https://pokeapi.co/api/v2/item/911/",
    },
    {
        name: "grass-memory",
        url: "https://pokeapi.co/api/v2/item/912/",
    },
    {
        name: "electric-memory",
        url: "https://pokeapi.co/api/v2/item/913/",
    },
    {
        name: "psychic-memory",
        url: "https://pokeapi.co/api/v2/item/914/",
    },
    {
        name: "ice-memory",
        url: "https://pokeapi.co/api/v2/item/915/",
    },
    {
        name: "dragon-memory",
        url: "https://pokeapi.co/api/v2/item/916/",
    },
    {
        name: "dark-memory",
        url: "https://pokeapi.co/api/v2/item/917/",
    },
    {
        name: "fairy-memory",
        url: "https://pokeapi.co/api/v2/item/918/",
    },
    {
        name: "bike--green",
        url: "https://pokeapi.co/api/v2/item/919/",
    },
    {
        name: "storage-key--galactic-warehouse",
        url: "https://pokeapi.co/api/v2/item/920/",
    },
    {
        name: "basement-key--goldenrod",
        url: "https://pokeapi.co/api/v2/item/921/",
    },
    {
        name: "xtransceiver--red",
        url: "https://pokeapi.co/api/v2/item/922/",
    },
    {
        name: "xtransceiver--yellow",
        url: "https://pokeapi.co/api/v2/item/923/",
    },
    {
        name: "dna-splicers--merge",
        url: "https://pokeapi.co/api/v2/item/924/",
    },
    {
        name: "dna-splicers--split",
        url: "https://pokeapi.co/api/v2/item/925/",
    },
    {
        name: "dropped-item--red",
        url: "https://pokeapi.co/api/v2/item/926/",
    },
    {
        name: "dropped-item--yellow",
        url: "https://pokeapi.co/api/v2/item/927/",
    },
    {
        name: "holo-caster--green",
        url: "https://pokeapi.co/api/v2/item/928/",
    },
    {
        name: "bike--yellow",
        url: "https://pokeapi.co/api/v2/item/929/",
    },
    {
        name: "holo-caster--red",
        url: "https://pokeapi.co/api/v2/item/930/",
    },
    {
        name: "basement-key--new-mauville",
        url: "https://pokeapi.co/api/v2/item/931/",
    },
    {
        name: "storage-key--sea-mauville",
        url: "https://pokeapi.co/api/v2/item/932/",
    },
    {
        name: "ss-ticket--hoenn",
        url: "https://pokeapi.co/api/v2/item/933/",
    },
    {
        name: "contest-costume--dress",
        url: "https://pokeapi.co/api/v2/item/934/",
    },
    {
        name: "meteorite--2",
        url: "https://pokeapi.co/api/v2/item/935/",
    },
    {
        name: "meteorite--3",
        url: "https://pokeapi.co/api/v2/item/936/",
    },
    {
        name: "meteorite--4",
        url: "https://pokeapi.co/api/v2/item/937/",
    },
    {
        name: "normalium-z--bag",
        url: "https://pokeapi.co/api/v2/item/938/",
    },
    {
        name: "firium-z--bag",
        url: "https://pokeapi.co/api/v2/item/939/",
    },
    {
        name: "waterium-z--bag",
        url: "https://pokeapi.co/api/v2/item/940/",
    },
    {
        name: "electrium-z--bag",
        url: "https://pokeapi.co/api/v2/item/941/",
    },
    {
        name: "grassium-z--bag",
        url: "https://pokeapi.co/api/v2/item/942/",
    },
    {
        name: "icium-z--bag",
        url: "https://pokeapi.co/api/v2/item/943/",
    },
    {
        name: "fightinium-z--bag",
        url: "https://pokeapi.co/api/v2/item/944/",
    },
    {
        name: "poisonium-z--bag",
        url: "https://pokeapi.co/api/v2/item/945/",
    },
    {
        name: "groundium-z--bag",
        url: "https://pokeapi.co/api/v2/item/946/",
    },
    {
        name: "flyinium-z--bag",
        url: "https://pokeapi.co/api/v2/item/947/",
    },
    {
        name: "psychium-z--bag",
        url: "https://pokeapi.co/api/v2/item/948/",
    },
    {
        name: "buginium-z--bag",
        url: "https://pokeapi.co/api/v2/item/949/",
    },
    {
        name: "rockium-z--bag",
        url: "https://pokeapi.co/api/v2/item/950/",
    },
    {
        name: "ghostium-z--bag",
        url: "https://pokeapi.co/api/v2/item/951/",
    },
    {
        name: "dragonium-z--bag",
        url: "https://pokeapi.co/api/v2/item/952/",
    },
    {
        name: "darkinium-z--bag",
        url: "https://pokeapi.co/api/v2/item/953/",
    },
    {
        name: "steelium-z--bag",
        url: "https://pokeapi.co/api/v2/item/954/",
    },
    {
        name: "fairium-z--bag",
        url: "https://pokeapi.co/api/v2/item/955/",
    },
    {
        name: "pikanium-z--bag",
        url: "https://pokeapi.co/api/v2/item/956/",
    },
    {
        name: "decidium-z--bag",
        url: "https://pokeapi.co/api/v2/item/957/",
    },
    {
        name: "incinium-z--bag",
        url: "https://pokeapi.co/api/v2/item/958/",
    },
    {
        name: "primarium-z--bag",
        url: "https://pokeapi.co/api/v2/item/959/",
    },
    {
        name: "tapunium-z--bag",
        url: "https://pokeapi.co/api/v2/item/960/",
    },
    {
        name: "marshadium-z--bag",
        url: "https://pokeapi.co/api/v2/item/961/",
    },
    {
        name: "aloraichium-z--bag",
        url: "https://pokeapi.co/api/v2/item/962/",
    },
    {
        name: "snorlium-z--bag",
        url: "https://pokeapi.co/api/v2/item/963/",
    },
    {
        name: "eevium-z--bag",
        url: "https://pokeapi.co/api/v2/item/964/",
    },
    {
        name: "mewnium-z--bag",
        url: "https://pokeapi.co/api/v2/item/965/",
    },
    {
        name: "pikashunium-z--bag",
        url: "https://pokeapi.co/api/v2/item/966/",
    },
    {
        name: "solganium-z--held",
        url: "https://pokeapi.co/api/v2/item/967/",
    },
    {
        name: "lunalium-z--held",
        url: "https://pokeapi.co/api/v2/item/968/",
    },
    {
        name: "ultranecrozium-z--held",
        url: "https://pokeapi.co/api/v2/item/969/",
    },
    {
        name: "mimikium-z--held",
        url: "https://pokeapi.co/api/v2/item/970/",
    },
    {
        name: "lycanium-z--held",
        url: "https://pokeapi.co/api/v2/item/971/",
    },
    {
        name: "kommonium-z--held",
        url: "https://pokeapi.co/api/v2/item/972/",
    },
    {
        name: "solganium-z--bag",
        url: "https://pokeapi.co/api/v2/item/973/",
    },
    {
        name: "lunalium-z--bag",
        url: "https://pokeapi.co/api/v2/item/974/",
    },
    {
        name: "ultranecrozium-z--bag",
        url: "https://pokeapi.co/api/v2/item/975/",
    },
    {
        name: "mimikium-z--bag",
        url: "https://pokeapi.co/api/v2/item/976/",
    },
    {
        name: "lycanium-z--bag",
        url: "https://pokeapi.co/api/v2/item/977/",
    },
    {
        name: "kommonium-z--bag",
        url: "https://pokeapi.co/api/v2/item/978/",
    },
    {
        name: "z-power-ring",
        url: "https://pokeapi.co/api/v2/item/979/",
    },
    {
        name: "pink-petal",
        url: "https://pokeapi.co/api/v2/item/980/",
    },
    {
        name: "orange-petal",
        url: "https://pokeapi.co/api/v2/item/981/",
    },
    {
        name: "blue-petal",
        url: "https://pokeapi.co/api/v2/item/982/",
    },
    {
        name: "red-petal",
        url: "https://pokeapi.co/api/v2/item/983/",
    },
    {
        name: "green-petal",
        url: "https://pokeapi.co/api/v2/item/984/",
    },
    {
        name: "yellow-petal",
        url: "https://pokeapi.co/api/v2/item/985/",
    },
    {
        name: "purple-petal",
        url: "https://pokeapi.co/api/v2/item/986/",
    },
    {
        name: "rainbow-flower",
        url: "https://pokeapi.co/api/v2/item/987/",
    },
    {
        name: "surge-badge",
        url: "https://pokeapi.co/api/v2/item/988/",
    },
    {
        name: "n-solarizer--merge",
        url: "https://pokeapi.co/api/v2/item/989/",
    },
    {
        name: "n-lunarizer--merge",
        url: "https://pokeapi.co/api/v2/item/990/",
    },
    {
        name: "n-solarizer--split",
        url: "https://pokeapi.co/api/v2/item/991/",
    },
    {
        name: "n-lunarizer--split",
        url: "https://pokeapi.co/api/v2/item/992/",
    },
    {
        name: "ilimas-normalium-z",
        url: "https://pokeapi.co/api/v2/item/993/",
    },
    {
        name: "left-poke-ball",
        url: "https://pokeapi.co/api/v2/item/994/",
    },
    {
        name: "roto-hatch",
        url: "https://pokeapi.co/api/v2/item/995/",
    },
    {
        name: "roto-bargain",
        url: "https://pokeapi.co/api/v2/item/996/",
    },
    {
        name: "roto-prize-money",
        url: "https://pokeapi.co/api/v2/item/997/",
    },
    {
        name: "roto-exp-points",
        url: "https://pokeapi.co/api/v2/item/998/",
    },
    {
        name: "roto-friendship",
        url: "https://pokeapi.co/api/v2/item/999/",
    },
    {
        name: "roto-encounter",
        url: "https://pokeapi.co/api/v2/item/1000/",
    },
    {
        name: "roto-stealth",
        url: "https://pokeapi.co/api/v2/item/1001/",
    },
    {
        name: "roto-hp-restore",
        url: "https://pokeapi.co/api/v2/item/1002/",
    },
    {
        name: "roto-pp-restore",
        url: "https://pokeapi.co/api/v2/item/1003/",
    },
    {
        name: "roto-boost",
        url: "https://pokeapi.co/api/v2/item/1004/",
    },
    {
        name: "roto-catch",
        url: "https://pokeapi.co/api/v2/item/1005/",
    },
    {
        name: "autograph",
        url: "https://pokeapi.co/api/v2/item/1006/",
    },
    {
        name: "pokemon-box",
        url: "https://pokeapi.co/api/v2/item/1007/",
    },
    {
        name: "medicine-pocket",
        url: "https://pokeapi.co/api/v2/item/1008/",
    },
    {
        name: "candy-jar",
        url: "https://pokeapi.co/api/v2/item/1009/",
    },
    {
        name: "power-up-pocket",
        url: "https://pokeapi.co/api/v2/item/1010/",
    },
    {
        name: "clothing-trunk",
        url: "https://pokeapi.co/api/v2/item/1011/",
    },
    {
        name: "catching-pocket",
        url: "https://pokeapi.co/api/v2/item/1012/",
    },
    {
        name: "battle-pocket",
        url: "https://pokeapi.co/api/v2/item/1013/",
    },
    {
        name: "silver-razz-berry",
        url: "https://pokeapi.co/api/v2/item/1014/",
    },
    {
        name: "golden-razz-berry",
        url: "https://pokeapi.co/api/v2/item/1015/",
    },
    {
        name: "silver-nanab-berry",
        url: "https://pokeapi.co/api/v2/item/1016/",
    },
    {
        name: "golden-nanab-berry",
        url: "https://pokeapi.co/api/v2/item/1017/",
    },
    {
        name: "silver-pinap-berry",
        url: "https://pokeapi.co/api/v2/item/1018/",
    },
    {
        name: "golden-pinap-berry",
        url: "https://pokeapi.co/api/v2/item/1019/",
    },
    {
        name: "secret-key--letsgo",
        url: "https://pokeapi.co/api/v2/item/1020/",
    },
    {
        name: "ss-ticket--letsgo",
        url: "https://pokeapi.co/api/v2/item/1021/",
    },
    {
        name: "parcel--letsgo",
        url: "https://pokeapi.co/api/v2/item/1022/",
    },
    {
        name: "card-key--letsgo",
        url: "https://pokeapi.co/api/v2/item/1023/",
    },
    {
        name: "stretchy-spring",
        url: "https://pokeapi.co/api/v2/item/1024/",
    },
    {
        name: "chalky-stone",
        url: "https://pokeapi.co/api/v2/item/1025/",
    },
    {
        name: "marble",
        url: "https://pokeapi.co/api/v2/item/1026/",
    },
    {
        name: "lone-earring",
        url: "https://pokeapi.co/api/v2/item/1027/",
    },
    {
        name: "beach-glass",
        url: "https://pokeapi.co/api/v2/item/1028/",
    },
    {
        name: "gold-leaf",
        url: "https://pokeapi.co/api/v2/item/1029/",
    },
    {
        name: "silver-leaf",
        url: "https://pokeapi.co/api/v2/item/1030/",
    },
    {
        name: "polished-mud-ball",
        url: "https://pokeapi.co/api/v2/item/1031/",
    },
    {
        name: "tropical-shell",
        url: "https://pokeapi.co/api/v2/item/1032/",
    },
    {
        name: "leaf-letter--pikachu",
        url: "https://pokeapi.co/api/v2/item/1033/",
    },
    {
        name: "leaf-letter--eevee",
        url: "https://pokeapi.co/api/v2/item/1034/",
    },
    {
        name: "small-bouquet",
        url: "https://pokeapi.co/api/v2/item/1035/",
    },
    {
        name: "lure",
        url: "https://pokeapi.co/api/v2/item/1036/",
    },
    {
        name: "super-lure",
        url: "https://pokeapi.co/api/v2/item/1037/",
    },
    {
        name: "max-lure",
        url: "https://pokeapi.co/api/v2/item/1038/",
    },
    {
        name: "pewter-crunchies",
        url: "https://pokeapi.co/api/v2/item/1039/",
    },
    {
        name: "health-candy",
        url: "https://pokeapi.co/api/v2/item/1040/",
    },
    {
        name: "mighty-candy",
        url: "https://pokeapi.co/api/v2/item/1041/",
    },
    {
        name: "tough-candy",
        url: "https://pokeapi.co/api/v2/item/1042/",
    },
    {
        name: "smart-candy",
        url: "https://pokeapi.co/api/v2/item/1043/",
    },
    {
        name: "courage-candy",
        url: "https://pokeapi.co/api/v2/item/1044/",
    },
    {
        name: "quick-candy",
        url: "https://pokeapi.co/api/v2/item/1045/",
    },
    {
        name: "health-candy-l",
        url: "https://pokeapi.co/api/v2/item/1046/",
    },
    {
        name: "mighty-candy-l",
        url: "https://pokeapi.co/api/v2/item/1047/",
    },
    {
        name: "tough-candy-l",
        url: "https://pokeapi.co/api/v2/item/1048/",
    },
    {
        name: "smart-candy-l",
        url: "https://pokeapi.co/api/v2/item/1049/",
    },
    {
        name: "courage-candy-l",
        url: "https://pokeapi.co/api/v2/item/1050/",
    },
    {
        name: "quick-candy-l",
        url: "https://pokeapi.co/api/v2/item/1051/",
    },
    {
        name: "health-candy-xl",
        url: "https://pokeapi.co/api/v2/item/1052/",
    },
    {
        name: "mighty-candy-xl",
        url: "https://pokeapi.co/api/v2/item/1053/",
    },
    {
        name: "tough-candy-xl",
        url: "https://pokeapi.co/api/v2/item/1054/",
    },
    {
        name: "smart-candy-xl",
        url: "https://pokeapi.co/api/v2/item/1055/",
    },
    {
        name: "courage-candy-xl",
        url: "https://pokeapi.co/api/v2/item/1056/",
    },
    {
        name: "quick-candy-xl",
        url: "https://pokeapi.co/api/v2/item/1057/",
    },
    {
        name: "bulbasaur-candy",
        url: "https://pokeapi.co/api/v2/item/1058/",
    },
    {
        name: "charmander-candy",
        url: "https://pokeapi.co/api/v2/item/1059/",
    },
    {
        name: "squirtle-candy",
        url: "https://pokeapi.co/api/v2/item/1060/",
    },
    {
        name: "caterpie-candy",
        url: "https://pokeapi.co/api/v2/item/1061/",
    },
    {
        name: "weedle-candy",
        url: "https://pokeapi.co/api/v2/item/1062/",
    },
    {
        name: "pidgey-candy",
        url: "https://pokeapi.co/api/v2/item/1063/",
    },
    {
        name: "rattata-candy",
        url: "https://pokeapi.co/api/v2/item/1064/",
    },
    {
        name: "spearow-candy",
        url: "https://pokeapi.co/api/v2/item/1065/",
    },
    {
        name: "ekans-candy",
        url: "https://pokeapi.co/api/v2/item/1066/",
    },
    {
        name: "pikachu-candy",
        url: "https://pokeapi.co/api/v2/item/1067/",
    },
    {
        name: "sandshrew-candy",
        url: "https://pokeapi.co/api/v2/item/1068/",
    },
    {
        name: "nidoran-f-candy",
        url: "https://pokeapi.co/api/v2/item/1069/",
    },
    {
        name: "nidoran-m-candy",
        url: "https://pokeapi.co/api/v2/item/1070/",
    },
    {
        name: "clefairy-candy",
        url: "https://pokeapi.co/api/v2/item/1071/",
    },
    {
        name: "vulpix-candy",
        url: "https://pokeapi.co/api/v2/item/1072/",
    },
    {
        name: "jigglypuff-candy",
        url: "https://pokeapi.co/api/v2/item/1073/",
    },
    {
        name: "zubat-candy",
        url: "https://pokeapi.co/api/v2/item/1074/",
    },
    {
        name: "oddish-candy",
        url: "https://pokeapi.co/api/v2/item/1075/",
    },
    {
        name: "paras-candy",
        url: "https://pokeapi.co/api/v2/item/1076/",
    },
    {
        name: "venonat-candy",
        url: "https://pokeapi.co/api/v2/item/1077/",
    },
    {
        name: "diglett-candy",
        url: "https://pokeapi.co/api/v2/item/1078/",
    },
    {
        name: "meowth-candy",
        url: "https://pokeapi.co/api/v2/item/1079/",
    },
    {
        name: "psyduck-candy",
        url: "https://pokeapi.co/api/v2/item/1080/",
    },
    {
        name: "mankey-candy",
        url: "https://pokeapi.co/api/v2/item/1081/",
    },
    {
        name: "growlithe-candy",
        url: "https://pokeapi.co/api/v2/item/1082/",
    },
    {
        name: "poliwag-candy",
        url: "https://pokeapi.co/api/v2/item/1083/",
    },
    {
        name: "abra-candy",
        url: "https://pokeapi.co/api/v2/item/1084/",
    },
    {
        name: "machop-candy",
        url: "https://pokeapi.co/api/v2/item/1085/",
    },
    {
        name: "bellsprout-candy",
        url: "https://pokeapi.co/api/v2/item/1086/",
    },
    {
        name: "tentacool-candy",
        url: "https://pokeapi.co/api/v2/item/1087/",
    },
    {
        name: "geodude-candy",
        url: "https://pokeapi.co/api/v2/item/1088/",
    },
    {
        name: "ponyta-candy",
        url: "https://pokeapi.co/api/v2/item/1089/",
    },
    {
        name: "slowpoke-candy",
        url: "https://pokeapi.co/api/v2/item/1090/",
    },
    {
        name: "magnemite-candy",
        url: "https://pokeapi.co/api/v2/item/1091/",
    },
    {
        name: "farfetchd-candy",
        url: "https://pokeapi.co/api/v2/item/1092/",
    },
    {
        name: "doduo-candy",
        url: "https://pokeapi.co/api/v2/item/1093/",
    },
    {
        name: "seel-candy",
        url: "https://pokeapi.co/api/v2/item/1094/",
    },
    {
        name: "grimer-candy",
        url: "https://pokeapi.co/api/v2/item/1095/",
    },
    {
        name: "shellder-candy",
        url: "https://pokeapi.co/api/v2/item/1096/",
    },
    {
        name: "gastly-candy",
        url: "https://pokeapi.co/api/v2/item/1097/",
    },
    {
        name: "onix-candy",
        url: "https://pokeapi.co/api/v2/item/1098/",
    },
    {
        name: "drowzee-candy",
        url: "https://pokeapi.co/api/v2/item/1099/",
    },
    {
        name: "krabby-candy",
        url: "https://pokeapi.co/api/v2/item/1100/",
    },
    {
        name: "voltorb-candy",
        url: "https://pokeapi.co/api/v2/item/1101/",
    },
    {
        name: "exeggcute-candy",
        url: "https://pokeapi.co/api/v2/item/1102/",
    },
    {
        name: "cubone-candy",
        url: "https://pokeapi.co/api/v2/item/1103/",
    },
    {
        name: "hitmonlee-candy",
        url: "https://pokeapi.co/api/v2/item/1104/",
    },
    {
        name: "hitmonchan-candy",
        url: "https://pokeapi.co/api/v2/item/1105/",
    },
    {
        name: "lickitung-candy",
        url: "https://pokeapi.co/api/v2/item/1106/",
    },
    {
        name: "koffing-candy",
        url: "https://pokeapi.co/api/v2/item/1107/",
    },
    {
        name: "rhyhorn-candy",
        url: "https://pokeapi.co/api/v2/item/1108/",
    },
    {
        name: "chansey-candy",
        url: "https://pokeapi.co/api/v2/item/1109/",
    },
    {
        name: "tangela-candy",
        url: "https://pokeapi.co/api/v2/item/1110/",
    },
    {
        name: "kangaskhan-candy",
        url: "https://pokeapi.co/api/v2/item/1111/",
    },
    {
        name: "horsea-candy",
        url: "https://pokeapi.co/api/v2/item/1112/",
    },
    {
        name: "goldeen-candy",
        url: "https://pokeapi.co/api/v2/item/1113/",
    },
    {
        name: "staryu-candy",
        url: "https://pokeapi.co/api/v2/item/1114/",
    },
    {
        name: "mr-mime-candy",
        url: "https://pokeapi.co/api/v2/item/1115/",
    },
    {
        name: "scyther-candy",
        url: "https://pokeapi.co/api/v2/item/1116/",
    },
    {
        name: "jynx-candy",
        url: "https://pokeapi.co/api/v2/item/1117/",
    },
    {
        name: "electabuzz-candy",
        url: "https://pokeapi.co/api/v2/item/1118/",
    },
    {
        name: "pinsir-candy",
        url: "https://pokeapi.co/api/v2/item/1119/",
    },
    {
        name: "tauros-candy",
        url: "https://pokeapi.co/api/v2/item/1120/",
    },
    {
        name: "magikarp-candy",
        url: "https://pokeapi.co/api/v2/item/1121/",
    },
    {
        name: "lapras-candy",
        url: "https://pokeapi.co/api/v2/item/1122/",
    },
    {
        name: "ditto-candy",
        url: "https://pokeapi.co/api/v2/item/1123/",
    },
    {
        name: "eevee-candy",
        url: "https://pokeapi.co/api/v2/item/1124/",
    },
    {
        name: "porygon-candy",
        url: "https://pokeapi.co/api/v2/item/1125/",
    },
    {
        name: "omanyte-candy",
        url: "https://pokeapi.co/api/v2/item/1126/",
    },
    {
        name: "kabuto-candy",
        url: "https://pokeapi.co/api/v2/item/1127/",
    },
    {
        name: "aerodactyl-candy",
        url: "https://pokeapi.co/api/v2/item/1128/",
    },
    {
        name: "snorlax-candy",
        url: "https://pokeapi.co/api/v2/item/1129/",
    },
    {
        name: "articuno-candy",
        url: "https://pokeapi.co/api/v2/item/1130/",
    },
    {
        name: "zapdos-candy",
        url: "https://pokeapi.co/api/v2/item/1131/",
    },
    {
        name: "moltres-candy",
        url: "https://pokeapi.co/api/v2/item/1132/",
    },
    {
        name: "dratini-candy",
        url: "https://pokeapi.co/api/v2/item/1133/",
    },
    {
        name: "mewtwo-candy",
        url: "https://pokeapi.co/api/v2/item/1134/",
    },
    {
        name: "mew-candy",
        url: "https://pokeapi.co/api/v2/item/1135/",
    },
    {
        name: "meltan-candy",
        url: "https://pokeapi.co/api/v2/item/1136/",
    },
    {
        name: "magmar-candy",
        url: "https://pokeapi.co/api/v2/item/1137/",
    },
    {
        name: "endorsement",
        url: "https://pokeapi.co/api/v2/item/1138/",
    },
    {
        name: "pokemon-box-link",
        url: "https://pokeapi.co/api/v2/item/1139/",
    },
    {
        name: "wishing-star",
        url: "https://pokeapi.co/api/v2/item/1140/",
    },
    {
        name: "dynamax-band",
        url: "https://pokeapi.co/api/v2/item/1141/",
    },
    {
        name: "fishing-rod--galar",
        url: "https://pokeapi.co/api/v2/item/1142/",
    },
    {
        name: "rotom-bike",
        url: "https://pokeapi.co/api/v2/item/1143/",
    },
    {
        name: "sausages",
        url: "https://pokeapi.co/api/v2/item/1144/",
    },
    {
        name: "bobs-food-tin",
        url: "https://pokeapi.co/api/v2/item/1145/",
    },
    {
        name: "bachs-food-tin",
        url: "https://pokeapi.co/api/v2/item/1146/",
    },
    {
        name: "tin-of-beans",
        url: "https://pokeapi.co/api/v2/item/1147/",
    },
    {
        name: "bread",
        url: "https://pokeapi.co/api/v2/item/1148/",
    },
    {
        name: "pasta",
        url: "https://pokeapi.co/api/v2/item/1149/",
    },
    {
        name: "mixed-mushrooms",
        url: "https://pokeapi.co/api/v2/item/1150/",
    },
    {
        name: "smoke-poke-tail",
        url: "https://pokeapi.co/api/v2/item/1151/",
    },
    {
        name: "large-leek",
        url: "https://pokeapi.co/api/v2/item/1152/",
    },
    {
        name: "fancy-apple",
        url: "https://pokeapi.co/api/v2/item/1153/",
    },
    {
        name: "brittle-bones",
        url: "https://pokeapi.co/api/v2/item/1154/",
    },
    {
        name: "pack-of-potatoes",
        url: "https://pokeapi.co/api/v2/item/1155/",
    },
    {
        name: "pungent-root",
        url: "https://pokeapi.co/api/v2/item/1156/",
    },
    {
        name: "salad-mix",
        url: "https://pokeapi.co/api/v2/item/1157/",
    },
    {
        name: "fried-food",
        url: "https://pokeapi.co/api/v2/item/1158/",
    },
    {
        name: "boiled-egg",
        url: "https://pokeapi.co/api/v2/item/1159/",
    },
    {
        name: "camping-gear",
        url: "https://pokeapi.co/api/v2/item/1160/",
    },
    {
        name: "rusted-sword",
        url: "https://pokeapi.co/api/v2/item/1161/",
    },
    {
        name: "rusted-shield",
        url: "https://pokeapi.co/api/v2/item/1162/",
    },
    {
        name: "fossilized-bird",
        url: "https://pokeapi.co/api/v2/item/1163/",
    },
    {
        name: "fossilized-fish",
        url: "https://pokeapi.co/api/v2/item/1164/",
    },
    {
        name: "fossilized-drake",
        url: "https://pokeapi.co/api/v2/item/1165/",
    },
    {
        name: "fossilized-dino",
        url: "https://pokeapi.co/api/v2/item/1166/",
    },
    {
        name: "strawberry-sweet",
        url: "https://pokeapi.co/api/v2/item/1167/",
    },
    {
        name: "love-sweet",
        url: "https://pokeapi.co/api/v2/item/1168/",
    },
    {
        name: "berry-sweet",
        url: "https://pokeapi.co/api/v2/item/1169/",
    },
    {
        name: "clover-sweet",
        url: "https://pokeapi.co/api/v2/item/1170/",
    },
    {
        name: "flower-sweet",
        url: "https://pokeapi.co/api/v2/item/1171/",
    },
    {
        name: "star-sweet",
        url: "https://pokeapi.co/api/v2/item/1172/",
    },
    {
        name: "ribbon-sweet",
        url: "https://pokeapi.co/api/v2/item/1173/",
    },
    {
        name: "sweet-apple",
        url: "https://pokeapi.co/api/v2/item/1174/",
    },
    {
        name: "tart-apple",
        url: "https://pokeapi.co/api/v2/item/1175/",
    },
    {
        name: "throat-spray",
        url: "https://pokeapi.co/api/v2/item/1176/",
    },
    {
        name: "eject-pack",
        url: "https://pokeapi.co/api/v2/item/1177/",
    },
    {
        name: "heavy-duty-boots",
        url: "https://pokeapi.co/api/v2/item/1178/",
    },
    {
        name: "blunder-policy",
        url: "https://pokeapi.co/api/v2/item/1179/",
    },
    {
        name: "room-service",
        url: "https://pokeapi.co/api/v2/item/1180/",
    },
    {
        name: "utility-umbrella",
        url: "https://pokeapi.co/api/v2/item/1181/",
    },
    {
        name: "exp-candy-xs",
        url: "https://pokeapi.co/api/v2/item/1182/",
    },
    {
        name: "exp-candy-s",
        url: "https://pokeapi.co/api/v2/item/1183/",
    },
    {
        name: "exp-candy-m",
        url: "https://pokeapi.co/api/v2/item/1184/",
    },
    {
        name: "exp-candy-l",
        url: "https://pokeapi.co/api/v2/item/1185/",
    },
    {
        name: "exp-candy-xl",
        url: "https://pokeapi.co/api/v2/item/1186/",
    },
    {
        name: "dynamax-candy",
        url: "https://pokeapi.co/api/v2/item/1187/",
    },
    {
        name: "tr00",
        url: "https://pokeapi.co/api/v2/item/1188/",
    },
    {
        name: "tr01",
        url: "https://pokeapi.co/api/v2/item/1189/",
    },
    {
        name: "tr02",
        url: "https://pokeapi.co/api/v2/item/1190/",
    },
    {
        name: "tr03",
        url: "https://pokeapi.co/api/v2/item/1191/",
    },
    {
        name: "tr04",
        url: "https://pokeapi.co/api/v2/item/1192/",
    },
    {
        name: "tr05",
        url: "https://pokeapi.co/api/v2/item/1193/",
    },
    {
        name: "tr06",
        url: "https://pokeapi.co/api/v2/item/1194/",
    },
    {
        name: "tr07",
        url: "https://pokeapi.co/api/v2/item/1195/",
    },
    {
        name: "tr08",
        url: "https://pokeapi.co/api/v2/item/1196/",
    },
    {
        name: "tr09",
        url: "https://pokeapi.co/api/v2/item/1197/",
    },
    {
        name: "tr10",
        url: "https://pokeapi.co/api/v2/item/1198/",
    },
    {
        name: "tr11",
        url: "https://pokeapi.co/api/v2/item/1199/",
    },
    {
        name: "tr12",
        url: "https://pokeapi.co/api/v2/item/1200/",
    },
    {
        name: "tr13",
        url: "https://pokeapi.co/api/v2/item/1201/",
    },
    {
        name: "tr14",
        url: "https://pokeapi.co/api/v2/item/1202/",
    },
    {
        name: "tr15",
        url: "https://pokeapi.co/api/v2/item/1203/",
    },
    {
        name: "tr16",
        url: "https://pokeapi.co/api/v2/item/1204/",
    },
    {
        name: "tr17",
        url: "https://pokeapi.co/api/v2/item/1205/",
    },
    {
        name: "tr18",
        url: "https://pokeapi.co/api/v2/item/1206/",
    },
    {
        name: "tr19",
        url: "https://pokeapi.co/api/v2/item/1207/",
    },
    {
        name: "tr20",
        url: "https://pokeapi.co/api/v2/item/1208/",
    },
    {
        name: "tr21",
        url: "https://pokeapi.co/api/v2/item/1209/",
    },
    {
        name: "tr22",
        url: "https://pokeapi.co/api/v2/item/1210/",
    },
    {
        name: "tr23",
        url: "https://pokeapi.co/api/v2/item/1211/",
    },
    {
        name: "tr24",
        url: "https://pokeapi.co/api/v2/item/1212/",
    },
    {
        name: "tr25",
        url: "https://pokeapi.co/api/v2/item/1213/",
    },
    {
        name: "tr26",
        url: "https://pokeapi.co/api/v2/item/1214/",
    },
    {
        name: "tr27",
        url: "https://pokeapi.co/api/v2/item/1215/",
    },
    {
        name: "tr28",
        url: "https://pokeapi.co/api/v2/item/1216/",
    },
    {
        name: "tr29",
        url: "https://pokeapi.co/api/v2/item/1217/",
    },
    {
        name: "tr30",
        url: "https://pokeapi.co/api/v2/item/1218/",
    },
    {
        name: "tr31",
        url: "https://pokeapi.co/api/v2/item/1219/",
    },
    {
        name: "tr32",
        url: "https://pokeapi.co/api/v2/item/1220/",
    },
    {
        name: "tr33",
        url: "https://pokeapi.co/api/v2/item/1221/",
    },
    {
        name: "tr34",
        url: "https://pokeapi.co/api/v2/item/1222/",
    },
    {
        name: "tr35",
        url: "https://pokeapi.co/api/v2/item/1223/",
    },
    {
        name: "tr36",
        url: "https://pokeapi.co/api/v2/item/1224/",
    },
    {
        name: "tr37",
        url: "https://pokeapi.co/api/v2/item/1225/",
    },
    {
        name: "tr38",
        url: "https://pokeapi.co/api/v2/item/1226/",
    },
    {
        name: "tr39",
        url: "https://pokeapi.co/api/v2/item/1227/",
    },
    {
        name: "tr40",
        url: "https://pokeapi.co/api/v2/item/1228/",
    },
    {
        name: "tr41",
        url: "https://pokeapi.co/api/v2/item/1229/",
    },
    {
        name: "tr42",
        url: "https://pokeapi.co/api/v2/item/1230/",
    },
    {
        name: "tr43",
        url: "https://pokeapi.co/api/v2/item/1231/",
    },
    {
        name: "tr44",
        url: "https://pokeapi.co/api/v2/item/1232/",
    },
    {
        name: "tr45",
        url: "https://pokeapi.co/api/v2/item/1233/",
    },
    {
        name: "tr46",
        url: "https://pokeapi.co/api/v2/item/1234/",
    },
    {
        name: "tr47",
        url: "https://pokeapi.co/api/v2/item/1235/",
    },
    {
        name: "tr48",
        url: "https://pokeapi.co/api/v2/item/1236/",
    },
    {
        name: "tr49",
        url: "https://pokeapi.co/api/v2/item/1237/",
    },
    {
        name: "tr50",
        url: "https://pokeapi.co/api/v2/item/1238/",
    },
    {
        name: "tr51",
        url: "https://pokeapi.co/api/v2/item/1239/",
    },
    {
        name: "tr52",
        url: "https://pokeapi.co/api/v2/item/1240/",
    },
    {
        name: "tr53",
        url: "https://pokeapi.co/api/v2/item/1241/",
    },
    {
        name: "tr54",
        url: "https://pokeapi.co/api/v2/item/1242/",
    },
    {
        name: "tr55",
        url: "https://pokeapi.co/api/v2/item/1243/",
    },
    {
        name: "tr56",
        url: "https://pokeapi.co/api/v2/item/1244/",
    },
    {
        name: "tr57",
        url: "https://pokeapi.co/api/v2/item/1245/",
    },
    {
        name: "tr58",
        url: "https://pokeapi.co/api/v2/item/1246/",
    },
    {
        name: "tr59",
        url: "https://pokeapi.co/api/v2/item/1247/",
    },
    {
        name: "tr60",
        url: "https://pokeapi.co/api/v2/item/1248/",
    },
    {
        name: "tr61",
        url: "https://pokeapi.co/api/v2/item/1249/",
    },
    {
        name: "tr62",
        url: "https://pokeapi.co/api/v2/item/1250/",
    },
    {
        name: "tr63",
        url: "https://pokeapi.co/api/v2/item/1251/",
    },
    {
        name: "tr64",
        url: "https://pokeapi.co/api/v2/item/1252/",
    },
    {
        name: "tr65",
        url: "https://pokeapi.co/api/v2/item/1253/",
    },
    {
        name: "tr66",
        url: "https://pokeapi.co/api/v2/item/1254/",
    },
    {
        name: "tr67",
        url: "https://pokeapi.co/api/v2/item/1255/",
    },
    {
        name: "tr68",
        url: "https://pokeapi.co/api/v2/item/1256/",
    },
    {
        name: "tr69",
        url: "https://pokeapi.co/api/v2/item/1257/",
    },
    {
        name: "tr70",
        url: "https://pokeapi.co/api/v2/item/1258/",
    },
    {
        name: "tr71",
        url: "https://pokeapi.co/api/v2/item/1259/",
    },
    {
        name: "tr72",
        url: "https://pokeapi.co/api/v2/item/1260/",
    },
    {
        name: "tr73",
        url: "https://pokeapi.co/api/v2/item/1261/",
    },
    {
        name: "tr74",
        url: "https://pokeapi.co/api/v2/item/1262/",
    },
    {
        name: "tr75",
        url: "https://pokeapi.co/api/v2/item/1263/",
    },
    {
        name: "tr76",
        url: "https://pokeapi.co/api/v2/item/1264/",
    },
    {
        name: "tr77",
        url: "https://pokeapi.co/api/v2/item/1265/",
    },
    {
        name: "tr78",
        url: "https://pokeapi.co/api/v2/item/1266/",
    },
    {
        name: "tr79",
        url: "https://pokeapi.co/api/v2/item/1267/",
    },
    {
        name: "tr80",
        url: "https://pokeapi.co/api/v2/item/1268/",
    },
    {
        name: "tr81",
        url: "https://pokeapi.co/api/v2/item/1269/",
    },
    {
        name: "tr82",
        url: "https://pokeapi.co/api/v2/item/1270/",
    },
    {
        name: "tr83",
        url: "https://pokeapi.co/api/v2/item/1271/",
    },
    {
        name: "tr84",
        url: "https://pokeapi.co/api/v2/item/1272/",
    },
    {
        name: "tr85",
        url: "https://pokeapi.co/api/v2/item/1273/",
    },
    {
        name: "tr86",
        url: "https://pokeapi.co/api/v2/item/1274/",
    },
    {
        name: "tr87",
        url: "https://pokeapi.co/api/v2/item/1275/",
    },
    {
        name: "tr88",
        url: "https://pokeapi.co/api/v2/item/1276/",
    },
    {
        name: "tr89",
        url: "https://pokeapi.co/api/v2/item/1277/",
    },
    {
        name: "tr90",
        url: "https://pokeapi.co/api/v2/item/1278/",
    },
    {
        name: "tr91",
        url: "https://pokeapi.co/api/v2/item/1279/",
    },
    {
        name: "tr92",
        url: "https://pokeapi.co/api/v2/item/1280/",
    },
    {
        name: "tr93",
        url: "https://pokeapi.co/api/v2/item/1281/",
    },
    {
        name: "tr94",
        url: "https://pokeapi.co/api/v2/item/1282/",
    },
    {
        name: "tr95",
        url: "https://pokeapi.co/api/v2/item/1283/",
    },
    {
        name: "tr96",
        url: "https://pokeapi.co/api/v2/item/1284/",
    },
    {
        name: "tr97",
        url: "https://pokeapi.co/api/v2/item/1285/",
    },
    {
        name: "tr98",
        url: "https://pokeapi.co/api/v2/item/1286/",
    },
    {
        name: "tr99",
        url: "https://pokeapi.co/api/v2/item/1287/",
    },
    {
        name: "tm00",
        url: "https://pokeapi.co/api/v2/item/1288/",
    },
    {
        name: "lonely-mint",
        url: "https://pokeapi.co/api/v2/item/1289/",
    },
    {
        name: "adamant-mint",
        url: "https://pokeapi.co/api/v2/item/1290/",
    },
    {
        name: "naughty-mint",
        url: "https://pokeapi.co/api/v2/item/1291/",
    },
    {
        name: "brave-mint",
        url: "https://pokeapi.co/api/v2/item/1292/",
    },
    {
        name: "bold-mint",
        url: "https://pokeapi.co/api/v2/item/1293/",
    },
    {
        name: "impish-mint",
        url: "https://pokeapi.co/api/v2/item/1294/",
    },
    {
        name: "lax-mint",
        url: "https://pokeapi.co/api/v2/item/1295/",
    },
    {
        name: "relaxed-mint",
        url: "https://pokeapi.co/api/v2/item/1296/",
    },
    {
        name: "modest-mint",
        url: "https://pokeapi.co/api/v2/item/1297/",
    },
    {
        name: "mild-mint",
        url: "https://pokeapi.co/api/v2/item/1298/",
    },
    {
        name: "rash-mint",
        url: "https://pokeapi.co/api/v2/item/1299/",
    },
    {
        name: "quiet-mint",
        url: "https://pokeapi.co/api/v2/item/1300/",
    },
    {
        name: "calm-mint",
        url: "https://pokeapi.co/api/v2/item/1301/",
    },
    {
        name: "gentle-mint",
        url: "https://pokeapi.co/api/v2/item/1302/",
    },
    {
        name: "careful-mint",
        url: "https://pokeapi.co/api/v2/item/1303/",
    },
    {
        name: "sassy-mint",
        url: "https://pokeapi.co/api/v2/item/1304/",
    },
    {
        name: "timid-mint",
        url: "https://pokeapi.co/api/v2/item/1305/",
    },
    {
        name: "hasty-mint",
        url: "https://pokeapi.co/api/v2/item/1306/",
    },
    {
        name: "jolly-mint",
        url: "https://pokeapi.co/api/v2/item/1307/",
    },
    {
        name: "naive-mint",
        url: "https://pokeapi.co/api/v2/item/1308/",
    },
    {
        name: "serious-mint",
        url: "https://pokeapi.co/api/v2/item/1309/",
    },
    {
        name: "wishing-piece",
        url: "https://pokeapi.co/api/v2/item/1310/",
    },
    {
        name: "cracked-pot",
        url: "https://pokeapi.co/api/v2/item/1311/",
    },
    {
        name: "chipped-pot",
        url: "https://pokeapi.co/api/v2/item/1312/",
    },
    {
        name: "hi-tech-earbuds",
        url: "https://pokeapi.co/api/v2/item/1313/",
    },
    {
        name: "fruit-bunch",
        url: "https://pokeapi.co/api/v2/item/1314/",
    },
    {
        name: "moomoo-cheese",
        url: "https://pokeapi.co/api/v2/item/1315/",
    },
    {
        name: "spice-mix",
        url: "https://pokeapi.co/api/v2/item/1316/",
    },
    {
        name: "fresh-cream",
        url: "https://pokeapi.co/api/v2/item/1317/",
    },
    {
        name: "packaged-curry",
        url: "https://pokeapi.co/api/v2/item/1318/",
    },
    {
        name: "coconut-milk",
        url: "https://pokeapi.co/api/v2/item/1319/",
    },
    {
        name: "instant-noodles",
        url: "https://pokeapi.co/api/v2/item/1320/",
    },
    {
        name: "precooked-burger",
        url: "https://pokeapi.co/api/v2/item/1321/",
    },
    {
        name: "gigantamix",
        url: "https://pokeapi.co/api/v2/item/1322/",
    },
    {
        name: "wishing-chip",
        url: "https://pokeapi.co/api/v2/item/1323/",
    },
    {
        name: "rotom-bike--water-mode",
        url: "https://pokeapi.co/api/v2/item/1324/",
    },
    {
        name: "catching-charm",
        url: "https://pokeapi.co/api/v2/item/1325/",
    },
    {
        name: "old-letter",
        url: "https://pokeapi.co/api/v2/item/1326/",
    },
    {
        name: "band-autograph",
        url: "https://pokeapi.co/api/v2/item/1327/",
    },
    {
        name: "sonias-book",
        url: "https://pokeapi.co/api/v2/item/1328/",
    },
    {
        name: "rotom-catalog",
        url: "https://pokeapi.co/api/v2/item/1329/",
    },
    {
        name: "dynamax-crystal-and458",
        url: "https://pokeapi.co/api/v2/item/1330/",
    },
    {
        name: "dynamax-crystal-and15",
        url: "https://pokeapi.co/api/v2/item/1331/",
    },
    {
        name: "dynamax-crystal-and337",
        url: "https://pokeapi.co/api/v2/item/1332/",
    },
    {
        name: "dynamax-crystal-and603",
        url: "https://pokeapi.co/api/v2/item/1333/",
    },
    {
        name: "dynamax-crystal-and390",
        url: "https://pokeapi.co/api/v2/item/1334/",
    },
    {
        name: "dynamax-crystal-sgr6879",
        url: "https://pokeapi.co/api/v2/item/1335/",
    },
    {
        name: "dynamax-crystal-sgr6859",
        url: "https://pokeapi.co/api/v2/item/1336/",
    },
    {
        name: "dynamax-crystal-sgr6913",
        url: "https://pokeapi.co/api/v2/item/1337/",
    },
    {
        name: "dynamax-crystal-sgr7348",
        url: "https://pokeapi.co/api/v2/item/1338/",
    },
    {
        name: "dynamax-crystal-sgr7121",
        url: "https://pokeapi.co/api/v2/item/1339/",
    },
    {
        name: "dynamax-crystal-sgr6746",
        url: "https://pokeapi.co/api/v2/item/1340/",
    },
    {
        name: "dynamax-crystal-sgr7194",
        url: "https://pokeapi.co/api/v2/item/1341/",
    },
    {
        name: "dynamax-crystal-sgr7337",
        url: "https://pokeapi.co/api/v2/item/1342/",
    },
    {
        name: "dynamax-crystal-sgr7343",
        url: "https://pokeapi.co/api/v2/item/1343/",
    },
    {
        name: "dynamax-crystal-sgr6812",
        url: "https://pokeapi.co/api/v2/item/1344/",
    },
    {
        name: "dynamax-crystal-sgr7116",
        url: "https://pokeapi.co/api/v2/item/1345/",
    },
    {
        name: "dynamax-crystal-sgr7264",
        url: "https://pokeapi.co/api/v2/item/1346/",
    },
    {
        name: "dynamax-crystal-sgr7597",
        url: "https://pokeapi.co/api/v2/item/1347/",
    },
    {
        name: "dynamax-crystal-del7882",
        url: "https://pokeapi.co/api/v2/item/1348/",
    },
    {
        name: "dynamax-crystal-del7906",
        url: "https://pokeapi.co/api/v2/item/1349/",
    },
    {
        name: "dynamax-crystal-del7852",
        url: "https://pokeapi.co/api/v2/item/1350/",
    },
    {
        name: "dynamax-crystal-psc596",
        url: "https://pokeapi.co/api/v2/item/1351/",
    },
    {
        name: "dynamax-crystal-psc361",
        url: "https://pokeapi.co/api/v2/item/1352/",
    },
    {
        name: "dynamax-crystal-psc510",
        url: "https://pokeapi.co/api/v2/item/1353/",
    },
    {
        name: "dynamax-crystal-psc437",
        url: "https://pokeapi.co/api/v2/item/1354/",
    },
    {
        name: "dynamax-crystal-psc8773",
        url: "https://pokeapi.co/api/v2/item/1355/",
    },
    {
        name: "dynamax-crystal-lep1865",
        url: "https://pokeapi.co/api/v2/item/1356/",
    },
    {
        name: "dynamax-crystal-lep1829",
        url: "https://pokeapi.co/api/v2/item/1357/",
    },
    {
        name: "dynamax-crystal-boo5340",
        url: "https://pokeapi.co/api/v2/item/1358/",
    },
    {
        name: "dynamax-crystal-boo5506",
        url: "https://pokeapi.co/api/v2/item/1359/",
    },
    {
        name: "dynamax-crystal-boo5435",
        url: "https://pokeapi.co/api/v2/item/1360/",
    },
    {
        name: "dynamax-crystal-boo5602",
        url: "https://pokeapi.co/api/v2/item/1361/",
    },
    {
        name: "dynamax-crystal-boo5733",
        url: "https://pokeapi.co/api/v2/item/1362/",
    },
    {
        name: "dynamax-crystal-boo5235",
        url: "https://pokeapi.co/api/v2/item/1363/",
    },
    {
        name: "dynamax-crystal-boo5351",
        url: "https://pokeapi.co/api/v2/item/1364/",
    },
    {
        name: "dynamax-crystal-hya3748",
        url: "https://pokeapi.co/api/v2/item/1365/",
    },
    {
        name: "dynamax-crystal-hya3903",
        url: "https://pokeapi.co/api/v2/item/1366/",
    },
    {
        name: "dynamax-crystal-hya3418",
        url: "https://pokeapi.co/api/v2/item/1367/",
    },
    {
        name: "dynamax-crystal-hya3482",
        url: "https://pokeapi.co/api/v2/item/1368/",
    },
    {
        name: "dynamax-crystal-hya3845",
        url: "https://pokeapi.co/api/v2/item/1369/",
    },
    {
        name: "dynamax-crystal-eri1084",
        url: "https://pokeapi.co/api/v2/item/1370/",
    },
    {
        name: "dynamax-crystal-eri472",
        url: "https://pokeapi.co/api/v2/item/1371/",
    },
    {
        name: "dynamax-crystal-eri1666",
        url: "https://pokeapi.co/api/v2/item/1372/",
    },
    {
        name: "dynamax-crystal-eri897",
        url: "https://pokeapi.co/api/v2/item/1373/",
    },
    {
        name: "dynamax-crystal-eri1231",
        url: "https://pokeapi.co/api/v2/item/1374/",
    },
    {
        name: "dynamax-crystal-eri874",
        url: "https://pokeapi.co/api/v2/item/1375/",
    },
    {
        name: "dynamax-crystal-eri1298",
        url: "https://pokeapi.co/api/v2/item/1376/",
    },
    {
        name: "dynamax-crystal-eri1325",
        url: "https://pokeapi.co/api/v2/item/1377/",
    },
    {
        name: "dynamax-crystal-eri984",
        url: "https://pokeapi.co/api/v2/item/1378/",
    },
    {
        name: "dynamax-crystal-eri1464",
        url: "https://pokeapi.co/api/v2/item/1379/",
    },
    {
        name: "dynamax-crystal-eri1393",
        url: "https://pokeapi.co/api/v2/item/1380/",
    },
    {
        name: "dynamax-crystal-eri850",
        url: "https://pokeapi.co/api/v2/item/1381/",
    },
    {
        name: "dynamax-crystal-tau1409",
        url: "https://pokeapi.co/api/v2/item/1382/",
    },
    {
        name: "dynamax-crystal-tau1457",
        url: "https://pokeapi.co/api/v2/item/1383/",
    },
    {
        name: "dynamax-crystal-tau1165",
        url: "https://pokeapi.co/api/v2/item/1384/",
    },
    {
        name: "dynamax-crystal-tau1791",
        url: "https://pokeapi.co/api/v2/item/1385/",
    },
    {
        name: "dynamax-crystal-tau1910",
        url: "https://pokeapi.co/api/v2/item/1386/",
    },
    {
        name: "dynamax-crystal-tau1346",
        url: "https://pokeapi.co/api/v2/item/1387/",
    },
    {
        name: "dynamax-crystal-tau1373",
        url: "https://pokeapi.co/api/v2/item/1388/",
    },
    {
        name: "dynamax-crystal-tau1412",
        url: "https://pokeapi.co/api/v2/item/1389/",
    },
    {
        name: "dynamax-crystal-cma2491",
        url: "https://pokeapi.co/api/v2/item/1390/",
    },
    {
        name: "dynamax-crystal-cma2693",
        url: "https://pokeapi.co/api/v2/item/1391/",
    },
    {
        name: "dynamax-crystal-cma2294",
        url: "https://pokeapi.co/api/v2/item/1392/",
    },
    {
        name: "dynamax-crystal-cma2827",
        url: "https://pokeapi.co/api/v2/item/1393/",
    },
    {
        name: "dynamax-crystal-cma2282",
        url: "https://pokeapi.co/api/v2/item/1394/",
    },
    {
        name: "dynamax-crystal-cma2618",
        url: "https://pokeapi.co/api/v2/item/1395/",
    },
    {
        name: "dynamax-crystal-cma2657",
        url: "https://pokeapi.co/api/v2/item/1396/",
    },
    {
        name: "dynamax-crystal-cma2646",
        url: "https://pokeapi.co/api/v2/item/1397/",
    },
    {
        name: "dynamax-crystal-uma4905",
        url: "https://pokeapi.co/api/v2/item/1398/",
    },
    {
        name: "dynamax-crystal-uma4301",
        url: "https://pokeapi.co/api/v2/item/1399/",
    },
    {
        name: "dynamax-crystal-uma5191",
        url: "https://pokeapi.co/api/v2/item/1400/",
    },
    {
        name: "dynamax-crystal-uma5054",
        url: "https://pokeapi.co/api/v2/item/1401/",
    },
    {
        name: "dynamax-crystal-uma4295",
        url: "https://pokeapi.co/api/v2/item/1402/",
    },
    {
        name: "dynamax-crystal-uma4660",
        url: "https://pokeapi.co/api/v2/item/1403/",
    },
    {
        name: "dynamax-crystal-uma4554",
        url: "https://pokeapi.co/api/v2/item/1404/",
    },
    {
        name: "dynamax-crystal-uma4069",
        url: "https://pokeapi.co/api/v2/item/1405/",
    },
    {
        name: "dynamax-crystal-uma3569",
        url: "https://pokeapi.co/api/v2/item/1406/",
    },
    {
        name: "dynamax-crystal-uma3323",
        url: "https://pokeapi.co/api/v2/item/1407/",
    },
    {
        name: "dynamax-crystal-uma4033",
        url: "https://pokeapi.co/api/v2/item/1408/",
    },
    {
        name: "dynamax-crystal-uma4377",
        url: "https://pokeapi.co/api/v2/item/1409/",
    },
    {
        name: "dynamax-crystal-uma4375",
        url: "https://pokeapi.co/api/v2/item/1410/",
    },
    {
        name: "dynamax-crystal-uma4518",
        url: "https://pokeapi.co/api/v2/item/1411/",
    },
    {
        name: "dynamax-crystal-uma3594",
        url: "https://pokeapi.co/api/v2/item/1412/",
    },
    {
        name: "dynamax-crystal-vir5056",
        url: "https://pokeapi.co/api/v2/item/1413/",
    },
    {
        name: "dynamax-crystal-vir4825",
        url: "https://pokeapi.co/api/v2/item/1414/",
    },
    {
        name: "dynamax-crystal-vir4932",
        url: "https://pokeapi.co/api/v2/item/1415/",
    },
    {
        name: "dynamax-crystal-vir4540",
        url: "https://pokeapi.co/api/v2/item/1416/",
    },
    {
        name: "dynamax-crystal-vir4689",
        url: "https://pokeapi.co/api/v2/item/1417/",
    },
    {
        name: "dynamax-crystal-vir5338",
        url: "https://pokeapi.co/api/v2/item/1418/",
    },
    {
        name: "dynamax-crystal-vir4910",
        url: "https://pokeapi.co/api/v2/item/1419/",
    },
    {
        name: "dynamax-crystal-vir5315",
        url: "https://pokeapi.co/api/v2/item/1420/",
    },
    {
        name: "dynamax-crystal-vir5359",
        url: "https://pokeapi.co/api/v2/item/1421/",
    },
    {
        name: "dynamax-crystal-vir5409",
        url: "https://pokeapi.co/api/v2/item/1422/",
    },
    {
        name: "dynamax-crystal-vir5107",
        url: "https://pokeapi.co/api/v2/item/1423/",
    },
    {
        name: "dynamax-crystal-ari617",
        url: "https://pokeapi.co/api/v2/item/1424/",
    },
    {
        name: "dynamax-crystal-ari553",
        url: "https://pokeapi.co/api/v2/item/1425/",
    },
    {
        name: "dynamax-crystal-ari546",
        url: "https://pokeapi.co/api/v2/item/1426/",
    },
    {
        name: "dynamax-crystal-ari951",
        url: "https://pokeapi.co/api/v2/item/1427/",
    },
    {
        name: "dynamax-crystal-ori1713",
        url: "https://pokeapi.co/api/v2/item/1428/",
    },
    {
        name: "dynamax-crystal-ori2061",
        url: "https://pokeapi.co/api/v2/item/1429/",
    },
    {
        name: "dynamax-crystal-ori1790",
        url: "https://pokeapi.co/api/v2/item/1430/",
    },
    {
        name: "dynamax-crystal-ori1903",
        url: "https://pokeapi.co/api/v2/item/1431/",
    },
    {
        name: "dynamax-crystal-ori1948",
        url: "https://pokeapi.co/api/v2/item/1432/",
    },
    {
        name: "dynamax-crystal-ori2004",
        url: "https://pokeapi.co/api/v2/item/1433/",
    },
    {
        name: "dynamax-crystal-ori1852",
        url: "https://pokeapi.co/api/v2/item/1434/",
    },
    {
        name: "dynamax-crystal-ori1879",
        url: "https://pokeapi.co/api/v2/item/1435/",
    },
    {
        name: "dynamax-crystal-ori1899",
        url: "https://pokeapi.co/api/v2/item/1436/",
    },
    {
        name: "dynamax-crystal-ori1543",
        url: "https://pokeapi.co/api/v2/item/1437/",
    },
    {
        name: "dynamax-crystal-cas21",
        url: "https://pokeapi.co/api/v2/item/1438/",
    },
    {
        name: "dynamax-crystal-cas168",
        url: "https://pokeapi.co/api/v2/item/1439/",
    },
    {
        name: "dynamax-crystal-cas403",
        url: "https://pokeapi.co/api/v2/item/1440/",
    },
    {
        name: "dynamax-crystal-cas153",
        url: "https://pokeapi.co/api/v2/item/1441/",
    },
    {
        name: "dynamax-crystal-cas542",
        url: "https://pokeapi.co/api/v2/item/1442/",
    },
    {
        name: "dynamax-crystal-cas219",
        url: "https://pokeapi.co/api/v2/item/1443/",
    },
    {
        name: "dynamax-crystal-cas265",
        url: "https://pokeapi.co/api/v2/item/1444/",
    },
    {
        name: "dynamax-crystal-cnc3572",
        url: "https://pokeapi.co/api/v2/item/1445/",
    },
    {
        name: "dynamax-crystal-cnc3208",
        url: "https://pokeapi.co/api/v2/item/1446/",
    },
    {
        name: "dynamax-crystal-cnc3461",
        url: "https://pokeapi.co/api/v2/item/1447/",
    },
    {
        name: "dynamax-crystal-cnc3449",
        url: "https://pokeapi.co/api/v2/item/1448/",
    },
    {
        name: "dynamax-crystal-cnc3429",
        url: "https://pokeapi.co/api/v2/item/1449/",
    },
    {
        name: "dynamax-crystal-cnc3627",
        url: "https://pokeapi.co/api/v2/item/1450/",
    },
    {
        name: "dynamax-crystal-cnc3268",
        url: "https://pokeapi.co/api/v2/item/1451/",
    },
    {
        name: "dynamax-crystal-cnc3249",
        url: "https://pokeapi.co/api/v2/item/1452/",
    },
    {
        name: "dynamax-crystal-com4968",
        url: "https://pokeapi.co/api/v2/item/1453/",
    },
    {
        name: "dynamax-crystal-crv4757",
        url: "https://pokeapi.co/api/v2/item/1454/",
    },
    {
        name: "dynamax-crystal-crv4623",
        url: "https://pokeapi.co/api/v2/item/1455/",
    },
    {
        name: "dynamax-crystal-crv4662",
        url: "https://pokeapi.co/api/v2/item/1456/",
    },
    {
        name: "dynamax-crystal-crv4786",
        url: "https://pokeapi.co/api/v2/item/1457/",
    },
    {
        name: "dynamax-crystal-aur1708",
        url: "https://pokeapi.co/api/v2/item/1458/",
    },
    {
        name: "dynamax-crystal-aur2088",
        url: "https://pokeapi.co/api/v2/item/1459/",
    },
    {
        name: "dynamax-crystal-aur1605",
        url: "https://pokeapi.co/api/v2/item/1460/",
    },
    {
        name: "dynamax-crystal-aur2095",
        url: "https://pokeapi.co/api/v2/item/1461/",
    },
    {
        name: "dynamax-crystal-aur1577",
        url: "https://pokeapi.co/api/v2/item/1462/",
    },
    {
        name: "dynamax-crystal-aur1641",
        url: "https://pokeapi.co/api/v2/item/1463/",
    },
    {
        name: "dynamax-crystal-aur1612",
        url: "https://pokeapi.co/api/v2/item/1464/",
    },
    {
        name: "dynamax-crystal-pav7790",
        url: "https://pokeapi.co/api/v2/item/1465/",
    },
    {
        name: "dynamax-crystal-cet911",
        url: "https://pokeapi.co/api/v2/item/1466/",
    },
    {
        name: "dynamax-crystal-cet681",
        url: "https://pokeapi.co/api/v2/item/1467/",
    },
    {
        name: "dynamax-crystal-cet188",
        url: "https://pokeapi.co/api/v2/item/1468/",
    },
    {
        name: "dynamax-crystal-cet539",
        url: "https://pokeapi.co/api/v2/item/1469/",
    },
    {
        name: "dynamax-crystal-cet804",
        url: "https://pokeapi.co/api/v2/item/1470/",
    },
    {
        name: "dynamax-crystal-cep8974",
        url: "https://pokeapi.co/api/v2/item/1471/",
    },
    {
        name: "dynamax-crystal-cep8162",
        url: "https://pokeapi.co/api/v2/item/1472/",
    },
    {
        name: "dynamax-crystal-cep8238",
        url: "https://pokeapi.co/api/v2/item/1473/",
    },
    {
        name: "dynamax-crystal-cep8417",
        url: "https://pokeapi.co/api/v2/item/1474/",
    },
    {
        name: "dynamax-crystal-cen5267",
        url: "https://pokeapi.co/api/v2/item/1475/",
    },
    {
        name: "dynamax-crystal-cen5288",
        url: "https://pokeapi.co/api/v2/item/1476/",
    },
    {
        name: "dynamax-crystal-cen551",
        url: "https://pokeapi.co/api/v2/item/1477/",
    },
    {
        name: "dynamax-crystal-cen5459",
        url: "https://pokeapi.co/api/v2/item/1478/",
    },
    {
        name: "dynamax-crystal-cen5460",
        url: "https://pokeapi.co/api/v2/item/1479/",
    },
    {
        name: "dynamax-crystal-cmi2943",
        url: "https://pokeapi.co/api/v2/item/1480/",
    },
    {
        name: "dynamax-crystal-cmi2845",
        url: "https://pokeapi.co/api/v2/item/1481/",
    },
    {
        name: "dynamax-crystal-equ8131",
        url: "https://pokeapi.co/api/v2/item/1482/",
    },
    {
        name: "dynamax-crystal-vul7405",
        url: "https://pokeapi.co/api/v2/item/1483/",
    },
    {
        name: "dynamax-crystal-umi424",
        url: "https://pokeapi.co/api/v2/item/1484/",
    },
    {
        name: "dynamax-crystal-umi5563",
        url: "https://pokeapi.co/api/v2/item/1485/",
    },
    {
        name: "dynamax-crystal-umi5735",
        url: "https://pokeapi.co/api/v2/item/1486/",
    },
    {
        name: "dynamax-crystal-umi6789",
        url: "https://pokeapi.co/api/v2/item/1487/",
    },
    {
        name: "dynamax-crystal-crt4287",
        url: "https://pokeapi.co/api/v2/item/1488/",
    },
    {
        name: "dynamax-crystal-lyr7001",
        url: "https://pokeapi.co/api/v2/item/1489/",
    },
    {
        name: "dynamax-crystal-lyr7178",
        url: "https://pokeapi.co/api/v2/item/1490/",
    },
    {
        name: "dynamax-crystal-lyr7106",
        url: "https://pokeapi.co/api/v2/item/1491/",
    },
    {
        name: "dynamax-crystal-lyr7298",
        url: "https://pokeapi.co/api/v2/item/1492/",
    },
    {
        name: "dynamax-crystal-ara6585",
        url: "https://pokeapi.co/api/v2/item/1493/",
    },
    {
        name: "dynamax-crystal-sco6134",
        url: "https://pokeapi.co/api/v2/item/1494/",
    },
    {
        name: "dynamax-crystal-sco6527",
        url: "https://pokeapi.co/api/v2/item/1495/",
    },
    {
        name: "dynamax-crystal-sco6553",
        url: "https://pokeapi.co/api/v2/item/1496/",
    },
    {
        name: "dynamax-crystal-sco5953",
        url: "https://pokeapi.co/api/v2/item/1497/",
    },
    {
        name: "dynamax-crystal-sco5984",
        url: "https://pokeapi.co/api/v2/item/1498/",
    },
    {
        name: "dynamax-crystal-sco6508",
        url: "https://pokeapi.co/api/v2/item/1499/",
    },
    {
        name: "dynamax-crystal-sco6084",
        url: "https://pokeapi.co/api/v2/item/1500/",
    },
    {
        name: "dynamax-crystal-sco5944",
        url: "https://pokeapi.co/api/v2/item/1501/",
    },
    {
        name: "dynamax-crystal-sco6630",
        url: "https://pokeapi.co/api/v2/item/1502/",
    },
    {
        name: "dynamax-crystal-sco6027",
        url: "https://pokeapi.co/api/v2/item/1503/",
    },
    {
        name: "dynamax-crystal-sco6247",
        url: "https://pokeapi.co/api/v2/item/1504/",
    },
    {
        name: "dynamax-crystal-sco6252",
        url: "https://pokeapi.co/api/v2/item/1505/",
    },
    {
        name: "dynamax-crystal-sco5928",
        url: "https://pokeapi.co/api/v2/item/1506/",
    },
    {
        name: "dynamax-crystal-sco6241",
        url: "https://pokeapi.co/api/v2/item/1507/",
    },
    {
        name: "dynamax-crystal-sco6165",
        url: "https://pokeapi.co/api/v2/item/1508/",
    },
    {
        name: "dynamax-crystal-tri544",
        url: "https://pokeapi.co/api/v2/item/1509/",
    },
    {
        name: "dynamax-crystal-leo3982",
        url: "https://pokeapi.co/api/v2/item/1510/",
    },
    {
        name: "dynamax-crystal-leo4534",
        url: "https://pokeapi.co/api/v2/item/1511/",
    },
    {
        name: "dynamax-crystal-leo4357",
        url: "https://pokeapi.co/api/v2/item/1512/",
    },
    {
        name: "dynamax-crystal-leo4057",
        url: "https://pokeapi.co/api/v2/item/1513/",
    },
    {
        name: "dynamax-crystal-leo4359",
        url: "https://pokeapi.co/api/v2/item/1514/",
    },
    {
        name: "dynamax-crystal-leo4031",
        url: "https://pokeapi.co/api/v2/item/1515/",
    },
    {
        name: "dynamax-crystal-leo3852",
        url: "https://pokeapi.co/api/v2/item/1516/",
    },
    {
        name: "dynamax-crystal-leo3905",
        url: "https://pokeapi.co/api/v2/item/1517/",
    },
    {
        name: "dynamax-crystal-leo3773",
        url: "https://pokeapi.co/api/v2/item/1518/",
    },
    {
        name: "dynamax-crystal-gru8425",
        url: "https://pokeapi.co/api/v2/item/1519/",
    },
    {
        name: "dynamax-crystal-gru8636",
        url: "https://pokeapi.co/api/v2/item/1520/",
    },
    {
        name: "dynamax-crystal-gru8353",
        url: "https://pokeapi.co/api/v2/item/1521/",
    },
    {
        name: "dynamax-crystal-lib5685",
        url: "https://pokeapi.co/api/v2/item/1522/",
    },
    {
        name: "dynamax-crystal-lib5531",
        url: "https://pokeapi.co/api/v2/item/1523/",
    },
    {
        name: "dynamax-crystal-lib5787",
        url: "https://pokeapi.co/api/v2/item/1524/",
    },
    {
        name: "dynamax-crystal-lib5603",
        url: "https://pokeapi.co/api/v2/item/1525/",
    },
    {
        name: "dynamax-crystal-pup3165",
        url: "https://pokeapi.co/api/v2/item/1526/",
    },
    {
        name: "dynamax-crystal-pup3185",
        url: "https://pokeapi.co/api/v2/item/1527/",
    },
    {
        name: "dynamax-crystal-pup3045",
        url: "https://pokeapi.co/api/v2/item/1528/",
    },
    {
        name: "dynamax-crystal-cyg7924",
        url: "https://pokeapi.co/api/v2/item/1529/",
    },
    {
        name: "dynamax-crystal-cyg7417",
        url: "https://pokeapi.co/api/v2/item/1530/",
    },
    {
        name: "dynamax-crystal-cyg7796",
        url: "https://pokeapi.co/api/v2/item/1531/",
    },
    {
        name: "dynamax-crystal-cyg8301",
        url: "https://pokeapi.co/api/v2/item/1532/",
    },
    {
        name: "dynamax-crystal-cyg7949",
        url: "https://pokeapi.co/api/v2/item/1533/",
    },
    {
        name: "dynamax-crystal-cyg7528",
        url: "https://pokeapi.co/api/v2/item/1534/",
    },
    {
        name: "dynamax-crystal-oct7228",
        url: "https://pokeapi.co/api/v2/item/1535/",
    },
    {
        name: "dynamax-crystal-col1956",
        url: "https://pokeapi.co/api/v2/item/1536/",
    },
    {
        name: "dynamax-crystal-col2040",
        url: "https://pokeapi.co/api/v2/item/1537/",
    },
    {
        name: "dynamax-crystal-col2177",
        url: "https://pokeapi.co/api/v2/item/1538/",
    },
    {
        name: "dynamax-crystal-gem2990",
        url: "https://pokeapi.co/api/v2/item/1539/",
    },
    {
        name: "dynamax-crystal-gem2891",
        url: "https://pokeapi.co/api/v2/item/1540/",
    },
    {
        name: "dynamax-crystal-gem2421",
        url: "https://pokeapi.co/api/v2/item/1541/",
    },
    {
        name: "dynamax-crystal-gem2473",
        url: "https://pokeapi.co/api/v2/item/1542/",
    },
    {
        name: "dynamax-crystal-gem2216",
        url: "https://pokeapi.co/api/v2/item/1543/",
    },
    {
        name: "dynamax-crystal-gem2777",
        url: "https://pokeapi.co/api/v2/item/1544/",
    },
    {
        name: "dynamax-crystal-gem2650",
        url: "https://pokeapi.co/api/v2/item/1545/",
    },
    {
        name: "dynamax-crystal-gem2286",
        url: "https://pokeapi.co/api/v2/item/1546/",
    },
    {
        name: "dynamax-crystal-gem2484",
        url: "https://pokeapi.co/api/v2/item/1547/",
    },
    {
        name: "dynamax-crystal-gem2930",
        url: "https://pokeapi.co/api/v2/item/1548/",
    },
    {
        name: "dynamax-crystal-peg8775",
        url: "https://pokeapi.co/api/v2/item/1549/",
    },
    {
        name: "dynamax-crystal-peg8781",
        url: "https://pokeapi.co/api/v2/item/1550/",
    },
    {
        name: "dynamax-crystal-peg39",
        url: "https://pokeapi.co/api/v2/item/1551/",
    },
    {
        name: "dynamax-crystal-peg8308",
        url: "https://pokeapi.co/api/v2/item/1552/",
    },
    {
        name: "dynamax-crystal-peg8650",
        url: "https://pokeapi.co/api/v2/item/1553/",
    },
    {
        name: "dynamax-crystal-peg8634",
        url: "https://pokeapi.co/api/v2/item/1554/",
    },
    {
        name: "dynamax-crystal-peg8684",
        url: "https://pokeapi.co/api/v2/item/1555/",
    },
    {
        name: "dynamax-crystal-peg8450",
        url: "https://pokeapi.co/api/v2/item/1556/",
    },
    {
        name: "dynamax-crystal-peg8880",
        url: "https://pokeapi.co/api/v2/item/1557/",
    },
    {
        name: "dynamax-crystal-peg8905",
        url: "https://pokeapi.co/api/v2/item/1558/",
    },
    {
        name: "dynamax-crystal-oph6556",
        url: "https://pokeapi.co/api/v2/item/1559/",
    },
    {
        name: "dynamax-crystal-oph6378",
        url: "https://pokeapi.co/api/v2/item/1560/",
    },
    {
        name: "dynamax-crystal-oph6603",
        url: "https://pokeapi.co/api/v2/item/1561/",
    },
    {
        name: "dynamax-crystal-oph6149",
        url: "https://pokeapi.co/api/v2/item/1562/",
    },
    {
        name: "dynamax-crystal-oph6056",
        url: "https://pokeapi.co/api/v2/item/1563/",
    },
    {
        name: "dynamax-crystal-oph6075",
        url: "https://pokeapi.co/api/v2/item/1564/",
    },
    {
        name: "dynamax-crystal-ser5854",
        url: "https://pokeapi.co/api/v2/item/1565/",
    },
    {
        name: "dynamax-crystal-ser7141",
        url: "https://pokeapi.co/api/v2/item/1566/",
    },
    {
        name: "dynamax-crystal-ser5879",
        url: "https://pokeapi.co/api/v2/item/1567/",
    },
    {
        name: "dynamax-crystal-her6406",
        url: "https://pokeapi.co/api/v2/item/1568/",
    },
    {
        name: "dynamax-crystal-her6148",
        url: "https://pokeapi.co/api/v2/item/1569/",
    },
    {
        name: "dynamax-crystal-her6410",
        url: "https://pokeapi.co/api/v2/item/1570/",
    },
    {
        name: "dynamax-crystal-her6526",
        url: "https://pokeapi.co/api/v2/item/1571/",
    },
    {
        name: "dynamax-crystal-her6117",
        url: "https://pokeapi.co/api/v2/item/1572/",
    },
    {
        name: "dynamax-crystal-her6008",
        url: "https://pokeapi.co/api/v2/item/1573/",
    },
    {
        name: "dynamax-crystal-per936",
        url: "https://pokeapi.co/api/v2/item/1574/",
    },
    {
        name: "dynamax-crystal-per1017",
        url: "https://pokeapi.co/api/v2/item/1575/",
    },
    {
        name: "dynamax-crystal-per1131",
        url: "https://pokeapi.co/api/v2/item/1576/",
    },
    {
        name: "dynamax-crystal-per1228",
        url: "https://pokeapi.co/api/v2/item/1577/",
    },
    {
        name: "dynamax-crystal-per834",
        url: "https://pokeapi.co/api/v2/item/1578/",
    },
    {
        name: "dynamax-crystal-per941",
        url: "https://pokeapi.co/api/v2/item/1579/",
    },
    {
        name: "dynamax-crystal-phe99",
        url: "https://pokeapi.co/api/v2/item/1580/",
    },
    {
        name: "dynamax-crystal-phe338",
        url: "https://pokeapi.co/api/v2/item/1581/",
    },
    {
        name: "dynamax-crystal-vel3634",
        url: "https://pokeapi.co/api/v2/item/1582/",
    },
    {
        name: "dynamax-crystal-vel3485",
        url: "https://pokeapi.co/api/v2/item/1583/",
    },
    {
        name: "dynamax-crystal-vel3734",
        url: "https://pokeapi.co/api/v2/item/1584/",
    },
    {
        name: "dynamax-crystal-aqr8232",
        url: "https://pokeapi.co/api/v2/item/1585/",
    },
    {
        name: "dynamax-crystal-aqr8414",
        url: "https://pokeapi.co/api/v2/item/1586/",
    },
    {
        name: "dynamax-crystal-aqr8709",
        url: "https://pokeapi.co/api/v2/item/1587/",
    },
    {
        name: "dynamax-crystal-aqr8518",
        url: "https://pokeapi.co/api/v2/item/1588/",
    },
    {
        name: "dynamax-crystal-aqr7950",
        url: "https://pokeapi.co/api/v2/item/1589/",
    },
    {
        name: "dynamax-crystal-aqr8499",
        url: "https://pokeapi.co/api/v2/item/1590/",
    },
    {
        name: "dynamax-crystal-aqr8610",
        url: "https://pokeapi.co/api/v2/item/1591/",
    },
    {
        name: "dynamax-crystal-aqr8264",
        url: "https://pokeapi.co/api/v2/item/1592/",
    },
    {
        name: "dynamax-crystal-cru4853",
        url: "https://pokeapi.co/api/v2/item/1593/",
    },
    {
        name: "dynamax-crystal-cru4730",
        url: "https://pokeapi.co/api/v2/item/1594/",
    },
    {
        name: "dynamax-crystal-cru4763",
        url: "https://pokeapi.co/api/v2/item/1595/",
    },
    {
        name: "dynamax-crystal-cru4700",
        url: "https://pokeapi.co/api/v2/item/1596/",
    },
    {
        name: "dynamax-crystal-cru4656",
        url: "https://pokeapi.co/api/v2/item/1597/",
    },
    {
        name: "dynamax-crystal-psa8728",
        url: "https://pokeapi.co/api/v2/item/1598/",
    },
    {
        name: "dynamax-crystal-tra6217",
        url: "https://pokeapi.co/api/v2/item/1599/",
    },
    {
        name: "dynamax-crystal-cap7776",
        url: "https://pokeapi.co/api/v2/item/1600/",
    },
    {
        name: "dynamax-crystal-cap7754",
        url: "https://pokeapi.co/api/v2/item/1601/",
    },
    {
        name: "dynamax-crystal-cap8278",
        url: "https://pokeapi.co/api/v2/item/1602/",
    },
    {
        name: "dynamax-crystal-cap8322",
        url: "https://pokeapi.co/api/v2/item/1603/",
    },
    {
        name: "dynamax-crystal-cap7773",
        url: "https://pokeapi.co/api/v2/item/1604/",
    },
    {
        name: "dynamax-crystal-sge7479",
        url: "https://pokeapi.co/api/v2/item/1605/",
    },
    {
        name: "dynamax-crystal-car2326",
        url: "https://pokeapi.co/api/v2/item/1606/",
    },
    {
        name: "dynamax-crystal-car3685",
        url: "https://pokeapi.co/api/v2/item/1607/",
    },
    {
        name: "dynamax-crystal-car3307",
        url: "https://pokeapi.co/api/v2/item/1608/",
    },
    {
        name: "dynamax-crystal-car3699",
        url: "https://pokeapi.co/api/v2/item/1609/",
    },
    {
        name: "dynamax-crystal-dra5744",
        url: "https://pokeapi.co/api/v2/item/1610/",
    },
    {
        name: "dynamax-crystal-dra5291",
        url: "https://pokeapi.co/api/v2/item/1611/",
    },
    {
        name: "dynamax-crystal-dra6705",
        url: "https://pokeapi.co/api/v2/item/1612/",
    },
    {
        name: "dynamax-crystal-dra6536",
        url: "https://pokeapi.co/api/v2/item/1613/",
    },
    {
        name: "dynamax-crystal-dra7310",
        url: "https://pokeapi.co/api/v2/item/1614/",
    },
    {
        name: "dynamax-crystal-dra6688",
        url: "https://pokeapi.co/api/v2/item/1615/",
    },
    {
        name: "dynamax-crystal-dra4434",
        url: "https://pokeapi.co/api/v2/item/1616/",
    },
    {
        name: "dynamax-crystal-dra6370",
        url: "https://pokeapi.co/api/v2/item/1617/",
    },
    {
        name: "dynamax-crystal-dra7462",
        url: "https://pokeapi.co/api/v2/item/1618/",
    },
    {
        name: "dynamax-crystal-dra6396",
        url: "https://pokeapi.co/api/v2/item/1619/",
    },
    {
        name: "dynamax-crystal-dra6132",
        url: "https://pokeapi.co/api/v2/item/1620/",
    },
    {
        name: "dynamax-crystal-dra6636",
        url: "https://pokeapi.co/api/v2/item/1621/",
    },
    {
        name: "dynamax-crystal-cvn4915",
        url: "https://pokeapi.co/api/v2/item/1622/",
    },
    {
        name: "dynamax-crystal-cvn4785",
        url: "https://pokeapi.co/api/v2/item/1623/",
    },
    {
        name: "dynamax-crystal-cvn4846",
        url: "https://pokeapi.co/api/v2/item/1624/",
    },
    {
        name: "dynamax-crystal-aql7595",
        url: "https://pokeapi.co/api/v2/item/1625/",
    },
    {
        name: "dynamax-crystal-aql7557",
        url: "https://pokeapi.co/api/v2/item/1626/",
    },
    {
        name: "dynamax-crystal-aql7525",
        url: "https://pokeapi.co/api/v2/item/1627/",
    },
    {
        name: "dynamax-crystal-aql7602",
        url: "https://pokeapi.co/api/v2/item/1628/",
    },
    {
        name: "dynamax-crystal-aql7235",
        url: "https://pokeapi.co/api/v2/item/1629/",
    },
    {
        name: "max-honey",
        url: "https://pokeapi.co/api/v2/item/1630/",
    },
    {
        name: "max-mushrooms",
        url: "https://pokeapi.co/api/v2/item/1631/",
    },
    {
        name: "galarica-twig",
        url: "https://pokeapi.co/api/v2/item/1632/",
    },
    {
        name: "galarica-cuff",
        url: "https://pokeapi.co/api/v2/item/1633/",
    },
    {
        name: "style-card",
        url: "https://pokeapi.co/api/v2/item/1634/",
    },
    {
        name: "armor-pass",
        url: "https://pokeapi.co/api/v2/item/1635/",
    },
    {
        name: "rotom-bike--sparkling-white",
        url: "https://pokeapi.co/api/v2/item/1636/",
    },
    {
        name: "rotom-bike--glistening-black",
        url: "https://pokeapi.co/api/v2/item/1637/",
    },
    {
        name: "exp-charm",
        url: "https://pokeapi.co/api/v2/item/1638/",
    },
    {
        name: "armorite-ore",
        url: "https://pokeapi.co/api/v2/item/1639/",
    },
    {
        name: "mark-charm",
        url: "https://pokeapi.co/api/v2/item/1640/",
    },
    {
        name: "reins-of-unity--merge",
        url: "https://pokeapi.co/api/v2/item/1641/",
    },
    {
        name: "reins-of-unity--split",
        url: "https://pokeapi.co/api/v2/item/1642/",
    },
    {
        name: "galarica-wreath",
        url: "https://pokeapi.co/api/v2/item/1643/",
    },
    {
        name: "legendary-clue-1",
        url: "https://pokeapi.co/api/v2/item/1644/",
    },
    {
        name: "legendary-clue-2",
        url: "https://pokeapi.co/api/v2/item/1645/",
    },
    {
        name: "legendary-clue-3",
        url: "https://pokeapi.co/api/v2/item/1646/",
    },
    {
        name: "legendary-clue-question",
        url: "https://pokeapi.co/api/v2/item/1647/",
    },
    {
        name: "crown-pass",
        url: "https://pokeapi.co/api/v2/item/1648/",
    },
    {
        name: "wooden-crown",
        url: "https://pokeapi.co/api/v2/item/1649/",
    },
    {
        name: "radiant-petal",
        url: "https://pokeapi.co/api/v2/item/1650/",
    },
    {
        name: "white-mane-hair",
        url: "https://pokeapi.co/api/v2/item/1651/",
    },
    {
        name: "black-mane-hair",
        url: "https://pokeapi.co/api/v2/item/1652/",
    },
    {
        name: "iceroot-carrot",
        url: "https://pokeapi.co/api/v2/item/1653/",
    },
    {
        name: "shaderoot-carrot",
        url: "https://pokeapi.co/api/v2/item/1654/",
    },
    {
        name: "dynite-ore",
        url: "https://pokeapi.co/api/v2/item/1655/",
    },
    {
        name: "carrot-seeds",
        url: "https://pokeapi.co/api/v2/item/1656/",
    },
    {
        name: "ability-patch",
        url: "https://pokeapi.co/api/v2/item/1657/",
    },
    {
        name: "reins-of-unity",
        url: "https://pokeapi.co/api/v2/item/1658/",
    },
];

var itemData = [];
for (var i = 1; i <= items.length; i++) {
    itemData.push({ value: i, label: items[i - 1].name.split("-").join(" ") });
}

export { itemData };
