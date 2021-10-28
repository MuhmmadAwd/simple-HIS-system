class PatientEdit {
  constructor() {
    this.patientID = null;
    this.formMode = "";
  }
  init = () => {
    this.initEvent();
  };
  initEvent() {
    $(".patient-edit .patient-save").click(this.onSaveClick);
    $(".patient-edit .patient-warning").click(this.onBeforeDeleteClick);
    $(".patient-delete").click(this.onDeleteClick);
  }

  open(patientID) {
    this.patientID = patientID;
    if (patientID) {
      this.formMode = "Edit";
      let patientObj = this.getById(patientID);
      this.LoadControlData(patientObj);
    } else {
      this.formMode = "New";
      this.resetControls();
    }

    router.navigate(".patient-edit");
  }

  GetControlsData = () => {
    let idValue = $(".id-input").val();
    let fnameValue = $(".fname-input").val();
    let mnameValue = $(".mname-input").val();
    let lnameValue = $(".lname-input").val();
    let emailValue = $(".email-input").val();
    let creationValue = $(".form-select option:selected").val();
    let genderValue = $("input[type=radio]:checked").val();
    let DOBValue = $(".date-input").val();
    let activeValue = $("input[type=checkbox]:checked").val();

    let patientObject = {
      ID: idValue,
      fname: fnameValue,
      mname: mnameValue,
      lname: lnameValue,
      email: emailValue,
      gender: genderValue,
      DOB: DOBValue,
      Active: activeValue,
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
    $(".date-input").val("1954-02-09");
    $(`.active-input[value = ${patientObj.Active}]`).attr("checked", "checked");
    $(`.form-select option[value = 1]`).attr("selected", "selected");
  };

  // -----------------------------------------------------------------
  // ******** data functions ************
  // -----------------------------------------------------------------

  onSaveClick = () => {
    let data = this.GetControlsData();
    if (this.formMode == "Edit") {
      let currentID = data.ID;
      let index = this.getIndexById(currentID);
      patientsData[index].fname = data.fname;
      patientsData[index].mname = data.mname;
      patientsData[index].lname = data.lname;
      patientsData[index].email = data.email;
      patientsData[index].DOB = data.DOB;
      patientsData[index].gender = data.gender;
      patientsData[index].Active = data.Active;
    } else if (this.formMode == "New") {
      data.ID = this.getNewID();
      let templateText = $("#patient-list-template").html();
      let RendertemplateFun = templateEngine.Rendertemplate(templateText, data);
      $(".patient-table-data").append(RendertemplateFun);
    }
    router.navigate(".patient-list");
  };

  onBeforeDeleteClick() {
    $(".warning-alert").show();
  }

  getById = (patientID) => {
    for (let i = 0; i < patientsData.length; i++) {
      if (patientsData[i].ID == patientID) {
        return patientsData[i];
      }
    }
  };
  getIndexById = (patientID) => {
    for (let i = 0; i < patientsData.length; i++) {
      if (patientsData[i].ID == patientID) {
        return i;
      }
    }
  };
  getNewID = (patientID) => {
    for (let i = 0; i < patientsData.length; i++) {
      if (patientsData[i].ID == patientID) {
        return patientsData[patientsData.length].ID;
      }
    }
  };
  onDeleteClick = () => {
    $(".warning-alert").hide();
    let patientID = this.patientID;
    let index = this.getIndexById(patientID);
    let patientObj = patientsData[index];
    patientsData.splice(index, 1);
    return patientObj;
  };

  resetControls() {
    $(".id-input").val("");
    $(".fname-input").val("");
    $(".mname-input").val("");
    $(".lname-input").val("");
    $(".email-input").val("");
    $(`.gender-input[value = ""]`);
    $(".date-input").val("");
    $(`.active-input[value = ""]`);
    $(`.form-select option[value = "today"]`).attr("selected", "selected");
  }

  // -------------------------------------------------------------------------
  // ***********  getById  *******************
  // -------------------------------------------------------------------------
}
var patientEdit = new PatientEdit();
