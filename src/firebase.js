import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyDkWtNl0dNr-wmN33VKD2U4ArGYP7hI8c0",
  authDomain: "vortex-media-113fe.firebaseapp.com",
  projectId: "vortex-media-113fe",
  storageBucket: "vortex-media-113fe.appspot.com",
  messagingSenderId: "913487114706",
  appId: "1:913487114706:web:a3e73e790262657aa1980b",
  measurementId: "G-NNVPXBNQXE"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const reviewsCollection = db.collection("reviews");
const productsCollection = db.collection("products");
const customersCollection = db.collection("customers");
const ordersCollection = db.collection("orders");

export const createReview = review => {
  return reviewsCollection.add(review);
};

export const getReview = async id => {
  const review = await reviewsCollection.doc(id).get();
  return review.exists ? review.data() : null;
};

export const updateReview = (id, review) => {
  return reviewsCollection.doc(id).update(review);
};

export const deleteReview = id => {
  return reviewsCollection.doc(id).delete();
};

export const useLoadReviews = () => {
  const reviews = ref([]);
  const close = reviewsCollection.onSnapshot(snapshot => {
    reviews.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return reviews;
};




export const createProduct = product => {
  return reviewsCollection.add(product);
};
export const getProduct = async id => {
  const product = await productsCollection.doc(id).get();
  return product.exists ? product.data() : null;
};

export const useLoadProducts = () => {
  const products = ref([]);
  const close = productsCollection.onSnapshot(snapshot => {
    products.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return products;
};




export const createCustomer = customer => {
  return customersCollection.add(customer);
};

export const getCustomer = async id => {
  const customer = await customersCollection.doc(id).get();
  return customer.exists ? customer.data() : null;
};


export const useLoadCustomers = () => {
  const customers = ref([]);
  const close = customersCollection.onSnapshot(snapshot => {
    customers.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return customers;
};



export const createOrder = order => {
  return ordersCollection.add(order);
};

export const getOrder = async id => {
  const order = await ordersCollection.doc(id).get();
  return order.exists ? order.data() : null;
};

export const updateOrder = (id, order) => {
  return ordersCollection.doc(id).update(order);
};

export const deleteOrder = id => {
  return ordersCollection.doc(id).delete();
};

export const useLoadOrders = () => {
  const orders = ref([]);
  const close = ordersCollection.onSnapshot(snapshot => {
    orders.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return orders;
};
