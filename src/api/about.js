import { ENV } from "@/utils";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

export class About {
  async getAll() {
    try {
      const populateFilter = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ABOUT}?${populateFilter}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
noAuto;
