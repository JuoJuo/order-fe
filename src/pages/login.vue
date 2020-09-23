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
                <i class="glyphicon glyphicon-user"></i>
              </label>
              <input class="damu_input_field" type="text" v-model="phone" placeholder="Phone number">
            </div>
            <div class="form-group">
              <label class="damu_input_label">
                <i class="glyphicon glyphicon-lock"></i>
              </label>
              <input class="damu_input_field" type="password" v-model="password" placeholder="Password">
            </div>
            <div class="damu-button-wrap">
              <a>
                <button class="btn btn-default damu-form-button" type="button" @click="login">Login</button>
              </a>
            </div>
            <div class="form-group">
              <label class=" label-content-color custom-form-label2">
                <a @click="gotoRegister">Register</a>
              </label>
              <label class=" label-content-color custom-form-label2">
                <a @click="gotoReset">Forgot password?</a>
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
    name: 'Login',
    data() {
      return {
        phone: '',
        password: '',
      };
    },
    methods: {
      gotoRegister() {
        this.$router.push({ name: 'register' })
      },
      gotoReset() {
        this.$router.push({ name: 'resetPassword' })
      },
      login() {
        const param = {
          phone: this.phone,
          password: this.password,
        };
        axios.post('/api/guest/login', param)
          .then(({ data }) => {
            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(data[0]));
            this.$router.push({ name: 'index' });
          })
          .catch(() => {
            alert('login failed, check your phone or password!');
          })
      }
    },
  }
</script>
