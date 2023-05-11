import React, { useCallback, useEffect, useState } from 'react';
import styles from "./Charts.module.css";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import fredAPI from '../../api/fredAPI';

function Card(props) {

  const [chartOption, setChartOption] = useState(props.item.options);

  const getData = useCallback(async(series_id) => {
    // 打到自建的代理伺服器位址再透過轉址至目標位址，避免CORS
    try{
      const data = await fredAPI(series_id);
      setChartOption((prevOption) => {
        return {
          ...prevOption,
          series: [
            {
              name: props.item.title,
              data: data
            }
          ]
        }
      })
    }catch(e){console.log(e)}
    
  },[])
  useEffect(() => {

    getData(props.item.series_id);
  }, [getData,props]);
  return (
    <div className={styles.chartFrame}>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={chartOption}
    />
    <div className={styles.chartInfo}>
      <p className={styles.source}>source: {props.item.source}</p>
      <p className={styles.date}>updated: {props.item.updated}</p>
    </div>
    <div>
      <p className={styles.document}>{props.item.document}</p>
    </div>
  </div>
  )
}

export default Card