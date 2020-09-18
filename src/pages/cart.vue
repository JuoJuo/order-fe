<template>
  <div>
    <!-- 页头 -->
    <div class="page-header damu-cart-header">
      <h2 style="text-align: center;margin-top: 60px;">Shopping cart</h2>
    </div>
    <!-- 主体 -->
    <div class="container damu-cart-wrap" style="height: 420px;overflow: scroll">
      <div class="row">
        <div class="col-lg-8">
          <table class="table damu-table">
            <tr>
              <th>Goods</th>
              <th>Number</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
            <tr v-for="f in foodInCart">
              <td>
                <img src="../images/burger2.jpg" class="damu-order-img">
              </td>
              <td><span class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-default" @click="() => f.count = f.count + 1">+</button>
                    <button type="button" class="btn btn-default">{{ f.count }}</button>
                    <button type="button" class="btn btn-default" @click="() => f.count = f.count - 1 === 0 ? 1 : f.count - 1">-</button>
                </span>
              </td>
              <td>{{ f.price }}</td>
              <td>{{ (f.count * f.price).toFixed(2) }}</td>
              <td>
                <nut-button
                  @click="removeFromCart(f)"
                  type="lightred"
                  shape="circle"
                  small
                >
                  delete
                </nut-button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- 结算栏 -->
    <div class="panel panel-default damu-bottom-wrap">
      <div class="panel-body bottom-menu-include">
        <div class="col-md-6 col-xs-6 bottom-menu">
          <span>All Total: {{ allinAll }}</span>
        </div>
        <div class="col-md-4 col-xs-4 bottom-menu">
        </div>
        <div class="col-md-2 col-xs-2 bottom-menu">
          <button class="btn"><span id="payMulty"><a @click="myChangeTab">Order</a></span></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Cart',
    props: {
      changeTab: {
        type: Function,
        default: () => () => {},
      },
      removeFromCart: {
        type: Function,
        default: () => () => {},
      },
      foodInCart: {
        type: Array,
        default: () => [],
      }
    },
    computed: {
      allinAll() {
        let total = 0;

        this.foodInCart.forEach(({ count, price }) => {
          total += count * price;
        });

        return total.toFixed(2);
      }
    },
    methods: {
      myChangeTab() {
        if (this.foodInCart.length === 0) return;
        this.changeTab('Pay');
      }
    },
  }
</script>
