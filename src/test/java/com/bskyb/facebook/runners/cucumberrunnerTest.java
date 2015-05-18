package com.bskyb.facebook.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src\\test\\java\\com\\bskyb\\facebook\\features"},
		plugin={"pretty","html:target/cucumber"},
		dryRun=false,
		monochrome=false,
		glue="com\\bskyb\\facebook\\codebehind"
		
		)
public class cucumberrunnerTest {

}
