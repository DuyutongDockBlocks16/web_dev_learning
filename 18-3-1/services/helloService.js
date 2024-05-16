let message = "Oh, hello there!";

const getHello = () => {
    return message;
};

const setHello = (newMessage) => {
    if (!newMessage || newMessage.length === 0) {
        return;
    } else if (newMessage.length < 10) {
        message = newMessage;
    } else {
        message = newMessage.substring(0, 9) + "...";
    }
};

export { getHello, setHello };
