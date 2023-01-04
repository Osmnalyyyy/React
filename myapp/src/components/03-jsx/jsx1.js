import React from "react";

const Jsx1 = () => {
  const message =
    "Class isimleri className içinde verilir ve " +
    "attribute'lar camelCaseolarak yazılır";

  return (
    <React.Fragment>
      <>
        <div>Tüm elementler tek bir root element içinde olmalı</div>
        <div className="title">
          <u>{message}</u>
        </div>
      </>
    </React.Fragment>
  );
};

export default Jsx1;
