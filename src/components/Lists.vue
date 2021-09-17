<template>
    <div>
        <div v-for="lista in listas" :key="lista.nome">
            {{ lista.nome }}
            <TodoList :todos="lista.todos"></TodoList>
        </div>
    </div>
</template>

<script>
import TodoList from './TodoList.vue'
export default {
    props: {
        listas: {
            type: Array,
            default: () => [],
        }
    },
    components: {
        TodoList,
    }
}
</script>