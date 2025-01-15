// services/apiService.js

/**
 * Classe ApiService - Um serviço genérico para realizar requisições HTTP
 * 
 * Esta classe fornece métodos para fazer requisições HTTP de forma simples e
 * reutilizável. Você pode utilizá-la para realizar requisições GET, POST, PUT, DELETE, etc.
 * 
 * @example
 * const apiService = new ApiService('https://api.exemplo.com');
 * const data = await apiService.get('/endpoint');
 */
class ApiService {
    constructor(baseURL) {
      /**
       * A URL base da API.
       * Se não for fornecida, será usada uma URL padrão (JSONPlaceholder).
       */
      this.baseURL = baseURL || 'https://jsonplaceholder.typicode.com';
    }
  
    /**
     * Método genérico para fazer requisição GET.
     * 
     * @param {string} endpoint - O endpoint da API (ex: "/posts").
     * @returns {Promise<any>} Retorna os dados da API em formato JSON.
     * @throws {Error} Se a requisição falhar ou se a resposta não for OK.
     */
    async get(endpoint) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`);
        
        // Verificando se a resposta da API foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${endpoint}`);
        }
  
        // Convertendo a resposta em JSON
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error in GET request:', error);
        throw error;  // Propagando o erro para quem chamou a função
      }
    }
  
    /**
     * Método genérico para fazer requisição POST.
     * 
     * @param {string} endpoint - O endpoint da API (ex: "/posts").
     * @param {Object} body - O corpo da requisição (dados a serem enviados).
     * @returns {Promise<any>} Retorna os dados da API em formato JSON após o POST.
     * @throws {Error} Se a requisição falhar ou se a resposta não for OK.
     */
    async post(endpoint, body) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'POST', // Definindo o método POST
          headers: {
            'Content-Type': 'application/json', // Definindo o tipo de conteúdo
          },
          body: JSON.stringify(body), // Convertendo o corpo para JSON
        });
  
        // Verificando se a resposta da API foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Failed to post data to ${endpoint}`);
        }
  
        // Convertendo a resposta em JSON
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error in POST request:', error);
        throw error;  // Propagando o erro para quem chamou a função
      }
    }
  
    /**
     * Método genérico para fazer requisição PUT.
     * 
     * @param {string} endpoint - O endpoint da API (ex: "/posts/1").
     * @param {Object} body - O corpo da requisição (dados a serem atualizados).
     * @returns {Promise<any>} Retorna os dados da API em formato JSON após o PUT.
     * @throws {Error} Se a requisição falhar ou se a resposta não for OK.
     */
    async put(endpoint, body) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'PUT', // Definindo o método PUT
          headers: {
            'Content-Type': 'application/json', // Definindo o tipo de conteúdo
          },
          body: JSON.stringify(body), // Convertendo o corpo para JSON
        });
  
        // Verificando se a resposta da API foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Failed to update data at ${endpoint}`);
        }
  
        // Convertendo a resposta em JSON
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error in PUT request:', error);
        throw error;  // Propagando o erro para quem chamou a função
      }
    }
  
    /**
     * Método genérico para fazer requisição DELETE.
     * 
     * @param {string} endpoint - O endpoint da API (ex: "/posts/1").
     * @returns {Promise<any>} Retorna os dados da API em formato JSON após o DELETE.
     * @throws {Error} Se a requisição falhar ou se a resposta não for OK.
     */
    async delete(endpoint) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: 'DELETE', // Definindo o método DELETE
        });
  
        // Verificando se a resposta da API foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Failed to delete data at ${endpoint}`);
        }
  
        // Convertendo a resposta em JSON
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error in DELETE request:', error);
        throw error;  // Propagando o erro para quem chamou a função
      }
    }
  }
  
  export default ApiService;
  