import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudapiService {

  private urlApi = 'http://localhost:9000/api/notas';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi);
  }

  public getNotaById(id:number): Observable<any> {
    return this.http.get<any>(this.urlApi + "/" + id);
  }

  public editNota(id: number, data: any): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put<any>(url, data);
  }

  public resetNotas(id: number): Observable<any> {
    const resetData = { nota1: 0, nota2: 0, nota3: 0 };
    return this.http.put<any>(`${this.urlApi}/${id}`, resetData);
  }
}