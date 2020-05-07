import { actions } from '../proposals';

describe('validate store actions', () => {
  it('get all proposals should parse correctly', () => {
    const sampleState = {
      proposals: { all: [{ id: 'P-00000003', account: 'account 3' }] },
      searching: { status: false }
    };
    const sampleProposals = [
      { id: 'P-00000001', account: 'account 1' },
      { id: 'P-00000002', account: 'account 2' }
    ];
    const expectedStore = {
      proposals: {
        all: [
          { id: 'P-00000003', account: 'account 3' },
          { id: 'P-00000001', account: 'account 1' },
          { id: 'P-00000002', account: 'account 2' }
        ],
        checked: []
      },
      searching: { status: false }
    };

    const updatedStore = actions.GET_ALL_PROPOSALS(
      sampleState,
      sampleProposals
    );
    expect(updatedStore).toEqual(expectedStore);
  });

  it('update loading bar state', () => {
    const sampleState = {
      proposals: { all: [{ id: 'P-00000003', account: 'account 3' }] },
      searching: { status: false }
    };

    const loadingStatus = true;

    const expectedState = {
      proposals: { all: [{ id: 'P-00000003', account: 'account 3' }] },
      searching: { status: loadingStatus }
    };

    const updatedStore = actions.LOADING_BAR(sampleState, loadingStatus);

    expect(updatedStore).toEqual(expectedState);
  });
});
