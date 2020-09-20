<template>
  <div>
    <!-- 页头 -->
    <div class="page-header damu-page-header">
      <h2>My account</h2>
    </div>
    <!-- 主体 -->
    <div class="container damu-myaccount-wrap">
      <div class="row">
        <div class="col-md-4 col-xs-2 ">
          <a href="#">
            <img src="../images/photo.jpg" class="damu-img">
          </a>
        </div>
        <div class="col-md-6 col-xs-10">
          <ul class="list-group">
            <li class="list-group-item ">
              <span class="damu-my-infoName">User name</span>
              <span class="damu-my-info">{{ user.username }}</span>
              <nut-textinput
                v-if="isModify"
                v-model="uname"
                :clearBtn="true"
                :disabled="false"
              />
            </li>
            <li class="list-group-item ">
              <span class="damu-my-infoName">Phone number</span>
              <span class="damu-my-info">12345678901</span>
            </li>
<!--            <li class="list-group-item ">
              <span class="damu-my-infoName">Email</span>
              <span class="damu-my-info">123456@qq.com</span>
              <nut-textinput
                v-if="isModify"
                v-model="email"
                :clearBtn="true"
                :disabled="false"
              />
            </li>-->
          </ul>
          <div class="col-md-6 col-xs-6">
            <div class="damu-my-button-wrap" v-if="!isModify">
              <button class="btn  btn-default damu-form-button" type="button" @click="edit">Edit</button>
            </div>
            <div class="damu-my-button-wrap" v-else>
              <button class="btn  btn-default damu-form-button" type="button" @click="save">save</button>
            </div>
            <div class="damu-my-button-wrap">
              <a @click="logout">
                <button class="btn  btn-default damu-form-button" type="button">
                  Switch account
                </button>
              </a>
            </div>
            <div class="damu-my-button-wrap">
              <button class="btn  btn-default damu-form-button" type="button" @click="logout">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '../api';

  export default {
    name: 'myAccount',
    props: {
      logout22: {
        type: Function,
        default: () => () => {},
      },
    },
    data(){
      return {
        isModify: false,
        uname: '',
        user: {},
      };
    },
    mounted() {
      this.user = JSON.parse(localStorage.getItem('user'));
    },
    methods: {
      edit() {
        this.uname = this.user.username;
        this.isModify = true;
      },
      logout() {
        this.logout22();
        localStorage.clear();
        this.$router.push({ name: 'login' });
      },
      save() {
        const param = {
          username: this.user.username,
          _id: this.user._id,
        };

        axios.put('/guest', param).then(() => {
          this.user.username = this.uname;
          this.isModify = false;
        });
      }
    }
  }
</script>
