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
              <label class="damu_input_label">
                <i class="glyphicon glyphicon-user"></i>
              </label>
              <input class="damu_input_field" v-model="username" type="text" placeholder="User name">
            </div>
            <div class="form-group">
              <label class="damu_input_label">
                <i class="glyphicon glyphicon-phone"></i>
              </label>
              <input class="damu_input_field" v-model="phone" type="text" placeholder="Phone number">
            </div>
            <div class="form-group">
              <label class="damu_input_label">
                <i class="glyphicon glyphicon-lock"></i>
              </label>
              <input class="damu_input_field" v-model="password" type="password" placeholder="Password">
            </div>
            <div class="damu-button-wrap">
              <button class="btn  btn-default damu-form-button" type="button" @click="register">Register</button>
            </div>
            <div class="form-group">
              <label class=" label-content-color custom-form-label2">
                <a @click="gotoLogin">Go to Login</a>
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
  import axios from '../api';

  export default {
    name: 'Register',
    data() {
      return {
        username: '',
        phone: '',
        password: '',
      };
    },
    methods: {
      gotoLogin() {
        this.$router.push({ name: 'login' })
      },
      register() {
        const param = {
          username: this.username,
          phone: this.phone,
          password: this.password,
        };
        axios.post('/guest', param)
          .then(({ data }) => {
            if (data._id) {
              alert('register success!');
              this.gotoLogin();
            } else {
              alert(data);
            }
          })
      }
    }
  }
</script>
