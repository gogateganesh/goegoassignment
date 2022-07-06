<template>
  <div>
    <h2 class="text-center">Products List</h2>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Product No</th>
            <th>Price</th>
            <th>Product Color</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in ProductsList" :key="product.ProductNo">
            <td>{{ product.ProductName }}</td>
            <td>{{ product.ProductNo }}</td>
            <td>{{ product.Price }}</td>
            <td>{{ product.ProductColor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data: function () {
    return {
      ProductsList: [
        {
          ProductName: "Washing Machine",
          ProductNo: 1,
          Price: 10000,
          ProductColor: "White",
        },
        {
          ProductName: "Refrigerators",
          ProductNo: 2,
          Price: 15000,
          ProductColor: "Grey",
        },
        {
          ProductName: "Televisions",
          ProductNo: 3,
          Price: 20000,
          ProductColor: "Black",
        },
      ],
    };
  },
  props: {
    myList: {
      default: null,
    }
  },
  mounted() {
    if (this.myList) this.ProductsList = this.myList;
  },
};
</script>


<style scoped>
th {
  background-color: #f1f3f4;
}
tr:hover {
  background-color: darkgrey;
  cursor: pointer;
}
</style>
