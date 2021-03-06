/* jshint node: true, unused: false */
/* global __dirname: false, describe: false, beforeEach: false, before:false, it: false, browser: false,
          element: false, expect: false, by: false, protractor: false */
'use strict';

var Page = require('./../dashboard-view');

module.exports = Page.extend({

  formElement: function() {
    return element(by.css('[cam-widget-search]'));
  },

  searchList: function() {
    return this.formElement().all(by.repeater('search in searches'));
  },

  createSearch: function(type, name, operator, value) {
    this.formElement().element(by.css('.main-field')).click();
    this.formElement().element(by.cssContainingText('ul > li', type)).click();
    this.searchList().last().element(by.model('editValue')).sendKeys(name, protractor.Key.ENTER);
    this.searchList().last().element(by.model('editValue')).sendKeys(value, protractor.Key.ENTER);
    this.searchList().last().element(by.css('[value="operator.value"]')).click();
    this.searchList().last().element(by.cssContainingText('[value="operator.value"] .dropdown-menu li', operator)).click();
  },

  deleteSearch: function(index) {
    this.searchList().get(index).element(by.css('.remove-search')).click();
  },

  changeType: function(index, type) {
    this.searchList().get(index).element(by.css('[cam-widget-inline-field][value="type.value"]')).click();
    this.searchList().get(index).element(by.cssContainingText('ul > li', type)).click();
  },

  changeOperator: function(index, operator) {
    this.searchList().get(index).element(by.css('[cam-widget-inline-field][value="operator.value"]')).click();
    this.searchList().get(index).element(by.cssContainingText('ul > li', operator)).click();
  },

  changeValue: function(index, value) {
    this.searchList().get(index).element(by.css('[cam-widget-inline-field][value="value.value"]')).click();
    this.searchList().get(index).element(by.model('editValue')).sendKeys(value, protractor.Key.ENTER);
  }

});
