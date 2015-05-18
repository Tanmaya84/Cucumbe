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
    },
    {
      "cells": [
        "barkhamama@gmail.com",
        "barsarani@19831"
      ],
      "line": 10,
      "id": "user-logs-in-successfully;login;;3"
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
  "duration": 18672748303,
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
  "duration": 4724359703,
  "status": "passed"
});
formatter.match({
  "location": "glueclode.homepage_is_show()"
});
formatter.result({
  "duration": 9497431707,
  "status": "passed"
});
formatter.match({
  "location": "glueclode.user_Closes_the_Browser()"
});
formatter.result({
  "duration": 4908690195,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login",
  "description": "",
  "id": "user-logs-in-successfully;login;;3",
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
  "name": "User Logs in with username and password as barkhamama@gmail.com and barsarani@19831",
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
  "duration": 14506764566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "barkhamama@gmail.com",
      "offset": 43
    },
    {
      "val": "barsarani@19831",
      "offset": 68
    }
  ],
  "location": "glueclode.User_Logs_in_with_username_and_password_as(String,String)"
});
formatter.result({
  "duration": 4184909995,
  "status": "passed"
});
formatter.match({
  "location": "glueclode.homepage_is_show()"
});
formatter.result({
  "duration": 5056882204,
  "error_message": "java.lang.Error: Login Failed\r\n\tat com.bskyb.facebook.codebehind.glueclode.homepage_is_show(glueclode.java:57)\r\n\tat ✽.Then HomePage is show(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "glueclode.user_Closes_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("x.feature");
formatter.feature({
  "line": 1,
  "name": "User Logs in successfully",
  "description": "",
  "id": "user-logs-in-successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "user-logs-in-successfully;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is at Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Logs in with username and password as \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "HomePage is show",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Closes the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-logs-in-successfully;login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10,
      "id": "user-logs-in-successfully;login;;1"
    },
    {
      "cells": [
        "nanda.tanmaya@gmail.com",
        "mama1984"
      ],
      "line": 11,
      "id": "user-logs-in-successfully;login;;2"
    },
    {
      "cells": [
        "barkhamama@gmail.com",
        "barsarani@19831"
      ],
      "line": 12,
      "id": "user-logs-in-successfully;login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login",
  "description": "",
  "id": "user-logs-in-successfully;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is at Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Logs in with username and password as nanda.tanmaya@gmail.com and mama1984",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "HomePage is show",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Closes the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "glueclode.user_is_at_Login_screen()"
});
formatter.result({
  "duration": 14809909601,
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
  "duration": 3993459261,
  "status": "passed"
});
formatter.match({
  "location": "glueclode.homepage_is_show()"
});
formatter.result({
  "duration": 9879438654,
  "status": "passed"
});
formatter.match({
  "location": "glueclode.user_Closes_the_Browser()"
});
formatter.result({
  "duration": 3629914732,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login",
  "description": "",
  "id": "user-logs-in-successfully;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is at Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Logs in with username and password as barkhamama@gmail.com and barsarani@19831",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "HomePage is show",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Closes the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "glueclode.user_is_at_Login_screen()"
});
formatter.result({
  "duration": 14737963840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "barkhamama@gmail.com",
      "offset": 43
    },
    {
      "val": "barsarani@19831",
      "offset": 68
    }
  ],
  "location": "glueclode.User_Logs_in_with_username_and_password_as(String,String)"
});
formatter.result({
  "duration": 4285038686,
  "status": "passed"
});
formatter.match({
  "location": "glueclode.homepage_is_show()"
});
formatter.result({
  "duration": 5054489183,
  "error_message": "java.lang.Error: Login Failed\r\n\tat com.bskyb.facebook.codebehind.glueclode.homepage_is_show(glueclode.java:57)\r\n\tat ✽.Then HomePage is show(x.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "glueclode.user_Closes_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});