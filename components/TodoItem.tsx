import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Theme } from "../types/theme";
import { useTheme } from "styled-components";

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface ThemeProps {
  completed: boolean;
  theme: Theme;
}

const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  margin-vertical: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: ThemeProps) => props.theme.cardBackground};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

const TodoContent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const TodoText = styled.Text<{ completed: boolean }>`
  font-size: 16px;
  margin-left: 12px;
  flex: 1;
  color: ${(props: ThemeProps) => props.theme.textPrimary};
  font-family: ${(props: ThemeProps) => props.theme.font};
  text-decoration-line: ${(props: ThemeProps) => (props.completed ? "line-through" : "none")};
  opacity: ${(props: ThemeProps) => (props.completed ? 0.7 : 1)};
`;

const DeleteButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const theme = useTheme();
  const checkboxColor = todo.completed ? theme.checkboxFill : theme.checkboxBorder;
  const accentColor = theme.accent;
  return (
    <Container>
      <TodoContent onPress={() => onToggle(todo.id)}>
        <MaterialCommunityIcons name={todo.completed ? "check-circle" : "circle"} size={24} color={checkboxColor} />
        <TodoText completed={todo.completed}>{todo.text}</TodoText>
      </TodoContent>
      <DeleteButton onPress={() => onDelete(todo.id)}>
        <MaterialCommunityIcons name="delete" size={24} color={accentColor} />
      </DeleteButton>
    </Container>
  );
};
