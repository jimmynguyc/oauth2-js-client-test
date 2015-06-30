requirejs.config({
  "baseUrl": "bower_components",
  "paths": {
    "jquery": "jquery/dist/jquery.min",
    "jso": "jso/build/jso"
  },
  "shim": {
    "jso": {
      deps: ["jquery"]
    }
  }
});

require(["jquery", "jso"], function($, JSO) {
  $(function() {

    var jso = new JSO({
        providerID: "google",
        client_id: "281469347337-0c0laes81onenksjes8peust1u9nqq0b.apps.googleusercontent.com",
        redirect_uri: "http://localhost/oauth2-js-client-test",
        authorization: "https://accounts.google.com/o/oauth2/auth",
        scopes: {
            request: ["https://www.googleapis.com/auth/userinfo.email"],
            require: ["https://www.googleapis.com/auth/userinfo.email"]
        }
    });

    jso.getToken(function(token) {
      window.open('index.html','_self')
    }, {
      scopes: {
              request: ["https://www.googleapis.com/auth/userinfo.email"],
              require: ["https://www.googleapis.com/auth/userinfo.email"]
          }
    });

  });
});
