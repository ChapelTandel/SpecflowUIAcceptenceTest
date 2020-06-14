using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;

namespace SpecflowUIAcceptenceTest.Steps
{
    internal class BasePage
    {
        protected IWebDriver driver;

        public BasePage(IWebDriver driver)
        {
            this.driver = driver;
            PageFactory.InitElements(driver, this);
        }
    }
}