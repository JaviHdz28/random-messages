const messages = [
    "Laura",
    "Mafer",
    "Javier",
    "Ana",
    "Jesica",
    "Diego",
    "Carla"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() *  messages.length)];
    console.log(message);
};

module.exports = {randomMsg};