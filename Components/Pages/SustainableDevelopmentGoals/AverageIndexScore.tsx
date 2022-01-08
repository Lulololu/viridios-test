import styled from "@emotion/styled";
import { DataCountry } from "../../../types/types";
import addFunction from "../../../utils/add-function";
import appTheme from "../../../styles/appTheme";

const Paragraph = styled.p`
  padding: 4px 8px;
  color: black;
  background: ${appTheme.colors.primary.light};
  border-radius: 2px;
`;

const HighlightedData = styled.span`
  margin: 0 4px;
  font-weight: ${appTheme.fontWeight.bold};
`;

const AverageIndexScore = ({ countriesList }: AverageIndexScoreProps) => {
  // Return NULL if no countriesList
  if (!countriesList || countriesList?.length < 2) return null;

  // Map all Index Scores
  const allIndexScores = countriesList?.map((country) => {
    return Number(country["2020 SDG Index Score"]);
  });

  // Filter Undefined and Sum Up every Index Score
  const allIndexFilter = allIndexScores
    ?.filter((indexScore) => !Number.isNaN(indexScore))
    ?.reduce(addFunction, 0);

  // Set Index Score Average
  const averageScore = allIndexFilter / allIndexScores?.length;

  return (
    <Paragraph>
      You have selected
      <HighlightedData>{allIndexScores?.length} countries</HighlightedData>. The
      Index Score Average is :
      <HighlightedData>{Math.round(averageScore * 100) / 100}</HighlightedData>
    </Paragraph>
  );
};

export default AverageIndexScore;

interface AverageIndexScoreProps {
  countriesList: Array<DataCountry> | null;
}
