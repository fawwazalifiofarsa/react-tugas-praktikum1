import { useState } from "react";

export default function Konversi_bilangan() {
  const [bilangan, setBilangan] = useState("");
  const [jenisBilangan, setJenisBilangan] = useState("");
  const [pilihan, setPilihan] = useState("");

  const [convertResult, setConvert] = useState(null);

  const type = {
    Biner: 2,
    Octal: 8,
    Decimal: 10,
    Hexadecimal: 16
  }
  const convert = () => {
    var convertResult = parseInt(bilangan, type[jenisBilangan]).toString(type[pilihan]);

    setConvert(convertResult);

    setBilangan("");
    setPilihan("");
  }

  return (
      <div className="w-full mt-10 px-40">
      <form className="bg-white shadow-md rounded-lg px-8 pt-8 pb-8 mb-4">
        <h1 className="text-center mb-4 text-xl">Konversi Bilangan</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bilangan
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bilangan "
            type="text"
            placeholder="Bilangan"
            value={bilangan}
            onChange={(e) => setBilangan(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Jenis Bilangan
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jenisBilangan"
            placeholder="jenisBilangan"
            value={jenisBilangan}
            onChange={(e) => setJenisBilangan(e.target.value)}
          >
              <option value="-">-</option>
              <option value="Oktal">Oktal</option>
              <option value="Heksadesimal">Heksadesimal</option>
              <option value="Biner">Biner</option>
              <option value="Desimal">Desimal</option>
            </select>
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Pilihan Konversi
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="pilihan"
            placeholder="pilihan"
            value={pilihan}
            onChange={(e) => setPilihan(e.target.value)}
          >
              <option value="-">-</option>
              <option value="Oktal">Oktal</option>
              <option value="Heksadesimal">Heksadesimal</option>
              <option value="Biner">Biner</option>
              <option value="Desimal">Desimal</option>
            </select>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={convert}
          >
            Convert
          </button>
        </div>
        {convertResult && (
          <div className="mt-4">
            <p>Hasil: {convertResult} </p>
          </div>
        )}
      </form>
    </div>
  );
}
