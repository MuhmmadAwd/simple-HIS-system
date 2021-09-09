class PatientList {
	constructor(){
		this.AddOrEdit = ""
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
		this.AddOrEdit = "Add"
	}

	onEditCurrentPatient = (e) => {
		$(".table-row").remove()
		this.AddOrEdit = "Edit"
		patientEdit.open(e)
		patientEdit.init();
		
		
	}

}
var patientList = new PatientList()

