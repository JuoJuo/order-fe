<template>
  <div>
    <!-- 页头 -->
    <div class="page-header damu-page-header">
      <h2>My order</h2>
    </div>
    <!-- 主体 -->
    <div>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation"><a href="#unfinished" aria-controls="unfinished" role="tab"
                                   data-toggle="tab">Unfinished</a></li>
        <li role="presentation" class="active"><a href="#all" aria-controls="all" role="tab"
                                                  data-toggle="tab">All</a></li>
        <li role="presentation"><a href="#cancelled" aria-controls="cancelled" role="tab"
                                   data-toggle="tab">Cancelled</a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active damu-order-tabpanel" id="unfinished">
          <div class="damu-order-wrap">
            <span class="damu-order-status">Making</span>
            <table class="table damu-table">
              <tr>
                <th>Goods</th>
                <th>Number</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <img src="../images/burger2.jpg" class="damu-order-img">
                </td>
                <td>1</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </table>
            <div class="row">
              <div class="col-md-3 col-xs-1"></div>
              <div class="col-md-6 col-xs-10">
                <ul class="list-group">
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Order number</span>
                    <span class="damu-my-info">202008261335001</span>
                  </li>
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Time of order</span>
                    <span class="damu-my-info">08-26-2020 13:35</span>
                  </li>
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Scheduled pick-up time</span>
                    <span class="damu-my-info">08-26-2020 13:45</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 col-xs-1"></div>
            </div>
            <div class="clearfix">
              <p class="damu-order-status">2 items in total £<span>5</span></p>
              <p class="damu-order-status">Ticket:<span>123456</span></p>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="all">
          <div class="damu-order-wrap">
            <span class="damu-order-status">Taking</span>
            <table class="table damu-table">
              <tr>
                <th>Goods</th>
                <th>Number</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <img src="../images/burger2.jpg" class="damu-order-img">
                </td>
                <td>1</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </table>
            <div class="row">
              <div class="col-md-3 col-xs-1"></div>
              <div class="col-md-6 col-xs-10">
                <ul class="list-group">
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Order number</span>
                    <span class="damu-my-info">202008261335001</span>
                  </li>
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Time of order</span>
                    <span class="damu-my-info">08-26-2020 13:35</span>
                  </li>
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Scheduled pick-up time</span>
                    <span class="damu-my-info">08-26-2020 13:45</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 col-xs-1"></div>
            </div>
            <div class="clearfix">
              <p class="damu-order-status">2 items in total £<span>5</span></p>
              <p class="damu-order-status">Ticket:<span>123456</span></p>
            </div>
          </div>
          <div class="damu-order-wrap">
            <span class="damu-order-status">Making</span>
            <table class="table damu-table">
              <tr>
                <th>Goods</th>
                <th>Number</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <img src="../images/burger2.jpg" class="damu-order-img">
                </td>
                <td>1</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </table>
            <div class="row">
              <div class="col-md-3 col-xs-1"></div>
              <div class="col-md-6 col-xs-10">
                <ul class="list-group">
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Order number</span>
                    <span class="damu-my-info">202008261335001</span>
                  </li>
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Time of order</span>
                    <span class="damu-my-info">08-26-2020 13:35</span>
                  </li>
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Scheduled pick-up time</span>
                    <span class="damu-my-info">08-26-2020 13:45</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 col-xs-1"></div>
            </div>
            <div class="clearfix">
              <p class="damu-order-status">2 items in total £<span>5</span></p>
              <p class="damu-order-status">Ticket:<span>123456</span></p>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="cancelled">
          <div class="damu-order-wrap">
            <span class="damu-order-status">Cancelled</span>
            <table class="table damu-table">
              <tr>
                <th>Goods</th>
                <th>Number</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <img src="../images/burger2.jpg" class="damu-order-img">
                </td>
                <td>1</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </table>
            <div class="row">
              <div class="col-md-3 col-xs-1"></div>
              <div class="col-md-6 col-xs-10">
                <ul class="list-group">
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Order number</span>
                    <span class="damu-my-info">202008261335001</span>
                  </li>
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Time of order</span>
                    <span class="damu-my-info">08-26-2020 13:35</span>
                  </li>
                  <li class="list-group-item ">
                    <span class="damu-my-infoName">Scheduled pick-up time</span>
                    <span class="damu-my-info">08-26-2020 13:45</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 col-xs-1"></div>
            </div>
            <div class="clearfix">
              <p class="damu-order-status">2 items in total £<span>5</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Order',
    components: {}
  }
</script>
