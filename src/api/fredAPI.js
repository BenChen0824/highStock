import axios from "axios";
const fredAPI = async (series_id) => {
  
  const headers = {
    'Target-URL': 'https://api.stlouisfed.org/fred'
  };


  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/series/observations?series_id=${series_id}&api_key=${process.env.REACT_APP_API_KEY}&file_type=json`,
      { headers }
    );

    if (!res.data) {
      return { err: "9999" }
    } else {
      let seriesData = [];
      res.data.observations.forEach(ob => {
        seriesData.push([new Date(ob.date).getTime(), Number(ob.value)]);
      });
      return seriesData
    }

  } catch (error) {
    return { err: "401" };
  }

};

export default fredAPI;
