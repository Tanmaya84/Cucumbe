package com.bskyb.facebook.codebehind;

import java.util.concurrent.TimeUnit;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.junit.Assertions;

public class glueclode {
	WebDriver driver=new FirefoxDriver();
	
	@Given("^User is at Login screen$")
	public void user_is_at_Login_screen() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		System.out.println(System.getProperty("user.dir"));
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.gmail.com");
	//	driver.findElement(By.xpath("//a[@id='gmail-sign-in']")).click;
		//driver.findElement(By.xpath("//a[@id='gmail-sign-in'")).click();
		
		
	}


	@When("^User Logs in with username and password as ([^\"]*) and ([^\"]*)$")
	public void User_Logs_in_with_username_and_password_as(String Username, String Password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		driver.findElement(By.xpath("//input[@id='Email']")).clear();
		driver.findElement(By.xpath("//input[@id='Email']")).sendKeys(Username);
		driver.findElement(By.xpath("//input[@value='Next']")).click();
		driver.findElement(By.xpath("//input[@name='Passwd']")).clear();
		driver.findElement(By.xpath("//input[@name='Passwd']")).sendKeys(Password);
		driver.findElement(By.xpath("//input[@id='signIn']")).click();
	}

	@Then("^HomePage is show$")
	public void homepage_is_show() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		Thread.sleep(5000);
		try
		{
			//Assert.assertTrue();
			org.junit.Assert.assertTrue(driver.getTitle().contains("Inbox"));
		}
		catch(Throwable t)
		{
			System.out.println("Login Failed");
			throw new Error("Login Failed");
		}
	}

	@Then("^User Closes the Browser$")
	public void user_Closes_the_Browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		driver.close();
		driver.quit();
	}
}
