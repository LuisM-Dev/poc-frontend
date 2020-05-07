let mapToProposalHeaders = proposal => {
  const mappedProposal = {
    id: proposalIdFormatter(proposal.id),
    type: proposal.type,
    fields: {}
  };
  proposal.fields.reduce((proposalHeader, header) => {
    proposalHeader.fields[header.name] = {
      value: headerValueFormatter(header.value),
      error: false,
      message: '',
      required: headerRequiredFormatter(header.required),
      options: headerOptionsFormatter(header.options)
    };
    return proposalHeader;
  }, mappedProposal);
  return mappedProposal;
};

const mapToRequestBody = proposal => {
  const mappedProposal = {
    id: proposalIdDeFormatter(proposal.id),
    type: proposal.type
  };
  Object.keys(proposal.fields).reduce((proposalHeader, header) => {
    proposalHeader[header] = proposal.fields[header].value;
    return proposalHeader;
  }, mappedProposal);
  return mappedProposal;
};

const proposalIdFormatter = id => {
  const idFormat = '00000000' + id;
  const idLength = idFormat.length - 8;
  return `P-${idFormat.substr(idLength)}`;
};

const proposalIdDeFormatter = id => {
  const idNumber = parseInt(id.split('-')[1]);
  return idNumber.toString();
};

const headerOptionsFormatter = options => {
  if (options) {
    return options.map(option => ({ label: option, value: option }));
  }
  return null;
};

const headerValueFormatter = value => {
  return value === 'true' || value === 'false' ? value === 'true' : value;
};

const headerRequiredFormatter = required => {
  return required === 'true';
};

export { mapToProposalHeaders, mapToRequestBody };
