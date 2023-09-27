import { useState } from "react"
// CSS
import "./Order.css"
// Components 
import FilesForm from "./FilesForm"
import MedicalForm from "./MedicalForm"
import BusinessForm from "./BusinessForm"
import ColorForm from "./ColorForm"

export default function OrderForm() {
    const [page, setPage] = useState(1)
    const [formData, setFormData] = useState({
        bloodType: '',
        emergencyNumber: '',
        allergies: '',
        medicalAffilliation: '', 
        businessInfo: 1,
        jobTitle: '',
        companyName: '',
        companyAddress: '',
        email: '',
        phoneNumber: '',
        companyNumber: '',
        braceletColor: ''
    })

    const FormTitles = ["For us to validate your personal information we need you to upload a few documents.", "Complete these questions for your medical information:", 
        "Would you like to have a business information section? ", "Finally, which color would you like for your bracelet? "]
    
    const PageDisplay = () => {
        if (page === 0) {
            return <FilesForm/>
        } else if (page === 1) {
            return <MedicalForm formData={formData} setFormData={setFormData}/>
        } else if (page === 2) {
            return <BusinessForm formData={formData} setFormData={setFormData}/>
        } else {
            return <ColorForm formData={formData} setFormData={setFormData}/>
        }
    }
    

    return (
        <div className="form">
            <div className="form-container">
                <div className="header">
                    <h3 className="text-center mb-5">{FormTitles[page]}</h3>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer text-center mt-5">
                    <button className="me-3"
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                console.log(formData)
                            } else {
                                setPage((currPage) => currPage + 1)
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    )
}