import { useState } from "react";
import ProductForm from "../components/ProductForm";
import GeminiModel from "../components/GeminiModel";
import useFetchData from "../components/UseFetchData";
import LineChartComponent from "../components/LineChart";
import LogoutButton from "../components/Logout";
import RadialBarChartComponent from "../components/RadialBar";
import MarimekkoChartComponent from "../components/MarimekkoChart";
import { FaChartLine, FaChartPie, FaChartArea } from 'react-icons/fa'; //
import { FaBook } from "react-icons/fa6";
import { SiConvertio } from "react-icons/si";
import { BsCoin } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    const [userInput, setUserInput] = useState(null);
    const [aiResponse, setAiResponse] = useState(null);
    const [selectedChart, setSelectedChart] = useState(null); // To track which chart is selected
    const data = useFetchData(); // Fetch data for charts

    const handleSubmitData = (data) => {
        setUserInput(data);
    };

    const handleAiResponse = (response) => {
        setAiResponse(response);
    };

    const handleChartSelection = (param) => {
        setSelectedChart(param);
    };

    // List of parameters for different chart types
    const parameters1 = [
        "Energy_Generated_kWh",
        "Pollution_Reduction_CO2_emissions_in_kg",
        "Methane_Emissions_Prevented_kg_CH4",
        "Biogas_Produced_m^3",
        "Reduction_in_Fossil_Fuel_Usage_kWh_equivalent",
        "Cost_Savings_in_Waste_Management_currency",
        "Organic_Fertilizer_Produced_kg",
        "Reduction_in_Land_Usage_sq_meters",
        "Reduction_in_Chemical_Fertilizer_Use_kg",
        "Reduction_in_Transport_Emissions_kg_CO2",
    ];

    const parameters2 = ["Odor_Reduction_%", "Improved_Soil_Health_%"];

    const parameters3 = ["Waste_Diverted_from_Landfill_kg", "Water_Saved_Kilo_liters", "Compost_Created_kg"];

    return (
        <section id="dashboard">
            <nav>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 36 34" fill="none">
                    <path d="M0.5 17C0.5 26.3888 8.33502 34 18 34C27.665 34 35.5 26.3888 35.5 17C35.5 7.61116 27.665 0 18 0C8.33502 0 0.5 7.61116 0.5 17Z" fill="#8CD381" />
                    <path d="M24.8828 24.4209C25.6938 23.6077 26.3291 22.668 26.7887 21.6017C27.2482 20.5355 27.478 19.4422 27.478 18.3217C27.478 17.0025 27.2408 15.7962 26.7664 14.7028C26.292 13.6095 25.5805 12.602 24.6317 11.6803C23.9806 11.0478 23.1713 10.5147 22.204 10.081C21.2366 9.64727 20.0972 9.30843 18.7856 9.06446C17.4741 8.82049 15.9905 8.66688 14.3348 8.60363C12.6791 8.54038 10.8374 8.57201 8.80962 8.69851C8.66079 10.6503 8.60963 12.4348 8.65614 14.0523C8.70265 15.6697 8.85148 17.1222 9.10262 18.4098C9.35377 19.6974 9.70723 20.823 10.163 21.7864C10.6188 22.7499 11.1815 23.5558 11.8513 24.2041C12.8 25.1257 13.8232 25.8215 14.9208 26.2914C16.0184 26.7612 17.1904 26.9962 18.4368 26.9962C19.7204 26.9962 20.8971 26.7838 21.9668 26.3591C23.0365 25.9344 24.0085 25.2884 24.8828 24.4209ZM22.0086 24.4209C21.5436 24.7282 21.0041 24.9631 20.3902 25.1257C19.7762 25.2884 19.1259 25.3697 18.439 25.3697C17.4516 25.3697 16.4928 25.1709 15.5626 24.7733C14.6324 24.3758 13.786 23.7975 13.0233 23.0384C12.521 22.5505 12.0931 21.9135 11.7396 21.1274C11.3862 20.3412 11.0978 19.4105 10.8746 18.3353C10.6513 17.26 10.5025 16.0447 10.4281 14.6893C10.3537 13.3339 10.3537 11.843 10.4281 10.2165C12.1768 10.1804 13.7441 10.203 15.1301 10.2843C16.516 10.3656 17.7392 10.5147 18.7996 10.7316C19.86 10.9484 20.7715 11.224 21.5343 11.5584C22.297 11.8927 22.9202 12.3038 23.4039 12.7918C24.1852 13.5688 24.7805 14.3911 25.1898 15.2586C25.5991 16.126 25.8037 17.0115 25.8037 17.9151C25.8037 18.7825 25.613 19.6907 25.2317 20.6394C24.8503 21.5882 24.3806 22.3517 23.8225 22.93C23.8225 22.93 23.1657 23.6566 22.0086 24.4209Z" fill="#F1FFC4" />
                    <path d="M19.4994 22.1709C19.7405 22.1709 19.8928 21.9192 19.7755 21.7145L18.4468 19.3972C18.2916 19.1266 18.4688 18.7896 18.7855 18.7531L20.9285 18.506C21.3089 18.4621 21.461 18.005 21.179 17.7532L16.4419 13.5233C16.3836 13.4712 16.3072 13.4423 16.228 13.4423C15.9868 13.4423 15.8345 13.6941 15.9519 13.8987L17.2806 16.216C17.4357 16.4866 17.2585 16.8236 16.9419 16.8601L14.7988 17.1072C14.4185 17.1511 14.2664 17.6082 14.5484 17.86L19.2855 22.09C19.3438 22.142 19.4202 22.1709 19.4994 22.1709Z" fill="#F1FFC4" />
                </svg>
                <NavLink to={"/dashboard"}>
                    <SiConvertio size={45} fill="#414141" />
                </NavLink>
                <NavLink>
                    <FaChartLine size={45} fill="#414141" />
                </NavLink>
                <NavLink to={"/Education"}>
                    <FaBook size={45} fill="#414141" />
                </NavLink>
                <NavLink>
                    <BsCoin size={45} fill="#414141" />
                </NavLink>
                <NavLink>
                    <CgProfile className="profile-icon" size={45} fill="#414141" stroke="#414141" />
                </NavLink>
                <LogoutButton />

            </nav>
            <div className="dashboard">
                <h1>Waste-to-Energy Conversion</h1>
                <ProductForm onSubmitData={handleSubmitData} />
                {userInput && <GeminiModel userInput={userInput} onResponse={handleAiResponse} />}
                {/* {aiResponse && (
                    <div>
                        <h3>Verified Response:</h3>
                        <pre>{JSON.stringify(aiResponse, null, 2)}</pre>
                    </div>
                )} */}
                <h2>Performance Metrics Over Time</h2>
                {data && data.length > 0 ? (
                    <div className="charts-container">
                        {/* Buttons for Chart Selection */}
                        <div className="chart-buttons">
                            {parameters1.map((param) => (
                                <button key={param} onClick={() => handleChartSelection(param)}>
                                    <FaChartLine /> {param.replace(/_/g, " ")}
                                </button>
                            ))}
                            {parameters2.map((param) => (
                                <button key={param} onClick={() => handleChartSelection(param)}>
                                    <FaChartPie /> {param.replace(/_/g, " ")}
                                </button>
                            ))}
                            {parameters3.map((param) => (
                                <button key={param} onClick={() => handleChartSelection(param)}>
                                    <FaChartArea /> {param.replace(/_/g, " ")}
                                </button>
                            ))}
                        </div>
                        {/* Render the selected chart */}
                        <div className="selected-chart">
                            {selectedChart && (
                                <>
                                    {/* <h3>{selectedChart.replace(/_/g, " ")}</h3> */}
                                    {/* Render the selected chart based on button click */}
                                    {parameters1.includes(selectedChart) && (
                                        <LineChartComponent
                                            data={[
                                                {
                                                    id: selectedChart,
                                                    data: data.map((entry) => ({
                                                        x: entry.date,
                                                        y: entry[selectedChart] ? parseFloat(entry[selectedChart]) : 0, // Ensure numeric values
                                                    })),
                                                },
                                            ]}
                                            title={selectedChart.replace(/_/g, " ")}
                                        />
                                    )}
                                    {parameters2.includes(selectedChart) && (
                                        <RadialBarChartComponent
                                            data={[
                                                {
                                                    id: selectedChart,
                                                    data: data
                                                        .map((entry) => ({
                                                            x: entry.date,
                                                            y: typeof entry[selectedChart] === "number" && !isNaN(entry[selectedChart]) ? entry[selectedChart] : 0, // Ensure valid number
                                                        }))
                                                        .filter((item) => item.y !== null && item.y !== undefined), // Remove invalid entries
                                                },
                                            ]}
                                            title={selectedChart.replace(/_/g, " ")}
                                        />
                                    )}
                                    {parameters3.includes(selectedChart) && (
                                        <MarimekkoChartComponent
                                            data={data.map((entry) => ({
                                                category: entry.date, // X-axis label (date)
                                                [selectedChart]: entry[selectedChart] ? parseFloat(entry[selectedChart]) : 0, // Ensure numeric values
                                            }))}
                                            title={selectedChart.replace(/_/g, " ")}
                                        />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <p>Loading data or no data available...</p>
                )}
            </div>
        </section>
    );
};

export default Dashboard;