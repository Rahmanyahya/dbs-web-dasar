// Hamburger menu
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('translate-x-full')
})

// Skills looping
const skills = [
    {
        icon: './assets/icon/icons8-astro-js.svg',
        title: 'Astro Js',
        descriptions: 'Astro is a JavaScript web framework optimized for building fast, content-driven websites.',
        link: 'https://astro.build/'
    },
    {
        icon: './assets/icon/icons8-express-js.svg',
        title: 'Express Js',
        descriptions: 'Express.js is a minimal and flexible Node.js web application framework.',
        link: 'https://expressjs.com/'
    },
    {
        icon: './assets/icon/icons8-nestjs.svg',
        title: 'Nest Js',
        descriptions: 'Nest.js is a progressive Node.js framework for building efficient, scalable server-side applications.',
        link: 'https://nestjs.com/'
    },
    {
        icon: './assets/icon/icons8-next.js.svg',
        title: 'Next Js',
        descriptions: 'Next.js is a React framework for building static and server-rendered applications.',
        link: 'https://nextjs.org/'
    },
    {
        icon: './assets/icon/icons8-node-js.svg',
        title: 'Node Js',
        descriptions: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
        link: 'https://nodejs.org/'
    },
    {
        icon: './assets/icon/icons8-react.svg',
        title: 'React Js',
        descriptions: 'React is a JavaScript library for building user interfaces.',
        link: 'https://reactjs.org/'
    }
]

function cardBuilder (card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    const icon = document.createElement('img');
    icon.src = card.icon;
    icon.alt = card.title;

    const title = document.createElement('h1');
    title.textContent = card.title;

    const description = document.createElement('p');
    description.textContent = card.descriptions;

    const link = document.createElement('a');
    link.href = card.link;
    link.target = '_blank';

    const button = document.createElement('div');
    button.className = 'btn-info';
    button.textContent = 'info';

    link.appendChild(button);
    cardElement.append(icon, title, description, link);

    return cardElement;
}

const cardContainer = document.getElementById('card-container')

skills.forEach((skill) => {
    const cardElement = cardBuilder(skill);
    cardContainer.appendChild(cardElement);
})