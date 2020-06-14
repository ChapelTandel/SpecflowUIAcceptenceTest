using NUnit.Framework;
using System;
using System.Collections.Generic;
using TechTalk.SpecFlow;

namespace SpecflowUIAcceptenceTest
{
    [Binding]
    public class SpecFlowFeature1Steps
    {
        private Calculator calculator;

        public SpecFlowFeature1Steps()
        {
            calculator = new Calculator();
        }

        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int p0)
        {
            calculator.Enter(p0);
        }
        
        [When(@"I press add")]
        public void WhenIPressAdd()
        {
            calculator.Add();
        }
        
        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            Assert.AreEqual(p0, calculator.Sum);
        }
    }

    internal class Calculator
    {
        private readonly List<int> listOfNumbers;
        public int Sum = 0;

        public Calculator()
        {
            listOfNumbers = new List<int>();
        }

        internal void Add()
        {
            
            foreach(var num in listOfNumbers)
            {
                Sum += num; 
            }
        }

        internal void Enter(int p0)
        {
            listOfNumbers.Add(p0);
        }
    }
}
