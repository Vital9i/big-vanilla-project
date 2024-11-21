export type StreetType = {
    title:string
}

export type AddressType = {
    number:number
    street:StreetType
}

export type HouseType = {
    buildedAt:number
    repaired:boolean
    address:AddressType
}

export type TitleGoverType = {
    title:string
}

export type StreetGoverType = {
    street:TitleGoverType
}

export type GovernmentBuildingsType = {
    type:string
    budget:number
    staffCount:number
    address:StreetGoverType
}

export type CityType = {
    title:string
    houses:Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}