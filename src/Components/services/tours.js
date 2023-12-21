import axios from "axios";

class TourDataService {
    async getAllTour() {
        return await axios.get("http://localhost:9090/tour")
    }
    async getTourDetail(paramName) {
        return await axios.get(`http://localhost:9090/tour/${paramName}/chooseTime`)
    }
    async getTourBySearching(numberOfTicket, date) {
        if (!!numberOfTicket && !!date) return await axios.get(`http://localhost:9090/tour?numberOfTicket=${numberOfTicket}&date=${date}`);
        if (!!date && !numberOfTicket) return await axios.get(`http://localhost:9090/tour?date=${date}`);
        if (!date && !!numberOfTicket) return await axios.get(`http://localhost:9090/tour?numberOfTicket=${numberOfTicket}`);
        return await axios.get("http://localhost:9090/tour");
    }
}

export default new TourDataService();
