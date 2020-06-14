using NUnit.Framework;
using OpenQA.Selenium;
using System;
using System.Threading;
using TechTalk.SpecFlow;

namespace SpecflowUIAcceptenceTest.Steps
{
    [Binding]
    public class AppFormSteps : StepBase
    {
        public AppFormSteps(IWebDriver driver, ScenarioContext scenarioContext) : base(driver, scenarioContext)
        {
            appFormPage = new AppFormPage(driver);
        }

        private AppFormPage appFormPage;

        [Given(@"I am on appForm page")]
        public void GivenIAmOnAppFormPage()
        {
            appFormPage.Open();
            scenarioContext.Add("Var1", "Variable 1");
        }
        
        [When(@"I register a new user")]
        public void WhenIRegisterANewUser()
        {
            appFormPage.EnterFirstName("John");
        }
        
        [Then(@"I see Thank you page")]
        public void ThenISeeThankYouPage()
        {
            Assert.AreEqual(scenarioContext.Get<string>("Var1"), "Variable 1");
        }
    }
}
