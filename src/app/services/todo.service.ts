import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/response/listResponseModel';
import { ToDo } from '../models/entity/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient:HttpClient) {}

  getToDos():Observable<ListResponseModel<ToDo>>{
    return this.httpClient.get<ListResponseModel<ToDo>>(this.apiUrl);
  }
}
