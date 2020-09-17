<template>
  <div id="app">
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

    <!-- 轮播图 -->
    <div id="carousel-example-generic" class="carousel slide damu-carousel" data-ride="carousel" data-interval="2000">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="./images/burger1.jpg" alt="Burger">
        </div>
        <div class="item">
          <img src="./images/burger2.jpg" alt="Burger">
        </div>
        <div class="item">
          <img src="./images/chips.jpg" alt="Chips">
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- 标签页 -->
    <div class="container" id="damu-tab">
      <ul class="nav nav-tabs" role="tablist" id="damu-list">
        <li role="presentation" class="active"><a href="#menu" aria-controls="menu" role="tab"
                                                  data-toggle="tab">Menu</a></li>
        <li role="presentation"><a href="#review" aria-controls="review" role="tab" data-toggle="tab">Reviews</a>
        </li>
      </ul>
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active damu-order-tabpanel" id="menu">
          <!-- 主体 -->
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                <div class="list-group" id="Menu1">
                  <a href="#" class="list-group-item active">Single item</a>
                  <a href="#" class="list-group-item">Meal</a>
                  <a href="#" class="list-group-item">Snack</a>
                  <a href="#" class="list-group-item">Drinks</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                <a href="#">
                  <img src="./images/burger2.jpg" class="damu-img">
                </a>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <div class="damu-intro">
                  <a href="#">
                    <h4>Chicken burger </h4>
                    <span>Chicken &nbspChicken burgerChicken burgerChicken burger</span>
                  </a>
                </div>
                <div>
                  <p class="damu-price">£2.5</p>
                  <a href="javascript:;" class="damu-cart">
                    <span class="glyphicon glyphicon-shopping-cart"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane damu-order-tabpanel" id="review">
          <table class="table">
            <tr class="success">
              <td colspan="2">Product: <span>Chips</span></td>
            </tr>
            <tr>
              <td>
                <img style="width:20px" src="./images/photo.jpg">
              </td>
              <td>User name: <span>Ailsa</span></td>
            </tr>
            <tr>
              <td colspan="2">
                <p>It is very delicious.It is very delicious.It is very delicious
                </p>
              </td>
            </tr>
          </table>
          <!---写评论------>
          <form role="form">
            <div class="form-group">
              <label>Reviews</label>
              <input type="text" class="form-control" placeholder="Write your review....">
            </div>
          </form>
        </div>
      </div>
    </div>

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
export default {
  name: 'App',
  components: {
  }
}
</script>
