module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1552750560295",
    "actions": [{
      "modulePath": "learning-and-testing/src/lib/actions/loadScript.js",
      "settings": {}
    }],
    "name": "Test Rule",
    "events": [{
      "modulePath": "sandbox/click.js",
      "settings": {}
    }]
  }],
  "extensions": {
    "learning-and-testing": {
      "displayName": "Learning and Testing",
      "settings": {
        "serviceId": "12121"
      }
    }
  },
  "property": {
    "settings": {}
  },
  "buildInfo": {
    "turbineVersion": "25.4.0",
    "turbineBuildDate": "2019-03-16T22:02:36.236Z",
    "buildDate": "2019-03-16T22:02:36.236Z",
    "environment": "development"
  }
}