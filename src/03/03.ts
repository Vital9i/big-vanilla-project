
import { StudentType } from '../02/02';
import { CityType, GovernmentBuildingsType, HouseType } from '../02/02_02';

export const addSkill= (student:StudentType, skill: string) =>{
    student.technologies.push({
        id:new Date().getTime(),
        title:skill
    })
}

export const makeStudentActive =(student:StudentType)=> {
    return student.isActive = true
    }

export function doesStudentLiveIn (student:StudentType,cityName:string) {
    student.address.city.title === cityName
}

export function changeBudget(city:GovernmentBuildingsType, budget:number) {
    city.budget += budget
}

export const repairHouse = (house:HouseType) => {
    return house.repaired === true
}

export const toFireStaff = (city:CityType, staffCountTofire:number) => {
    return city.governmentBuildings[0].staffCount -= staffCountTofire
}

export const toHireStaff = (city:CityType, staffCountToHire:number) => {
    return city.governmentBuildings[0].staffCount + staffCountToHire
}

export const createMessage = (city:CityType) => {
    return `Hello ${city.title} well be here all ${city.citizensNumber}`
}