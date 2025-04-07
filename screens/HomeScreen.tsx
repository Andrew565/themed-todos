import React, { useContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { FlatList } from "react-native";
import { ThemeProps, TodoItem } from "../components/TodoItem";
import Foundation from "@expo/vector-icons/Foundation";
import { Theme, themes } from "../types/theme";
import { ThemeChangerContext, ThemeContext } from "../data/ThemeContext";
import { ImgBkg } from "../components/ImgBkg";

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: transparent;
  font-family: ${(props: ThemeProps) => props.theme.font};
`;

const Header = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${(props: ThemeProps) => props.theme.textSecondary};
  font-family: ${(props: ThemeProps) => props.theme.font};
`;

const ThemeScroller = styled.ScrollView`
  flex: 0.1;
  margin-bottom: 20px;
  height: 44px;
`;

const ThemeButton = styled.TouchableOpacity<{ isSelected: boolean; themeColor: string }>`
  padding: 10px;
  height: 44px;
  border-radius: 8px;
  margin-right: 10px;
  border-width: 2px;
  background-color: ${(props: any) => props.themeColor};
  border-color: ${(props: any) => (props.isSelected ? props.theme.accent : "transparent")};
`;

const ThemeText = styled.Text<{ color: string }>`
  font-size: 14px;
  font-weight: bold;
  color: ${(props: any) => props.color};
`;

const InputContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  border-radius: 8px;
  padding-horizontal: 16px;
  margin-right: 10px;
  font-size: 16px;
  background-color: ${(props: ThemeProps) => props.theme.inputBackground};
  color: ${(props: ThemeProps) => props.theme.inputText};
  font-family: ${(props: ThemeProps) => props.theme.font};
`;

const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ThemeProps) => props.theme.buttonBackground};
`;

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function HomeScreen() {
  const theme = useContext(ThemeContext) as Theme;
  const themeChanger = useContext(ThemeChangerContext) as React.Dispatch<React.SetStateAction<Theme>>;
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodo.trim(),
          completed: false,
        },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <ImgBkg>
        <Container>
          <Header>
            <Title>Todo List</Title>
          </Header>

          <ThemeScroller horizontal showsHorizontalScrollIndicator={false}>
            {themes.map((t) => (
              <ThemeButton
                key={t.name}
                isSelected={theme.name === t.name}
                themeColor={t.cardBackground}
                onPress={() => themeChanger(t)}
              >
                <ThemeText color={t.textPrimary}>{t.name}</ThemeText>
              </ThemeButton>
            ))}
          </ThemeScroller>

          <InputContainer>
            <Input
              placeholder="Add a new todo..."
              placeholderTextColor={theme.textSecondary}
              value={newTodo}
              onChangeText={setNewTodo}
            />
            <AddButton onPress={addTodo}>
              <Foundation name="sheriff-badge" size={24} color={theme.buttonText} />
            </AddButton>
          </InputContainer>

          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem todo={item} onToggle={toggleTodo} onDelete={deleteTodo} />}
            keyExtractor={(item) => item.id}
          />
        </Container>
      </ImgBkg>
    </ThemeProvider>
  );
}
