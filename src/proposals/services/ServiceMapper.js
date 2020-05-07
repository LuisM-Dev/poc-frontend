const mapToWeb = proposals => {
  return proposals.map(proposal => ({
    ...proposal,
    id: proposalIdFormatter(proposal.id)
  }));
};

const proposalIdFormatter = id => {
  const idFormat = '00000000' + id;
  const idLength = idFormat.length - 8;
  return `P-${idFormat.substr(idLength)}`;
};

export { mapToWeb };
