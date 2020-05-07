const mapToRequestBody = searchAsset => {
  return {
    proposalId: proposalIdDeFormatter(searchAsset.proposal.id),
    proposalType: searchAsset.proposal.type,
    installedCustomerNumber: searchAsset.asset.installedCustomerNumber.value,
    type: searchAsset.asset.type.value,
    model: searchAsset.asset.model.value,
    assetSerialNumber: searchAsset.asset.assetSerialNumber.value
  };
};

const mapToGetRequestBody = asset => {
  return {
    proposalId: proposalIdDeFormatter(asset.proposal.id)
  };
};

const mapToWebModel = retrievedAsset => {
  return retrievedAsset.map(asset => ({
    ...asset,
    id: Math.floor(Math.random() * 100)
  }));
};

const proposalIdDeFormatter = id => {
  const idNumber = parseInt(id.split('-')[1]);
  return idNumber.toString();
};

export { mapToRequestBody, mapToWebModel, mapToGetRequestBody };
