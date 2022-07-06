<template>
  <div class="container">
    <h2>Distributor details {{ index }}</h2>
    <!-- <p>{{index}}</p> -->
    <form>
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="firstname">First Name</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="firstname"
              placeholder="first name"
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone number</label>
            <input
              v-model="phone"
              type="text"
              class="form-control"
              id="phone"
              placeholder="phone number"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
              v-model="lastname"
              type="text"
              class="form-control"
              id="lastname"
              placeholder="last name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="Address">Address</label>
          <input
            v-model="address"
            type="text"
            class="form-control"
            id="Address"
            placeholder="Enter Address"
          />
        </div>
      </div>
    </form>
    <ProductViewVue :myList="myList" />
  </div>
</template>

<script>
import ProductViewVue from "./ProductView.vue";
export default {
  name: "DistributorDetails",
  props: {
    index: {
      default: 2016,
      type: String,
      required: true,
    },
    name: {
      default: null,
    },
    email: {
      default: null,
    },
    address: {
      default: null,
    },
    phone:{
      default: null
    }
  },
  components: {
    ProductViewVue,
  },
  data: function () {
    return {
      myList: [
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
      firstname: null,
      lastname: null,
    };
  },
  mounted(){
    let arr = this.name.split(" ");
    this.firstname = arr[0];
    this.lastname = arr[1];
  }
};
</script>

<style scoped>
.row {
  padding: 1rem;
}

.form-group {
  margin: 16px;
}
</style>
