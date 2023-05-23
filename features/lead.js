const pactum = require("pactum")
const { Before, Given, When, Then } = require("@cucumber/cucumber");
const post = "POST"

Before(() => {
    spec = pactum.spec();
});

                                              //cancellation during User id
pactum.stash.addDataTemplate(
        {
            UserId:
            {
                "UserId": null,
                "BookingId": 123,
                "CancellationId" : "1301714423",
                "CancellationInitiatedOn" : "2023-04-18",
                "PaymentID"  : 208,
                "RefTransactionId":"IQ-10411",
                "TransactionId": "208", 
                "ReasonForCancellation":"Test NGD",
                "CustomerRemarks": "NGD TEST",
                "IsCancellationCompleted": true,
                "RefundStatus" : "awaited",
                "RefundDetails":null
            }
        }
)
Given('Post the booking without user id', async function () {
    spec["POST".toLowerCase()]("/Cancellation");
    spec.withJson({ '@DATA:TEMPLATE@': "UserId" });
    spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                //cancellation during invalid User Id
pactum.stash.addDataTemplate(
    {
        invalidUserId:
        {
    "UserId": 10,
    "BookingId": 123,
    "CancellationId" : "1301714423",
    "CancellationInitiatedOn" : "2023-04-18",
    "PaymentID"  : 208,
    "RefTransactionId":"IQ-10411",
    "TransactionId": "208", 
    "ReasonForCancellation":"Test NGD",
    "CustomerRemarks": "NGD TEST",
    "IsCancellationCompleted": true,
    "RefundStatus" : "awaited",
    "RefundDetails":null
        }
    }
)
Given('Post the booking with invalid user id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "invalidUserId" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                                      //during UserId mismatch
pactum.stash.addDataTemplate(
    {
        UserIdmismatch:
        {
            "UserId": 5,
            "BookingId": 1,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited",
            "RefundDetails":null
        }
    }


)
Given('Post the booking without Booking id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "UserIdmismatch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

                                                                     // without  TranscationId
pactum.stash.addDataTemplate(
    {
        TranscationId:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": null, 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited",
            "RefundDetails":null
        }
    }
)
Given('Post the booking without Transaction id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "TranscationId" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

                                                               // without paymentid
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
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited",
            "RefundDetails":null
        }
    }
)
Given('Post the booking without Payment id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "paymentId" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                             //without  CancellationInitiatedOn
pactum.stash.addDataTemplate(
    {
        CancellationInitiatedOn:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : null,
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited",
            "RefundDetails":null
        }
    }
)
Given('Post the booking without CancellationInitiatedOn', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "CancellationInitiatedOn" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                         // without CancellationId
pactum.stash.addDataTemplate(
    {
        CancellationId:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : null,
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited",
            "RefundDetails":null
        }
    }
)
Given('Post the booking without Cancellation id', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "CancellationId" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

                                                             // without Reason ForCancellation
pactum.stash.addDataTemplate(
    {
        ReasonForCancellation:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":null,
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited",
            "RefundDetails":null
        }
    }
)
Given('Post the booking without ReasonForCancellation', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "ReasonForCancellation" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                           //without IsCancellationCompleted is false with refund details
pactum.stash.addDataTemplate(
    {
        IsCancellationCompletedmismatch:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": false,
            "RefundStatus" : "awaited",
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


                                                            //without Refund details with iscompleted is true
pactum.stash.addDataTemplate(
    {
        with_iscompletion:
        {
            "UserId": 7,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited",
            "RefundDetails": null
        
        }
    }
)
Given('Post the booking without Refund status with IsCancellation Completed', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "with_iscompletion" }); 
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')   
});

                                                         // without  Refund_issue_date
pactum.stash.addDataTemplate(
    {
        Refund_issue_date:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed",
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": null,
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


                                                                // withount Refund_bank_ref_no
pactum.stash.addDataTemplate(
    {
        Refund_bank_ref_no:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed",
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
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


                                                       // without refund amount detail
pactum.stash.addDataTemplate(
    {
        Refund_amt:
        {
    "UserId": 5,
    "BookingId": 123,
    "CancellationId" : "1301714423",
    "CancellationInitiatedOn" : "2023-04-18",
    "PaymentID"  : 208,
    "RefTransactionId":"IQ-10411",
    "TransactionId": "208", 
    "ReasonForCancellation":"Test NGD",
    "CustomerRemarks": "NGD TEST",
    "IsCancellationCompleted": true,
    "RefundStatus" : "confirmed",
    "RefundDetails": {
        "RejectionReason": null,
        "Refund_issue_date": "2023-04-18",
        "Refund_bank_ref_no": "312009490820",
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



                                                      // cancellation during missing order amount
pactum.stash.addDataTemplate(
    {
        Order_amt:
        {
            "UserId": 5,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed",
            "RefundDetails": {
                "RejectionReason": null,
                "Refund_issue_date": "2023-04-18",
                "Refund_bank_ref_no": "312009490820",
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



                                                                   //user is offline to cancellation
pactum.stash.addDataTemplate(
    {
        Useroffline:
        {
            "UserId": 4,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed",
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


                                                               // cancellation after vehicle delivery

pactum.stash.addDataTemplate(
    {
        vechicledelivery:
        {
            "UserId": 1,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed" ,
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
Given('Post the after Vehicle delivery', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "vechicledelivery" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                                      // cancellation aftre full payment
pactum.stash.addDataTemplate(
    {
        FullPaymentReceived:
        {
            "UserId": 2,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed" ,
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
Given('Post the after FullPament', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "FullPaymentReceived" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                             //cancellation after invoice
pactum.stash.addDataTemplate(
    {
        invoice:
        {
            "UserId": 3,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed" ,
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
Given('Post the after invoice', async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "invoice" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                               // cancellation while duplicate or already cancelled one
pactum.stash.addDataTemplate(
    {
        duplicate_entry:
        {
            "UserId": 6,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 208,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "208", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed" ,
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

             //---------------------------------------------------------second report------------------------------------------------------------

                                                            // launch city without payment detail
pactum.stash.addDataTemplate(
    {
        launchcity_without_refund_detail:
        {
            "UserId": 1,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 20005,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "20005", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails": null
        
        }
    }
)
Given("Post when the without Refund details in Launch city", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "launchcity_without_refund_detail" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

                                                       //launch city with payment detail
pactum.stash.addDataTemplate(
    {
        launchcity_with_payment_detail:
        {
            "UserId": 2,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :20005,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "20005", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed" ,
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
Given("Post when the with Refund details in Launch city", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "launchcity_with_payment_detail" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                                      //prelaunch city without payment detail
pactum.stash.addDataTemplate(
    {
        PreLaunchcity_without_refund_details:
        {
            "UserId": 3,
            "BookingId": 0,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 20005,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "20005", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails":null
        
        } 
    }
)
Given("Post when Cancellation during without Refund details in PreLaunchcity", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "PreLaunchcity_without_refund_details" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                                       //prelaunch city with payment details
pactum.stash.addDataTemplate(
    {
        PreLaunchcity_with_refund_details:
        {
            "UserId": 4,
            "BookingId": 0,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :20005,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "20005", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed",
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
Given("Post of Cancellation process with Refund details in PreLaunchcity", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "PreLaunchcity_with_refund_details" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

                                                                 //ST_launch_city without payment details
pactum.stash.addDataTemplate(
    {
        STlaunch_without_refund_details:
        {
            "UserId": 5,
            "BookingId": 0,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 20005,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "20005", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails": null
        
        }
    }
)
Given("Post without Refund details on ST Launch city", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "STlaunch_without_refund_details" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                   //ST_launch city with payment details
pactum.stash.addDataTemplate(
    {
        STlaunch_with_refund_details:
        {
            "UserId": 6,
            "BookingId": 0,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :20005,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "20005", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed" ,
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
Given("Post  with Refund details and ST Launch city", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "STlaunch_with_refund_details" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                              //ST_pre_launch city without payment details
pactum.stash.addDataTemplate(
    {
        STPrelaunch_without_refund_details:
        {
            "UserId": 7,
            "BookingId": 0,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :20005,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "20005", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "awaited" ,
            "RefundDetails": null
        
        } 
    }
)
Given("Post the booking without Refund details and ST Pre Launch city", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "STPrelaunch_without_refund_details" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                           //ST_pre launch city with payment details
pactum.stash.addDataTemplate(
    {
        STPrelaunch_with_refund_details:
        {
            "UserId": 8,
            "BookingId": 0,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :20005,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "20005", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed" ,
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
Given("Post the booking with Refund details and ST Pre Launch city", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "STPrelaunch_with_refund_details" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

//-------------------------------------------------------third report-----------------------------------------

                                                           //cancellation during payment status awaited
pactum.stash.addDataTemplate(
    {
        awaited:
        {
            "UserId": 1,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  : 206,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "206", 
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
Given("Post the Cancellation request with refund status as Awaited", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "awaited" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                               //cancellation during payment status confirmed
pactum.stash.addDataTemplate(
    {
        Confirmed:
        {
            "UserId": 1,
            "BookingId":123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :206,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "206", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "confirmed" ,
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
Given("Post the Cancellation request with refund status as Confirmed", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Confirmed" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


                                                              //cancellation during payment status declined
pactum.stash.addDataTemplate(
    {
        Declined:
        {
            "UserId": 2,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :206,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "206", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "decline" ,
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
Given("Post the Cancellation request with refund status as Declined", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "Declined" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

                                                        //cancellation during payment status failed
pactum.stash.addDataTemplate(
    {
        Failed:
        {
            "UserId": 3,
            "BookingId": 123,
            "CancellationId" : "1301714423",
            "CancellationInitiatedOn" : "2023-04-18",
            "PaymentID"  :206,
            "RefTransactionId":"IQ-10411",
            "TransactionId": "206", 
            "ReasonForCancellation":"Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted": true,
            "RefundStatus" : "failed",
            "RefundDetails": {
                "RejectionReason": "test failed",
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

//----------------------------------------f&f---------------------------------------------------------------------

                                                                //without refund status and details in launchcity

pactum.stash.addDataTemplate(
    {
        F_Flaunch:
        {
            "UserId":4 ,
            "BookingId": 123,
            "CancellationId": "1301714423",
            "CancellationInitiatedOn": "2023-04-18T00:00:00",
            "PaymentID": 206,
            "RefTransactionId": "IQ-10411",
            "TransactionId": "206",
            "ReasonForCancellation": "Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted":false,
            "RefundStatus" : null,
            "RefundDetails": null
        }
        
        
    }
)
Given("Post the Cancellation request without refund status and details in launchcity", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "F_Flaunch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

                                                           //without refund status and details in Prelaunchcity
pactum.stash.addDataTemplate(
    {
        F_F_Prelaunch:
        {
            "UserId":5 ,
            "BookingId": 0,
            "CancellationId": "1301714423",
            "CancellationInitiatedOn": "2023-04-18T00:00:00",
            "PaymentID": 206,
            "RefTransactionId": "IQ-10411",
            "TransactionId": "206",
            "ReasonForCancellation": "Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted":false,
            "RefundStatus" : null,
            "RefundDetails": null
        }
        
        
    }
)
Given("Post the Cancellation request without refund status and details in Prelaunchcity", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "F_F_Prelaunch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});

                                                        //without refund status and details in ST-Prelaunchcity
pactum.stash.addDataTemplate(
    {
        F_F_STPrelaunch:
        {
            "UserId":6 ,
            "BookingId": 0,
            "CancellationId": "1301714423",
            "CancellationInitiatedOn": "2023-04-18T00:00:00",
            "PaymentID": 206,
            "RefTransactionId": "IQ-10411",
            "TransactionId": "206",
            "ReasonForCancellation": "Test NGD",
            "CustomerRemarks": "NGD TEST",
            "IsCancellationCompleted":false,
            "RefundStatus" : null,
            "RefundDetails": null
        }
        
        
    }
)
Given("Post the Cancellation request without refund status and details in ST-Prelaunchcity", async function () {
spec["POST".toLowerCase()]("/Cancellation");
spec.withJson({ '@DATA:TEMPLATE@': "F_F_STPrelaunch" });
spec.withHeaders('token', '205698As3jDKskogPt5ab65360')    
});


When('I receive a response', async function () {
    await spec.toss();
});

Then('I expect the response as', function (json) {
   //console.log(spec.response());
    spec.response().to.have.jsonLike(JSON.parse(json));
    });

