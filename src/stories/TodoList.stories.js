import TodoList from '../components/TodoList';

export default {
    title: 'Example/TodoList'
}

export const todoList = () => ({
    components: { TodoList },
    template: '<TodoList />',
});
