import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import axios from "axios";

const Wrapper = styled.div`
  padding: 18px 30px;
  p {
    margin-top: 1rem;
  }
`;

const headers = [
  {
    name: "Name",
    value: "name",
  },
  {
    name: "Description",
    value: "description",
  },
  {
    name: "URL",
    value: "html_url",
  },
];

const apiURL = "https://api.github.com/users/React-avancado/repos";

const HomePage = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => setRows(response.data))
      .catch((error) => {
        strapi.notification.error(`API call limit exceeded, ${error}`);
      });
  }, []);

  return (
    <Wrapper>
      <Header
        title={{
          label: "React bla bla bla",
        }}
        content="A list of repositories bla bla bla"
      />

      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
