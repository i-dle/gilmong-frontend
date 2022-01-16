import React, { ReactEventHandler } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
interface SearchBarProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  width: string;
  height: string;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { width, value, height, placeholder, onChange } = props;

  return (
    <SearchWrapper width={width} height={height}>
      <SearchIconBox></SearchIconBox>
      <SearchBox
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></SearchBox>
    </SearchWrapper>
  );
};

const SearchBox = styled.input`
  background-color: inherit;
  border: none;
  width: 100%;
  padding: 0 16px;
  color: #9e9e9e;
  font-size: 15px;
  font-weight: 400;
`;

const SearchIconBox = styled(SearchIcon)`
  margin-left: 23px;
`;

const SearchWrapper = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ height }) => `calc(${height} / 2)`};
  background-color: #f1f1f5;
  color: #9e9e9e;
  display: flex;
  align-items: center;
`;

export default SearchBar;
