import { http } from '../api'

export default {

  findAll: () => {
    return http.get('itens');
  },

  save: (item) => {
    return http.post('itens', item);
  },

  findById: (item) => {
    return http.get('itens/${cliente.id}', {data: item});
  },

  delete: (item) => {
    return http.delete('itens/${cliente.id}',{data: item});
  },

  update: (item) => {
    return http.put ('itens', item);
  },
}
