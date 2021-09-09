class PatientList {
	constructor(){
		this.formMode = ""
	}
	init() {
		this.RenderTable()
	}
	RenderTable() {
		let templateText = $("#patient-list-template").html()
		patientsData.forEach((data) => {
			let RenderTemplate = templateEngine.Rendertemplate(templateText, data)
			$(".patient-table-data").append(RenderTemplate)
		})
		$(".patient-add").click(this.AddPatient)
		$(document).on("click",".patient-EditBtn",this.onEditCurrentPatient)
	}
	AddPatient = () =>{
		this.formMode = "New"
		
	}

	onEditCurrentPatient = (e) => {
		$(".table-row").remove()
		this.formMode = "Edit"
		patientEdit.open(e)
		patientEdit.init();
	}

}
var patientList = new PatientList()

