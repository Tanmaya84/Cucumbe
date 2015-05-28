Feature: User Logs in successfully
Scenario Outline: Login
	Given User is at Login screen
	When User Logs in with username and password as <Username> and <Password>
	Then HomePage is show
	And User Closes the Browser
Examples:
|Username|Password|
|nanda.tanmaya@gmail.com|mama1984|


