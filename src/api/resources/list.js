import ApiService from "../ApiService";

const ListResource = {
  listas:  () => ApiService.get('http://localhost:3000/listas'),
  newLista: (params) => ApiService.post('http://localhost:3000/lista', params),
  newTodo: (params) => ApiService.post(`http://localhost:3000/lista/${params.lista_id}/todo`, { todo: params.todo }),
  deleteTodo: (params) => ApiService.delete(`http://localhost:3000/lista/${params.lista_id}/todo/${params.id}`),
  deleteLista: (params) => ApiService.delete(`http://localhost:3000/lista/${params.id}`),
  saveLista: (params) => ApiService.put(`http://localhost:3000/lista/${params._id}`, params),
  listasPublicas: () => ApiService.get(`http://localhost:3000/lista/public`),
};

export default ListResource;