using OpenQA.Selenium;
using TechTalk.SpecFlow;

namespace SpecflowUIAcceptenceTest.Steps
{
    public class StepBase
    {
        protected IWebDriver driver;
        protected ScenarioContext scenarioContext;

        public StepBase(IWebDriver driver, ScenarioContext scenarioContext)
        {
            this.driver = driver;
            this.scenarioContext = scenarioContext;
        }
    }
}