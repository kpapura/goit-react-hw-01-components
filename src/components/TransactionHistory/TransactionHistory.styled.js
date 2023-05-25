import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table` 
 border-collapse: collapse;}

th, td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #ebebeb;
}

td:first-child,
th:first-child {
  padding-left: 20px;
}

td:last-child,
th:last-child {
  padding-right: 20px;
}
`;
