<script setup>
import {parser} from "./parser.js";

const placeholderSql = `CREATE TABLE \`stat_alarm\` (
    \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT "主键id",
    \`name\` varchar(16) NOT NULL DEFAULT "" COMMENT "国家",
    \`age\` varchar(16) NOT NULL DEFAULT "" COMMENT "省",
    \`gender\` varchar(16) NOT NULL DEFAULT "" COMMENT "市",
    \`img\` varchar(16) NOT NULL DEFAULT "" COMMENT "区",
    \`created_at\` tinyint(17) unsigned NOT NULL DEFAULT "1" COMMENT "日期类型：1周2月",
    \`updated_at\` text NOT NULL COMMENT "数据"
)`

const placeholderGo = `type    StatAlarm    struct    {
    Id           int       \`json: "id"\`            // 主键id
    Name         string    \`json: "name"\`          // 国家
    Age          string    \`json: "age"\`           // 省
    Gender       string    \`json: "gender"\`        // 市
    Img          string    \`json: "img"\`           // 区
    CreatedAt    int       \`json: "created_at"\`    // 日期类型：1周2月
    UpdatedAt    string    \`json: "updated_at"\`    // 数据
}`

const sql = ref("");
const lastSql = ref("");

let change = function () {
  console.log("change")
  if (sql.value === "") {
    console.log("empty")
    return;
  }

  if (sql.value === lastSql.value) {
    console.log("same")
    return;
  }
  reBuild()
  lastSql.value = sql.value
}

import {ref} from "vue";

const goStruct = ref('')
const jsonSwitch = ref(true)
const commentSwitch = ref(true)
const gormSwitch = ref(false)
let reBuild = function () {
  console.log("reBuild")
  goStruct.value = parser(sql.value, jsonSwitch.value, commentSwitch.value, gormSwitch.value)
  console.log(goStruct.value)
}

</script>

<template>
  <div class="container">
    <div class="header">
      <a-form-item label="json">
        <a-switch v-model:checked="jsonSwitch" @change="reBuild"/>
      </a-form-item> &nbsp;
      <a-form-item label="gorm">
        <a-switch v-model:checked="gormSwitch" @change="reBuild"/>
      </a-form-item> &nbsp;
      <a-form-item label="注释">
        <a-switch v-model:checked="commentSwitch" @change="reBuild"/>
      </a-form-item>&nbsp;

    </div>
    <div class="content">

        <div class="left">
          <textarea
              id="sql"
              @change="change"
              @paste="change"
              @keydown="change"
              style="width: 100%;height: 100%;padding: 10px"
              :placeholder="placeholderSql"
              v-model="sql"
          >
          </textarea>
        </div>
      <div class="right" id="go">

        <textarea
            disabled
            :placeholder="placeholderGo"
            v-model="goStruct"
        ></textarea>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;

}

.header {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: #00ffff;
  height: 10%;
  width: 100%;
  max-height: 45px;
}

.content {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  flex: 1;
//height: 90%; width: 100%;

  > div {
    flex: 1;
    height: 90%;
    width: 48%;

    > textarea {
      resize: none;
      height: 100%;
      width: 100%;
      padding: 10px;
      font-family: 'Courier New', Courier, monospace;
    }
  }
}

.right {
  margin-left: 10px;
}

</style>
