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


// pactum.stash.addDataTemplate(
//     {
//         LeadPass: 
//         {
//             "CUSTOMER_NAME": "Punitha test",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": "177208",
//             "brand_code": 8,
//             "MODEL_ID": "000040000100000134",
//             "PART_ID": "K6191490HH",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }
// )

// Given('Post the correct lead', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "LeadPass" });
    
//     });


// pactum.stash.addDataTemplate(
//         {
//             Withoutname:
//             {
//                 "CUSTOMER_NAME": " ",
//                 "DEALER_ID": "12169",
//                 "MOBILE_NUMBER": "9047981343",
//                 "EMAIL_ID": "prasanth@gmail.com",
//                 "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//                 "city": "Gurugram",
//                 "username": "tvscommon",
//                 "password": "motor!@$",
//                 "utm_source": "testsouce",
//                 "utm_medium": "testmedium",
//                 "utm_campaign": "testcampaingn",
//                 "gclid": "testgcid",
//                 "language_code": "1",
//                 "SOURCE": "dmsapi",
//                 "AREA": "177208",
//                 "brand_code": 8,
//                 "MODEL_ID": "000040000100000134",
//                 "PART_ID": "K6191490HH",
//                 "CUSTOMER_VOICE": "null",
//                 "BRANCH_ID": "1",
//                 "ADDRESS_LINE1": "null",
//                 "utm_term": "termtest",
//                 "utm_content": "contenttest",
//                 "parm1": "paramtest1",
//                 "parm2": "",
//                 "parm3": "paramtest3",
//                 "parm4": "paramtest4",
//                 "parm5": "paramtest5",
//                 "CUSTOMER_STATE": "Haryana",
//                 "Finance": "1",
//                 "pincode": "607303",
//                 "Finance_Company": "tvs Credit",
//                 "IntentforPurchase": "Within 7 days ",
//                 "Device": "Redmi",
//                 "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//                 "Category": "website",
//                 "Payment_type": "full",
//                 "Booking_amount": 99999999,
//                 "payment_status": "initialized"
//             }
//             }

// )
// Given('Post the lead without name', async function () {
//         spec["POST".toLowerCase()]("/lead");
//         spec.withJson({ '@DATA:TEMPLATE@': "Withoutname" });
        
//     });

// pactum.stash.addDataTemplate(
//         {
//             nameinvalid:
//             {
//                 "CUSTOMER_NAME": "pr",
//                 "DEALER_ID": "12169",
//                 "MOBILE_NUMBER": "9047981343",
//                 "EMAIL_ID": "prasanth@gmail.com",
//                 "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//                 "city": "Gurugram",
//                 "username": "tvscommon",
//                 "password": "motor!@$",
//                 "utm_source": "testsouce",
//                 "utm_medium": "testmedium",
//                 "utm_campaign": "testcampaingn",
//                 "gclid": "testgcid",
//                 "language_code": "1",
//                 "SOURCE": "dmsapi",
//                 "AREA": "177208",
//                 "brand_code": 8,
//                 "MODEL_ID": "000040000100000134",
//                 "PART_ID": "K6191490HH",
//                 "CUSTOMER_VOICE": "null",
//                 "BRANCH_ID": "1",
//                 "ADDRESS_LINE1": "null",
//                 "utm_term": "termtest",
//                 "utm_content": "contenttest",
//                 "parm1": "paramtest1",
//                 "parm2": "",
//                 "parm3": "paramtest3",
//                 "parm4": "paramtest4",
//                 "parm5": "paramtest5",
//                 "CUSTOMER_STATE": "Haryana",
//                 "Finance": "1",
//                 "pincode": "607303",
//                 "Finance_Company": "tvs Credit",
//                 "IntentforPurchase": "Within 7 days ",
//                 "Device": "Redmi",
//                 "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//                 "Category": "website",
//                 "Payment_type": "full",
//                 "Booking_amount": 99999999,
//                 "payment_status": "initialized"
//             }
//             }

// )
// Given('Post the lead with name less than 3 characters', async function () {
//         spec["POST".toLowerCase()]("/lead");
//         spec.withJson({ '@DATA:TEMPLATE@': "nameinvalid" });
        
//     }); 
//     pactum.stash.addDataTemplate(
//         {
//             invalidmobilenumb:
//             {
//                 "CUSTOMER_NAME": "Ajithkumar",
//                 "DEALER_ID": "12169",
//                 "MOBILE_NUMBER": "9047",
//                 "EMAIL_ID": "prasanth@gmail.com",
//                 "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//                 "city": "Gurugram",
//                 "username": "tvscommon",
//                 "password": "motor!@$",
//                 "utm_source": "testsouce",
//                 "utm_medium": "testmedium",
//                 "utm_campaign": "testcampaingn",
//                 "gclid": "testgcid",
//                 "language_code": "1",
//                 "SOURCE": "dmsapi",
//                 "AREA": "177208",
//                 "brand_code": 8,
//                 "MODEL_ID": "000040000100000134",
//                 "PART_ID": "K6191490HH",
//                 "CUSTOMER_VOICE": "null",
//                 "BRANCH_ID": "1",
//                 "ADDRESS_LINE1": "null",
//                 "utm_term": "termtest",
//                 "utm_content": "contenttest",
//                 "parm1": "paramtest1",
//                 "parm2": "",
//                 "parm3": "paramtest3",
//                 "parm4": "paramtest4",
//                 "parm5": "paramtest5",
//                 "CUSTOMER_STATE": "Haryana",
//                 "Finance": "1",
//                 "pincode": "607303",
//                 "Finance_Company": "tvs Credit",
//                 "IntentforPurchase": "Within 7 days ",
//                 "Device": "Redmi",
//                 "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//                 "Category": "website",
//                 "Payment_type": "full",
//                 "Booking_amount": 99999999,
//                 "payment_status": "initialized"
//             }
//             }
    
