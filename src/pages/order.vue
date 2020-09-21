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
        <li role="presentation" class="active"><a href="#all" aria-controls="all" role="tab"
                                                  data-toggle="tab">All</a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content" style="max-height: 420px;overflow: scroll">
        <div role="tabpanel" class="tab-pane active damu-order-tabpanel" id="unfinished">
          <div role="tabpanel" class="tab-pane">
            <div class="damu-order-wrap" v-for="o in orders">
              <table class="table damu-table">
                <tr>
                  <th>Goods</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>
                    <img :src="o.goods[0].url" class="damu-order-img">
                  </td>
                  <td>{{ o.price }}</td>
                  <td>
                    <span :class="getColor(o)">{{ o.status }}</span><br>
                    <nut-button
                            @click="cancelOrder(o)"
                            type="default" shape="circle" small v-if="o.status === 'Confirming'">
                      Cancel
                    </nut-button>
                  </td>
                </tr>
              </table>
              <div class="row">
                <div class="col-md-3 col-xs-1"></div>
                <div class="col-md-6 col-xs-10">
                  <ul class="list-group">
                    <li class="list-group-item ">
                      <span class="damu-my-infoName">Order number</span>
                      <span class="damu-my-info">{{ o._id }}</span>
                    </li>
                    <li class="list-group-item ">
                      <span class="damu-my-infoName">Time of order</span>
                      <span class="damu-my-info">{{ getTxt(new Date(o.orderTime)) }}</span>
                    </li>
                    <li class="list-group-item ">
                      <span class="damu-my-infoName">Scheduled pick-up time</span>
                      <span class="damu-my-info">{{ getTxt(new Date(o.mealTime)) }}</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-3 col-xs-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from '../api';
  export default {
    name: 'Order',
    props: {
      orders: {
        type: Array,
        default: () => [],
      },
      getOrders: {
        type: Function,
        default: () => () => {},
      },
    },
    methods: {
      getTxt(d) {
        return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      },
      getColor(o) {
        if (o.status === 'Confirming') {
          return 'yellow';
        }

        if (o.status === 'Canceled') {
          return 'red';
        }

        return 'green';
      },
      cancelOrder({ _id, status }) {
        const params = {
          _id,
          status: 'Canceled',
        };
        axios.put('/order', params)
          .then(() => {
            this.getOrders();
          })
      },
    }
  }
</script>

<style>
.green {
  color: darkseagreen
}
.yellow {
  color: #8e7d3e;
}
.red {
  color: red;
}
</style>
