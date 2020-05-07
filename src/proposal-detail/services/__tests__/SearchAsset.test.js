import axios from 'axios';
import searchAsset from '../SearchAsset';
import * as serviceMapper from '../ServiceMapper';

jest.mock('axios');

describe('search asset', () => {
  const sampleAsset = {};
  const sampleRequestBody = {};

  it('search asset successfully', async () => {
    const responseMock = { data: {} };
    const sampleWebModel = {};
    jest
      .spyOn(serviceMapper, 'mapToRequestBody')
      .mockReturnValue(sampleRequestBody);
    jest.spyOn(serviceMapper, 'mapToWebModel').mockReturnValue(sampleWebModel);
    axios.post.mockResolvedValue(responseMock);
    const asset = await searchAsset(sampleAsset);
    expect(asset).toEqual({});
  });
  it('search asset returns error', async () => {
    const responseMock = { response: { data: { errors: {} } } };
    const expectedResponse = { errors: {} };
    jest
      .spyOn(serviceMapper, 'mapToRequestBody')
      .mockReturnValue(sampleRequestBody);
    axios.post.mockRejectedValue(responseMock);
    const asset = await searchAsset(sampleAsset);
    expect(asset).toEqual(expectedResponse);
  });
});
