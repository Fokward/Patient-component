import axios from "axios"
 
 export class PatientService{
    static serverUrl='http://41.188.172.204:30003/patients';

    static getServices(){
        return axios.get(this.serverUrl)
    }
}