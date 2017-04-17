// Restify is a framework for building REST Web Services. Visit http://restify.com for more details.
// Use "npm install --save restify" inside project directory to install restify package and run the bot.
var restify = require('restify');

// Use "npm install --save botbuilder" inside project directory to install botbuilder sdk package and run the bot.
var botBuilder = require('botbuilder');

// Set botBuilder as a node js global variable to be used in other places
global.botBuilder = botBuilder;

const config = require('config-node')();

var cardBuilder = require('./CardBuilder');
var heroCardCarouselBuilder = require('./HeroCardCarouselBuilder');
var activityHandler = require('./ActivityHandler');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var restifyServer = restify.createServer();
restifyServer.listen(process.env.port || process.env.PORT || 1337, function () {
    console.log('%s listening to %s', restifyServer.name, restifyServer.url);
});

// Create a simple chat connector that connects the bot to emulator
// or any of the bot framework channels
var chatConnector = new botBuilder.ChatConnector({
    appId: process.env.MicrosoftAppID,
    appPassword: process.env.MicrosoftAppPassword
});

// register the restify server to api/messages handle to listen to chat connector messages
restifyServer.post('/api/messages', chatConnector.listen());

// Create the bot using the connector
var chatBot = new botBuilder.UniversalBot(chatConnector);

// Set chatBot as a node js global variable to be used in other places
global.chatBot = chatBot;

// Setup event for when the bot has been added as a contact and send a welcome message.
chatBot.on('contactRelationUpdate', activityHandler.contactRelationUpdateActivityHandler);

// Event fired when the bot is added/removed to a conversation
chatBot.on('conversationUpdate', activityHandler.conversationUpdateActivityHandler);

// Event fired when the bot is added/removed to a conversation
chatBot.on('typing', activityHandler.typingActivityHandler);

// When the framework receives a message from the user
// it will be routed to this root ‘/’ dialog for processing
chatBot.dialog('/', [
    function (session)
    {
        if (!session.message.text.toLowerCase().includes("[internal]")) {
            if (!session.userData.userWelcomed) {
                session.send("I am a sample bot to show the power of bots framework to build bots. Say anything like:\n'help' to see the options \n Or keywords like 'video card' to see a video card in action.")
                session.userData.userWelcomed = true;
                session.endDialog();
            }
            else {
                session.beginDialog('/menu');
            }
        }
    }
]);

// This dialog shows a menu to the user
// displaying various functionalities of bot framework this bot can showcase
chatBot.dialog('/menu', [
    function (session) {
        // There are number of built-in prompts user can use.
        // Here choice prompt asks the user to choose from a list of choices.
        // The users response will be contained in results.response field and will be passed on to the next step in the waterfall
        botBuilder.Prompts.choice(
            session,
            "What demo would you like to run? You can type the number or name of the demo you want to see.",
            "Hero Card|Thumbnail Card|Audio Card|Video Card|Animation Card|SignIn Card|Receipt Card|HeroCard Carousel|Typing Indicator");
    },
    function (session, results)
    {
        if (results.response)
        {
            // Launch the appropriate dialog based on the users response
            session.beginDialog('/' + results.response.entity.replace(" ", ""));
        }
        else
        {
            // Exit the menu
            session.endDialog();
        }
    }
])
// matches the user's utterance and if it matches the "matches" field, triggers this dialog
.triggerAction({ matches: /^menu|show menu|help|demo|demos/i });

// Dialog to show a sample hero card to the user.
chatBot.dialog('/HeroCard', cardBuilder.heroCardBuilder).triggerAction({ matches: /^hero|hero card|herocard|1/i });

// Dialog to show a sample thumbnail card to the user.
chatBot.dialog('/ThumbnailCard', cardBuilder.thumbnailCardBuilder).triggerAction({ matches: /^thumbnail|thumbnail card|ThumbnailCard|2/i });

// Dialog to show a sample audio card to the user.
chatBot.dialog('/AudioCard', cardBuilder.audioCardBuilder).triggerAction({ matches: /^audio|audio card|audiocard|3/i });

// Dialog to show a sample video card to the user.
chatBot.dialog('/VideoCard', cardBuilder.videoCardBuilder).triggerAction({ matches: /^video|video card|videocard|4/i });

// Dialog to show a sample Animation card to the user.
chatBot.dialog('/AnimationCard', cardBuilder.animatedGifCardBuilder).triggerAction({ matches: /^animation|animation card|animationcard|5/i });

// Dialog to show a sample sign in card to the user.
chatBot.dialog('/SignInCard', cardBuilder.signInCardBuilder).triggerAction({ matches: /^signin|signin card|sign in|6/i });

// Dialog to show a sample receipt card to the user.
chatBot.dialog('/ReceiptCard', cardBuilder.receiptCardBuilder).triggerAction({ matches: /^receipt|receipt card|receiptcard|7/i });

// Dialog to show a sample Carousel with hero cards.
chatBot.dialog('/HeroCardCarousel', heroCardCarouselBuilder.heroCardCarouselBuilder).triggerAction({ matches: /^HeroCardCarousel|carousel|8/i });

// When the framework receives a message from the user
// it will be routed to this root ‘/’ dialog for processing
chatBot.dialog('/TypingIndicator', [
    function (session)
    {
        // Send a typing indicator to the user to show that the bot is responding with something.
        session.sendTyping();
        session.endDialog();
    }
]).triggerAction({ matches: /^typing|typingindicator|typing indicator|9/i });