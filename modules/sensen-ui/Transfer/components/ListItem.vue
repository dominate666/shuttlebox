<template>
   <!-- :key="item.id" 必须存在，否则select  change的时候数据界面显示有问题 -->
  <div
    v-for="item of data"
    :key="item.id"
    :class="['list-item', item.disabled ? 'disabled' : '']"
     :draggable="!item.disabled"
     @dragstart="dragItem(item)"
  >
    <input
      type="checkbox"
      :disabled="item.disabled"
      :id="'__checkbox__' + item.id"
      @click="checkboxClick($event.target.checked, leftOrRight, item)"
    />
    <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
  </div>
</template>

<script setup>
// @ts-nocheck

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  leftOrRight: {
    type: String,
    validator(value) {
      return ["left", "right"].includes(value);
    },
  },
});
const emit = defineEmits(["checkboxClick",'dragItem']);
const checkboxClick = (checked, leftOrRight, item) => {
  emit("checkboxClick", checked, leftOrRight, item);
};
const dragItem=(item)=>{
    emit('dragItem',item)
}
</script>

<style lang="less" scoped>
.list-item {
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 12px;
  color: #666;
  &.disabled {
    opacity: 0.6;
  }
}
</style>
