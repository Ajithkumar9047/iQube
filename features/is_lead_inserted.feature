Feature:As s scheduler I want to check the Cancellation process, so that I can initiate the auto refund
      
      Scenario: Should verify the cancellation process when the user id is empty
            Given Post the booking without user id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "response": "User Id is required"
                  }
                  """
      Scenario: Should verify the cancellation process when the  user id is invalid
            Given Post the booking with invalid user id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "response": "Booking not available"
                  }
                  """
      Scenario: Should verify the cancellation process when the  user id and Booking id Mismatch
            Given Post the booking without Booking id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "response": "Booking not available"
                  }
                  """
      Scenario: Should verify the cancellation process when the  Transaction id is empty
            Given Post the booking without Transaction id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "response":"Transaction Id is required"
                  }
                  """
      Scenario: Should verify the cancellation process when the the Payment id is empty
            Given Post the booking without Payment id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "response": "Payment Id is required"
                  }
                  """
      Scenario: Should verify the cancellation process when the CancellationInitiatedOn is empty 
            Given Post the booking without CancellationInitiatedOn
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Cancellation Initiated On is required"
            }
            """
      Scenario: Should verify the cancellation process when the Cancellation id is empty
            Given Post the booking without Cancellation id
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Cancellation Id is required"
            }
            """
      Scenario: Should verify the cancellation process when the ReasonForCancellation is empty 
            Given Post the booking without ReasonForCancellation
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Reason For Cancellation is required"
            }
            """



      Scenario: Should verify the cancellation process when the Cancellation completed and Refund status is Mismatch
            Given Post the bookingwith Mismatch IsCancellation completed and Refund status
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Invalid Refund Status & Refund Details"
            }
            """
      Scenario: Should verify the booking is auto Refund without passing the Refund status with IsCancellation Completed is True  
            Given Post the booking without Refund status with IsCancellation Completed is True
            When I receive a response
            Then I expect the response as
            """
            {
            "status": "Success"
            }
            """

      Scenario: Should verify the cancellation process when the refund status available but refund  issue date is invalid
            Given Post the booking with invalid refund date
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Refund Details not available"
            }
            """

      Scenario: Should verify the cancellation process when the refund status available but Refund _bank_ref_no invalid
            Given Post the booking with Refund _bank_ref_no invalid
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Refund Details not available"
            }
            """



      Scenario: Should verify the cancellation process when the refund status available but refund  amount is invalid
            Given Post the booking with invalid refund amount
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Refund Details not available"
            }
            """

      Scenario: Should verify the cancellation process when the refund status available but order amount is invalid
            Given Post the booking with invalid order amount
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Refund Details not available"
            }
            """

      Scenario: Should verify the cancellation process when the offline booking is true
            Given Post the offline booking is true
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Unable to cancel, This user Offline Booking "
            }
            """
      Scenario: Should verify the cancellation process after   Vehicle delivery
            Given Post the after Vehicle delivery       
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Unable to cancel, Vehicle Delivered details available for this user"
            }
            """
      Scenario: Should verify the cancellation process   after invoice
            Given Post the after invoice       
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Unable to cancel, Invoice details available for this user"
            }
            """
      Scenario: Should verify the cancellation process   after FullPayment
            Given Post the after FullPament     
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Unable to cancel, Fullpayment details available for this user"
            }
            """

      Scenario: Should verify the cancellation process when the duplicate booking
            Given Post when the duplicate booking       
            When I receive a response
            Then I expect the response as
            """
            {
            "response":"Booking Already Cancelled"
            }
            """

#-----------------------------------------------------------second report-----------------------------------------------------

      # Scenario: Should verify the cancellation process when the Refund details is null and Launch city is true 
      #       Given Post the booking without Refund details and Launch city is true 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       }
      #       """

      # Scenario: Should verify the cancellation process with Refund details and Launch city is true 
      #       Given Post the booking with Refund details and Launch city is true 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       }
      #       """
      # Scenario: Should verify the cancellation process without Refund details and Pre Launch city is true 
      #       Given Post the booking without Refund details and Pre Launch city is true 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       }
      #       """
      # Scenario:Should verify the cancellation process with Refund details and Pre Launch city is true 
      #       Given Post the booking with Refund details and Pre Launch city is true 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       }
      #       """
      # Scenario: Should verify the cancellation process without Refund details and ST Launch city is true 
      #       Given Post the booking without Refund details and ST Launch city is true 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       }
      #       """
      # Scenario: Should verify the cancellation process with Refund details and ST Launch city is true 
      #       Given Post the booking with Refund details and ST Launch city is true 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       }
      #       """
      # Scenario: Should verify the cancellation process without Refund details and ST Pre Launch city is true 
      #       Given Post the booking without Refund details and ST Pre Launch city is true 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       }
      #       """
      # Scenario:Should verify the cancellation process with Refund details and ST Pre Launch city is true 
      #       Given Post the booking with Refund details and ST Pre Launch city is true 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       } 
      #       """
      # Scenario:Should verify the Cancellation request with refund status as Awaited
      #       Given Post the Cancellation request with refund status as Awaited 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       } 
      #       """
      # Scenario:Should verify the Cancellation request with refund status as Confirmed
      #       Given Post the Cancellation request with refund status as Confirmed 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       } 
      #       """
      # Scenario:Should verify the Cancellation request with refund status as Declined
      #       Given Post the Cancellation request with refund status as Declined
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       } 
      #       """
      Scenario:Should verify the Cancellation request with refund status as Failed
            Given Post the Cancellation request with refund status as Failed 
            When I receive a response
            Then I expect the response as
            """
            {
            "status": "Success"
            } 
            """
#--------------------------------------f&f--------------------------------------------------------------

      # Scenario:Should verify the Cancellation request without refund status and details in launchcity
      #       Given Post the Cancellation request without refund status and details in launchcity
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       } 
      #       """
      # Scenario:Should verify the Cancellation request without refund status and details in Prelaunchcity
      #       Given Post the Cancellation request without refund status and details in Prelaunchcity 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       } 
      #       """
      # Scenario:Should verify the Cancellation request without refund status and details in ST-Prelaunchcity
      #       Given Post the Cancellation request without refund status and details in ST-Prelaunchcity 
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "status": "Success"
      #       } 
      #       """






