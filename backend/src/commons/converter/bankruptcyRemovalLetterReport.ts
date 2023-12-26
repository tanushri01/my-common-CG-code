import { generatePdf } from 'html-pdf-node-ts';
import pdfContent from '../constants/pdfContent/bankruptcyRemovalLetter';
import { IMultistepForm } from '../../database/user';
import { AddressType, CollectorAddressType } from '../type/addressType';

export default class BankruptcyRemovalLetterReport {
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
    pdfData += `  <div class="container">
    <header>
       <p> ${fullName} </p>
       <p>  ${address.street} </p>
       <p>  ${address.city}, ${address.state} ${address.zipCode} </p>
       <p>  SSN ending  <span> </span> DOB: <span> </span> </p>
       <p class="last">  ${date} </p>
    </header>
    <main>
       <div class="consumer-content">
          <p>  ${collectorAddress[0].dcName}   </p>
          <p>   ${collectorAddress[0].dcStreet} </p>
          <p> ${collectorAddress[0].dcCity}, ${collectorAddress[0].dcState} ${collectorAddress[0].dcZipCode}</p>
       </div>
       <div class="main-content"> 
       <p> This letter is to inform you that I recently received a copy of my credit report that your
          company publishes and after reviewing it I found a number of items on the report that are
          inaccurate. The accounts in question are listed below.    
       </p>
       <p> Please send me copies of the documents <span>that you have in your files as of this date</span> that you
          used to verify the accuracy of the accounts listed below. I need copies of ACDVs (Automated
          Credit Dispute Verification) forms, for the last year sent to me to verify the accuracy of the
          reporting of the accounts.    
       </p>
       <p>  Under the Fair Credit Reporting Act,<strong>15 U.S.C. § 1681g</strong> I have the right to demand that
          you disclose to me all of the documents that you have recorded and retained in your file at the
          time of this request concerning the accounts that you are reporting in my credit report. Please
          don’t respond to my request by saying that these accounts have been verified. Send me copies of
          the documents that you have in your files that were used to verify them.
       </p>
       <p>  If you do not have any documentation in your files to verify the accuracy of these disputed
          accounts or items the please delete them immediately as required under <strong>Section 611(a)(5)(A)(i).</strong>
          By publishing these inaccurate and unverified items on my credit report and distributing them to
          3
          rd parties you are damaging my reputation and credit worthiness.
       </p>
       <p>  Under the <strong>FCRA 15 U.S.C. § 1681i, all unverified accounts <span>must be promptly deleted.</span></strong>
          Therefore, if you are unable to provide me with a copy of the verifiable proof that you have on
          file for each of the accounts listed below within 30 days of receipt of this letter then you must
          remove these accounts from my credit report.   
       </p>
       <p>  Please provide me with a copy of an updated and corrected credit report showing these
          items removed.  
       </p>
       </div>
       
       <p> <b> I demand the following accounts be properly verified or removed immediately. </b>  </p>
       <div class="user-details"> 
          <span> <b>Name of Account: </b>  </span>
          <span> <b>Account Number: </b> </span>
          <span> <b>Provide Physical Proof of Verification </b> </span>
       </div>
       <p> <b>Previous information sent to the credit reporting agencies concerning US Bankruptcy
          were incomplete and not fully accurate. Date reported is inaccurate. The full docket and
          case number is not reported. Please send me all documents used to report to the CRAs
          regarding the Bankruptcy reported. If you cannot produce the documents, ask the CRAs to
          delete. </b> 
       </p>
    </main>
    <footer>
       <p> <strong> * NOTE: Please also remove all non-account holding inquiries over 30 days old. </strong> </p>
       <p> Thank You, </p>
       <p> ${fullName}</p>
    </footer>
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
