import React, { useEffect } from "react";
import styled from "@emotion/styled";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import countriesData from "../data/countries-data.json";
import { DataCountry } from "../types/types";
import Select, {
  Option,
} from "../Components/Pages/SustainableDevelopmentGoals/Select";
import CountriesTable from "../Components/Pages/SustainableDevelopmentGoals/CountriesTable";
import appTheme from "../styles/appTheme";
import countriesTableColumns from "../data/countries-table-columns";
import PageTitle from "../Components/Pages/SustainableDevelopmentGoals/PageTitle";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${appTheme.globalMaxWidth};

  & > * {
    margin-top: 80px;
  }
`;

const SustainableDevelopmentGoalsPage = () => {
  // useStates
  const [selectedCountries, setSelectedCountries] =
    React.useState<Array<Option> | null>(null);
  const [displayedCountriesData, setDisplayedCountriesData] =
    React.useState<Array<DataCountry> | null>(null);

  // Countries JSON sorted alphabetically
  const allCountriesData = countriesData["SDR2020 Data"].sort(
    (countryA, countryB) => countryA.Country.localeCompare(countryB.Country),
  );

  // Countries JSON transformed into selectOptions
  const selectOptions = allCountriesData.map((country) => {
    return {
      value: country.Country,
      label: country.Country,
    };
  });

  // useEffect - Set which Countries Data will be displayed with Table
  useEffect(() => {
    const displayedCountries = selectedCountries?.map((country) => {
      return allCountriesData.find((countryObject) => {
        return countryObject.Country === country.value;
      });
    }) as Array<DataCountry>;

    // Display Data for each Selected Country
    setDisplayedCountriesData(displayedCountries);
  }, [allCountriesData, selectedCountries, setSelectedCountries]);

  const handleOnChange = (countriesList: Array<Option>): void => {
    setSelectedCountries(countriesList);
  };

  return (
    <StyledPageMain>
      <StyledSection>
        <PageTitle />
        <Select selectOptions={selectOptions} handleOnchange={handleOnChange} />
        <CountriesTable
          countriesList={displayedCountriesData}
          countriesTableColumns={countriesTableColumns}
        />
      </StyledSection>
    </StyledPageMain>
  );
};

export default SustainableDevelopmentGoalsPage;
