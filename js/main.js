requirejs.config({
  "baseUrl": "bower_components",
  "paths": {
    "jquery": "jquery/dist/jquery",
    "jso": "jso/build/jso"
  },
  "shim": {
    "jso": {
      deps: ["jquery"]
    }
  }
});

require([ "jquery", "jso" ], function($, JSO) {
  $('.login_btn').click(function(){
    window.open($(this).attr('href'), '_self', 'width=650, height=400');
    return false;
  })

  JSO.enablejQuery($);

  var jso = new JSO({
      providerID: "google",
      client_id: "281469347337-0c0laes81onenksjes8peust1u9nqq0b.apps.googleusercontent.com",
      redirect_uri: "http://localhost/oauth2-js-client-test",
      authorization: "https://accounts.google.com/o/oauth2/auth",
      scopes: { request: ["https://www.googleapis.com/auth/profile"]}
  });

  jso.callback();
  console.log(jso.dump());

  if(jso.checkToken()){
    alert('Congrats !! You are logged in !!')
    jso.getToken(function(token){
      console.log(token.access_token);
    })

  }
});