
const TodoForm = {
    props: ["todo"],
    data: function() {
        return {
            form: {
                todo: ""
            }
        }        
    },
    template: /* html */`
        <form 
            id="todoForm"
            v-on:submit.prevent="$emit('form-submit',form.todo)"
        >
            <input placeholder="할일을 작성해주세요." type="text" v-model="form.todo" >
            <button type="submit">submit</button>
        </form>
    `
}


// Global Registration
// Vue.component("todo-form", formDefinition)

