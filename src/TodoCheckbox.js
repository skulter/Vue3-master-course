const TodoCheckbox = {
    model: {
        prop: "checked",
        event: "change"
    },
    template: /* html */`
        <input
            type="checkbox"
            value="checkbox value"
            :checked="checked"
            v-on:change="$emit('change',$event.target.checked)"
        />
    `
}