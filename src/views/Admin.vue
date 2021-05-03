<template>
  <div class="body">
    <div class="tbl">
      <h1>Customer Table</h1>
      <br />
      <table class="tbl-Customer">
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <tr v-for="customer in customers" v-bind:key="customer.index">
          <td>{{ customer.firstName}}</td>
          <td>{{ customer.lastName}}</td>
          <td>{{ customer.email }}</td>
          <button @click="deleteCustomer(product.id)">Edit</button>
          <button @click="deleteCustomer(customer.customer_id)">Delete</button>
        </tr>
      </table>

      <h1>Product Table</h1>
      <br />
      <table class="tbl-Products">
        <th>Product Name</th>
        <th>Inventory</th>
        <th>Price</th>
        <th>Description</th>
        <tr v-for="product in products" :key="product.index">
          <td>{{ product.name }}</td>
          <td>{{ product.inventory }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description}}</td>
          <button @click="deleteCustomer(product.id)">Edit</button>
          <button @click="deleteCustomer(product.id)">Delete</button>
        </tr>
      </table>

      <h1>Order Table</h1>
      <br />
      <table class="tbl-Order">
        <th>Order ID</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip</th>
        <th>Order Date</th>
        <th>Completion Date</th>
        <th>Product Name</th>
        <th>Price</th>
        <tr v-for="order in orders" :key="order.index">
          <td>{{order.orderDate}}</td>
          <td>{{order.orderTotal}}</td>
          <td>{{order.productName}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, reactive } from "vue";
import axios from "axios";
import TableRow from "../components/fragments/TableRow";
import {useLoadCustomers, useLoadOrders, useLoadProducts, useLoadReviews} from "../firebase";

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
      orders
    };
  }
});
</script>

<style scoped>
.body {
  padding-top: 15vh;
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
