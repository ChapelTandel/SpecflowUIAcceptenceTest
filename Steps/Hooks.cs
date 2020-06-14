using BoDi;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using TechTalk.SpecFlow;

namespace SpecflowUIAcceptenceTest.Steps
{
    [Binding]
    public sealed class Hooks
    {
        private IWebDriver driver;
        private IObjectContainer objectContainer;

        public Hooks(IObjectContainer objectContainer)
        {
            this.objectContainer = objectContainer;
        }


        [BeforeScenario]
        public void BeforeScenario()
        {
            driver = new ChromeDriver();
            objectContainer.RegisterInstanceAs(driver);
        }

        [AfterScenario]
        public void AfterScenario()
        {
            driver.Quit();
        }
    }
}
