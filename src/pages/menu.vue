<template>
  <div>
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
          <img src="../images/burger1.jpg" alt="Burger">
        </div>
        <div class="item">
          <img src="../images/burger2.jpg" alt="Burger">
        </div>
        <div class="item">
          <img src="../images/chips.jpg" alt="Chips">
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
                  <img src="../images/burger2.jpg" class="damu-img">
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
                <img style="width:20px" src="../images/photo.jpg">
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
  </div>
</template>
<script>
  export default {
    name: 'Menu',
    components: {}
  }
</script>
