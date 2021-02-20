interface ICreatePointDTO {
  user_id: string;
  title: string;
  pictures: string;
  description: string;
  price: string;
  category: 'Condominio' | 'Apartamento' | 'Casa' | 'Comercial';
  type: 'Aluguel' | 'Venda';
  adress: string;
  longitude: string;
  latitude: string;
}
