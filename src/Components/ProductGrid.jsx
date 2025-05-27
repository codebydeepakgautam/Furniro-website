const WarrantyComparison = () => {
  const productA = {
    warrantySummary: "1 Year Manufacturing Warranty",
    warrantyServiceType: "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
    covered: "Warranty Against Manufacturing Defect",
    notCovered:
      "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
    domesticWarranty: "1 Year",
  };

  const productB = {
    warrantySummary: "1.2 Year Manufacturing Warranty",
    warrantyServiceType: "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
    covered: "Warranty of the product is limited to manufacturing defects only.",
    notCovered:
      "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
    domesticWarranty: "3 Months",
  };

  const renderRow = (label, key) => (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-200" key={key}>
      <div className="font-medium text-gray-700">{label}</div>
      <div>{productA[key]}</div>
      <div>{productB[key]}</div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow  p-10 px-4 sm:px-6 md:px-20 pt-16 pb-8  text-sm text-gray-800 overflow-x-auto">
      <div className="grid grid-cols-3 font-semibold border-b pb-2 mb-2">
        <div className="font-bold">Warranty</div>
        
      </div>

      {renderRow("Warranty Summary", "warrantySummary")}
      {renderRow("Warranty Service Type", "warrantyServiceType")}
      {renderRow("Covered in Warranty", "covered")}
      {renderRow("Not Covered in Warranty", "notCovered")}
      {renderRow("Domestic Warranty", "domesticWarranty")}

      <div className="grid grid-cols-3 gap-4 py-8 mx-auto">
        <div></div>
        <button className="bg-yellow-700 text-white py-2 px-4 rounded hover:bg-yellow-800">Add To Cart</button>
        <button className="bg-yellow-700 text-white py-2 px-4 rounded hover:bg-yellow-800">Add To Cart</button>
      </div>
    </div>
  );
};

export default WarrantyComparison;
