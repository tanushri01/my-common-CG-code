import { serverConfig } from '../../config';
import ReportDto from '../../dto/reportDto';

export const ReportTemplate = (reportDto: ReportDto, formName: string) => {
  const newUrl = `${serverConfig.URL_DOMAIN}/api/createReport/${reportDto.userId}/${reportDto.formId}`;
  //TODO: we have to change test blob to client's blob
  return `<p>
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap"
          rel="stylesheet">
      <title>Email Template
      </title>
      <style>
          * {
              font-family: 'Poppins', sans-serif;
          }
      </style>
  </head>
  <body style="margin: 0;">
      <div style="background-color: #ffffff;max-width:700px;border-radius:20px;text-align:center;
      padding: 50px 0px 20px;margin: 0 auto;width: 93%;margin-top: 80px;
      border:2px solid #C9C7C7;border-bottom: solid 10px #2766a5;">
          <table width="95%" style="max-width:700px;text-align:center;width:95%;margin:0 auto;">
  
              <tbody>
                      <td>
                          <span
                              style="color: #2766a5;font-size:24px;font-weight:600;line-height: 32px;">
                              ${formName}
                          </span>
                      </td>
                  </tr>
                  <tr>
                      <td style="font-size:16px;font-weight:400;">
                          <p style="margin-bottom:0;margin-top:35px">Click on the below button to download the report</p>
                  </tr>
                  </td>
                  </tr>
                  <tr>
                      <td>
                          &nbsp;
                      </td>
                  </tr>
                  <tr>
                      <td>
                          &nbsp;
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <a href="${newUrl}"
                              style=" display: inline-block; background:#2766a5; color:#ffffff; border:none ;width:197px;height:45px; border-radius :0 4px; font-size: 18px;font-weight: 500; text-decoration: none; line-height: 42px;">
                              <span style="width:197px;height:45px;display: inline-block; line-height: 42px;">Download</span></a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <img src="https://stgebotifytest.blob.core.windows.net/common-credit-guy/iamprosyLogo.png" style="width:95px; padding-top:8px;" alt="Logo" title="Logo">
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </body>
  </html>
  <p>`;
};
