import {get} from "lodash"
import BaseService from "./Base"

class SAPService extends BaseService {
  //   async getAllSAP(type = "", params = {}) {
  //     const response = await this.get(`/v1/sap?type=${type}`, params)
  //     return get(response, "data", [])
  //   }
  //   async deleteSAP(id: number, params = {}) {
  //     const response = await this.delete(`/v1/sap/${id}`, params)
  //     return get(response, "data", [])
  //   }
  //   async updateSAPs(data: any, params = {}) {
  //     const response = await this.post(`/v1/sap/update-multi`, data, params)
  //     return get(response, "data", [])
  //   }
  //   async createSAP(data: any, params = {}) {
  //     const response = await this.post("/v1/sap", data, params)
  //     return get(response, "data", [])
  //   }
}

export default SAPService
