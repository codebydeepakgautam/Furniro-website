const ProductComparison = () => {
  const productA = {
    general: {
      salesPackage: "1 sectional sofa",
      modelNumber: "TFCBILGRBL6SRHS",
      secondaryMaterial: "Solid Wood",
      configuration: "L-shaped",
      upholsteryMaterial: "Fabric + Cotton",
      upholsteryColor: "Bright Grey & Lion"
    },
    product: {
      fillingMaterial: "Foam",
      finishType: "Bright Grey & Lion",
      adjustableHeadrest: "No",
      loadCapacity: "280 KG",
      origin: "India"
    },
    dimensions: {
      width: "265.32 cm",
      height: "76 cm",
      depth: "167.71 cm",
      weight: "45 KG"
    }
  };

  const productB = {
    general: {
      salesPackage: "1 Three Seater, 2 Single Seater",
      modelNumber: "DTUBILGRBL568",
      secondaryMaterial: "Solid Wood",
      configuration: "L-shaped",
      upholsteryMaterial: "Fabric + Cotton",
      upholsteryColor: "Bright Grey & Lion"
    },
    product: {
      fillingMaterial: "Matte",
      finishType: "Bright Grey & Lion",
      adjustableHeadrest: "Yes",
      loadCapacity: "300 KG",
      origin: "India"
    },
    dimensions: {
      width: "265.32 cm",
      height: "76 cm",
      depth: "167.71 cm",
      weight: "65 KG"
    }
  };

  const renderRow = (label, key, section) => (
    <div className="grid grid-cols-3 py-5  border-gray-200" key={key}>
      <div className="font-medium text-gray-600">{label}</div>
      <div>{section[key]}</div>
      <div>{productB[section === productA.general ? 'general' : section === productA.product ? 'product' : 'dimensions'][key]}</div>
    </div>
  );

  const renderSection = (title, section) => (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {Object.keys(section).map((key) =>
        renderRow(key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase()), key, section)
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-10 px-4 sm:px-6 md:px-20 pt-16 pb-8 text-sm text-gray-800 overflow-x-auto">
     
      {renderSection("General", productA.general)}
      {renderSection("Product", productA.product)}
      {renderSection("Dimensions", productA.dimensions)}
    </div>
  );
};

export default ProductComparison;
