const Model = require('../models/Model');

exports.getItemTypes = async (req, res) => {
  try {
    const { productType } = req.params;
    console.log('Getting item types for:', productType);
    
    const itemTypes = await Model.aggregate([
      { 
        $match: { 
          productType: productType 
        } 
      },
      {
        $group: {
          _id: "$itemType",
          name: { $first: "$itemType" },
          count: { $sum: 1 }
        }
      },
      { $sort: { name: 1 } }
    ]);

    console.log('Found item types:', itemTypes);
    res.json(itemTypes);
  } catch (error) {
    console.error('Error in getItemTypes:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getSeries = async (req, res) => {
  try {
    const { productType, itemType } = req.params;
    const series = await Model.aggregate([
      { 
        $match: { 
          productType,
          itemType 
        } 
      },
      {
        $group: {
          _id: "$series",
          name: { $first: "$series" },
          count: { $sum: 1 }
        }
      },
      { $sort: { name: 1 } }
    ]);

    res.json(series);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getModels = async (req, res) => {
  try {
    const { productType, itemType, series } = req.params;
    const models = await Model.find({
      productType,
      itemType,
      series
    }).sort({ articleNumber: 1 });

    res.json(models);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 