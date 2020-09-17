<template>
  <div class="damu-login-form-wrapper">
    <div class="row custom-row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-2">
      </div>
      <div class="col-lg-4 col-m5d-4 col-sm-4 col-xs-8">
        <div class="damu-form-column-wrap">
          <h2>Register</h2>
          <form>
            <div class="form-group">
              <!-- <span class="damu-span-input-label-wrap"> -->
              <label class="damu_input_label">
                <i class="fa fa-user"></i>
              </label>
              <input class="damu_input_field" type="text" placeholder="User name">
              <!-- </span> -->
            </div>
            <div class="form-group">
              <!-- <span class="damu-span-input-label-wrap"> -->
              <label class="damu_input_label">
                <i class="glyphicon glyphicon-phone"></i>
              </label>
              <input class="damu_input_field" type="text" placeholder="Phone number">
              <!-- </span> -->
            </div>
            <div class="form-group">
              <!-- <span class="damu-span-input-label-wrap"> -->
              <label class="damu_input_label">
                <i class="fa fa-lock"></i>
              </label>
              <input class="damu_input_field" type="password" placeholder="Password">
              <!-- </span> -->
            </div>
            <div class="damu-button-wrap">
              <button class="btn  btn-default damu-form-button" type="button">Register</button>
            </div>
            <div class="form-group">
              <label class=" label-content-color custom-form-label2">
                <a href="login.vue">Go to Login</a>
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
    name: 'Register',
    components: {}
  }
</script>
