<template>
  <div>
    <nut-popup :style="{ padding: '30px 50px' }" v-model="show">
      <!---写评论------>
      <div style="width: 100%">
        <nut-textinput
          v-model="myComment"
          label="Write Reviews："
          placeholder="Write your review...."
          :clearBtn="true"
        />

        <nut-button small style="float: right;margin-top: 10px;" @click="addComment">OK</nut-button>
      </div>
    </nut-popup>
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
              <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3" style="padding-left: 0;height: calc(100vh - 340px)">
                <div class="list-group" id="Menu1">
                  <a @click="changeSubTab('Single')" class="list-group-item" :class="tabName ==='Single' ? 'active' : ''">Single item</a>
                  <a @click="changeSubTab('Meal')" href="#" class="list-group-item" :class="tabName ==='Meal' ? 'active' : ''">Meal</a>
                  <a @click="changeSubTab('Snack')" href="#" class="list-group-item" :class="tabName ==='Snack' ? 'active' : ''">Snack</a>
                  <a @click="changeSubTab('Drinks')" href="#" class="list-group-item" :class="tabName ==='Drinks' ? 'active' : ''">Drinks</a>
                </div>
              </div>
              <template v-for="g in filteredGoods">
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                  <a href="#">
                    <img src="../images/burger2.jpg" class="damu-img">
                  </a>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                  <div class="damu-intro">
                    <a href="#">
                      <h4>{{ g.name }}</h4>
                      <span>{{ g.desc }}</span>
                    </a>
                  </div>
                  <div>
                    <p class="damu-price">{{ g.price }}</p>
                    <a class="damu-cart" @click="addToCart(g)">
                      <span class="glyphicon glyphicon-shopping-cart"></span>
                    </a>
                    <a @click="openComment(g)">
                      <span class="glyphicon glyphicon glyphicon-comment"></span>
                    </a>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane damu-order-tabpanel" id="review">
          <table class="table">
            <template v-for="c in comments">
              <tr class="success">
                <td rowspan="3" width="20%">
                  <img src="../images/photo.jpg">
                </td>
                <td>Product: <span>{{ c.goods.name }}</span></td>
              </tr>
              <tr>
                <td>User name: <span>{{ c.guest.username }}</span></td>
              </tr>
              <tr>
                <td>
                  <p>{{ c.comment }}</p>
                </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'Menu',
    props: {
      goods: {
        type: Array,
        default: () => [],
      },
      comments: {
        type: Array,
        default: () => [],
      },
      foodInCart: {
        type: Array,
        default: () => [],
      },
      getComments: {
        type: Function,
        default: () => () => {},
      },
      addToCart: {
        type: Function,
        default: () => () => {},
      }
    },
    data() {
      return {
        tabName: 'Single',
        myComment: '',
        show: false,
        currentGoods: {},
      };
    },
    computed:{
      filteredGoods() {
        return this.goods.filter(({ type }) => type === this.tabName || !type);
      }
    },
    methods: {
      openComment(currentGoods){
        this.show = true;
        this.currentGoods = currentGoods;
      },
      changeSubTab(tabName) {
        this.tabName = tabName;
      },
      addComment() {
        const param = {
          comment: this.myComment,
          time: new Date(),
          guest: JSON.parse(localStorage.getItem('user'))._id,
          goods: this.currentGoods._id,
        };
        axios.post('/comments', param)
          .then(() => {
            this.show = false;
            this.getComments();
          })
      },
    },
  }
</script>
