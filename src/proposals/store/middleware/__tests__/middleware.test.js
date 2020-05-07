import { middleware } from '../proposals';
import axios from 'axios';

jest.mock('axios');

describe('validate middleware actions', () => {
  it('validate get proposals', async () => {
    const sampleProposals = {
      data: [
        { id: 'P-00000001', account: 'account 1' },
        { id: 'P-00000002', account: 'account 2' }
      ]
    };

    const expectedProposals = [
      { id: 'P-00000001', account: 'account 1' },
      { id: 'P-00000002', account: 'account 2' }
    ];

    axios.get.mockResolvedValue(sampleProposals);
    const updatedMiddleware = await middleware.GET_ALL_PROPOSALS();
    expect(updatedMiddleware).toEqual(expectedProposals);
  });

  it('validate loading bar status', () => {
    const sampleLoadingStatus = true;

    const updatedMiddleware = middleware.LOADING_BAR('', sampleLoadingStatus);
    expect(updatedMiddleware).toEqual(sampleLoadingStatus);
  });
});
