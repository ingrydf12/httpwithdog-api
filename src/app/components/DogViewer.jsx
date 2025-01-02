import React, { useState } from "react";
import HttpDogService from "@/services/HttpDogService";

const DogImageViewer = () => {
  const [statusCode, setStatusCode] = useState("");
  const [dogImageUrl, setDogImageUrl] = useState("");
  const [error, setError] = useState("");

  const httpDogService = new HttpDogService();

  const handleFetchImage = async () => {
    setError("");
    setDogImageUrl(""); 

    //Exception -> Vazio
    if (!statusCode) {
      setError("Por favor, insira um código de status.");
      return;
    }

    //Chama a função getDogImage -> HttpDogService
    try {
      const url = await httpDogService.getDogImage(statusCode);
      setDogImageUrl(url);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="grid justify-items-center p-1">
      <input
      className="flex-1 w-10/12 h-10 mb-2 text-black placeholder:text-slate-400 placeholder:italic rounded-md px-2"
        type="number"
        placeholder="Exemplo: 404"
        value={statusCode}
        onChange={(e) => setStatusCode(e.target.value)}
      />
      <button onClick={handleFetchImage} className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95">Buscar Imagem</button>
      {error && (
        <div className="mt-4 text-center">
          <img className="mx-auto w-9/12 h-auto rounded-md" src="none.gif" alt="Erro" />
          <p className="text-red-600 font-semibold mt-2">{error}</p>
        </div>
      )}
      {dogImageUrl && <img src={dogImageUrl} alt={`Http Dog ${statusCode}`} style={{ width: "30rem", height: "auto"}} />}
    </div>
  );
};

export default DogImageViewer;
