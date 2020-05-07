export default proposal => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedProposal = {
        installedCustomerNumber: { value: '', error: false, message: '' },
        type: { value: '', error: false, message: '' },
        model: { value: '', error: false, message: '' },
        assetSerialNumber: { value: '', error: false, message: '' },
        searched: [],
        searchedChecked: [],
        selected: [...proposal.selected],
        selectedChecked: []
      };
      resolve(savedProposal);
    }, 1000);
  });
};
