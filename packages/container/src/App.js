import React from "react";
import { mount } from "marketing/MarketingApp";

import MarketingApp from "./components/MarketingApp";

export default () => {
  return (
    <div>
      <h1> Container </h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
