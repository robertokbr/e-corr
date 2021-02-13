interface ICreatePointDTO {
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
