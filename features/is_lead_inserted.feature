Feature:As a scheduler I want to check the Auto refund, for invalid or missing parameters
      
      Scenario: Should verify the booking is auto Refund without passing the user id
            Given Post the booking without user id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "response": "User Id is required"
                  }
                  """
      # Scenario: Should verify the booking is auto Refund passing invalid user id 
      #       Given Post the booking with invalid user id
      #       When I receive a response
      #             Then I expect the response as
      #             """
      #             {
      #             "response":Booking is not available "
      #             }
      #             """
      # Scenario: Should verify the booking is auto Refund  with Mismatch user id and Booking id
      #       Given Post the booking without Booking id
      #       When I receive a response
      #             Then I expect the response as
      #             """
      #             {
      #             "message":"Booking id is mismatched."
      #             }
      #             """
      Scenario: Should verify the booking is auto Refund without passing the Transaction id
            Given Post the booking without Transaction id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "response":"Transaction Id is required"
                  }
                  """
      Scenario: Should verify the booking is auto Refund without passing the Payment id 
            Given Post the booking without Payment id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "response": "Payment Id is required"
                  }
                  """
      Scenario: Should verify the booking is auto Refund without passing the CancellationInitiatedOn      
            Given Post the booking without CancellationInitiatedOn
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Cancellation Initiated On is required"
            }
            """
      Scenario: Should verify the booking is auto Refund without passing the Cancellation id 
            Given Post the booking without Cancellation id
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Cancellation Id is required"
            }
            """
      Scenario: Should verify the booking is auto Refund without passing the ReasonForCancellation  
            Given Post the booking without ReasonForCancellation
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Reason For Cancellation is required"
            }
            """



      Scenario: Should verify the booking is auto Refund with Mismatch IsCancellation completed and Refund status
            Given Post the bookingwith Mismatch IsCancellation completed and Refund status
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Invalid Refund Details"
            }
            """
# 11.Scenario: Should verify the booking is auto Refund without passing the Refund status with IsCancellation Completed is True  
#        Given Post the booking without Refund status with IsCancellation Completed is True
#        When I receive a response
#           Then I expect the response as
#           """
#           {
#            “message":"'Refund status' must not be empty."
#           }
#           """

      Scenario: Should verify the booking is auto Refund if refund status available but refund  issue date is invalid
            Given Post the booking with invalid refund date
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Refund Details not available"
            }
            """

      Scenario: Should verify the booking is auto Refund if refund status available but Refund _bank_ref_no invalid
            Given Post the booking with Refund _bank_ref_no invalid
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Refund Details not available"
            }
            """



      Scenario: Should verify the booking is auto Refund if refund status available but refund  amount is invalid
            Given Post the booking with invalid refund amount
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Refund Details not available"
            }
            """

      Scenario: Should verify the booking is auto Refund if refund status available but order amount is invalid
            Given Post the booking with invalid order amount
            When I receive a response
            Then I expect the response as
            """
            {
            "response": "Refund Details not available"
            }
            """

      # Scenario: Should verify the booking is auto Refund  when offline booking is true
      #       Given Post the offline booking is true
      #       When I receive a response
      #       Then I expect the response as
      #       """
      #       {
      #       "response": "Unable to cancel, This user Offline Booking "
      #       }
      #       """
      Scenario: Should verify the booking is auto Refund  after Vehicle delivery
            Given Post the after Vehicle delivery       
            When I receive a response
            Then I expect the response as
            """
            {
            "Message":"refund after vehicle delivery"
            }
            """
      Scenario: Should verify the booking is auto Refund  after invoice
            Given Post the after invoice       
            When I receive a response
            Then I expect the response as
            """
            {
            "Message":"refund after vehicle delivery"
            }
            """
      Scenario: Should verify the booking is auto Refund  after FP
            Given Post the after FP     
            When I receive a response
            Then I expect the response as
            """
            {
            "Message":"refund after FP"
            }
            """
# 20 Scenario: Should verify the booking is auto Refund  if duplicate booking
#         Given Post the duplicate booking       
#         When I receive a response
#          Then I expect the response as
#          """
#          {
#          "Message":"your already booking"
#          }
#          """
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



this is for testing 



