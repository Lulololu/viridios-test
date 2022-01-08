import styled from "@emotion/styled";
import React from "react";
import SelectLib from "react-select";
import appTheme from "../../../styles/appTheme";

const SelectContainer = styled.div`
  & > * + * {
    margin-top: 4px;
  }
`;

const SelectInfo = styled.span`
  font-weight: ${appTheme.fontWeight.bold};
`;

const StyledSelect = styled(SelectLib)`
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  max-width: calc(${appTheme.tableMaxWidth} - 96px);
  max-height: 128px;
  border: solid 2px ${appTheme.colors.secondary.darker};
  border-radius: 6px;

  /* Control DIV */
  & > div:first-of-type {
    border: none;
    border-radius: 6px;
  }
`;

const customStyles = {
  control: () => ({
    display: "flex",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    background: "white",
  }),
};

const Select = ({ selectOptions, handleOnchange }: SelectProps) => {
  if (!selectOptions) return null;

  return (
    <SelectContainer>
      <SelectInfo>Chose one or multiple countries</SelectInfo>
      <StyledSelect
        styles={customStyles}
        id="long-value-select"
        instanceId="long-value-select"
        placeholder="Countries"
        options={selectOptions}
        isMulti
        isSearchable
        onChange={(optionsArr) => handleOnchange(optionsArr as Array<Option>)}
      />
    </SelectContainer>
  );
};

export default Select;

export interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  selectOptions: Array<Option> | null;
  handleOnchange: (selectOption: Array<Option>) => void;
}
