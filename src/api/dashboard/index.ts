import {urls} from "@/api/urls";
import {rest} from "@/api";
import {IReportSearchList} from "@/utils/interfaces/dashboard/dashboard.interface";

export const findOneReportValidateByConsecutive = async (reportSearchValue: string) => {
    const url = `${urls.fenix}/case-report-validate/findReportValidateByConsecutive/${reportSearchValue}`

    const res = await rest.get<IReportSearchList>(url)
    return res.data

}