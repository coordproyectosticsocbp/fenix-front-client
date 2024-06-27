import {urls} from "@/api/urls";
import {rest} from "@/api";
import {ICaseTypeInterfaceItem} from "@/utils/interfaces/configuration/caseType.interface";

export const findAllCaseTypes = async () => {

    try {

        const url = `${urls.fenix}/case-type/listCaseTypes`
        const {data} = await rest.get<ICaseTypeInterfaceItem[]>(url)
        if (!data) {
            return []
        }
        return data

    } catch (error) {
        throw new Error('Failed to fetch case types')
    }

}