/* ════════════════════════════════════
   PRODUCTS — the shop's product list
   To add a product: copy one { ... } block, edit it, keep the comma.
   category: "crystal" | "books" | "custom"
   price / squareUrl: null for custom pieces (shows an Inquire button)
════════════════════════════════════ */
const PRODUCTS = [
  {
    id: 'fear-of-intimacy',
    name: 'Fear Of Intimacy: Poetry for the Avoidant Lover Girl',
    category: 'books',
    price: '$22.22',
    image: 'FOI.jpg',
    squareUrl: 'https://square.link/u/RI5IHSnl',
    description: `A tender, raw, and spiritual collection of poems for the women who have mastered distance, but long for closeness.<br><br>For the ones who crave intimacy, yet flinch when it arrives. This is for the lover girls who find themselves retreating into their own hearts, wrestling with old wounds, silent fears, and the ache of wanting more.<br><br>Told through a transformative poem sequence, this book centers around a poem titled Fear of Intimacy, accompanied by a series of complementary poems that deepen the connection. This book is for anyone ready to see themselves clearly, and continue the work of radical self love, by way of truth, healing and connection to the Divine. This is poetry for the spirit. For the lover girls who talk themselves out of love.<br><br>Fear of Intimacy holds space for your vulnerability, your mistakes, your softness, and your longing.<br>If you’ve ever feared being seen but secretly hoped someone might, this book is for you.`
  },
    {
    id: 'amethyst-choker',
    name: '✨Amethyst Choker✨',
    category: 'crystal',
    price: '$22.22',
    image: 'amchoke.PNG',
    squareUrl: 'https://square.link/u/1KeND4Pk',
    description: `It’s giving Wakanda 🫶🏾<br><br>It’s also giving healing properties. Amethyst is known for its peaceful and stress relieving properties like:<br><br>clearing negativity, calming, decrease anxiety, clearing confusion, promoting restful sleep; rid insomnia, enhance spiritual connection (crown chakra), spiritual protection, helpful with anxiety and headaches, can rid recurring nightmares<br><br>This item can be custom created for you in a necklace, bracelet, or anklet.<br><br>The world is yours ✨`
  },
  {
    id: 'joy-of-ambition',
    name: '💫 The Joy of Ambition 💫',
    category: 'crystal',
    price: '$33.33',
    image: 'joy.jpeg',
    squareUrl: 'https://square.link/u/43mqR6wK',
    description: `Experience joy through disciplined ambition.<br><br>Tiger's eye is known to:<br>increase self-worth, solar plexus activation, increase ambition and concentration, facilitate correct use of power, help with internal conflict, assist in accomplishing goals, unblock sacral & solar plexus chakras, activate the users internal masculine energy for their good 💛<br><br>Additional Crystals:<br>Pyrite 💎: money magic!, grounding, increase success<br><br>Black Onyx 🖤:<br>blocks negativity, increases patience and determination<br><br>“The Joy of Ambition” is also adorned with fresh water pearls, a tribute to the designers maternal grandmother, as she was a lover of pearls, and is constantly watching over and guiding her lineage ✨<br><br>This item can be custom created for you in a necklace, bracelet, or anklet.`
  },
  {
    id: 'quartz-ring',
    name: 'Copper Wrapped Quartz Ring ✨',
    category: 'crystal',
    price: '$25.00',
    image: 'qring.jpeg',
    squareUrl: 'https://square.link/u/4jnKTZfQ',
    description: `Crowd Favorite! Yall stay asking me about this ring 🤣<br><br>The Quartz Crystal is an amplifier and can strengthen the programming of any other crystal! It’s also a great tool for:<br>cleansing, healing, enhancing clairvoyance, amplifying any energy, enhancing thoughts and intentions<br><br>Q U A R T Z is a perfect “filler”. It can be used in the place of another crystal, for the specific intention that you want to set. It’s also really good at strengthening the vibration of other crystals to make your intentions and manifestations stronger ⭐️<br><br>Copper wrapped rings can be custom-made and wrapped around any crystal of your choosing.`
  },
  {
    id: 'rich-bitch-necklace',
    name: '💚 Rich Bitch Assorted Crystals Necklace 💚',
    category: 'custom',
    price: null,
    image: 'rich.JPG',
    squareUrl: null,
    description: `This necklace is adorned with crystals throughout that promote abundance, wisdom connection to spirit and properties that attract money!<br><br>Pyrite - attracts money 💸, grounding<br>Amethyst - calming & enhances wisdom<br>Black Onyx - protection & grounding<br>Jade - attracts good luck<br><br>This is a CUSTOM necklace with assorted crystals, and an affirmation quote, but don’t worry — You, too, can be a rich bitch you feel me 😎`
  },
  {
    id: 'tigers-eye-onyx',
    name: "Tiger's Eye & Onyx💫",
    category: 'crystal',
    price: '$22.22',
    image: 'tiger.jpg',
    squareUrl: 'https://square.link/u/emFMT2gE',
    description: `For the one who moves with purpose and protects their peace. 🖤<br><br>Tiger's Eye is known to:<br>increase self worth, increase ambition and concentration, assist in accomplishing goals, activate your internal masculine energy, unblock sacral & solar plexus chakras<br><br>Black Onyx 🖤<br>blocks negativity, increases patience and determination, and sheilds your energy<br><br>Together these two are a power duo — ambition meets protection. Wear this when you need to show up fully and guard your energy at the same time ⭐️<br><br>This item can be custom created for you in a necklace, bracelet, or anklet.`
  },
  {
    id: 'pyrite-onyx-bracelet',
    name: 'Pyrite & Black Onyx Bracelet ✨',
    category: 'crystal',
    price: '$22.22',
    image: 'pyrite.jpeg',
    squareUrl: 'https://square.link/u/e2Yd75iq',
    description: `Money moves only! 💛 This bracelet was created with one intention — abundance.<br><br>Pyrite is known for:<br>money magic!, grounding, increase success, boosting confidence, attracting prosperity and good luck, shielding against negative energy<br><br>Stack it, wear it solo, or gift it to someone who's ready to level up.<br><br>This item can be custom created for you in a necklace, bracelet, or anklet.`
  },
  {
    id: 'evil-eye-choker',
    name: 'Evil Eye Protection Choker — Black Onyx & Evil Eye 🧿',
    category: 'crystal',
    price: '$33.00',
    image: 'evilonyx.jpeg',
    squareUrl: 'https://square.link/u/PFbtNOT2',
    description: `Ward off what isn't yours to carry. 🖤<br><br>This choker was created with protection at its core. The Evil Eye guards against negative energy and ill intentions directed your way, while Black Onyx grounds and shields your spirit.<br><br>Black Onyx is known for:<br>blocking negativity, increasing patience and determination, grounding your energy, strengthening your aura<br><br>Pair it with intention. Wear it with confidence. You are protected ✨<br><br>This item can be custom created for you in a necklace, bracelet, or anklet.`
  },
  {
    id: 'jade-pyrite-onyx-necklace',
    name: 'Jade + Pyrite + Black Onyx Necklace ✨',
    category: 'crystal',
    price: '$44.44',
    image: 'pyjade.png',
    squareUrl: 'https://square.link/u/mjzJ3q1C',
    description: `Abundance, protection, and becoming — all in one piece. 💚<br><br>This 19" necklace was built with intention from the ground up, combining three of the most powerful stones for those who are stepping into alignment and calling in everything they deserve.<br><br>Pyrite 💎<br>money magic!, grounding, increases success, energy shielding, solar plexus activation<br><br>Jade 💚<br>attracts good luck, increases self-sufficiency, a symbol of purity and serenity, stabilizes the personality and integrates mind and body, encourages you to become your true self<br><br>Black Onyx 🖤<br>blocks negativity, increases patience and determination, helps banish old habits, assists with past-life work that is affecting the present life<br><br>Together these three are a full-circle piece — drawing in what you want, grounding you in who you are, and protecting you while you grow into it. ✨`
  }
];