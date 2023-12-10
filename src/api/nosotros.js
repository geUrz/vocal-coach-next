import { ENV } from "@/utils"

export class Nosotros{
  async getAll(){
    try {
      const populateFilter = 'populate=*'
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.NOSOTROS}?${populateFilter}`
      const response = await fetch(url)
      const result = await response.json()

      if(response.status !== 200) throw result

      return result

    } catch (error) {
        throw error
    }
  }
}