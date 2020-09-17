<template>
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
          <li class="active"><a href="../index.html">Home<span class="sr-only">(current)</span></a></li>
          <li><a href="login.vue">Login</a></li>
          <li><a href="register.vue">Register</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container -->
  </nav>
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
            <span class="damu-my-info">Ailsa</span>
          </li>
          <li class="list-group-item ">
            <span class="damu-my-infoName">Phone number</span>
            <span class="damu-my-info">12345678901</span>
          </li>
          <li class="list-group-item ">
            <span class="damu-my-infoName">Email</span>
            <span class="damu-my-info">123456@qq.com</span>
          </li>
        </ul>
        <div class="col-md-6 col-xs-6">
          <div class="damu-my-button-wrap">
            <button class="btn  btn-default damu-form-button" type="button">Edit</button>
          </div>
          <div class="damu-my-button-wrap">
            <a href="login.vue">
              <button class="btn  btn-default damu-form-button" type="button">
                Switch account
              </button>
            </a>
          </div>
          <div class="damu-my-button-wrap">
            <button class="btn  btn-default damu-form-button" type="button">Log out</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 底部导航栏 -->
  <nav class="navbar navbar-inverse navbar-fixed-bottom ">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-3 col-sm-3 col-xs-3 damu-bottomNav">
          <a href="../index.html">Menu
            <span class="glyphicon glyphicon-list-alt"></span>
          </a>
        </div>
        <div class="col-md-3  col-sm-3 col-xs-3 damu-bottomNav">
          <a href="order.vue">Order
            <span class="glyphicon glyphicon-book"></span>
          </a>
        </div>
        <div class="col-md-3  col-sm-3 col-xs-3 damu-bottomNav">
          <a href="cart.vue">Cart
            <span class="glyphicon glyphicon-shopping-cart"></span>
          </a>
        </div>
        <div class="col-md-3  col-sm-3 col-xs-3 damu-bottomNav">
          <a href="javascript:;">My
            <span class="glyphicon glyphicon-user"></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Cart',
    components: {}
  }
</script>
