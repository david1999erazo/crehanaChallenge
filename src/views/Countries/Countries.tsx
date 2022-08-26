import React, { /* useCallback, */ useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "antd";
import { useQuery } from "@apollo/client";
import FiltersForm from "../../components/Filters/FiltersForm";
import COUNTRIES_QUERY from "../../api/CountriesService";
import "./Countries.css";



export default function Countries() {
  const navigate = useNavigate();

  const [queryParams, setQueryParams] = useState(null);
  const [currentValues, setCurrentValues] = useState(null);

  const { loading, error, data } = useQuery(COUNTRIES_QUERY, {
    variables: queryParams
      ? {
          filter: queryParams,
        }
      : {},
  });

  const submitCountrySearchForm = (values: any, queryParams: any) => {
    console.log("submitCountrySeatchForm", values);
    
    setQueryParams(queryParams);
    setCurrentValues(values);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  // Method to get the Columns for the external component Table
  function getCols() {
    const cols = [
      {
        title: "Code",
        dataIndex: "",
        render: (row: any) => (
          <div style={{ maxWidth: "50px" }}>{row.code}</div>
        ),
      },
      {
        title: "Country",
        dataIndex: "",
        render: (row: any) => (
          <div style={{ minWidth: "400px" }}>{row.name}</div>
        ),
      },
      {
        title: "Detail",
        dataIndex: "",
        key: "value",
        render: (row: any) => (
          <div style={{ minWidth: "100px" }}>
            <Button
              style={{ width: "80%" }}
              onClick={() => moreInformation(row.code)}
            >
              {" "}
              Details{" "}
            </Button>
          </div>
        ),
      },
    ];
    return cols;
  }

  // Method to redirect to detail country
  const moreInformation = (contryCode: any) => {
    navigate("/" + contryCode);
  };

  return (
    <div>
      <div className="containerFilters" style={{ marginBottom: "1em" }}>
        <FiltersForm
          currentValues={currentValues}
          onSubmit={submitCountrySearchForm}
        />
      </div>
      <div className="containerTable">
        <div className="center" style={{ width: "100%" }}>
          <Table
            rowKey={(s) => `${s.code}`}
            columns={getCols()}
            dataSource={data?.countries}
            bordered
            showHeader
            pagination={{ pageSize: 5 }}
          />
        </div>
      </div>
    </div>
  );
}
