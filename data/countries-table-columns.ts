import { TableColumn } from "../types/types";

const GoalsArray: Array<TableColumn> = Array.from({ length: 17 }, (_, i) => {
  return {
    Header: `Goal ${i + 1}`,
    accessor: `Goal ${i + 1} Dash`, // accessor is the "key" in the data
  };
});

const countriesTableColumns: Array<TableColumn> = [
  {
    Header: "Flag",
    accessor: "id", // accessor is the "key" in the data
  },
  {
    Header: "Country",
    accessor: "Country", // accessor is the "key" in the data
  },
  {
    Header: "Code",
    accessor: "id", // accessor is the "key" in the data
    id: "flag",
  },
  {
    Header: "SDG Rank",
    accessor: "2020 SDG Index Rank", // accessor is the "key" in the data
  },
  {
    Header: "SDG Score",
    accessor: "2020 SDG Index Score", // accessor is the "key" in the data
  },
  {
    Header: "Regional Score",
    accessor: "Regional Score (0-100)", // accessor is the "key" in the data
  },
  ...GoalsArray,
];

export default countriesTableColumns;
