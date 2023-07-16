import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 8rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export const Tab = styled.button`
  background-color: ${(props) => (props.active ? "#004FB4" : "#4F6C92")};
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid gray;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: 0.5rem 1rem;
`;

export const Button = styled.button`
  border: 1px solid ${(props) => props.backgroundColor};
  color: ${(props) => props.backgroundColor};
  font-weight: bold;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
`;

export const StyledInput = styled.input`
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-left: 20px;
`;
