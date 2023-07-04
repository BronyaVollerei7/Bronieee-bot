module.exports = async (client) => {
    console.log(`Bot Is Online: ${client.user.tag}!`);
    client.user.setActivity('With You ❤');
};