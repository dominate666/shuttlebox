<template>
  <div>
    <div>
      <select @change="setTargetIndex($event.target.value)">
        <option v-for="(title, index) of options" :key="index" :value="index">
          {{ title }}
        </option>
      </select>
    </div>
    <div class="transfer">
      <div class="box left-list">
        <h1 class="list-title">{{ leftTitle }}</h1>
        <div>
          <div
            v-for="item of leftListData"
            :key="item.id"
            :class="['list-item', item.disabled ? 'disabled' : '']"
          >
            <input
              type="checkbox"
              :disabled="item.disabled"
              :id="'__checkbox__' + item.id"
              @click="setCheckedData($event.target.checked,'left',item)"
            />
            <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
          </div>
        </div>
      </div>
      <div class="box button-group">
        <button
          :disabled="transferButtonDisabled.left"
          @click="removeRightListData(checkedData.right)"
        >&lt;</button>
        <button 
        :disabled="transferButtonDisabled.right"
        @click="addRightListData(checkedData.left)"
        
        >&gt;</button>
      </div>
      <div class="box right-list">
        <div>
         <h1 class="list-title">{{ rightTitle }}</h1>
        <div>
          <div
            v-for="item of rightListData"
            :key="item.id"
            :class="['list-item', item.disabled ? 'disabled' : '']"
          >
            <input
              type="checkbox"
              :disabled="item.disabled"
              :id="'__checkbox__' + item.id"
              @click="setCheckedData($event.target.checked,'right',item)"
            />
            <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>// @ts-nocheck

// @ts-nocheck-

import propsDefinition from "./extends/props";
import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckedData,
} from "./extends/hooks";
const props = defineProps(propsDefinition);
const options = props.data.map(({ title }) => title);
const [targetIndex, setTargetIndex] = useTargetIndex(0);
const [checkedData, addCheckedData, removeCheckedData] = useCheckedData();

const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkedData
);
const { leftTitle, leftListData,transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
);

const setCheckedData=(checked,leftOrRight,item)=>{
   checked?addCheckedData(leftOrRight,item):removeCheckedData(leftOrRight,item.id)
}

</script>

<style lang="less" scoped>
.transfer {
  width: 360px;
  height: 300px;
  display: flex;
  .box {
    width: 120px;
    height: 100%;
    .list-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      font-weight: normal;
      margin: 0;
      color: #666;
      border-bottom: 1px solid #ddd;
      background: #efefef;
      font-size: 14px;
    }
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
    &.button-group {
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      button {
        border: none;
        outline: none;
        width: 38px;
        height: 38px;
        background: orange;
        color: #fff;
        border-radius: 5px;
        &:disabled {
          opacity: 0.6;
        }
        &:nth-child(2) {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
