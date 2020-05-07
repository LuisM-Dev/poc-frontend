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

const clearErrorState = state => {
  const proposalFields = { ...state.proposal.fields };
  const updatedProposalFields = Object.keys(proposalFields).reduce(
    (fields, field) => {
      return {
        ...fields,
        [field]: {
          ...proposalFields[field],
          error: false,
          message: ''
        }
      };
    },
    {}
  );
  return {
    ...state,
    proposal: {
      ...state.proposal,
      fields: {
        ...updatedProposalFields
      }
    }
  };
};

export const actions = {
  GET_PROPOSAL: (state, proposalId) => {
    const editProposal = state.proposals.proposals.find(
      proposal => proposal.id === proposalId
    );
    return { proposal: { ...editProposal, edit: false } };
  },
  CREATE_PROPOSAL: (state, createdProposal) => {
    return updateState(state, { proposal: createdProposal });
  },
  EDIT_PROPOSAL: (state, proposal) => {
    return updateState(state, { ...proposal, edit: { status: true } });
  },
  SAVE_PROPOSAL: (state, fields) => {
    const clearedState = clearErrorState(state);
    const editStatus = !Object.keys(fields).length;
    const proposalState = { ...clearedState.proposal };
    const updatedFields = Object.keys(fields).reduce(
      (updatedFields, fieldKey) => {
        const fieldErrorMessage = fields[fieldKey];
        return {
          ...updatedFields,
          [fieldKey]: {
            ...proposalState.fields[fieldKey],
            message: fieldErrorMessage,
            error: !!fieldErrorMessage
          }
        };
      },
      {}
    );
    return {
      ...clearedState,
      proposal: {
        ...clearedState.proposal,
        fields: {
          ...clearedState.proposal.fields,
          ...updatedFields
        }
      },
      edit: {
        status: !editStatus
      },
      nextStage: {
        status: Object.keys(fields).length === 0
      }
    };
  },
  CANCEL_PROPOSAL: (state, proposal) => {
    return updateState(state, { ...proposal, edit: { status: false } });
  },
  SAVE_FIELD: (state, field) => {
    const fieldKey = Object.keys(field)[0];
    return {
      ...state,
      proposal: {
        ...state.proposal,
        fields: {
          ...state.proposal.fields,
          [fieldKey]: {
            ...state.proposal.fields[fieldKey],
            ...field[fieldKey]
          }
        }
      }
    };
  },
  VALIDATE_PROPOSAL: (state, fields) => {
    const nextStageStatus = !Object.keys(fields).length;
    const proposalState = { ...state.proposal };
    const updatedFields = Object.keys(fields).reduce(
      (updatedFields, fieldKey) => {
        return {
          ...updatedFields,
          [fieldKey]: { ...proposalState[fieldKey], ...fields[fieldKey] }
        };
      },
      {}
    );
    return {
      ...state,
      proposal: {
        ...state.proposal,
        ...updatedFields
      },
      nextStage: { status: nextStageStatus }
    };
  }
};
