import React from "react";
import { ContainerMetrics, ContainerStatus } from "./style";

const Status = ({ Category, collaborators, isProfit, number }) => {
  return (
    <ContainerMetrics>
      <p>{Category}</p>
      <strong>{collaborators}K</strong>
      <ContainerStatus color={isProfit ? 'green' : 'red'} backcolor={isProfit ? '#E4F8DD' : '#FFE2E1'}>
        {isProfit == true ? (
          <>
            <span class="material-symbols-outlined">arrow_drop_up</span>
            <p>{number}%</p>
          </>
        ) : (
            <>
            <span class="material-symbols-outlined">arrow_drop_down</span>
            <p>{number}%</p>
          </>
        )}
      </ContainerStatus>
    </ContainerMetrics>
  );
};

export default Status;
