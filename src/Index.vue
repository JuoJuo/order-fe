<template>
  <div>
    <!-- 导航条 -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed " data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Easy to order</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a @click="() => currentTab = 'Menu'">Home<span class="sr-only">(current)</span></a></li>
            <li><a @click="logout">Login out</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>

    <pay v-if="currentTab === 'Pay'"
         :foodInCart="foodInCart"
         :changeTab="changeTab"
         :getOrders="getOrders"
         :clearCart="clearCart"
    ></pay>
    <Cart v-show="currentTab === 'Cart'"
          :changeTab="changeTab"
          :removeFromCart="removeFromCart"
          :foodInCart="foodInCart"
    ></Cart>
    <order v-if="currentTab === 'Order'" :orders="orders"></order>
    <myAccount v-if="currentTab === 'My'" :logout22="logout"></myAccount>
    <MyMenu v-if="currentTab === 'Menu'"
            :goods="goods"
            :comments="comments"
            :getComments="getComments"
            :foodInCart="foodInCart"
            :addToCart="addToCart"
    ></MyMenu>

    <!-- 底部导航栏 -->
    <nav class="navbar navbar-inverse navbar-fixed-bottom ">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-3 col-sm-3 col-xs-3 damu-bottomNav">
            <a @click="changeTab('Menu')">Menu
              <span class="glyphicon glyphicon-list-alt"></span>
            </a>
          </div>
          <div class="col-md-3  col-sm-3 col-xs-3 damu-bottomNav">
            <a @click="changeTab('Order')">Order
              <span class="glyphicon glyphicon-book"></span>
            </a>
          </div>
          <div class="col-md-3  col-sm-3 col-xs-3 damu-bottomNav">
            <nut-badge
              :value="total"
              class="item"
            >
              <a @click="changeTab('Cart')">
                Cart
                <span class="glyphicon glyphicon-shopping-cart"></span>
              </a>
            </nut-badge>
          </div>
          <div class="col-md-3  col-sm-3 col-xs-3 damu-bottomNav">
            <a @click="changeTab('My')">My
              <span class="glyphicon glyphicon-user"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import Cart from './pages/cart';
  import myAccount from './pages/myAccount';
  import order from './pages/order';
  import pay from './pages/pay';
  import MyMenu from './pages/menu';
  import axios from './api';

  export default {
    name: 'Index',
    components: {
      Cart,
      myAccount,
      order,
      pay,
      MyMenu,
    },
    data() {
      return {
        currentTab: 'Menu',
        goods: [],
        comments: [],
        foodInCart: [],
        orders: [],
      };
    },
    computed: {
      total() {
        const arr = this.foodInCart.map(({ count }) => count);

        return arr.reduce((t, next) => {
          t += next;
          return t;
        }, 0);
      }
    },
    mounted() {
      this.getGoods();
      this.getComments();
      this.getOrders();
    },
    methods: {
      logout() {
        axios.post('/logoutGuest');
        this.$router.push({ name: 'login' });
      },
      addToCart(item) {
        const newItem = {
          ...item,
          count: 1,
        };

        const arr =this.foodInCart.filter(({ _id }) => _id === item._id);

        if (arr.length !== 0) {
          arr[0].count = arr[0].count + 1;
        } else {
          this.foodInCart.push(newItem);
        }
      },
      clearCart() {
        this.foodInCart = [];
      },
      removeFromCart(f) {
        this.foodInCart = this.foodInCart.filter(({ _id }) => _id !== f._id);
      },
      changeTab(current) {
        this.currentTab = current;
      },
      getGoods() {
        axios.get('/goods')
          .then(({ data }) => {
            this.goods = data;
          });
      },
      getComments() {
        axios.get('/comments')
          .then(({ data }) => {
            this.comments = data;
          });
      },
      getOrders() {
        axios.get('/order')
          .then(({ data }) => {
            this.orders = data;
          });
      },
    },
  }
</script>
