import React from 'react';
import { CheckCircle, Error, Info } from '@material-ui/icons';
import theme from '../theme';

const mapToRequestBody = (proposalId, proposalType) => {
  return {
    proposalId: proposalIdDeFormatter(proposalId),
    proposalType
  };
};

const mapToWebModel = response => {
  return response.map(lineItem => {
    const { subLineItems, status, ...item } = lineItem;
    return {
      ...item,
      id: Math.floor(Math.random() * 100),
      status: statusIconMapper(status),
      subRows: subLineItems.map(subLineItem => {
        const { status, ...item } = subLineItem;
        return {
          status: statusIconMapper(status),
          ...item
        };
      })
    };
  });
};

const proposalIdDeFormatter = id => {
  const idNumber = parseInt(id.split('-')[1]);
  return idNumber.toString();
};

const statusIconMapper = status => {
  if (status === 'ERROR') {
    return <Error style={{ fill: theme.palette.ibm.error }} />;
  } else if (status === 'INFO') {
    return <Info style={{ fill: theme.palette.ibm.blue }} />;
  } else {
    return <CheckCircle style={{ fill: theme.palette.ibm.success }} />;
  }
};

export { mapToRequestBody, mapToWebModel };
