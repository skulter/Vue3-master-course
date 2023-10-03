const bus = new Vue({});

const ChildComponent = {
    methods: {
        clickChildButton: function() {
            console.log("click ChildButton")
            bus.$emit('custom-event',{data: 'custom'})
        },
    },
    template: /* html */`
        <div>
            <em>ChildComponent</em>
            <button
                @click="clickChildButton"
            >
                Child emit Event
            </button>
            <hr/> 
        </div>
    `
}

const ParentComponent = {
    components: {
      ChildComponent  
    },
    template: /* html */`
        <div>
            <em>ParentComponent</em>
            <button>Parent emit Event</button>
            <hr/>
            <child-component
            ></child-component>
        </div> 
    `
}

new Vue({
    components: {
        ParentComponent
    },
    el: "#bus",
    data: {
        event: ""
    },
    template: /* html */`
        <div>
            <em>RootComponent</em>
            <hr/>
            <parent-component
            ></parent-component>
        </div>
    `,
    mounted() {
        bus.$on("custom-event", function(data) {
            console.log("data: ", data)
        })
    }
})
