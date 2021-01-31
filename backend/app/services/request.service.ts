import express from "express";
import requestModule from 'request';

export default abstract class RequestService {

    static doRequest(url: string, method: string): Promise <any> {
        return new Promise((resolve, reject) => {
            requestModule({
                url,
                method,
                json: true
            }, (err, responseRequest) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(responseRequest.body);
                }
            });
        });


    }
}