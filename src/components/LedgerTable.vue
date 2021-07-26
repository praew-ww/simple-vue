<template>
  <div>
      <table>
          <thead>
              <tr>
                <th>#</th>
                <th>Date (dd/mm/yy)</th>
                <th>Action</th>
                <th>Particular</th>
                <th>Credit</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(led, index) in ledgers" :key="index">
                <td>{{ index+1}} </td>
                <td >{{ led.date }}</td>
                <td >{{ led.action }}</td>
                <td >{{ led.particular }}</td>
                <td >{{ led.credit }}</td>
              </tr>
          </tbody>
      </table>
      <br>
      <br>
    <div class="bl"><label ><b>Balance {{this.balance}} baht.</b></label></div>
    <br>
    <br>
  </div>
</template>

<script>
import LedgerStore from '@/store/Ledger'
export default {
    data(){
        return {
            ledgers: [],
            editIndex: -1,
            form: {
                date: '',
                particular: '',
                credit: '',
            },
            balance: 0
        }
    },
    created(){
        this.fetchLedger()
        this.calBalance()
    },
    methods: {
        fetchLedger(){
            LedgerStore.dispatch('fetchLedger')
            this.ledgers = LedgerStore.getters.ledgers
        },
        calBalance(){
            this.balance = 0
            this.ledgers.forEach((led) => {
                if(led.action === "Deposit"){
                    this.balance += Number(led.credit)
                }else if(led.action === "Withdraw"){
                    this.balance -= Number(led.credit)
                }
                
            })
            
        }
    },
    beforeUpdate() {
        this.calBalance();
    },
}
</script>

<style>

thead {
    background: rgb(250, 76, 53);
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #742121;
  text-align: left;
  padding: 8px;
  color: rgb(3, 3, 27);
  
}
tbody{
  background-color: #f8c595;
}

tr:nth-child(even) {
  background: rgb(248, 127, 79);
}
.bl{
    color: red;
}







</style>