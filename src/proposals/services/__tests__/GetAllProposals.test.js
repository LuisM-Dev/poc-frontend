import axios from 'axios';
import GetAllProposals from '../GetAllProposals';
import * as ServiceMapper from '../ServiceMapper';

jest.mock('axios');

describe('get all proposals', () => {
  it('successfully', async () => {
    const sampleResponse = { data: [{}] };
    const expectedMappedResponse = [{}];
    jest
      .spyOn(ServiceMapper, 'mapToWeb')
      .mockReturnValue(expectedMappedResponse);
    axios.get.mockResolvedValue(sampleResponse);
    const response = await GetAllProposals();
    expect(response).toEqual(expectedMappedResponse);
  });

  it('failed', async () => {
    const sampleResponse = {
      response: { data: { errors: { field: 'error field' } } }
    };
    const expectedMappedResponse = { errors: { field: 'error field' } };
    axios.get.mockRejectedValue(sampleResponse);
    const response = await GetAllProposals();
    expect(response).toEqual(expectedMappedResponse);
  });
});
