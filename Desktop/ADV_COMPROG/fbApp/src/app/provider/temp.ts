import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Temp } from "../model/temp.model"

@Injectable()

export class TempProvider{
    private tempURL = "https://graph.facebook.com/v5.0/me?fields=id%2Cname%2Cposts%7Bmessage%2Cfull_picture%2Cattachments%7D&access_token=EAAIQpyVfcn4BAPKGRCeMk4TQL4MLMRYF4xrONrATpwyQrrVSHMxS5YgMlaC2c4CzrTHbmfJLMSo2e9RoMyaSijZBQsOUxZCsFB7kP63jMMwPiDszzSdG01aemv3adftrfZCwkPvbCLuWpFN9IAyHbbbdoaJD2rCZCoZAMw34jHfj1SP2CmVNJSZC6QeTvkGrYW4bxfZB0M1gA5xzZAvK9NEP3eFg7JOXdg8ZAoZC5bHV0IMwZDZD"

    constructor(public http: HttpClient) {}
    
    getTemp() {
        return this.http.get<Temp>(this.tempURL);
    }
}