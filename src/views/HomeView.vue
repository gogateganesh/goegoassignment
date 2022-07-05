<script>
import DistributorDetail from './DistributorDetail.vue'
export default {
    name: "HomePage",
    data: function () {
        return {
            DistributorList: [{
                "DistributorName": "Sam Xyz",
                "Phone": "xxxxxxxxxx",
                "Email": "x@gmail.com ",
                "City": "Delhi"
            }, {
                "DistributorName": "Jack",
                "Phone": "xxxxxxxxxx",
                "Email": "x@gmail.com ",
                "City": "Pune"
            }, {
                "DistributorName": "Paul",
                "Phone": "xxxxxxxxxx",
                "Email": "x@gmail.com ",
                "City": "Mumbai"
            }]
        }
    },
    components:{
        DistributorDetail
    }
}
</script>

<template>
<main>
    <h2 class="text-center">Distributors List</h2>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Distributor Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(distributor,index) in DistributorList" :key="index">
                    <td>{{distributor.DistributorName}}</td>
                    <td>{{distributor.Phone}}</td>
                    <td>{{distributor.Email}}</td>
                    <td>{{distributor.City}}</td>
                </tr>
            </tbody>

        </table>
    </div>
    <DistributorDetail/>
</main>
</template>

<style scoped>
th {
    background-color: #F1F3F4;
}
tr:hover{
    background-color: darkgrey;
    cursor: pointer;
}
</style>
