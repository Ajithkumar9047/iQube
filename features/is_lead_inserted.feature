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
      #             "message":Booking is not available for this user id."
      #             }
      #             """
      Scenario: Should verify the booking is auto Refund  with Mismatch user id and Booking id
            Given Post the booking without Booking id
            When I receive a response
                  Then I expect the response as
                  """
                  {
                  "message":"Booking id is mismatched."
                  }
                  """
      # Scenario: Should verify the booking is auto Refund without passing the Transaction id
      #       Given Post the booking without Transaction id
      #       When I receive a response
      #             Then I expect the response as
      #             """
      #             {
      #             "message":"'Transaction id' must not be empty."
      #             }
      #             """







