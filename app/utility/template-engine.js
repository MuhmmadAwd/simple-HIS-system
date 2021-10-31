class TemplateEngineClass {
  Rendertemplate = (templateText, data) => {
    let placeholderRegex = /{{\w+}}/g;
    let newMatchRegex = /{{|}}/g;
    return templateText.replace(placeholderRegex, (match) => {
      let newMatch = match.replace(newMatchRegex, "");
      return data[newMatch];
    });
  };
}
var templateEngine = new TemplateEngineClass();
