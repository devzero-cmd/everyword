const ADJECTIVES = ['metal', 'plastic', 'sleek', 'modern', 'transparent'];
const NOUNS = ['stapler', 'pen', 'pencil', 'ruler', 'eraser', 'canvas'];

function randRoomRedirect(){
    location.href = '/room/' + ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)] + "-" + NOUNS[Math.floor(Math.random() * NOUNS.length)];
}