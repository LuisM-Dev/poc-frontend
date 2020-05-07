import axios from 'axios';
import createProposal from '../CreateProposal';
import * as serviceMapper from '../ServiceMapper';

jest.mock('axios');

describe('/create', () => {
  const sampleRequest = {
    proposalType: 'Some type'
  };

  it('create new proposal successfully', async () => {
    const responseMock = {
      data: {
        id: '1',
        type: 'Some type',
        fields: [
          {
            name: 'field',
            value: '12',
            required: false,
            options: []
          }
        ]
      }
    };
    const expectedResponse = {
      id: 'P-00000001',
      type: 'Some type',
      fields: {
        field: {
          error: false,
          message: '',
          value: '12',
          required: false,
          options: []
        }
      }
    };
    jest
      .spyOn(serviceMapper, 'mapToProposalHeaders')
      .mockReturnValue(expectedResponse);
    axios.post.mockResolvedValue(responseMock);
    const response = await createProposal(sampleRequest);
    expect(response).toEqual(expectedResponse);
  });

  it('create new proposal fails', async () => {
    const responseMock = {
      response: { data: { errors: { error: 'some error' } } }
    };
    const expectedResponse = { errors: { error: 'some error' } };
    axios.post.mockRejectedValue(responseMock);
    const response = await createProposal(sampleRequest);
    expect(response).toEqual(expectedResponse);
  });
});
