import ApiService from "../ApiService";

const ListResource = {
  listas:  () => ApiService.get('http://localhost:3000/listas'),
};

export default ListResource;