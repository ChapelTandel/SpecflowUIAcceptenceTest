jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "AppForm.feature",
      "Feature": {
        "Name": "App Form",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Register a new user",
            "Slug": "register-a-new-user",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on appForm page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I register a new user",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I see Thank you page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@appForm"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "Calculator.feature",
      "Feature": {
        "Name": "SpecFlowFeature1",
        "Description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be told the sum of two numbers",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "num1",
                    "num2",
                    "result"
                  ],
                  "DataRows": [
                    [
                      "2",
                      "2",
                      "4",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "3",
                      "3",
                      "6",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "2",
                      "3",
                      "5",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "2",
                      "1",
                      "3",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "11",
                      "12",
                      "23",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Add two numbers",
            "Slug": "add-two-numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered <num1> into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered <num2> into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press add",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <result> on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@appForm",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Tag": "@mytag",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Folders": [
      {
        "Folder": "AppForm.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Calculator.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "AppForm.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Calculator.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 2,
      "Passing": 2,
      "Failing": 0,
      "Inconclusive": 0
    },
    "Features": {
      "Total": 2,
      "Passing": 2,
      "Failing": 0,
      "Inconclusive": 0
    }
  },
  "Configuration": {
    "SutName": "Selenium Acceptence Test - 4 Pickles UI",
    "SutVersion": "1.2",
    "GeneratedOn": "14 June 2020 17:30:28"
  }
});