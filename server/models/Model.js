const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  articleNumber: {  // артикул (B1V-3-F-2N)
    type: String,
    required: true,
    unique: true,    // уникальный индекс
    trim: true
  },
  productType: {     // тип продукции (Valves)
    type: String,
    required: true,
    trim: true,
    index: true      // индекс для быстрого поиска
  },
  itemType: {        // тип изделия (Ball Valve)
    type: String,
    required: true,
    trim: true,
    index: true
  },
  series: {          // серия (B112)
    type: String,
    required: true,
    trim: true,
    index: true
  },
  description: {     // описание (опционально)
    type: String,
    default: ''
  },
  thumbnail: {       // путь к изображению (опционально)
    type: String,
    default: ''
  },
  files: {           // пути к файлам моделей (опционально)
    step: String,
    iges: String,
    stl: String,
    obj: String
  },
  downloads: {       // счетчик скачиваний
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Создаем составной индекс для быстрого поиска по всем полям
modelSchema.index({
  articleNumber: 'text',
  productType: 'text',
  itemType: 'text',
  series: 'text'
});

// Пример метода для живого поиска
modelSchema.statics.search = function(query) {
  return this.find({
    $or: [
      { articleNumber: { $regex: query, $options: 'i' } },
      { productType: { $regex: query, $options: 'i' } },
      { itemType: { $regex: query, $options: 'i' } },
      { series: { $regex: query, $options: 'i' } }
    ]
  }).limit(10);
};

module.exports = mongoose.model('Model', modelSchema); 