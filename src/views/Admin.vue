<template>
  <div class="body">
    <table>
      <th>First name</th>
      <th>Last name</th>
      <th>Email</th>
      <tr v-for="customer in state.customers" v-bind:key="customer.index">
        <td>{{ customer.customer_fname }}</td>
        <td>{{ customer.customer_lname }}</td>
        <td>{{ customer.customer_email }}</td>
      </tr>
    </table>

    <table>
      <th>Product Name</th>
      <th>Inventory</th>
      <th>Price</th>
      <th>Description</th>
      <tr v-for="product in state.products" :key="product.index">
        <td>{{ product.name }}</td>
        <td>{{ product.inventory }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.description }}</td>
      </tr>
    </table>

    <table>
      <th>Order ID</th>
      <th>Order Date</th>
      <th>Customer_ID</th>
      <th>Product_ID</th>
    </table>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, reactive } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Admin",
  setup() {
    console.log("admin");

    const state = reactive({
      orders: [],
      customers: [],
      shipping: [],
      products: []
    });

    function getOrders() {
      axios
        .get("http://localhost:8000/api/orders")
        .then(res => {
          console.log("Orders: ");
          console.log(res);
          state.customers = res.data;
        })
        .catch(err => console.log(err.message));
    }

    function getCustomers() {
      axios
        .get("http://localhost:8000/api/customers")
        .then(res => {
          console.log("Customers: ");
          console.log(res);
          state.customers = res.data;
        })
        .catch(err => console.log(err.message));
    }
    function getShipping() {
      axios
        .get("http://localhost:8000/api/shipping")
        .then(res => {
          console.log("Shipping: ");
          console.log(res);
          state.shipping = res.data;
        })
        .catch(err => console.log(err.message));
    }
    function getProducts() {
      axios
        .get("http://localhost:8000/api/products")
        .then(res => {
          console.log("Products: ");
          console.log(res);
          state.products = res.data;
        })
        .catch(err => console.log(err.message));
    }

    onBeforeMount(() => {
      getOrders();
      getCustomers();
      getShipping();
      getProducts();
    });

    return {
      state
    };
  }
});
</script>

<style scoped>
.body {
  padding-top: 15vh;
}
</style>
