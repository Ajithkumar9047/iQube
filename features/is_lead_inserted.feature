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
      







