import React, { useContext } from 'react'
import "./DashboardFinance.css"
import BarChart from '../../Components/AllChart/BarChart'
import { DashboardContext } from '../../context/DashboardContext'

export default function DashboardFinance() {
  const { dataChart, yearData, changeYear } = useContext(DashboardContext)
  
  return (
    <div className='global-container'>
      <h1>Les resultats de l'annee : {yearData}</h1>

      <form >
        <label htmlFor="year">choisissez une date</label>
        <select onChange={changeYear} id="year">
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </form>

      <div className="dashboard-container">
        <BarChart dataBar={dataChart.chart1} name={"Chiffres bimestriels"} /> 
      </div>
    </div>
  )
}
