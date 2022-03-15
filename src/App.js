import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "../src/components/home";
import BmiCalculator from "../src/components/bmi";
import BankLoanSimulation from "../src/components/cicilan_bank";
import GrandTotalCalculator from "../src/components/harga_akhir";
import Convertions from "../src/components/konversi_bilangan"; 

function App() {
	return (
		<div className="flex justify-center p-6 w-screen h-screen bg-purple-300 overflow-y-auto">
			<div className="max-w-6/12">
        <div className="items-center justify-center mb-4 text-sm text-gray-600 font-semibold tracking-wide">
				  <div className="flex justify-center items-center mx-2 p-6 w-full bg-white rounded-xl shadow-lg">
            <table>
              <tr>
              <Link
                className="mx-2 px-4 py-2 rounded-xl text-purple-600 hover:bg-gray-200 transition-all duration-300 ease-in-out no-underline"
                to="/"
              >
                <td>Home</td>
              </Link>
              <Link
                className="mx-2 px-4 py-2 rounded-xl text-purple-600 hover:bg-gray-200 transition-all duration-300 ease-in-out no-underline"
                to="/bmi"
              >
                <td>BMI Calculator</td>
              </Link>
              <Link
                className="mx-2 px-4 py-2 rounded-xl text-purple-600 hover:bg-gray-200 transition-all duration-300 ease-in-out no-underline"
                to="/cicilan_bank"
              >
                <td>Bank Loan Simulation</td>
              </Link>
              <Link
                className="mx-2 px-4 py-2 rounded-xl text-purple-600 hover:bg-gray-200 transition-all duration-300 ease-in-out no-underline"
                to="/harga_akhir"
              >
                <td>Grand Total Calculator</td>
              </Link>
              <Link
                className="mx-2 px-4 py-2 rounded-xl text-purple-600 hover:bg-gray-200 transition-all duration-300 ease-in-out no-underline"
                to="/konversi_bilangan"
              >
                <td>Convertions</td>
              </Link>
              </tr>
            </table>
          </div>
					<Routes>
            <Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/bmi"
							element={<BmiCalculator />}
						/>
						<Route
							path="/cicilan_bank"
							element={<BankLoanSimulation />}
						/>
						<Route
							path="/harga_akhir"
							element={<GrandTotalCalculator />}
						/>
						<Route
							path="/konversi_bilangan"
							element={<Convertions />}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;