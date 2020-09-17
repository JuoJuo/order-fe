<template>
  <div>
    <!-- 页头 -->
    <div class="page-header damu-page-header">
      <h2>Pay</h2>
    </div>
    <!-- 主体 -->
    <div class="container">
      <!-- Nav tabs -->
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-1"></div>
        <div class="col-md-6 col-sm-6 col-xs-10 clearfix">
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#now" aria-controls="now" role="tab"
                                                      data-toggle="tab">Now</a>
            </li>
            <li role="presentation"><a href="#reserve" aria-controls="reserve" role="tab"
                                       data-toggle="tab">Reserve</a>
            </li>
          </ul>
          <!-- common -->
          <ul class="list-group">
            <li class="list-group-item ">
              <span class="damu-pay-infoName">Reserved user</span>
              <span class="damu-pay-info">Ailsa</span>
            </li>
            <li class="list-group-item ">
              <span class="damu-pay-infoName">Reserved Phone</span>
              <span class="damu-pay-info">07529936177</span>
            </li>
          </ul>
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="now">
              <ul class="list-group">
                <li class="list-group-item ">
                  <span class="damu-pay-infoName">Pick-up time</span>
                  <span class="damu-pay-info">13:45<button class="damu-pay-btn">></button></span>
                </li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane" id="reserve">
              <ul class="list-group">
                <li class="list-group-item ">
                  <span class="damu-pay-infoName">Pick-up time</span>
                  <span class="damu-pay-info">To 05-09-2020<button class="damu-pay-btn">></button></span>
                  <span class="damu-pay-info">From 01-09-2020<button class="damu-pay-btn">></button></span>
                  <span class="damu-pay-info">13:45<button class="damu-pay-btn">></button></span>
                </li>
              </ul>
            </div>
          </div>
          <span>How to take meals?</span>
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#eatin" aria-controls="eatin" role="tab"
                                                      data-toggle="tab">Eat in</a>
            </li>
            <li role="presentation"><a href="#takeout" aria-controls="takeout" role="tab"
                                       data-toggle="tab">Take out</a>
            </li>
          </ul>
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="eatin">
              <ul class="list-group">
                <li class="list-group-item ">
                  <span class="damu-pay-infoName">Have you arrived?</span>
                </li>
                <li class="list-group-item ">
                  <span class="damu-pay-infoName">Table number</span>
                  <span class="damu-pay-info">13<button class="damu-pay-btn">></button></span>
                </li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane" id="takeout">
              <ul class="list-group">
                <li class="list-group-item ">
                  <span class="damu-pay-infoName">Package fee:</span>
                  <span class="damu-pay-info">10p</span>
                </li>
              </ul>
            </div>
          </div>
          <ul class="list-group" style="margin-bottom: 60px;">
            <li class="list-group-item ">
              <span class="damu-pay-infoName">Payment method</span>
              <span class="damu-pay-info">card<button class="damu-pay-btn">></button></span>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-1"></div>
      </div>
    </div>
    <!-- 结算栏 -->
    <div class="panel panel-default damu-bottom-wrap">
      <div class="panel-body bottom-menu-include">
        <div class="col-md-3 col-sm-3 col-xs-3 check-all-bottom bottom-menu">
        </div>
        <div class="col-md-3 col-sm-3 col-xs-3 bottom-menu">
          <span>Total:<span id="selectGoodsMoney">0.00</span></span>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-3 bottom-menu">
          <button class="btn"><span id="payMulty"><a href="../pages/pay.html">Pay</a></span></button>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-3 bottom-menu">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Pay',
    components: {}
  }
</script>
