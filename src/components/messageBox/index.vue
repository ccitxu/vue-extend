<template>
  <div v-if="isDialog">
    <h3>{{title}}</h3>
    <p>{{content}}</p>
    <button @click='clickConfirm()'>确定</button>
    <button @click="clickCancel()">取消</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDialog: false,
      title: "提示",
      content: "内容数据",
      resolve: "",
      reject: ""
    };
  },
  methods: {
    clickConfirm() {
      this.isDialog = false;
      this.resolve("confirm");
    },
    clickCancel() {
      this.isDialog = false;
      this.reject("cancel");
    },
    showMsgBox: function() {
		return new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;
		});
	}
  }
};
</script>