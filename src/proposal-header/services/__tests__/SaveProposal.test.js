import axios from 'axios';
import saveProposal from '../SaveProposal';
import * as serviceMapper from '../ServiceMapper';

jest.mock('axios');

describe('/header', () => {
  const sampleHeaders = {
    id: 'P-00000001',
    type: 'some type',
    fields: {
      account: {
        value: 'some account',
        error: false,
        message: ''
      }
    }
  };

  it('save proposal headers successfully', async () => {
    const responseMock = { data: [] };
    const sampleRequestBody = {
      id: '1',
      type: 'some type',
      account: 'some account'
    };
    jest
      .spyOn(serviceMapper, 'mapToRequestBody')
      .mockReturnValue(sampleRequestBody);
    axios.post.mockResolvedValue(responseMock);
    const response = await saveProposal(sampleHeaders);
    expect(response).toEqual(responseMock.data);
  });

  it('save proposal headers returns errors', async () => {
    const responseMock = {
      response: { data: { errors: { field: 'field is invalid' } } }
    };
    const expectedResponse = { errors: { field: 'field is invalid' } };
    axios.post.mockRejectedValue(responseMock);
    const response = await saveProposal(sampleHeaders);
    expect(response).toEqual(expectedResponse);
  });
});
