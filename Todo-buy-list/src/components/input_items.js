app.component("input-items", {
  data() {
    return {
      inputList: "",
      font: 600,
    };
  },

  template:
    /*html*/
    `
    <form id="form1" @submit.prevent="addToList">
        <input type="text" id="input" name="fname" v-model="inputList" :style="{'font-weight':font}">
        <input type="submit" id="btn" value="Add-Todo">
    </form>
    
    `,

  methods: {
    addToList() {
      let input = this.inputList;
      this.$emit("addToItem", input);
      this.inputList = "";
    },
  },
});
