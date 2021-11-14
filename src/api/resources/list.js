import ApiService from "../ApiService";

const ListResource = {
  listas:  () => ApiService.get('http://localhost:3000/listas'),
  newLista: (params) => ApiService.post('http://localhost:3000/lista', params),
  newTodo: (params) => ApiService.post(`http://localhost:3000/lista/${params.lista_id}/todo`, { todo: params.todo }),
};

export default ListResource;