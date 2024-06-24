"use client";
import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ResponsiveTable = ({ data }) => {
  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Table aria-label="responsive table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "white" }}>CPM</TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Impressions
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Reach
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Clicks
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              CTR
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Spend
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Frequency
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Stat Date
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Channel
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Unique Clicks
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Date Start
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Date Stop
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Age
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Gender
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell style={{ color: "white" }}>{row.cpm}</TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.impressions}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.reach}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.clicks}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.ctr}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.spend}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.frequency}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.stat_date}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.channel}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.unique_clicks}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.date_start}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.date_stop}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.age}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.gender}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResponsiveTable;
