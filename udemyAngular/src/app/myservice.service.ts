import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { post } from 'selenium-webdriver/http';
import { nextTick } from 'q';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpClient: HttpClient) { }

  // public post(oururl: string, file: File): Observable<number>{
  //   //have to make a subject to modify our observable
  //     const subject = new Subject<number>();

  //     //create a request of type post 
  //     const req = new HttpRequest('POST', oururl, file, {reportProgress: true});

  //     this.httpClient.request(req).subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         const progressPercent = Math.round( event.loaded/event.total * 100);
  //         subject.next(progressPercent);
  //       }else if (event.type === HttpEventType.Response) {
  //         subject.complete();
  //       };
  //     });
  //   return subject.asObservable();      

  // };


  public getting(url: string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const parmas = new HttpParams().set('id', '2');
    return this.httpClient.get(url, {responseType: 'text',
     params: parmas, headers: headers});
  };
  //method for uploading files and checking progress report
  public posting(oururl: string, file: File): Observable<any>{
        const subject = new Subject<number>();
        const req = new HttpRequest('POST', oururl,
         file,{reportProgress: true} );

         this.httpClient.request(req).subscribe(event => {
              if (event.type === HttpEventType.UploadProgress) {
                const progressPercent = Math.round(event.loaded/event.total * 100);
                subject.next(progressPercent);
              }else if (event.type === HttpEventType.Response) {
                subject.complete();
              };
         });
         return subject.asObservable();
  };
};
 this.MyserviceService.getting('http://anyurl.com').subscribe(val =>{
   console.log(val);
 }, err => {
  console.log(err);
 });

