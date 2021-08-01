import axios, {AxiosInstance} from "axios"

class BaseService {
  protected axios: AxiosInstance
  public static authToken: string

  constructor(baseURL = process.env.REACT_APP_API_EDULAR_API) {
    this.axios = axios.create({
      timeout: 30 * 1000,
      baseURL
    })
  }

  protected setHeaderFromParams(params) {
    const headers = {
      "Content-Type": "application/json"
    }
    headers["authorization"] = `Bearer ${BaseService.authToken}`
    const res: any = {}
    res.headers = {...headers, ...(params.headers || {})}
    res.params = params
    return res
  }
  public static setAuthToken(token) {
    BaseService.authToken = token
  }
  async get(url, params = {}) {
    const config = this.setHeaderFromParams(params)
    const response = await this.axios.get(url, config)
    return response
  }

  async post(url, data, params = {}) {
    const config = this.setHeaderFromParams(params)
    const response = await this.axios.post(url, data, config)
    return response
  }

  async put(url, data, params = {}) {
    const config = this.setHeaderFromParams(params)
    const response = await this.axios.put(url, data, config)
    return response
  }

  async delete(url, params = {}) {
    const config = this.setHeaderFromParams(params)
    const response = await this.axios.delete(url, config)
    return response
  }
}

export default BaseService
