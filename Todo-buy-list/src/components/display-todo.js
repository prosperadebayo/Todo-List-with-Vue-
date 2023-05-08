app.component("display-items", {
  props: {
    data: {
      type: Array,
      fontw: 600,
    },
  },
  template:
    /*html*/
    `
    <div class="display-list">
      <h3 :style={'text-align':textAll}>{{myTodos}}</h3>
      <ul>
        <li v-for="todo in data" :key="data.id" :style="{'font-weight':fontw}">{{todo.text}}</li>
      
      </ul>
    </div>
    
    
    
    
  `,
  data() {
    return {
      myTodos: "My Todo List",
      textAll: "center",
    };
  },
});
