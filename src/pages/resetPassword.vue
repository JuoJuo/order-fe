<template>
  <div class="damu-login-form-wrapper">
    <div class="row custom-row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-2">
      </div>
      <div class="col-lg-4 col-m5d-4 col-sm-4 col-xs-8">
        <div class="damu-form-column-wrap">
          <h2>Reset Password</h2>
          <form>
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
              <input class="damu_input_field" type="password" v-model="password" placeholder="New password">
            </div>
            <div class="form-group">
              <label class="damu_input_label">
                <i class="glyphicon glyphicon-lock"></i>
              </label>
              <input class="damu_input_field" type="password" v-model="rePassword" placeholder=" Confirm Password">
            </div>

            <div class="damu-button-wrap">
              <button class="btn  btn-default damu-form-button" @click="reset" type="button">Reset</button>
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
    name: 'resetPassword',
    data() {
      return {
        phone: '',
        password: '',
        rePassword: '',
      };
    },
    methods: {
      gotoLogin() {
        this.$router.push({ name: 'login' })
      },
      reset() {
        if (this.password !== this.rePassword) {
          alert('two password is different!');
          return;
        }

        const param = {
          phone: this.phone,
          password: this.password,
        };
        axios.put('/guest/resetPassword', param)
          .then(({ data }) => {
            if (typeof data !== 'string') {
              this.$router.push({ name: 'login' });
            } else {
              alert(data);
            }
          })
      }
    },
  }
</script>
