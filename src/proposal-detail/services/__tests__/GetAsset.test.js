import axios from 'axios';
import getAsset from '../GetAsset';
import * as serviceMapper from '../ServiceMapper';

jest.mock('axios');

describe('get asset', () => {
  const sampleAsset = {};
  const sampleRequestBody = { proposalId: 'some id' };

  it('get asset correctly', async () => {
    const responseMock = { data: [] };
    const expectedGetAsset = {};
    const sampleWebModel = {};
    jest
      .spyOn(serviceMapper, 'mapToGetRequestBody')
      .mockReturnValue(sampleRequestBody);
    jest.spyOn(serviceMapper, 'mapToWebModel').mockReturnValue(sampleWebModel);
    axios.post.mockResolvedValue(responseMock);
    const asset = await getAsset(sampleAsset);
    expect(asset).toEqual(expectedGetAsset);
  });

  it('get asset returns error', async () => {
    const responseMock = {
      response: { data: { errors: { error: 'error message' } } }
    };
    const expectedGetAsset = { errors: { error: 'error message' } };
    jest
      .spyOn(serviceMapper, 'mapToGetRequestBody')
      .mockReturnValue(sampleRequestBody);
    axios.post.mockRejectedValue(responseMock);
    const asset = await getAsset(sampleAsset);
    expect(asset).toEqual(expectedGetAsset);
  });
});
