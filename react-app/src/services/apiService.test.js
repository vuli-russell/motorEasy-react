import { getTyres } from "./apiService";
import axios from "axios";

axios.get = jest.fn();

describe("api Service Tests", () => {

    const mockOKData = {data: [{mock: "data"},{mock: "data"},{mock: "data"}], status: 200};
    const mockEmptyData = {data: [], status: 200};
    const mockBadResponse = {status: 500};
    
    beforeEach(() => {
        axios.get.mockClear()
        axios.get.mockResolvedValue(mockOKData)
    })

    it("should call axios.get with searchStr and page as queries", async () => {
        await getTyres("mockSearchStr",1)
        expect(axios.get).toHaveBeenCalledTimes(1)
    })

    it("should return api response data if repsonse is ok", async () => {
        expect(await getTyres("mockSearchStr",1)).toEqual(mockOKData.data)
    })

    it("should return empty array if repsonse data is empty", async () => {
        axios.get.mockResolvedValue(mockEmptyData)
        expect(await getTyres("mockSearchStr",1)).toEqual([])
    })

    it("should return error if response status is not 200", async () => {
        axios.get.mockResolvedValue(mockBadResponse)
        expect(await getTyres("mockSearchStr",1)).toEqual("error")
    })
})