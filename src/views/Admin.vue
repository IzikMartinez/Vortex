<template>
  <div class="body">
    <div class="tbl">

      <h1>Customer Table</h1><br>
      <table class="tbl-Customer">
        <th>Customer ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <tr v-for="customer in state.customers" v-bind:key="customer.index">
          <td>{{ customer.customer_id }}</td>
          <td>{{ customer.customer_fname }}</td>
          <td>{{ customer.customer_lname }}</td>
          <td>{{ customer.customer_email }}</td>
        </tr>
      </table>

      <h1>Product Table</h1><br>
      <table class="tbl-Products">
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Inventory</th>
        <th>Price</th>
        <th>Description</th>
        <tr v-for="product in state.products" :key="product.index">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.inventory }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </tr>
      </table>

      <h1>Order Table</h1><br>
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
        <tr v-for="order in state.orders" :key="order.index">
          <td>{{ order.id }}</td>
          <td>{{order.address}}</td>
          <td>{{order.city}}</td>
          <td>{{order.state}}</td>
          <td>{{order.zip}}</td>
          <td>{{order.shipping_date}}</td>
          <td>{{order.completed}}</td>
          <td>{{order.name}}</td>
          <td>{{order.price}}</td>
        </tr>
      </table>
    </div>
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
          state.orders = res.data;
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
  margin: auto;
  background-color: var(--navbar-color);
  width: 70%;
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
