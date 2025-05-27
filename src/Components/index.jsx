import React from 'react';
import ProductDetail from '../../../Components/ProductDetail';
import Description from '../../../Components/Description';
import RelatedProducts from '../../../Components/RelatedProducts';

const AsgaardSofaPage = () => {
  return (
    <div className="pt-20">
      <ProductDetail />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default AsgaardSofaPage;
