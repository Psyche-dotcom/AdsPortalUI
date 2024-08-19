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

const ResponsiveCampaignTable = ({ data, onView }) => {
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
              Objective
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Start Time
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Budget Remaining
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              Daily Budget
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
                {row.status}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.objective}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.startTime}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.budgetRemaining}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.dailyBudget}
              </TableCell>
              <TableCell>
                <p
                  onClick={() => onView(row.id)}
                  className="cursor-pointer bg-white p-4 text-blue-700"
                >
                  View Campaign Info
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResponsiveCampaignTable;
