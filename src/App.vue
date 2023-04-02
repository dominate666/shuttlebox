
<script setup>

 const data=[
  {
    title:"华为",
    data:[
      {
        id:1,
        phone_name:'华为1',
        disabled:false
      },
      {
        id:2,
        phone_name:'华为2',
        disabled:true

      },
      {
        id:3,
        phone_name:'华为3',
        disabled:false
      }
    ]
  },
  {
    title:"小米",
    data:[
      {
        id:4,
        phone_name:'小米1',
        disabled:false
      },
      {
        id:5,
        phone_name:'小米2',
        disabled:false
      },
    ]

  }
 ]
</script>

<template>
   <div>
     <transfer
      :data="data"
      right-title="已选择机型"
     ></transfer>
   </div>
</template>

<style scoped lang="less">

</style>
