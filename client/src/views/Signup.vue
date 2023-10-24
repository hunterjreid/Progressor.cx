
<template>
  <div>
    <button @click="googleSignIn">
      Sign In with Google
    </button>
  </div>
</template>

<script>
import firebaseApp from "@/main.js";

require('firebase/auth')


export default {
  name: "SignUp",
  methods: {
    googleSignIn: function() {
      firebaseApp.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token.
    var token = result.credential.accessToken;
    console.log(token)
  }
  var user = result.user;
  console.log(user)
});
    }
  },
};


</script>
