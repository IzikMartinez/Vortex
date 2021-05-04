<template>
  <div class="body">
    <div class="tbl">
      <h1>Customers</h1>
      <br />
      <table class="tbl-Customer">
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <tr v-for="{id, firstName, lastName, email} in customers" v-bind:key="id">
          <td>{{ firstName }}</td>
          <td>{{ lastName }}</td>
          <td>{{ email }}</td>
          <router-link :to="'/editCustomer/' + id">
            <button>Edit</button>
          </router-link>
          <button @click="deleteCustomer(id)">Delete</button>
        </tr>
      </table>

      <h1>Products</h1>
      <br />
      <table class="tbl-Products">
        <th>Product Name</th>
        <th>Inventory</th>
        <th>Price</th>
        <th>Description</th>
        <tr v-for="{id, name, inventory, price, description} in products" :key="id">
          <td>{{ name }}</td>
          <td>{{ inventory }}</td>
          <td>{{ price }}</td>
          <td>{{ description }}</td>
          <router-link :to="'/editProduct/' + id">
            <button>Edit</button>
          </router-link>
          <button @click="deleteProduct(id)">Delete</button>
        </tr>
      </table>


      <h1>Orders</h1>
      <br />
      <table class="tbl-Order">
        <th>Order Date</th>
        <th>Order Total</th>
        <th>Product Name</th>
        <th>Customer Name</th>
        <tr v-for="{id, orderDate, orderTotal, customerName, productName} in orders" :key="id">
          <td>{{ orderDate }}</td>
          <td>{{ orderTotal }}</td>
          <td>{{ productName }}</td>
          <td>{{ customerName }}</td>
          <router-link :to="'/editOrder/' + id">
            <button>Edit</button>
          </router-link>
          <button @click="deleteOrder(id)">Delete</button>
        </tr>
      </table>


      <h1>Reviews</h1>
      <br />
      <table class="tbl-Order">
        <th>Review Name</th>
        <th>Review</th>
        <tr v-for="{id, name, comment} in reviews" :key="id">
          <td>{{name}}</td>
          <td>{{comment}}</td>
          <router-link :to="'/editReview/' + id">
            <button>Edit</button>
          </router-link>
          <button @click="deleteReview(id)">Delete</button>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  useLoadCustomers,
  useLoadOrders,
  useLoadProducts,
  deleteProduct,
  deleteOrder,
  deleteReview,
  deleteCustomer,
  useLoadReviews
} from "../firebase";

export default defineComponent({
  name: "Admin",
  components: {},
  setup() {
    const products = useLoadProducts();
    const reviews = useLoadReviews();
    const customers = useLoadCustomers();
    const orders = useLoadOrders();

    return {
      products,
      reviews,
      customers,
      orders,
      deleteProduct,
      deleteOrder,
      deleteReview,
      deleteCustomer
    };
  }
});
</script>

<style scoped>
.body {
  padding-top: var(--height);
  margin: auto;
  background-color: var(--navbar-color);
  width: 80%;
  padding-bottom: 10vh;
  border-radius: 20px;
}

h1 {
  color: white;
}

table,
td,
th {
}

.tbl {
  margin: 10px;
  border: 5px white;
}

.tbl .tbl-Customer {
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  background-color: #2c3e50;
  color: white;
}

.tbl .tbl-Products {
  margin: auto;
  padding: 15px;
  background-color: #1da7ae;
  color: white;
  border-radius: 10px;
}

.tbl .tbl-Order {
  margin: auto;
  padding: 15px;
  background-color: #de5801;
  color: white;
  border-radius: 10px;
}
</style>
