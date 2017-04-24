/**
 * This file shows sample cards that can be used to show rich content to the user in different formats.
 * Bot framework supports:
 * 1. Hero Card
 * 2. Thumbnail Card
 * 3. Audio Card
 * 4. Video Card
 * 5. Receipt Card
 * 6. Sign In Card
 * 7. Animation Card
 */

// Build a sample hero card with title and buttons
var heroCardBuilder =
    function (session, args, next) 
    {
        var message = new global.botBuilder.Message(session);
        var heroCard = new global.botBuilder.HeroCard(session)
            .title("This is a sample Hero Card.")
            .subtitle("This is a sample subtitle for the Hero Card. Tapping on the hero card will open a url.")
            .text("This shows rich text supported by Hero Card like <b><u>Formatted Text</u></b> and :) smileys")
            .images([
                global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
            ])
            .buttons([
                global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "IM Back"),
                global.botBuilder.CardAction.postBack(session, "[internal] The payload of this button goes back to the bot as a next message and is not visible in the chat stream.", "Post Back"),
                global.botBuilder.CardAction.openUrl(session, "https://bing.com", "OpenUrl")
            ])
            .tap(global.botBuilder.CardAction.openUrl(session, "https://bing.com"));

        message.addAttachment(heroCard);
        session.send(message);
        session.endDialog();
    };

// Build a sample thumbnail card with title, buttons and images
var thumbnailCardBuilder = 
    function (session, args, next) 
    {
        var message = new global.botBuilder.Message(session);
        var thumbnailCard = new global.botBuilder.ThumbnailCard(session)
            .title("This is a sample thumbnail card.")
            .subtitle("This is a sample subtitle for the Thumbnail Card. Tapping on the thumbnail card will open a url.")
            .text("This shows rich text supported by Thumbnail Card like<b>Formatted Text</b> and :) smileys")
            .buttons([
                global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "IM Back"),
                global.botBuilder.CardAction.postBack(session, "[internal] The payload of this button goes back to the bot as a next message and is not visible in the chat stream.", "Post Back"),
                global.botBuilder.CardAction.openUrl(session, "https://bing.com", "OpenUrl")
            ])
            .images([
                global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
            ])
            .tap(global.botBuilder.CardAction.openUrl(session, "https://bing.com"));;

        message.addAttachment(thumbnailCard);
        session.send(message);
        session.endDialog();
    };

// Build a sample audio card with title, subtitle, description, image and media which contains an audio file.
// You can set options like autoloop, autoStart etc on the card.
var audioCardBuilder = 
    function (session, args, next) 
    {
        var message = new global.botBuilder.Message(session)
            .attachments([
                new global.botBuilder.AudioCard(session)
                    .title("This is a sample Audio Card.")
                    .subtitle("Sample subtitle")
                    .text("This is a sample text description of the audio file.")
                    .image(global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png"))
                    .media([
                        {
                            url: 'https://archive.org/download/testmp3testfile/mpthreetest.mp3'
                        }
                    ])
                    .autoloop(true)
                    .autostart(false)
                    .shareable(true)
            ]);
            
        session.send(message);
        session.endDialog();
    };

// Build a sample video card with title, subtitle, description, image and media which contains a video file.
// You can set options like autoloop, autoStart etc on the card.
var videoCardBuilder = 
    function (session, args, next) 
    {
        var message = new global.botBuilder.Message(session);
        var videoCard = new global.botBuilder.VideoCard(session)
            .title("This is a sample Video Card.")
            .subtitle("This is a sample subtitle for Video Card.")
            .text("This is a sample text description of the video file. The video card is set to autoloop and autostart.")
            .image(global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png"))
            .media([
                {
                    url: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
                }
            ])
            .autoloop(true)
            .autostart(true)
            .shareable(true);

        message.addAttachment(videoCard);
        session.send(message);
        session.endDialog();
    };

// Build a sample sign in card with title text and button to sign in.
var signInCardBuilder = 
    function signInCardBuilder(session)
    {
        // Send a signin 
        var msg = new global.botBuilder.Message(session) 
            .attachments([ 
                new global.botBuilder.SigninCard(session)
                    .text("This is a sample sign in card.") 
                    .button("Sign In", "https://outlook.com/") 
            ]); 
        session.endDialog(msg);
    };

// Build a sample receipt card with images, facts and total price details
var receiptCardBuilder = 
    function receiptCardBuilder(session)
    {
        // Send a receipt with images
        var msg = new global.botBuilder.Message(session)
            .attachments([
                new global.botBuilder.ReceiptCard(session)
                    .title("This is a sample receipt card.")
                    .items([
                        global.botBuilder.ReceiptItem.create(session, "$xx.xx", "Item 1")
                            .image(global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")),
                        global.botBuilder.ReceiptItem.create(session, "$xx.xx", "Item 2")
                            .image(global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png"))
                    ])
                    .facts([
                        global.botBuilder.Fact.create(session, "1234567898", "Order Number"),
                        global.botBuilder.Fact.create(session, "VISA 4076", "Payment Method"),
                        global.botBuilder.Fact.create(session, "WILLCALL", "Delivery Method")
                    ])
                    .tax("$xx.xx")
                    .total("$xx.xx")
            ]);
        session.send(msg);
        session.endDialog();
    };

// Build a sample animation card with title text, description and a gif media.
// You can set options like autoloop, autoStart etc on the card.
var animatedGifCardBuilder = 
    function animatedCardBuilder(session)
    {
        // Create an animation card with gif in it
        var msg = new global.botBuilder.Message(session)
            .attachments([ 
                new global.botBuilder.AnimationCard(session)
                    .title("This is a sample Animation Card")
                    .text("This is a sample Animation card description.")
                    .media([
                        {
                            url: 'http://i.giphy.com/Ki55RUbOV5njy.gif'
                        }
                    ])
                    .autoloop(true)
                    .autostart(true)
            ]);

        session.send(msg);
        session.endDialog();
    };

module.exports = {
    heroCardBuilder : heroCardBuilder,
    thumbnailCardBuilder : thumbnailCardBuilder,
    audioCardBuilder : audioCardBuilder,
    videoCardBuilder : videoCardBuilder,
    signInCardBuilder : signInCardBuilder,
    receiptCardBuilder : receiptCardBuilder,
    animatedGifCardBuilder : animatedGifCardBuilder
}