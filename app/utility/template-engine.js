class TemplateEngineClass {
  Rendertemplate = (templateText, data) => {
    let placeholderRegex = /{{[^\"\}]+}}/g;
    let newMatchRegex = /{{|}}|\|\w+/g;

    return templateText.replace(placeholderRegex, (match) => {
      let newMatch = match.replace(newMatchRegex, "");

      if (newMatch.includes("|")) {
        let splittingMatch = newMatch.split("|");
        let formatterName = splittingMatch[1].trim();
        let format = this.formatFunctions(formatterName, data);
        return format;
      } else {
        return data[newMatch];
      }
    });
  };

  datePipe(data) {
    let DOB = data["DOB"];
    let FormatDate = moment(DOB).format("YYYY-MM-DD");
    return FormatDate;
  }
  statusPipe(data) {
    let status = data["status"];
    if (status) {
      return "active";
    } else {
      return "not active";
    }
  }
  genderPipe(data) {
    let gender = data["gender"];
    if (gender == 1) {
      return "male";
    } else if (gender == 2) {
      return "female";
    }
  }

  formatFunctions(formatterName, data) {
    switch (formatterName) {
      case "DOB":
        return this.datePipe(data);
      case "status":
        return this.statusPipe(data);
      case "gender":
        return this.genderPipe(data);
      default:
        return;
    }
  }
}
var templateEngine = new TemplateEngineClass();
