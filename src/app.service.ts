import { ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /*getHello(): object {
    return {"salamu":'Hello World!'};
  }*/

   async getEmail() {
    const nodeoutlook = require('nodejs-nodemailer-outlook')
    const transport =  nodeoutlook.sendEmail({
    auth: {
        user: "Evelyn.Wanjiru@vertexpay.co",
        pass: "Count2018!"
    },
    from: 'Evelyn.Wanjiru@vertexpay.co',
    to: 'annemarrieakeyo42@gmail.com',
    subject: 'failed transaction!',
    html: '<b>This is bold text</b>',
    text: 'This is text version!',
    replyTo: 'Evelyn.Wanjiru@vertexpay.co',
   /* attachments: [
                        {
                            filename: 'text1.txt',
                            content: 'hello world!'
                        },
                        {   // binary buffer as an attachment
                            filename: 'text2.txt',
                            content: new Buffer('hello world!','utf-8')
                        },
                        {   // file on disk as an attachment
                            filename: 'text3.txt',
                            path: '/path/to/file.txt' // stream this file
                        },
                        {   // filename and content type is derived from path
                            path: '/path/to/file.txt'
                        },
                        {   // stream as an attachment
                            filename: 'text4.txt',
                            content: fs.createReadStream('file.txt')
                        },
                        {   // define custom content type for the attachment
                            filename: 'text.bin',
                            content: 'hello world!',
                            contentType: 'text/plain'
                        },
                        {   // use URL as an attachment
                            filename: 'license.txt',
                            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                        },
                        {   // encoded string as an attachment
                            filename: 'text1.txt',
                            content: 'aGVsbG8gd29ybGQh',
                            encoding: 'base64'
                        },
                        {   // data uri as an attachment
                            path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
                        },
                        {
                            // use pregenerated MIME node
                            raw: 'Content-Type: text/plain\r\n' +
                                 'Content-Disposition: attachment;\r\n' +
                                 '\r\n' +
                                 'Hello world!'
                        }
                    ]*/
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i)
                  
  } );


}

}
