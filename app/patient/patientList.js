class PatientList {
	constructor(){
		this.currentRow=null
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
		$(".patient-save").attr("data-patient-Add-Edit","Add" )
		patientEdit.init()
	}

	onEditCurrentPatient = (e) => {
		$(".table-row").remove()
		this.getcurrentPatientData(e)
		router.navigate(e)
		patientEdit.setFormData(e)
		patientEdit.init();
		// $(".patient-save").attr("data-patient-Add-Edit","Edit" )
		
		
	}

	getcurrentPatientData = (e) => {
		this.currentRow = $(e.target).parents("tr")
		let currentRowData = null
		let currentID = this.currentRow.find(".patient-id").data("id")
		for(let i=0;i<patientsData.length;i++){
			if(patientsData[i].ID == currentID){
				currentRowData = patientsData[i]
			}
		}
		console.log(currentRowData)
		return currentRowData
	}

}
var patientList = new PatientList()

