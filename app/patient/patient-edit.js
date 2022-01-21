class PatientEdit {

  init = () => {
    dataService.initEvent();
  };

  open(patientID) {
    $(".alert").remove()
    if (patientID) {
      formMode = "Edit";
      let patientObj = dataService.getById(patientID);
      this.LoadControlData(patientObj);
    } else {
      formMode = "New";
      this.resetControls();
    }
    router.navigate(".patient-edit");
  }

  GetControlsData = () => {
    let idValue = $(".id-input").val();
    let fnameValue = $(".fname-input").val();
    let mnameValue = $(".mname-input").val();
    let lnameValue = $(".lname-input").val();
    let AgeValue = $(".age-input").val();
    let emailValue = $(".email-input").val();
    let creationValue = $(".form-select option:selected").val();
    let genderValue = $("input[type=radio]:checked").val();
    let DOBValue = $(".DOB-input").val();
    let statusValue = $("input[type=checkbox]:checked").val();

    let patientObject = {
      ID: idValue,
      fname: fnameValue,
      mname: mnameValue,
      lname: lnameValue,
      age: AgeValue,
      email: emailValue,
      gender: genderValue,
      DOB: DOBValue,
      status: statusValue,
      creationDate: creationValue,
    };
    return patientObject;
  };

  LoadControlData = (patientObj) => {
    $(".id-input").val(patientObj.ID);
    $(".fname-input").val(patientObj.fname);
    $(".mname-input").val(patientObj.mname);
    $(".lname-input").val(patientObj.lname);
    $(".email-input").val(patientObj.email);
    $(`.gender-input[value = ${patientObj.gender}]`).attr("checked", "checked");
    $(".DOB-input").val(patientObj.DOB);
    $(`.status-input[value = ${patientObj.status}]`).attr("checked", "checked");
    $(`.form-select option[value = 1]`).attr("selected", "selected");
  };

  resetControls() {
    $(".id-input").val("");
    $(".fname-input").val("");
    $(".mname-input").val("");
    $(".lname-input").val("");
    $(".email-input").val("");
    $(`.gender-input[value = ""]`);
    $(".date-input").val("");
    $(`.status-input[value = ""]`);
    $(`.form-select option[value = "today"]`).attr("selected", "selected");
  }
}
var patientEdit = new PatientEdit();