import styled from "@emotion/styled";
import { DataCountry } from "../../../types/types";

const Container = styled.div`
  display: flex;
`;

const CountryRow = ({ country }: CountryRowProps) => {
  return (
    <Container>
      <span>{country.Country}</span> <span>{country.id}</span>
      <span>{country["2020 SDG Index Score"]}</span>
    </Container>
  );
};

export default CountryRow;

interface CountryRowProps {
  country: DataCountry;
}
