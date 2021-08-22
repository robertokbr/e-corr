interface ICreatePointDTO {
  user_id: string;
  title: string;
  description: string;
  price: string;
  category: 'Condominio' | 'Apartamento' | 'Casa' | 'Comercial';
  type: 'Aluguel' | 'Venda';
  address: string;
  longitude: string;
  latitude: string;
  pointImages: string[];
}
