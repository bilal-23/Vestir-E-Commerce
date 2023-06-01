export function getRandomMessage(messages: string[]) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}