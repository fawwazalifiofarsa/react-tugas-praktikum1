import { useState } from "react";

export default function Harga_akhir() {
  const [harga, setHargaAwal] = useState("");
  const [PPN, setPPN] = useState("");
  const [diskon, setDiskon] = useState("");

  const [hargaAkhir, setHargaAkhir] = useState(null);

  function hitung() {
    var totalDiskon = Number(harga * (diskon / 100));
    var totalPPN = Number(harga * (PPN / 100));
    var hargaAkhir = Number(harga - totalDiskon + totalPPN);
    setHargaAkhir(hargaAkhir);

    setDiskon("");
    setHargaAwal("");
    setPPN("");
  }

  return (
      <div className="w-full mt-10 px-40">
      <form className="bg-white shadow-md rounded-lg px-8 pt-8 pb-8 mb-4">
        <h1 className="text-center mb-4 text-xl">Hitung Harga Akhir</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Harga Awal
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="harga "
            type="text"
            placeholder="Harga Awal (Rupiah)"
            value={harga}
            onChange={(e) => setHargaAwal(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            PPN
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="PPN"
            placeholder="PPN (%)"
            value={PPN}
            onChange={(e) => setPPN(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Diskon
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="diskon"
            placeholder="diskon (kg)"
            value={diskon}
            onChange={(e) => setDiskon(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={hitung}
          >
            Hitung
          </button>
        </div>
        {hargaAkhir && (
          <div className="mt-4">
            <p>Harga akhirnya adalah Rp. {hargaAkhir},00 </p>
          </div>
        )}
      </form>
    </div>
  );
}
