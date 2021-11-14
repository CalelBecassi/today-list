import ApiService from "../ApiService";

const UserResource = {
  register: (params) => ApiService.post('http://localhost:3000/auth/register', params),
  login: (params) => ApiService.post('http://localhost:3000/auth/authenticate', params),
};

export default UserResource;