app.component("todo-app", {
  template:
    /*html*/
    `
    <div class="todo-container">
       
       <input-items @addToItem="addItemToTask"></input-items>
       <display-items :data="tasks"></display-items>
    </div>
    
  `,

  data() {
    return {
      tasks: [
        { id: 1, text: "Buy groceries", completed: false },
        { id: 2, text: "Do laundry", completed: false },
        { id: 3, text: "Clean the house", completed: true },
      ],
    };
  },

  methods: {
    addItemToTask(item) {
      this.tasks.push({
        id: this.tasks.length + 1,
        text: item,
        completed: false,
      });
    },
  },
});
