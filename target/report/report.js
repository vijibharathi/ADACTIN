$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin_Smoke.feature");
formatter.feature({
  "line": 2,
  "name": "Adactin Somke testcases",
  "description": "",
  "id": "adactin-somke-testcases",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 17,
  "name": "To verify Invalid login details",
  "description": "",
  "id": "adactin-somke-testcases;to-verify-invalid-login-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC102"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User Enter Username \u003cUsername\u003e and Enter Password \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Verify login Error Message",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "adactin-somke-testcases;to-verify-invalid-login-details;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 23,
      "id": "adactin-somke-testcases;to-verify-invalid-login-details;;1"
    },
    {
      "cells": [
        "\"bharathi\"",
        "\"Bharathi@@2629\""
      ],
      "line": 24,
      "id": "adactin-somke-testcases;to-verify-invalid-login-details;;2"
    },
    {
      "cells": [
        "\"vijibharathi\"",
        "\"Bharathi@@2629\""
      ],
      "line": 25,
      "id": "adactin-somke-testcases;to-verify-invalid-login-details;;3"
    },
    {
      "cells": [
        "\"bharathi\"",
        "\"@@2629\""
      ],
      "line": 26,
      "id": "adactin-somke-testcases;to-verify-invalid-login-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the \"edge\" Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate the Url \"http://adactinhotelapp.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edge",
      "offset": 17
    }
  ],
  "location": "Steps.user_launch_the_Browser(String)"
});
formatter.result({
  "duration": 6335374000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://adactinhotelapp.com/",
      "offset": 23
    }
  ],
  "location": "Steps.user_Navigate_the_Url(String)"
});
formatter.result({
  "duration": 1806862100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_verify_login_page()"
});
formatter.result({
  "duration": 167484400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To verify Invalid login details",
  "description": "",
  "id": "adactin-somke-testcases;to-verify-invalid-login-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC102"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User Enter Username \"bharathi\" and Enter Password \"Bharathi@@2629\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Verify login Error Message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "bharathi",
      "offset": 21
    },
    {
      "val": "Bharathi@@2629",
      "offset": 51
    }
  ],
  "location": "Steps.user_Enter_Username_and_Enter_Password(String,String)"
});
formatter.result({
  "duration": 364415000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_the_login_Button()"
});
formatter.result({
  "duration": 689028800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Verify_login_Error_Message()"
});
formatter.result({
  "duration": 60665900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the \"edge\" Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate the Url \"http://adactinhotelapp.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edge",
      "offset": 17
    }
  ],
  "location": "Steps.user_launch_the_Browser(String)"
});
formatter.result({
  "duration": 3367020800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://adactinhotelapp.com/",
      "offset": 23
    }
  ],
  "location": "Steps.user_Navigate_the_Url(String)"
});
formatter.result({
  "duration": 1554641500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_verify_login_page()"
});
formatter.result({
  "duration": 87738100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "To verify Invalid login details",
  "description": "",
  "id": "adactin-somke-testcases;to-verify-invalid-login-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC102"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User Enter Username \"vijibharathi\" and Enter Password \"Bharathi@@2629\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Verify login Error Message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vijibharathi",
      "offset": 21
    },
    {
      "val": "Bharathi@@2629",
      "offset": 55
    }
  ],
  "location": "Steps.user_Enter_Username_and_Enter_Password(String,String)"
});
formatter.result({
  "duration": 380356500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_the_login_Button()"
});
formatter.result({
  "duration": 1737942300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Verify_login_Error_Message()"
});
formatter.result({
  "duration": 20136009600,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat Stepdefinition.Steps.user_Verify_login_Error_Message(Steps.java:57)\r\n\tat ✽.Then User Verify login Error Message(Adactin_Smoke.feature:20)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the \"edge\" Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate the Url \"http://adactinhotelapp.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edge",
      "offset": 17
    }
  ],
  "location": "Steps.user_launch_the_Browser(String)"
});
formatter.result({
  "duration": 4252265900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://adactinhotelapp.com/",
      "offset": 23
    }
  ],
  "location": "Steps.user_Navigate_the_Url(String)"
});
formatter.result({
  "duration": 1981557900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_verify_login_page()"
});
formatter.result({
  "duration": 104541000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To verify Invalid login details",
  "description": "",
  "id": "adactin-somke-testcases;to-verify-invalid-login-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC102"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User Enter Username \"bharathi\" and Enter Password \"@@2629\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click the login Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Verify login Error Message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "bharathi",
      "offset": 21
    },
    {
      "val": "@@2629",
      "offset": 51
    }
  ],
  "location": "Steps.user_Enter_Username_and_Enter_Password(String,String)"
});
formatter.result({
  "duration": 305001300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_the_login_Button()"
});
formatter.result({
  "duration": 410154200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Verify_login_Error_Message()"
});
formatter.result({
  "duration": 65614800,
  "status": "passed"
});
});