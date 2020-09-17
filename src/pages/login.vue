<template>
  <div class="damu-login-form-wrapper">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-2">
      </div>
      <div class="col-lg-4 col-m5d-4 col-sm-4 col-xs-8">
        <div class="damu-form-column-wrap">
          <h2>Login</h2>
          <form>
            <div class="form-group">
              <label class="damu_input_label">
                <i class="fa fa-user"></i>
              </label>
              <input class="damu_input_field" type="text" placeholder="Phone number">
            </div>
            <div class="form-group">
              <label class="damu_input_label">
                <i class="fa fa-lock"></i>
              </label>
              <input class="damu_input_field" type="password" placeholder="Password">
            </div>
            <div class="form-group">
              <label class="damu-checkbox-wrap">
                <input name="signup_agree_checkbox" value="1" type="checkbox">
                <a>Remember the password</a>
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="damu-button-wrap">
              <a href="../index.html">
                <button class="btn  btn-default damu-form-button" type="button">Login</button>
              </a>
            </div>
            <div class="form-group">
              <label class=" label-content-color custom-form-label2">
                <a href="register.vue">Register</a>
              </label>
              <label class=" label-content-color custom-form-label2">
                <a href="resetPassword.vue">Forgot password?</a>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-2">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    components: {
    }
  }
</script>
