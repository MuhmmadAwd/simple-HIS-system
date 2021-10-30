class dataServiceClass {
  initEvent() {
    $(".patient-edit .patient-save").click(this.onSaveClick);
    $(".patient-edit .patient-warning").click(this.onBeforeDeleteClick);
    $(".patient-delete").click(this.onDeleteClick);
  }

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

  getAll() {
    return patientsData;
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
}
let dataService = new dataServiceClass();
