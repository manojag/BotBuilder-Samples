/**
 * An Activity is the object that is used to communicate between a user and a bot.
 * This file contains activity handlers for the system activities that convey system operations or channel system operations to the bot.
 * They exist to give the bot information about the state of the channel and the opportunity to respond to them.
 */

// Setup event for when the bot has been added as a contact and send a welcome message.
var contactRelationUpdateActivityHandler =
    function (message)
    {
        // There are two types of actions here:
        // 1. add - When the user adds the bot as a contact.
        // 2. remove - When the user removes the bot from his/her contact list.
        if (message.action === 'add')
        {
            var userName = message.user ? message.user.name : null;
            var reply = new global.botBuilder.Message()
                .address(message.address)
                .text("Hello %s! Thanks for adding me.", userName || 'there');
            global.chatBot.send(reply);
            global.chatBot.beginDialog(message.address, "/");
        }
        if (message.action === 'remove')
        {
            /**
             * Do something useful here if need be
            */
        }
    };

// Setup event for when the bot is added or removed from a conversation
var conversationUpdateActivityHandler =
    function (message)
    {
        // Check if this is a group conversation
        if (message.address.conversation.isGroup)
        {
            // Send a hello message when bot is added
            if (message.membersAdded)
            {
                message.membersAdded.forEach(
                    function (identity) 
                    {
                        if (identity.id === message.address.bot.id)
                        {
                            var reply = new global.botBuilder.Message()
                                    .address(message.address)
                                    .text("Hello everyone! Thanks for adding me to the group chat.");
                            global.chatBot.send(reply);
                            global.chatBot.beginDialog(message.address, "/");
                        }
                    });
            }

            // Send a goodbye message when bot is removed
            if (message.membersRemoved) 
            {
                /**
                * Do something useful here if need be
                */
            }
        }
    };

// Event fired when the user is typing
var typingActivityHandler =
    function (message)
    {
        var reply = new global.botBuilder.Message()
                .address(message.address)
                .text("Bot receives typing event from the user. This way the bot knows that the user is typing!");
        global.chatBot.send(reply);
    };

module.exports = {
    conversationUpdateActivityHandler : conversationUpdateActivityHandler,
    contactRelationUpdateActivityHandler : contactRelationUpdateActivityHandler,
    typingActivityHandler : typingActivityHandler
}
