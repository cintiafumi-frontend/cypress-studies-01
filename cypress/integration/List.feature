Feature: List

  As user, I want to access a list
  To see my recorded personal data

Scenario: List empty records
  Given a website without records
  When access the list
  Then I should see an empty list

Scenario: List one record
  Given a website with one record
  When access the list
  Then I should see only one record