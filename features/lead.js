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
                "BookingId": 13017,
                "CancellationId" : "1301714423",
                "CancellationInitiatedOn" : "2023-04-18",
                "PaymentID"  : 23572,
                "RefTransactionId":"IQ-10411",
                "TransactionId": "312009490820", 
                "ReasonForCancellation":"Test NGD",
                "CustomerRemarks": "NGD TEST",
                "IsCancellationCompleted": true,
                "RefundDetails":null
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
    "UserId": 10,
    "BookingId": 13017,
    "CancellationId" : "1301714423",
    "CancellationInitiatedOn" : "2023-04-18",
    "PaymentID"  : 23572,
    "RefTransactionId":"IQ-10411",
    "TransactionId": "312009490820", 
    "ReasonForCancellation":"Test NGD",
    "CustomerRemarks": "NGD TEST",
    "IsCancellationCompleted": true,
    "RefundDetails":null
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
            "UserId": 5,
            "BookingId": 13017,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails":null
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
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": null, 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails":null
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
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : null,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails":null
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
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : null,
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails":null
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
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : null,
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails":null
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
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":null,
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails":null
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
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": false,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
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

pactum.stash.addDataTemplate(
    {
        RefundStatusmismatch:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        
        }
    }
)
Given('Post the booking without Refund status with IsCancellation Completed is True', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "RefundStatusmismatch" }); 
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')   
});


pactum.stash.addDataTemplate(
    {
        Refund_issue_date:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2000-04-18",
                "Refund_bank_ref_no": "312009490820",
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
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "31",
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
    "UserId": 5,
    "BookingId": 123,
    "CancellationId" : "1301714423",
    "CancellationInitiatedOn" : "2023-04-18",
    "PaymentID"  : 23572,
    "RefTransactionId":"IQ-10411",
    "TransactionId": "312009490820", 
    "ReasonForCancellation":"Test NGD",
    "CustomerRemarks": "NGD TEST",
    "IsCancellationCompleted": true,
    "RefundDetails": {
        "RejectionReason": null,
        "Refund_issue_date": "2023-04-18",
        "Refund_bank_ref_no": "312009490820",
        "Refund_amt": 50.00,
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
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 50.00
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
            "UserId": 2,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
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
            "UserId": 1,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails":null
        
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
            "UserId": 7,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails":null
        
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
            "UserId": 13,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails":null
        
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
            "UserId": 6,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
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

pactum.stash.addDataTemplate(
    {
        withoutlaunch:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails":null
        
        }
    }
)
Given("Post the booking without Refund details and Launch city is true ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "withoutlaunch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        withlaunch:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        
        }
    }
)
Given("Post the booking with Refund details and Launch city is true ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "withlaunch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        withoutPreLaunchcity:
        {
            "UserId": 7,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails":null
        
        } 
    }
)
Given("Post the booking without Refund details and Pre Launch city is true ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "withoutPreLaunchcity" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        withPreLaunchcity:
        {
            "UserId": 1,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        
        }
    }
)
Given("Post the booking with Refund details and Pre Launch city is true ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "withPreLaunchcity" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        withoutSTlaunch:
        {
            "UserId": 6,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        
        }
    }
)
Given("Post the booking without Refund details and ST Launch city is true ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "withoutSTlaunch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        withSTlaunch:
        {
            "UserId": 6,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        
        }
    }
)
Given("Post the booking with Refund details and  ST Launch city is true ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "withSTlaunch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        without_ST_PreLaunchcity:
        {
            "UserId": 6,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        
        } 
    }
)
Given("Post the booking without Refund details and ST Pre Launch city is true ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "without_ST_PreLaunchcity" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        withST_Pre_Launchcity:
        {
            "UserId": 6,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        
        }
    }
)
Given("Post the booking with Refund details and ST Pre Launch city is true ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "with_ST_PreLaunchcity" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        awaited:
        {
            "UserId": 6,
            "BookingId": 13017,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        }
        
    }
)
Given("Post the Cancellation request with refund status as Awaited ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "awaited" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

pactum.stash.addDataTemplate(
    {
        Confirmed:
        {
            "UserId": 14423,
            "BookingId": 13017,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        }
        
    }
)
Given("Post the Cancellation request with refund status as Confirmed  ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Confirmed" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        Declined:
        {
            "UserId": 14423,
            "BookingId": 13017,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        }
        
    }
)
Given("Post the Cancellation request with refund status as Declined ", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Declined" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});
pactum.stash.addDataTemplate(
    {
        Failed:
        {
            "UserId": 14423,
            "BookingId": 13017,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 23572,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "312009490820", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
                "Refund_amt": 5000.00,
                "Order_amt": 5000.00
            }
        }
        
    }
)
Given("Post the Cancellation request with refund status as Failed", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Failed" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});




When('I receive a response', async function () {
    await spec.toss();
});

Then('I expect the response as', function (json) {
   //console.log(spec.response());
    spec.response().to.have.jsonLike(JSON.parse(json));
    });

