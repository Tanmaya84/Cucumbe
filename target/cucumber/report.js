$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "User Logs in successfully",
  "description": "",
  "id": "user-logs-in-successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "user-logs-in-successfully;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is at Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Logs in with username and password as \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "HomePage is show",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User Closes the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "user-logs-in-successfully;login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 8,
      "id": "user-logs-in-successfully;login;;1"
    },
    {
      "cells": [
        "nanda.tanmaya@gmail.com",
        "mama1984"
      ],
      "line": 9,
      "id": "user-logs-in-successfully;login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Login",
  "description": "",
  "id": "user-logs-in-successfully;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is at Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Logs in with username and password as nanda.tanmaya@gmail.com and mama1984",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "HomePage is show",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User Closes the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "glueclode.user_is_at_Login_screen()"
});
formatter.result({
  "duration": 15474107672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nanda.tanmaya@gmail.com",
      "offset": 43
    },
    {
      "val": "mama1984",
      "offset": 71
    }
  ],
  "location": "glueclode.User_Logs_in_with_username_and_password_as(String,String)"
});
formatter.result({
  "duration": 3330722341,
  "status": "passed"
});
formatter.match({
  "location": "glueclode.homepage_is_show()"
});
formatter.result({
  "duration": 6469850148,
  "status": "passed"
});
formatter.match({
  "location": "glueclode.user_Closes_the_Browser()"
});
formatter.result({
  "duration": 1122148695,
  "status": "passed"
});
});