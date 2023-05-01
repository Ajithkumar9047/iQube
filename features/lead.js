const pactum = require("pactum")
const { Before, Given, When, Then } = require("@cucumber/cucumber");
const post = "POST"

Before(() => {
    spec = pactum.spec();
});
pactum.stash.addDataTemplate(
        {
            UserId:
            {
            "UserId": null,
            "BookingId": 12904,
            "CancellationId": "1290412904",
            "CancellationInitiatedOn": "2023-04-24T00:00:00",
            "PaymentID": 23384,
            "RefTransactionId": "IQ-23656",
            "TransactionId": "312009438836",
            "ReasonForCancellation": "ReasonForCancellation test 312009438836",
            "CustomerRemarks": "CustomerRemarks Test 312009438836",
            "IsCancellationCompleted": true,
            "RefundStatus": null
            }
        }


)
Given('Post the booking without user id', async function () {
    spec["POST".toLowerCase()]("/Cancellation");
    spec.withJson({ '@DATA:TEMPLATE@': "UserId" });    
});


When('I receive a response', async function () {
    await spec.toss();
});

Then('I expect the response as', function (json) {
   //console.log(spec.response());
    spec.response().to.have.jsonLike(JSON.parse(json));
    });

