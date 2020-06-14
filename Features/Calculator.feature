Feature: SpecFlowFeature1
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers

@mytag
Scenario Outline: Add two numbers
	Given I have entered <num1> into the calculator
	And I have entered <num2> into the calculator
	When I press add
	Then the result should be <result> on the screen

	Examples:
	| num1 | num2 | result |
	| 2    | 2    | 4      |
	| 3    | 3    | 6      |
	| 2    | 3    | 5      |
	| 2    | 1    | 3      |
	| 11   | 12   | 23     |