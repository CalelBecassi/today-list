<template>
    <div>
        <div v-for="todo in todos" :key="todo.description">
            {{ todo.description }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            default: () => [],
        }
    }
}
</script>