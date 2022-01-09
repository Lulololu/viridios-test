import { useTable } from "react-table";
import styled from "@emotion/styled";
// @ts-ignore
import Flag from "react-world-flags";
import { DataCountry, TableColumn } from "../../../types/types";
import appTheme from "../../../styles/appTheme";
import shadowHorizontalScroll from "../../../styles/CSS-composition/shadow-horizontal-scroll";
import AverageIndexScore from "./AverageIndexScore";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * + * {
    margin-top: 8px;
  }
`;

const TableContainer = styled.div`
  width: 80vw;
  min-width: ${appTheme.globalMinWidth};
  max-width: ${appTheme.tableMaxWidth};
  max-height: 60vh;
  overflow: auto;
  border-radius: 4px;

  // Display Shadow if Horizontal Scroll
  ${shadowHorizontalScroll}

  * {
    text-align: center;
  }

  thead {
    color: ${appTheme.colors.primary.default};
  }

  th {
    padding: 16px 8px;
    color: ${appTheme.colors.secondary.lighter};
    white-space: nowrap;
    text-align: center;
    text-transform: uppercase;
    background: ${appTheme.colors.primary.darker};
  }

  th:first-of-type {
    color: transparent;
  }

  tbody {
    overflow: scroll;

    // Table Rows
    tr:nth-of-type(even) {
      background: ${appTheme.colors.tertiary.light};
    }
    tr:nth-of-type(odd) {
      background: ${appTheme.colors.tertiary.lighter};
    }
  }

  /* Adapt Scrollbar to Table */
  ::-webkit-scrollbar {
    height: 8px;
    background-color: ${appTheme.colors.tertiary.lighter};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${appTheme.colors.tertiary.darker};
  }
`;

const StyledFlag = styled(Flag)`
  width: 24px;
  margin: auto;
  overflow: hidden;
  border-radius: 2px;
`;

const StyledTD = styled.td`
  padding: 16px 8px;
  text-align: center;
  vertical-align: middle;
`;

const NoDataSpan = styled.span`
  font-style: italic;
`;

const GoalColor = styled.div<{
  backgroundColor: "green" | "yellow" | "orange" | "red" | "grey";
}>`
  width: 12px;
  height: 8px;
  margin: auto;
  border-radius: 2px;

  ${({ backgroundColor }) => {
    if (backgroundColor === "green")
      return `background: ${appTheme.colors.green}`;
    if (backgroundColor === "yellow")
      return `background: ${appTheme.colors.yellow}`;
    if (backgroundColor === "orange")
      return `background: ${appTheme.colors.orange}`;
    if (backgroundColor === "red") return `background: ${appTheme.colors.red}`;
    if (backgroundColor === "grey")
      return `background: ${appTheme.colors.grey}`;
  }}
`;

const CountriesTable = ({
  countriesList,
  countriesTableColumns,
}: CountriesTableProps) => {
  if (!countriesList) return null;
  const data = countriesList;
  const columns = countriesTableColumns;

  // @ts-ignore
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // If no Country Data is displayed, do not display Table
  if (countriesList.length === 0) return null;

  return (
    <Container>
      <AverageIndexScore countriesList={countriesList} />

      <TableContainer>
        <table {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header

                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}

          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        if (cell.column.Header === "Flag") {
                          return (
                            <StyledTD {...cell.getCellProps()}>
                              <StyledFlag code={cell.value} />
                            </StyledTD>
                          );
                        }
                        // @ts-ignore
                        if (cell.column.Header?.includes("Goal")) {
                          return (
                            <StyledTD {...cell.getCellProps()}>
                              <GoalColor backgroundColor={cell.value} />
                              <StyledFlag code={cell.value} />
                            </StyledTD>
                          );
                        }
                        if (!cell.value) {
                          return (
                            <StyledTD {...cell.getCellProps()}>
                              <NoDataSpan>No Data</NoDataSpan>
                            </StyledTD>
                          );
                        }

                        return (
                          <StyledTD {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </StyledTD>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
};

export default CountriesTable;

interface CountriesTableProps {
  countriesList: Array<DataCountry> | null;
  countriesTableColumns: Array<TableColumn>;
}
