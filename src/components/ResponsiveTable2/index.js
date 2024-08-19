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

const ResponsiveTable2 = ({ data, onView }) => {
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
            <TableCell style={{ color: "white" }}>ID</TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Name
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Status
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Currency
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Owner
            </TableCell>

            <TableCell align="right" style={{ color: "white" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell style={{ color: "white" }}>{row.id}</TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.accountStatus}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.currency}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.owner}
              </TableCell>

              <TableCell>
                <p
                  onClick={() => onView(row.id)}
                  className=" cursor-pointer bg-white p-4 text-blue-700"
                >
                  View Ads Info
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResponsiveTable2;
