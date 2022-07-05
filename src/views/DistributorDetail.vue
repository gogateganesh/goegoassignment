<template>
<div class="container">
    <h2>Distributor details</h2>
    <form>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" class="form-control" id="firstname" placeholder="first name" />
                </div>
                <div class="form-group">
                    <label for="phone">Phone number</label>
                    <input type="text" class="form-control" id="phone" placeholder="phone number" />
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" class="form-control" id="lastname" placeholder="last name" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" />
                </div>
            </div>
            <div class="form-group">
                <label for="Address">Address</label>
                <input type="text" class="form-control" id="Address" placeholder="Enter Address" />
            </div>
        </div>
    </form>
</div>
</template>

<script>
import ProductView from './ProductView.vue';
export default {
    name: "DistributorDetails",
    components:{
        
    }
};
</script>

<style scoped>
.row{
    padding: 1rem;
}
.form-group{
    margin: 16px;
}
</style>
