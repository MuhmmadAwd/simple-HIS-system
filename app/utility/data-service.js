class dataServiceClass {
  initEvent() {
    $(".patient-edit .patient-save").click(this.onSaveClick);
    $(".patient-edit .patient-warning").click(this.onBeforeDeleteClick);
    $(".patient-delete").click(this.onDeleteClick);
  }
  onBeforeDeleteClick() {
    $(".warning-alert").show();
  }

  onDeleteClick = () => {
    $(".warning-alert").hide();
    let index = this.getIndexById(patientID);
    let patientObj = patientsData[index];
    patientsData.splice(index, 1);
    toastr.success("Items deleted successfully");

    return patientObj;
  };

  onSaveClick = () => {
    let data = patientEdit.GetControlsData();
    let ValidateForm = _ValidationEngine.ValidateForm();
    if (!ValidateForm) {
      toastr.error("saving did fail");
      return;
    } else {
      if (formMode == "Edit") {
        let patient = this.getById(patientID)
        patient.fname = data.fname;
        patient.mname = data.mname;
        patient.lname = data.lname;
        patient.email = data.email;
        patient.DOB = data.DOB;
        patient.gender = data.gender;
        patient.Active = data.Active;
        toastr.success("Items modified successfully");
      } else if (formMode == "New") {
        data.ID = patientsData[patientsData.length - 1].ID + 1
        patientsData.push(data)
        toastr.success("Items added successfully");
      }
      patientList.show()

    }
  };

  getAll() {
    return patientsData;
  }
  getById = (patientID) => {
    let index = this.getIndexById(patientID);
    let DOB = patientsData[index].DOB;
    let FormatDate = moment(DOB).format("YYYY-MM-DD");

    patientsData[index].DOB = FormatDate;
    return patientsData[index];
  };
  getIndexById = (patientID) => {
    for (let i = 0; i < patientsData.length; i++) {
      if (patientsData[i].ID == patientID) {
        return i;
      }
    }
  };

}
let dataService = new dataServiceClass();

/************
    let validateDate = moment(DOBValue, "DD-MM-YYYY").isValid();
    if (!validateDate) {
      isValid = false;
      this.validateRequireField(".DOB-input", ".DOB-span");
    }

    let status = $(".status-input:checked");
    if (status.length < 1) {
      isValid = false;
      this.validateRequireField(".status-input", ".status-span");
    }

    let gender = $(".gender-input:checked");
    if (gender.length < 1) {
      isValid = false;
      this.validateRequireField(".gender-input", ".gender-span");
    }

***************/