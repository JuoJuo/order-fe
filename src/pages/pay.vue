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
        <div class="col-md-6 col-sm-6 col-xs-10 clearfix" style="height: 420px;overflow: scroll;width: 100%">
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#now" aria-controls="now" role="tab"
                                                      data-toggle="tab">Detail info</a>
            </li>
          </ul>
          <!-- common -->
          <ul class="list-group">
            <li class="list-group-item ">
              <span class="damu-pay-infoName">Reserved user</span>
              <span class="damu-pay-info">{{  user.username }}</span>
            </li>
            <li class="list-group-item ">
              <span class="damu-pay-infoName">Reserved Phone</span>
              <span class="damu-pay-info">{{ user.phone }}</span>
            </li>
            <li class="list-group-item ">
              <span class="damu-pay-infoName">Pick-up time</span>
              <span class="damu-pay-info" @click="switchPickUptime()">
                <a>Choose Time</a>
                <span style="margin-left: 8px;">{{ time }}</span>
              </span>
              <nut-datepicker
                :is-visible="pickUptimeShow"
                type="time"
                title="Please Choose Time"
                :isShowChinese="false"
                @close="switchPickUptime()"
                @choose="timeChoosed"
                defaultValue="01:07"
              >
              </nut-datepicker>
            </li>

            <li class="list-group-item ">
              <span class="damu-pay-infoName">Reserve Start Date</span>
              <span class="damu-pay-info" @click="switchStartDateShow()">
                <a>Choose Start Date</a>
                <span style="margin-left: 8px;">{{ startDate }}</span>
              </span>
              <nut-datepicker
                :is-visible="startDateShow"
                type="date"
                title="Please Choose Start Date"
                :is-show-chinese="false"
                :defaultValue="defaultDate"
                endDate="2022-12-21"
                @close="switchStartDateShow"
                @choose="startChoose"
              >
              </nut-datepicker>
            </li>

            <li class="list-group-item ">
              <span class="damu-pay-infoName">Reserve End Date</span>
              <span class="damu-pay-info" @click="switchEndDateShow()">
                <a>Choose End Date</a>
                <span style="margin-left: 8px;">{{ endDate }}</span>
              </span>
              <nut-datepicker
                :is-visible="endDateShow"
                type="date"
                :defaultValue="defaultDate"
                endDate="2022-12-21"
                title="Please Choose End Date"
                :is-show-chinese="false"
                @close="switchEndDateShow"
                @choose="endChoose"
              >
              </nut-datepicker>
            </li>

            <li class="list-group-item ">
              <span class="damu-pay-infoName">Pay Method</span>
              <span class="damu-pay-info">
                <a @click.stop="isVisible = true">Choose Pay Method</a>
                <span style="margin-left: 8px;">{{ payMethod }}</span>
                <nut-picker
                        :is-visible="isVisible"
                        :list-data="[[{ label: 1,value: 'WeChat Pay'}, { label: 2,value: 'AliPay'}, { label: 3,value: 'Card'}]]"
                        @close="isVisible = false"
                        @confirm="confirm"
                ></nut-picker>
              </span>
            </li>

            <li class="list-group-item ">
              <span class="damu-pay-infoName">Pay Method</span>
              <span class="damu-pay-info">
                <a @click.stop="isVisibleEat = true">Choose Eat Type</a>
                <span style="margin-left: 8px;">{{ wayOfTakingMeals }}</span>
                <nut-picker
                  :is-visible="isVisibleEat"
                  :list-data="[[{ label: 1,value: 'Pick up at store'}, { label: 2,value: 'Eat at restaurant'}]]"
                  @close="isVisibleEat = false"
                  @confirm="confirm2"
                ></nut-picker>
              </span>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-1"></div>
      </div>
    </div>
    <!-- 结算栏 -->
    <div class="panel panel-default damu-bottom-wrap">
      <div class="panel-body bottom-menu-include">
        <div class="col-md-3 col-sm-3 col-xs-3 bottom-menu">
          <span>Total:<span id="selectGoodsMoney">{{ allinAll }}</span></span>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-3 bottom-menu" style="float: right">
          <button class="btn"><span id="payMulty"><a @click="createOrder">Make Order</a></span></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from '../api';

  export default {
    name: 'Pay',
    props: {
      foodInCart: {
        type: Array,
        default: () => [],
      },
      changeTab: {
        type: Function,
        default: () => () => {},
      },
      getOrders: {
        type: Function,
        default: () => () => {},
      },
      clearCart: {
        type: Function,
        default: () => () => {},
      },
    },
    data() {
      return {
        wayOfTakingMeals: 'Pick up at store',
        user: {},
        isVisible: false,
        payMethod: 'Card',
        endDateShow: false,
        pickUptimeShow: false,
        startDateShow: false,
        time: '12:00',
        startDate: '',
        endDate: '',
        defaultDate: '2020-01-01',
        isVisibleEat: false,
      };
    },
    computed: {
      allinAll() {
        let total = 0;

        this.foodInCart.forEach(({ count, price }) => {
          total += count * price;
        });

        let day = 1;
        if (this.endDate && this.endDate) {
          const during = new Date(`${this.endDate}`).getTime() - new Date(`${this.startDate}`).getTime();
          day = during / (24 * 60 * 60 * 1000);
          day = day === 0 ? 1 : day;
        }

        return (total * day).toFixed(2);
      }
    },
    mounted() {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.defaultDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    },
    methods: {
      confirm([{ value = 'Card' }]) {
        this.payMethod = value;
      },
      confirm2([{ value = 'Pick up at store' }]) {
        this.wayOfTakingMeals = value;
      },
      switchEndDateShow() {
        this.endDateShow = !this.endDateShow;
      },
      switchPickUptime() {
        this.pickUptimeShow = !this.pickUptimeShow;
      },
      switchStartTime() {
        this.startDateShow = !this.startDateShow;
      },
      switchStartDateShow() {
        this.startDateShow = !this.startDateShow;
      },
      startChoose([y, m, d, ymd]) {
        this.startDate = ymd;
      },
      endChoose([y, m, d, ymd]) {
        this.endDate = ymd;
      },
      timeChoosed([h, m, hm]) {
        this.time = hm;
      },
      createOrder() {
        const during = new Date(`${this.endDate}`).getTime() - new Date(`${this.startDate}`).getTime();
        const day = during / (24 * 60 * 60 * 1000);

        let arr = [];
        for (let i = 0; i <= day; i++) {
          const timpStamp = new Date(`${this.startDate} ${this.time}`).getTime() + i * 24 * 60 * 60 * 1000;
          arr.push(new Date(timpStamp));
        }

        const param = arr.map((mDate) => {
          return {
            price: this.allinAll,
            orderTime: new Date(),
            mealTime: mDate,
            wayOfTakingMeals: this.wayOfTakingMeals,
            status: 'Confirming',
            guest: this.user._id,
            goods: this.foodInCart.map(({ _id }) => _id),
          };
        });

        axios.post('/api/order', param)
          .then(({ data }) => {
            if (data.code === "-1") {
              return alert(data.msg);
            }
            this.clearCart();
            this.getOrders();
            this.changeTab('Order');
          })
      },
    }
  }
</script>
