export const getRandomColor = () => {
    const colors = ['teal', 'blue', 'green', 'purple', 'pink', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};