//     )
//     Given('Post the lead with invalid Mobile number', async function () {
//         spec["POST".toLowerCase()]("/lead");
//         spec.withJson({ '@DATA:TEMPLATE@': "invalidmobilenumb" });    
//     });
// pactum.stash.addDataTemplate(
//     {
//         Brandcodemissing:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": "177208",
//             "brand_code": "",
//             "MODEL_ID": "000040000100000134",
//             "PART_ID": "K6191490HH",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead without brand code', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "Brandcodemissing" });    
// });   

// pactum.stash.addDataTemplate(
//     {
//         Enquirydateisnotpresent:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": "177208",
//             "brand_code": 8,
//             "MODEL_ID": "000040000100000134",
//             "PART_ID": "K6191490HH",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead without enquiry date', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "Enquirydateisnotpresent" });  
// }); 

// pactum.stash.addDataTemplate(
//     {
//         emailid:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@.com",
//             "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": "177208",
//             "brand_code": 8,
//             "MODEL_ID": "000040000100000134",
//             "PART_ID": "K6191490HH",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead with invalid email id', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "emailid" });  
// });
// pactum.stash.addDataTemplate(
//     {
//         Modelidmissing:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": "177208",
//             "brand_code": 8,
//             "MODEL_ID": " ",
//             "PART_ID": "K6191490HH",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead without model id', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "Modelidmissing" });    
// });   
// pactum.stash.addDataTemplate(
//     {
//         Partidmissing:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": "177208",
//             "brand_code": 8,
//             "MODEL_ID": "000040000100000134",
//             "PART_ID": " ",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead without Part id', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "Partidmissing" });    
// });  
// pactum.stash.addDataTemplate(
//     {
//         Dealerpincode:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": " ",
//             "brand_code": 8,
//             "MODEL_ID": "000040000100000134",
//             "PART_ID": "K6191490HH",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead without dealer pincode', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "Dealerpincode" });    
// });
// pactum.stash.addDataTemplate(
//     {
//         customerpincode:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": "177208",
//             "brand_code": 8,
//             "MODEL_ID": "000040000100000134",
//             "PART_ID": "K6191490HH",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead without customer pincode', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "customerpincode" });    
// });   

// pactum.stash.addDataTemplate(
//     {
//         EnqdateFormate:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "09-01-2023 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": "177208",
//             "brand_code": 8,
//             "MODEL_ID": "000040000100000134",
//             "PART_ID": "K6191490HH",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead with invalid Enqid format', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "EnqdateFormate" });    
// });   

// pactum.stash.addDataTemplate(
//     {
//         Partmodelidmismatch:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "dmsapi",
//             "AREA": "177208",
//             "brand_code": 8,
//             "MODEL_ID": "000040000",
//             "PART_ID": "NA1902601",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead with mismatched part and model id', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "Partmodelidmismatch" });    
// });

// pactum.stash.addDataTemplate(
//     {
//         Sourcemissing:
//         {
//             "CUSTOMER_NAME": "Ajithkumar",
//             "DEALER_ID": "12169",
//             "MOBILE_NUMBER": "9047981343",
//             "EMAIL_ID": "prasanth@gmail.com",
//             "ENQUIRY_DATE": "2020-10-09 12:22:15.000",
//             "city": "Gurugram",
//             "username": "tvscommon",
//             "password": "motor!@$",
//             "utm_source": "testsouce",
//             "utm_medium": "testmedium",
//             "utm_campaign": "testcampaingn",
//             "gclid": "testgcid",
//             "language_code": "1",
//             "SOURCE": "",
//             "AREA": "177208",
//             "brand_code": 8,
//             "MODEL_ID": "000040000100000134",
//             "PART_ID": "K6191490HH",
//             "CUSTOMER_VOICE": "null",
//             "BRANCH_ID": "1",
//             "ADDRESS_LINE1": "null",
//             "utm_term": "termtest",
//             "utm_content": "contenttest",
//             "parm1": "paramtest1",
//             "parm2": "",
//             "parm3": "paramtest3",
//             "parm4": "paramtest4",
//             "parm5": "paramtest5",
//             "CUSTOMER_STATE": "Haryana",
//             "Finance": "1",
//             "pincode": "607303",
//             "Finance_Company": "tvs Credit",
//             "IntentforPurchase": "Within 7 days ",
//             "Device": "Redmi",
//             "transactionId": "2c58137c7afc4ed0abec3b0049f63f34",
//             "Category": "website",
//             "Payment_type": "full",
//             "Booking_amount": 99999999,
//             "payment_status": "initialized"
//         }
//         }

// )
// Given('Post the lead without enquiry source', async function () {
//     spec["POST".toLowerCase()]("/lead");
//     spec.withJson({ '@DATA:TEMPLATE@': "Sourcemissing" });    
// });   

When('I receive a response', async function () {
    await spec.toss();
});

Then('I expect the response as', function (json) {
   //console.log(spec.response());
    spec.response().to.have.jsonLike(JSON.parse(json));
    });
