const updateState = (prevState, updateState) => {
  const updateFields = Object.keys(updateState).reduce(
    (updateFields, state) => {
      const update = { ...prevState[state], ...updateState[state] };
      return {
        ...updateFields,
        [state]: update
      };
    },
    {}
  );
  return { ...prevState, ...updateFields };
};

export const actions = {
  SEARCH_ASSET: (state, assets) => {
    if (assets.errors) {
      return {
        ...state,
        searching: {
          status: false
        }
      };
    }
    const searchedAssets = [...state.asset.searched, ...assets];
    return {
      ...state,
      asset: {
        ...state.asset,
        installedCustomerNumber: { value: '', error: false, message: '' },
        type: { value: '', error: false, message: '' },
        model: { value: '', error: false, message: '' },
        assetSerialNumber: { value: '', error: false, message: '' },
        searched: searchedAssets
      },
      searching: {
        status: false
      }
    };
  },
  SAVE_FIELD: (state, fields) => {
    const assetState = { ...state.asset };
    const updatedFields = Object.keys(fields).reduce(
      (updatedFields, fieldKey) => {
        return {
          ...updatedFields,
          [fieldKey]: { ...assetState[fieldKey], ...fields[fieldKey] }
        };
      },
      {}
    );
    return {
      ...state,
      asset: {
        ...state.asset,
        ...updatedFields
      }
    };
  },
  EDIT_ASSET: (state, asset) => {
    return updateState(state, { ...asset, edit: { status: true } });
  },
  SAVE_ASSET: (state, asset) => {
    return {
      ...state,
      asset: {
        ...state.asset,
        ...asset
      }
    };
  },
  VALIDATE_FIELD: (state, fields) => {
    const assetState = { ...state.asset };
    const updatedFields = Object.keys(fields).reduce(
      (updatedFields, fieldKey) => {
        return {
          ...updatedFields,
          [fieldKey]: { ...assetState[fieldKey], ...fields[fieldKey] }
        };
      },
      {}
    );
    return {
      ...state,
      asset: {
        ...state.asset,
        ...updatedFields
      }
    };
  },
  SAVE_PROPOSAL: (state, fields) => {
    return {
      ...state,
      asset: {
        ...state.asset,
        ...fields
      },
      edit: {
        ...state.edit,
        status: false
      },
      nextStage: {
        status: state.asset.selected.length > 0
      }
    };
  },
  CANCEL_PROPOSAL: (state, fields) => {
    return {
      ...state,
      asset: {
        ...state.asset,
        ...fields
      },
      edit: {
        ...state.edit,
        status: false
      }
    };
  },
  VALIDATE_PROPOSAL: (state, fields) => {
    return {
      ...state,
      nextStage: {
        ...state.nextStage,
        status: fields
      }
    };
  },
  SAVE_PROPOSAL_ID_TYPE: (state, info) => {
    return {
      ...state,
      proposal: {
        ...info
      }
    };
  },
  LOADING_BAR: (state, loadStatus) => {
    return {
      ...state,
      searching: {
        status: loadStatus
      }
    };
  },
  GET_ASSET: (state, assets) => {
    return {
      ...state,
      asset: {
        ...state.asset,
        selected: [...assets]
      }
    };
  }
};
