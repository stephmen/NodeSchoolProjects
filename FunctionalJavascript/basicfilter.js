

function getShortMessages(messages) {
    
   return messages.filter((x) => {
        return x.message.length < 50
        }
    ).map((x) => {
    return x.message
      })
   
}
    
    module.exports = getShortMessages