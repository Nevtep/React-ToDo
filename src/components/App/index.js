import React, { useState } from 'react'
import { Box, Container } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn GraphQL", isCompleted: false },
    { text: "Read a Book", isCompleted: false },
    { text: "Build an App", isCompleted: false }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const clickTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <Container>
      <Box
        my={20}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <TodoForm addTodo={addTodo} />
        <List component="nav">
          {todos.map( (todo, index) => (
            <ListItem
              button
              onClick={() => {clickTodo(index)}}
              style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
              <ListItemText primary={todo.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default App;
