import axios from 'axios';

class BackendService {
    private http: any;

    constructor(baseURL: string) {
        this.http = axios.create({
            baseURL,
            timeout: 5000,
        });
    }

    async get<T>(url: string): Promise<T> {
        try {
            const response = await this.http.get<T>(url);
            return response.data;
        } catch (error) {
            console.error('GET Error:', error);
            throw error;
        }
    }

    async post<T>(url: string, data: any): Promise<T> {
        try {
            const response = await this.http.post<T>(url, data);
            return response.data;
        } catch (error) {
            console.error('POST Error:', error);
            throw error;
        }
    }

    async put<T>(url: string, data: any): Promise<T> {
        try {
            const response = await this.http.put<T>(url, data);
            return response.data;
        } catch (error) {
            console.error('PUT Error:', error);
            throw error;
        }
    }

    async delete<T>(url: string): Promise<T> {
        try {
            const response = await this.http.delete<T>(url);
            return response.data;
        } catch (error) {
            console.error('DELETE Error:', error);
            throw error;
        }
    }

}

export const backendService = new BackendService('http://localhost:8000');