import { generatePdf } from 'html-pdf-node-ts';
import pdfContent from '../constants/pdfContent/inquiryRemovalLetter';
import { IMultistepForm } from '../../database/user';
import { AddressType, CollectorAddressType } from '../type/addressType';

export default class InquiryRemovalLetterReport {
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
    pdfData += ` <div class="container">
    <header>
       <p>  ${date} </p>
       <div class="header-content"> 
       <p> ${fullName} </p>
       <p> ${address.street} </p>
       <p>  ${address.city}, ${address.state} ${address.zipCode} </p>
       </div>
       <div class="header-content"> 
       <p> ${collectorAddress[0].dcName}</p>
       <p> ${collectorAddress[0].dcStreet} </p>
       <p>  ${collectorAddress[0].dcCity}, ${collectorAddress[0].dcState} ${collectorAddress[0].dcZipCode}</p>
       </div>
       <p class="last"> To Whom It May Concern: </p>
    </header>
    <main>
      <p>  Please be advised your company has done an unauthorized inquiry on my credit report on 00/00/00. </p>
      <p>  Your company failed to satisfy its duty under FCRA 15 USC 1681b(a)(2), where your company
           has done an inquiry on my credit report without my written consent.  </p>
      <p>  Your company has also failed to satisfy its duty under FCRA 15 USC 1681b, where your company
           has done an inquiry without a permissible purpose.</p>
      <p>  I am asking for proof that I personally initiated the inquiry or DELETE the inquiry immediately.
           You have 30 days to do a reasonable investigation under the Fair Credit Reporting Act  </p> 
      <p>  Failure to DELETE or provide PROOF can result in a lawsuit under the Fair Credit Reporting Act. </p> 
    </main>
    <footer>
       <p> Sincerely, </p>
       <p>${fullName} </p>
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
