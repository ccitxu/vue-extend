<template>
  <div id="app">
    <h1 @click="unbind()">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button v-demo="color">测试数据</button>
    <button @click="add()">点击开始加1</button>
    <button @click="jiebang()">解绑</button>
    <button @click="$message.success('提示数据')">提示框</button>
    <button @click="table()">提示框2</button>
    <button @click="message()">提示框3</button>
    <toast></toast>
  </div>
</template>
<script>
import toast from "./components/toast";
export default {
  components: {
    toast
  },
  name: "app",
  data() {
    return {
      msg: 1,
      color: "red"
    };
  },
  methods: {
    table() {
      this.$Dialog({
        tabledata: [
          {
            name: "lili2",
            sex: "女"
          },
          {
            name: "wenwen2",
            sex: "男"
          },
          {
            name: "wenwen2",
            sex: "男"
          },
          {
            name: "wenwen2",
            sex: "男"
          },
          {
            name: "wenwen2",
            sex: "男"
          },
          {
            name: "wenwen2",
            sex: "男"
          }
        ]
      });
    },
    jiebang() {
      this.$destroy();
    },
    add() {
      this.msg += 1;
    },
    message(){
      this.$messageBox({
          	 title:'提示',
	           content:'此操作将删除数据，是否继续？'
      }).then(res=>{
        console.log(res);
      })
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
