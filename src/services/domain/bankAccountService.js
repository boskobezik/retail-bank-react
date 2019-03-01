import http from "../httpService";
import {apiUrl, apiVersion} from "../../config.json";

export async function getBankAccountsRange(pageIndex = 0){
    return await http.get(apiUrl + apiVersion + "/bankAccounts/" + pageIndex);
}

export async function addBankAccount(bankAccount){
    return await http.post(apiUrl + apiVersion + "/bankAccount", bankAccount);
}

export async function updateBankAccount(bankAccount){
    return await http.put(apiUrl + apiVersion + "/bankAccount", bankAccount);
}

export async function deleteBankAccount(id){
    return await http.delete(apiUrl + apiVersion + "/bankAccount/" + id);
}

export default {
    getBankAccountsRange,
    addBankAccount,
    updateBankAccount,
    deleteBankAccount
}