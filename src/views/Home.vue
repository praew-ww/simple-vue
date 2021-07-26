<template>
  <div>
      <br>
      <br>
      <ledger-create-form></ledger-create-form>
      <br>
      <br>
      <br>
      <br>
      <ledger-table></ledger-table>
  </div>
</template>

<script>
import LedgerCreateForm from '@/components/LedgerCreateForm'
import LedgerTable from '@/components/LedgerTable'
export default {
  components:{
    LedgerCreateForm,
    LedgerTable
  }

}
</script>


<style>
  div {

   background-color: bisque;
  }

  table{
    background-color: chocolate;
  }

 .new{
    
  font-size: 25px;
  font-weight: bold;
  

 }
  
</style>