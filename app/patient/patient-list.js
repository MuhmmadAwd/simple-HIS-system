class PatientList {
  init() {
    this.show();
    this.initEvents();
  }
  initEvents() {
    $(".patient-list .patient-add").click(this.AddPatient);
    // $(".patient-list .patient-EditBtn").click(this.onEditCurrentPatient);
    $(document).on("click", ".patient-EditBtn", this.onEditCurrentPatient)
  }
  RenderTable() {
    $(".table-row").remove();
    let templateText = $("#patient-list-template").html();
    let patientData = dataService.getAll();
    patientData.forEach((data) => {
      let RenderTemplate = templateEngine.Rendertemplate(templateText, data);
      $(".patient-table-data").append(RenderTemplate);
    });
  }
  show() {
    this.RenderTable();
    router.navigate(".patient-list");
  }
  AddPatient = () => {
    patientEdit.open();
  };

  onEditCurrentPatient = (e) => {
    let currentRow = $(e.target).closest("tr");
    patientID = currentRow.data("id");
    patientEdit.open(patientID);
  };
}
var patientList = new PatientList();