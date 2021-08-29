import React, { useState } from "react";
import axios from 'axios';
import QuoteSmallTable from "./Quote/Quotes";
import './App.css';


export default function () {

  return (
    <div className="App">
      <QuoteSmallTable />
    </div>
  );
}
