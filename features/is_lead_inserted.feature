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
                  "response":"user id not available"
                  }
                  """
      Scenario: Should verify the cancellation process when the  user id and Booking id Mismatch
            Given Post the booking without Booking id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "response":"Booking id is mismatched."
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
            "response": "Invalid Refund Details"
            }
            """
      # Scenario: Should verify the booking is auto Refund without passing the Refund status with IsCancellation Completed is True  
      #       Given Post the booking without Refund status with IsCancellation Completed is True
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "response":"'Refund status' must not be empty."
      #       }
      #       """

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
# 21.Scenario: Should verify the booking is auto Refund without Refund details and Launch city is true 
#        Given Post the booking without Refund details and Launch city is true 
#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"Refund details is empty & Launch city is true "
#           }
#           """
# 22.Scenario: Should verify the booking is auto Refund without Refund details and Launch city is true 
#        Given Post the booking without Refund details and Launch city is true 
#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"Refund details is empty & Launch city is true "
#           }
#           """
# 23.Scenario: Should verify the booking is auto Refund with Refund details and Launch city is true 
#        Given Post the booking with Refund details and Launch city is true 
#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"Refund details & Launch city is true "
#           }
#           """
# 24.Scenario: Should verify the booking is auto Refund without Refund details and Pre Launch city is true 
#        Given Post the booking without Refund details and Pre Launch city is true 
#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"Refund details is empty & Pre Launch city is true "
#           }
#           """
# 25.Scenario: Should verify the booking is auto Refund with Refund details and Pre Launch city is true 
#        Given Post the booking with Refund details and Pre Launch city is true 
#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"Refund details & Pre Launch city is true "
#           }
#           """
# 26.Scenario: Should verify the booking is auto Refund without Refund details and ST Launch city is true 
#        Given Post the booking without Refund details and ST Launch city is true 
#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"Refund details is empty & ST Launch city is true "
#           }
#           """
# 27.Scenario: Should verify the booking is auto Refund with Refund details and ST Launch city is true 
#        Given Post the booking with Refund details and ST Launch city is true 
#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"Refund details & ST Launch city is true "
#           }
#           """
# 28.Scenario: Should verify the booking is auto Refund without Refund details and ST Pre Launch city is true 
#        Given Post the booking without Refund details and ST Pre Launch city is true 

#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"Refund details is empty & ST Pre Launch city is true "
#           }
#           """
# 29.Scenario: Should verify the booking is auto Refund with Refund details and ST Pre Launch city is true 
#        Given Post the booking with Refund details and ST Pre Launch city is true 
#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"Refund details & ST Pre Launch city is true "
#           }
#           """







