/**
 * Bot framework supports showing multiple cards in different formats. This file shows a sample of hero cards shown as a carousel.
 * Other supported layout is "list" where the cards will be shown as a vertical list.
 * Just set .attachmentLayout(global.botBuilder.AttachmentLayout.list)
 */

// build a sample hero card with title and buttons
var heroCardCarouselBuilder =
    function (session, args, next) 
    {
        var message = new global.botBuilder
            .Message(session)
            // Set the layout as carousel
            .attachmentLayout(global.botBuilder.AttachmentLayout.carousel)
            .attachments([
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ]),
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ]),
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ]),
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ]),
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ]),
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ]),
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ]),
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ]),
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ]),
                new global.botBuilder.HeroCard(session)
                    .title("This is a sample Hero Card.")
                    .text("This is a sample description.")
                    .images([
                        global.botBuilder.CardImage.create(session, "https://docs.botframework.com/images/demo_bot_image.png")
                    ])
                    .buttons([
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button1"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button2"),
                        global.botBuilder.CardAction.imBack(session, "[internal] The payload of this button goes back to the bot as a next message and is visible in the chat stream.", "Button3"),
                    ])
            ]);

        session.send(message);
        session.endDialog();
    };

module.exports = {
    heroCardCarouselBuilder : heroCardCarouselBuilder
}