class HttpDogService {
  //Construtor base pra URL presente
    constructor(baseURL = "https://http.dog/") {
      this.baseURL = baseURL;
    }
  
    //Função assíncrona que vai buscar o endpoint com base na baseURL + statusCode
    async getDogImage(statusCode) {
      const url = `${this.baseURL}${statusCode}.jpg`;
  
      try {
        const response = await fetch(url);
  
        if (response.ok) {
          return url;
        } else {
          throw new Error(`Imagem não encontrada. Status da resposta: ${response.status}`);
        }
      } catch (error) {
        console.error("Erro completo:", error);
        throw new Error(`Erro ao realizar a requisição: ${error.message}`);
      }
    }
  }
  
  export default HttpDogService;