const { DataTypes } = require('sequelize');

const db = require('../db')

const Product = db.define('Product', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(10),
      allowNull: false,
    },
    imgs: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue('imgs');
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue('imgs', JSON.stringify(value));
      },
    },
    categories: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        const value = this.getDataValue('categories');
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue('categories', JSON.stringify(value));
      },
    },
    sizes: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      get() {
        const value = this.getDataValue('sizes');
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue('sizes', JSON.stringify(value));
      },
    },
    quantities: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      get() {
        const value = this.getDataValue('quantities');
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue('quantities', JSON.stringify(value));
      },
    }
  }, {
    timestamps: true,
  });
  
  module.exports = Product;