class TemplateEngineClass {
  Rendertemplate = (templateText, data) => {
    for (let i = 0; i < 10; i++) {
      let fisrtBraces = templateText.search(/{{/); // get index of dbl fisrtBraces
      let lastBraces = templateText.search(/}}/); // get index of dbl lastBraces
      let property = templateText.slice(fisrtBraces + 2, lastBraces); // get the property inside Braces
      let propertyData = data[property]; // get the value from obj
      let editTemplateText = templateText.replace(/{{\w+}}/, propertyData); // replace string with object property
      let orignalTemplateText = templateText; // shuffle templateText
      templateText = editTemplateText; // shuffle templateText
      orignalTemplateText = editTemplateText; // shuffle templateText
    }
    return templateText; // return  the row
  };
}
var templateEngine = new TemplateEngineClass();
