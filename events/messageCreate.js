module.exports = (client, message, data) => {
    const isCmd = message.content.toLowerCase()

    const cmd = client.command.get(isCmd)
    if(cmd) {
        cmd.execute(client, message)
        console.log(`Command : ${cmd.data.name}`)
    }
};