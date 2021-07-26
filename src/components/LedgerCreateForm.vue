<template>
  <div>
      <h3 style="font-family:verdana;">Add New Ledger</h3>
      <br>

      <div class="new" style="font-size:15px;">
          <div class="new0">
            <label for="date" >Date (dd/mm/yy) </label>
           <input  type="text" v-model="form.date">
          </div>
            <br>
           <div class="new1">
            <label for="Particular">Particular </label>
           <input  type="text" v-model="form.particular">
          </div>
          <br>

           <div class="new2">
            <label for="credit">Credit </label>
           <input  type="text" v-model="form.credit">
          </div>
          
          <br>
          <select v-model="form.action">
              <option value="" disabled>select action</option>
              <option >Deposit</option>
              <option>Withdraw</option>
          </select>

          <br>
          <div>
              <br>
              <button @click="addLedger">ADD</button>
              
          </div>
      </div>
  </div>
</template>

<script>
import LedgerStore from '@/store/Ledger'
export default {
    data(){
        return {
            form: {
                date: '',
                action: '',
                particular: '',
                credit: '',
                balance: 0
            }
        }
    },
    methods: {
        clearForm() {
            this.form = {
                date: '',
                action: '',
                particular: '',
                credit: '',
                balance: 0
            }
        },
        addLedger(){
            let payload = {
                date: this.form.date,
                action: this.form.action,
                particular: this.form.particular,
                credit: this.form.credit
            }

            console.log(payload)
            if(this.form.date === "" && this.form.action === "" && this.form.credit === ""){
                return alert("Please enter information")
            }
            if(this.form.date === "" ){
                return alert("Please enter date")
            }
            if(this.form.particular === "" ){
                return alert("Please enter particular")
            }
            if(this.form.credit === "" ){
                return alert("Please enter credit")
            }
            if(this.form.action === "" ){
                return alert("Please enter action")
            }
            LedgerStore.dispatch("addLedger", payload)
            this.clearForm()
        },
       
    }
}
</script>

<style>
    h3{
        padding: 10px;
        background: chartreuse;
        color: darkblue;
    }

    .new{
        
        color:rgb(240, 109, 196)
        
    }
    input[type=text] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 80px;
  box-sizing: border-box;
}
    

    button{
        padding: 10px 20px;
        background: rgb(216, 124, 155);
        color:floralwhite
    }
</style>