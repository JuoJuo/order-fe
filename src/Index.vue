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
            <li class="active"><a href="index.html">Home<span class="sr-only">(current)</span></a></li>
            <li><a href="pages/login.vue">Login</a></li>
            <li><a href="pages/register.vue">Register</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>

    <!--<Cart></Cart>-->
    <!--<order></order>-->
    <!--<myAccount></myAccount>-->
    <!--<pay></pay>-->
    <MyMenu></MyMenu>

    <!-- 底部导航栏 -->
    <nav class="navbar navbar-inverse navbar-fixed-bottom ">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-3 col-sm-3 col-xs-3 damu-bottomNav">
            <a href="#Menu">Menu
              <span class="glyphicon glyphicon-list-alt"></span>
            </a>
          </div>
          <div class="col-md-3  col-sm-3 col-xs-3 damu-bottomNav">
            <a href="pages/order.vue">Order
              <span class="glyphicon glyphicon-book"></span>
            </a>
          </div>
          <div class="col-md-3  col-sm-3 col-xs-3 damu-bottomNav">
            <a href="pages/cart.vue">Cart
              <span class="glyphicon glyphicon-shopping-cart"></span>
            </a>
          </div>
          <div class="col-md-3  col-sm-3 col-xs-3 damu-bottomNav">
            <a href="pages/myAccount.vue">My
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
export default {
  name: 'App',
  components: {
    Cart,
    myAccount,
    order,
    pay,
    MyMenu,
  }
}
</script>
