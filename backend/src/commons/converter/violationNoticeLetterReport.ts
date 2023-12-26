import { generatePdf } from 'html-pdf-node-ts';
import pdfContent from '../constants/pdfContent/violationNoticeLetter';
import { IMultistepForm } from '../../database/user';
import { AddressType, CollectorAddressType } from '../type/addressType';

export default class ViolationNoticeLetterReport {
  public static async report(multistepForms: Array<IMultistepForm>): Promise<Buffer> {
    const date = new Date().toUTCString().slice(5, 16);
    let fullName;
    let address = {} as AddressType;
    let collectorAddress = new Array<CollectorAddressType>();

    multistepForms.map((multistepForm) => {
      if (multistepForm.questionId === 0) {
        fullName = multistepForm.answer;
      }
      if (multistepForm.questionId === 1) {
        address = multistepForm.answer as AddressType;
      }
      if (multistepForm.questionId === 2) {
        collectorAddress = multistepForm.answer as CollectorAddressType[];
      }
    });
    let pdfData = `${pdfContent.TOP_CONTENT}`;
    pdfData += ` <div
style="border-radius: 20px;background:#fff;max-width:800px;margin: 0 auto;width: 100%;margin-top: 25px;">
<table width="100%" style="background:#fff;max-width:700px;width: 100%;margin: 0 auto; padding: 8px;">
    <tbody>
        <tr style="display: flex;flex-direction: column; align-items: flex-start;">
            <td>
              ${fullName}
            </td>
            <td>
            ${address.street}
            </td>
            <td>
            ${address.city}, ${address.state} ${address.zipCode}
            </td>
            <td style = "display: flex;  justify-content: space-between;width: 736px;">
                        <p><b>SSN</b>:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp; <b>DOB</b>: </p>
                        <p>
                           ${date}
                        </p>
                    </td>
                </tr>
        <tr style="text-align: left;">
            <td>
            ${collectorAddress[0].dcName}<br>
            ${collectorAddress[0].dcStreet}<br>
                ${collectorAddress[0].dcCity}, ${collectorAddress[0].dcState} ${collectorAddress[0].dcZipCode}
            </td>
        </tr>
        <tr>
            <td style="text-indent: 50px; text-align:justify;">
                <span style="font-size:16px;font-weight:400;">
                    This letter is to inform you that I recently received a copy of my credit report that your
                    company publishes and after reviewing it I found a number of items on the report that are
                    inaccurate. The accounts in question are listed below.
                </span>
            </td>
        </tr>
        <tr>
            <td> &nbsp; </td>
        </tr>
        <tr>
        <tr>
            <td style="text-align:justify;text-indent: 50px;;font-size:16px;font-weight:400;">
                <span style="font-size:16px;font-weight:400;">
                    Please send me copies of the documents <span
                        style="text-decoration: 1px solid underline;">that you
                        have in your files as of this date </span>that you
                    used to verify the accuracy of the accounts listed below.
                </span>
            </td>
        </tr>
        <tr>
            <td> &nbsp; </td>
        </tr>
        <tr>
            <td style=" text-align:justify;text-indent: 50px;font-size:16px;font-weight:400;">
                <span style="font-size:16px;font-weight:400;">
                    Under the Fair Credit Reporting Act,<b> 15 U.S.C. § 1681g </b>I have the right to demand
                    that
                    you disclose to me all of the documents that you have recorded and retained in your file at
                    the
                    time of this request concerning the accounts that you are reporting in my credit report.
                    Please
                    don’t respond to my request by saying that these accounts have been verified. Send me copies
                    of
                    the documents that you have in your files that were used to verify them.
                </span>
            </td>
        </tr>
        <tr>
            <td> &nbsp; </td>
        </tr>
        <tr>
            <td style="text-align:justify; text-indent: 50px;text-indent: 50px;font-size:16px;font-weight:400;">
                <span style="font-size:16px;font-weight:400;">
                    If you do not have any documentation in your files to verify the accuracy of these
                    disputed
                    accounts then please <span style="text-decoration:  1px solid underline;">delete them
                        immediately</span> as required under <b>Section 611(a)(5)(A)(i)</b>. By
                    publishing these inaccurate and unverified items on my credit report and distributing
                    them
                    to 3rd
                    parties you are damaging my reputation and credit worthiness.
                </span>
            </td>
        </tr>
        <tr>
            <td> &nbsp; </td>
        </tr>

        <tr>
            <td style=" text-align:justify;text-indent: 50px;font-size:16px;font-weight:400;">
                <span style="font-size:16px;font-weight:400;">
                    Under the<b> FCRA 15 U.S.C. § 1681i</b>, all <b>unverified accounts <span
                            style="text-decoration:  1px solid underline;">must be promptly deleted</span></b>.
                    Therefore, if you are unable to provide me with a copy of the verifiable proof that you have
                    on
                    file for each of the accounts listed below within 30 days of receipt of this letter then you
                    must
                    remove these accounts from my credit report.
                </span>
            </td>
        </tr>
        <tr>
            <td> &nbsp; </td>
        </tr>
        <tr>
            <td style="text-indent: 50px;font-size:16px;font-weight:400;">
                <span style="font-size:16px;font-weight:400;">
                
                        Please provide me with a copy of an updated and corrected credit report showing these
                        items removed.
                    
                </span>
            </td>
        </tr>
        <tr>
            <td>
                <p><b>I demand the following accounts be properly verified or removed immediately.
                    </b></p>
            </td>
        </tr>
        </span>
        </td>
        </tr>
        <tr style=" text-decoration:  1px solid underline; display: flex; ">
            <td style="width: 30%;"><b>Name of Account:</b></td>
            <td style=" width: 30%; "><b>   Account Number:</b></td>
            <td style=" width: 40%;  "> <b>Provide Physical Proof of Verification</b></td>
        </tr>
        <tr>
            <td>
                &nbsp;
            </td>
        </tr>
        <tr style="  display: flex; ">
            <td style="width:  30%;"><b> - </b></td>
            <td style="width: 30%;"><b> - </b></td>
            <td style="width: 40%;"> <b> - </b></td>
        </tr>
        <tr>
            <td> &nbsp; </td>
        </tr>
        <tr>
            <td style="font-size:16px;font-weight:400;">
                <span style="font-size:16px;font-weight:400;">
                    <p><b>
                            * NOTE: Please also remove all non-account holding inquiries over 30 days old.
                        </b>
                    </p>
                </span>
            </td>
        </tr>
        <tr>
            <td style="font-size:16px;font-weight:400;">
                <span style="font-size:16px;font-weight:400;">
                    <p>
                        Thank You,
                    </p>
                    <p style="margin-top:30px">${fullName}</p>
                </span>
            </td>
        </tr>
        <tr>
            <td> &nbsp; </td>
        </tr>
        </tr>
    </tbody>
</table>
</div>`;
    pdfData += `${pdfContent.BOTTOM_CONTENT}`;
    const file = { content: pdfData };
    return await generatePdf(file, {
      format: 'A4',
      printBackground: true,
      margin: { bottom: '10px', top: '10px', left: '10px', right: '10px' },
    });
  }
}
