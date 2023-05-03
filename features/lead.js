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
    spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        invalidUserId:
        {
        "UserId": 9,
        "BookingId": 123,
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
Given('Post the booking with invalid user id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "invalidUserId" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        UserIdmismatch:
        {
        "UserId":6,
        "BookingId": 5600,
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
Given('Post the booking without Booking id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "UserIdmismatch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        TranscationId:
        {
        "UserId":6,
        "BookingId": 123,
        "CancellationId": "1290412904",
        "CancellationInitiatedOn": "2023-04-24T00:00:00",
        "PaymentID": 23384,
        "RefTransactionId": "IQ-23656",
        "TransactionId": null,
        "ReasonForCancellation": "ReasonForCancellation test 312009438836",
        "CustomerRemarks": "CustomerRemarks Test 312009438836",
        "IsCancellationCompleted": true,
        "RefundStatus": null
        }
    }
)
Given('Post the booking without Transaction id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "TranscationId" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        paymentId:
        {
        "UserId": 6,
        "BookingId": 123,
        "CancellationId": "1290412904",
        "CancellationInitiatedOn": "2023-04-24T00:00:00",
        "PaymentID": null,
        "RefTransactionId": "IQ-23656",
        "TransactionId": "312009438836",
        "ReasonForCancellation": "ReasonForCancellation test 312009438836",
        "CustomerRemarks": "CustomerRemarks Test 312009438836",
        "IsCancellationCompleted": true,
        "RefundStatus": null
        }
    }
)
Given('Post the booking without Payment id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "paymentId" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        CancellationInitiatedOn:
        {
        "UserId": 6,
        "BookingId": 123,
        "CancellationId": "1290412904",
        "CancellationInitiatedOn": null,
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
Given('Post the booking without CancellationInitiatedOn', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "CancellationInitiatedOn" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        CancellationId:
        {
        "UserId": 6,
        "BookingId": 123,
        "CancellationId": null,
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
Given('Post the booking without Cancellation id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "CancellationId" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        ReasonForCancellation:
        {
        "UserId": 6,
        "BookingId": 123,
        "CancellationId": "1290412904",
        "CancellationInitiatedOn": "2023-04-24T00:00:00",
        "PaymentID": 23384,
        "RefTransactionId": "IQ-23656",
        "TransactionId": "312009438836",
        "ReasonForCancellation": null,
        "CustomerRemarks": "CustomerRemarks Test 312009438836",
        "IsCancellationCompleted": true,
        "RefundStatus": null
        }
    }
)
Given('Post the booking without ReasonForCancellation', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "ReasonForCancellation" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        IsCancellationCompletedmismatch:
        {
        "UserId": 6,
        "BookingId": 123,
        "CancellationId": "1290412904",
        "CancellationInitiatedOn": "2023-04-24T00:00:00",
        "PaymentID": 23384,
        "RefTransactionId": "IQ-23656",
        "TransactionId": "312009438836",
        "ReasonForCancellation": "ReasonForCancellation test 312009438836",
        "CustomerRemarks": "CustomerRemarks Test 312009438836",
        "IsCancellationCompleted": true,
        "RefundStatus":  {
                        "Refund_issue_date": "2023-04-24T00:00:00",
                        "Refund_bank_ref_no": "09438836",
                        "Refund_amt": 5000.00,
                        "Order_amt": 5000.00
                    }
        }
    }
)
Given('Post the bookingwith Mismatch IsCancellation completed and Refund status', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "IsCancellationCompletedmismatch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

// pactum.stash.addDataTemplate(
//     {
//         RefundStatusmismatch:
//         {
//         "UserId": 6,
//         "BookingId": 123,
//         "CancellationId": "1290412904",
//         "CancellationInitiatedOn": "2023-04-24T00:00:00",
//         "PaymentID": 23384,
//         "RefTransactionId": "IQ-23656",
//         "TransactionId": "312009438836",
//         "ReasonForCancellation": "ReasonForCancellation test 312009438836",
//         "CustomerRemarks": "CustomerRemarks Test 312009438836",
//         "IsCancellationCompleted": true,
//         "RefundStatus": {
//             "Refund_issue_date": "2023-04-24T00:00:00",
//             "Refund_bank_ref_no": "09438836",
//             "Refund_amt": 5000.00,
//             "Order_amt": 5000.00
//         }
//         }
//     }
// )
// Given('Post the booking without Refund status with IsCancellation Completed is True', async function () {
// spec["POST".toLowerCase()]("/Cancellation");
// spec.withJson({ '@DATA:TEMPLATE@': "RefundStatusmismatch" }); 
// spec.withHeaders('token', '205698As3jDKskogPt5ab65360')   
// });
pactum.stash.addDataTemplate(
    {
        Refund_issue_date:
        {
        "UserId": 6,
        "BookingId": 123,
        "CancellationId": "1290412904",
        "CancellationInitiatedOn": "2023-04-24T00:00:00",
        "PaymentID": 23384,
        "RefTransactionId": "IQ-23656",
        "TransactionId": "312009438836",
        "ReasonForCancellation": "ReasonForCancellation test 312009438836",
        "CustomerRemarks": "CustomerRemarks Test 312009438836",
        "IsCancellationCompleted": true,
        "RefundStatus": {
        "Refund_issue_date": null,
        "Refund_bank_ref_no": "312009438836",
        "Refund_amt": 5000.00,
        "Order_amt": 5000.00
    }
    }
    }
)
Given('Post the booking with invalid refund date', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Refund_issue_date" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        Refund_bank_ref_no:
        {
        "UserId": 6,
        "BookingId": 123,
        "CancellationId": "1290412904",
        "CancellationInitiatedOn": "2023-04-24T00:00:00",
        "PaymentID": 23384,
        "RefTransactionId": "IQ-23656",
        "TransactionId": "312009438836",
        "ReasonForCancellation": "ReasonForCancellation test 312009438836",
        "CustomerRemarks": "CustomerRemarks Test 312009438836",
        "IsCancellationCompleted": true,
        "RefundStatus": {
        "Refund_issue_date": "2023-04-24T00:00:00",
        "Refund_bank_ref_no": null,
        "Refund_amt": 5000.00,
        "Order_amt": 5000.00
    }
    }
    }
)
Given('Post the booking with Refund _bank_ref_no invalid', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Refund_bank_ref_no" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        Refund_amt:
        {
        "UserId": 6,
        "BookingId": 123,
        "CancellationId": "1290412904",
        "CancellationInitiatedOn": "2023-04-24T00:00:00",
        "PaymentID": 23384,
        "RefTransactionId": "IQ-23656",
        "TransactionId": "312009438836",
        "ReasonForCancellation": "ReasonForCancellation test 312009438836",
        "CustomerRemarks": "CustomerRemarks Test 312009438836",
        "IsCancellationCompleted": true,
        "RefundStatus": {
        "Refund_issue_date": "2023-04-24T00:00:00",
        "Refund_bank_ref_no": "312009438836",
        "Refund_amt": null,
        "Order_amt": 5000.00
    }
    }
    }
)
Given('Post the booking with invalid refund amount', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Refund_amt" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        Order_amt:
        {
        "UserId": 6,
        "BookingId": 123,
        "CancellationId": "1290412904",
        "CancellationInitiatedOn": "2023-04-24T00:00:00",
        "PaymentID": 23384,
        "RefTransactionId": "IQ-23656",
        "TransactionId": "312009438836",
        "ReasonForCancellation": "ReasonForCancellation test 312009438836",
        "CustomerRemarks": "CustomerRemarks Test 312009438836",
        "IsCancellationCompleted": true,
        "RefundStatus": {
        "Refund_issue_date": "2023-04-24T00:00:00",
        "Refund_bank_ref_no": "312009438836",
        "Refund_amt": 5000.00,
        "Order_amt": null
    }
    }
    }
)
Given('Post the booking with invalid order amount', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Order_amt" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


pactum.stash.addDataTemplate(
    {
        Useroffline:
        {
            "UserId":1,
            "BookingId":123,
            "CancellationId": "1290412904",
            "CancellationInitiatedOn": "2023-04-24T00:00:00",
            "PaymentID": 12765,
            "RefTransactionId": "IQ-23656",
            "TransactionId": "312009527901",
            "ReasonForCancellation": "ReasonForCancellation test 312009527901",
            "CustomerRemarks": "CustomerRemarks Test 312009527901",
            "IsCancellationCompleted": true,
            "RefundStatus": {
            "Refund_issue_date": "2023-04-24T00:00:00",
            "Refund_bank_ref_no": "312009438836",
            "Refund_amt": 5000.00,
            "Order_amt": 5000.00
        }
        }
    }
)
Given('Post the offline booking is true', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Useroffline" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        vechicledelivery:
        {
            "UserId":2,
            "BookingId":123,
            "CancellationId": "1290412904",
            "CancellationInitiatedOn": "2023-04-24T00:00:00",
            "PaymentID": 12765,
            "RefTransactionId": "IQ-23656",
            "TransactionId": "312009527901",
            "ReasonForCancellation": "ReasonForCancellation test 312009527901",
            "CustomerRemarks": "CustomerRemarks Test 312009527901",
            "IsCancellationCompleted": true,
            "RefundStatus": {
            "Refund_issue_date": "2023-04-24T00:00:00",
            "Refund_bank_ref_no": "312009438836",
            "Refund_amt": 5000.00,
            "Order_amt": 5000.00
        }
        }
    }
)
Given('Post the after Vehicle delivery', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "vechicledelivery" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        FullPaymentReceived:
        {
            "UserId":3,
            "BookingId":123,
            "CancellationId": "1290412904",
            "CancellationInitiatedOn": "2023-04-24T00:00:00",
            "PaymentID": 12765,
            "RefTransactionId": "IQ-23656",
            "TransactionId": "312009527901",
            "ReasonForCancellation": "ReasonForCancellation test 312009527901",
            "CustomerRemarks": "CustomerRemarks Test 312009527901",
            "IsCancellationCompleted": true,
            "RefundStatus": {
            "Refund_issue_date": "2023-04-24T00:00:00",
            "Refund_bank_ref_no": "312009438836",
            "Refund_amt": 5000.00,
            "Order_amt": 5000.00
        }
        }
    }
)
Given('Post the after FullPament', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "FullPaymentReceived" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        invoice:
        {
            "UserId":4,
            "BookingId":123,
            "CancellationId": "1290412904",
            "CancellationInitiatedOn": "2023-04-24T00:00:00",
            "PaymentID": 12765,
            "RefTransactionId": "IQ-23656",
            "TransactionId": "312009527901",
            "ReasonForCancellation": "ReasonForCancellation test 312009527901",
            "CustomerRemarks": "CustomerRemarks Test 312009527901",
            "IsCancellationCompleted": true,
            "RefundStatus": {
            "Refund_issue_date": "2023-04-24T00:00:00",
            "Refund_bank_ref_no": "312009438836",
            "Refund_amt": 5000.00,
            "Order_amt": 5000.00
        }
        }
    }
)
Given('Post the after invoice', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "invoice" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        duplicate_entry:
        {
            "UserId":7,
            "BookingId":123,
            "CancellationId": "1290412904",
            "CancellationInitiatedOn": "2023-04-24T00:00:00",
            "PaymentID": 12765,
            "RefTransactionId": "IQ-23656",
            "TransactionId": "312009527901",
            "ReasonForCancellation": "ReasonForCancellation test 312009527901",
            "CustomerRemarks": "CustomerRemarks Test 312009527901",
            "IsCancellationCompleted": true,
            "RefundStatus": {
            "Refund_issue_date": "2023-04-24T00:00:00",
            "Refund_bank_ref_no": "312009438836",
            "Refund_amt": 5000.00,
            "Order_amt": 5000.00
        }
        }
    }
)
Given("Post when the duplicate booking", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "duplicate_entry" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});



When('I receive a response', async function () {
    await spec.toss();
});

Then('I expect the response as', function (json) {
   //console.log(spec.response());
    spec.response().to.have.jsonLike(JSON.parse(json));
    });

