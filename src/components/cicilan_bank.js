import { useState } from "react";

export default function Cicilan_bank() {
  const [nominal, setNominal] = useState("");
  const [bunga, setBunga] = useState("");
  const [periode, setPeriode] = useState("");
  const [angsuranResult, setAngsuran] = useState(null);

  function hitung() {
    var cicilan = Number(nominal / periode);
    var totalBunga = Number(nominal * (bunga/100) / 12);
    var angsuran = cicilan + totalBunga
    setAngsuran(angsuran);
    setNominal("");
    setBunga("");
    setPeriode("");
  }

  return (
      <div className="w-full mt-10 px-40">
      <form className="bg-white shadow-md rounded-lg px-8 pt-8 pb-8 mb-4">
        <h1 className="text-center mb-4 text-xl">Cicilan Bank</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nominal
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nominal "
            type="text"
            placeholder="Nominal (Rupiah)"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bunga
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bunga"
            type="bunga in kg"
            placeholder="Bunga (%)"
            value={bunga}
            onChange={(e) => setBunga(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Periode
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="periode"
            placeholder="periode"
            value={periode}
            onChange={(e) => setPeriode(e.target.value)}
          >
              <option value="-">-</option>
              <option value="1">1 Bulan</option>
              <option value="2">2 Bulan</option>
              <option value="3">3 Bulan</option>
              <option value="4">4 Bulan</option>
              <option value="5">5 Bulan</option>
              <option value="6">6 Bulan</option>
              <option value="7">7 Bulan</option>
              <option value="8">8 Bulan</option>
              <option value="9">9 Bulan</option>
              <option value="10">10 Bulan</option>
              <option value="11">11 Bulan</option>
              <option value="12">12 Bulan</option>
            </select>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={hitung}
          >
            Hitung Cicilan
          </button>
        </div>
        {angsuranResult && (
          <div className="mt-4">
            <p>Cicilan anda adalah Rp. {angsuranResult},00 per bulan </p>
          </div>
        )}
      </form>
    </div>
  );
}
