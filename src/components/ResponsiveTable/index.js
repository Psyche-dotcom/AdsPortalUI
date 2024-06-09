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

const ResponsiveTable = () => {
  // Mock data
  const data = [
    {
      id: 1,
      adsId: "AD001",
      impressionCount: 100,
      dateTime: "2024-06-09 08:00",
      channel: "Google",
    },
    {
      id: 2,
      adsId: "AD002",
      impressionCount: 150,
      dateTime: "2024-06-09 09:00",
      channel: "Meta",
    },
    {
      id: 3,
      adsId: "AD003",
      impressionCount: 120,
      dateTime: "2024-06-09 10:00",
      channel: "Google",
    },
    {
      id: 4,
      adsId: "AD004",
      impressionCount: 90,
      dateTime: "2024-06-09 11:00",
      channel: "Meta",
    },
  ];

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
            <TableCell style={{ color: "white" }}>Ads Id</TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Impression count
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              DateTime
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Channel
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" style={{ color: "white" }}>
                {row.adsId}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.impressionCount}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.dateTime}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.channel}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResponsiveTable;
