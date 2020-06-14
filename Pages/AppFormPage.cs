using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;
using System.Threading;

namespace SpecflowUIAcceptenceTest.Steps
{
    internal class AppFormPage : BasePage
    {
        [FindsBy(How = How.Id, Using = "Application_FirstName")]
        private readonly IWebElement _firstNameTextBox;

        public AppFormPage(IWebDriver driver) : base(driver)
        {
        }

        internal void Open()
        {
            driver.Navigate().GoToUrl("https://application.cityindex.co.uk/ci-en-uk/step/1");
        }

        internal void EnterFirstName(string v)
        {
            _firstNameTextBox.SendKeys(v);
            Thread.Sleep(3000);
        }
    }
}